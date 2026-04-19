class Router {
    private size: number;
    private packets: { source: number, destination: number, timestamp: number }[];
    private packetSet: Set<string>;
    private timestampMap: Map<number, number[]>;
    private head: number;

    constructor(memoryLimit: number) {
        this.size = memoryLimit;
        this.packets = new Array(this.size);
        this.packetSet = new Set();
        this.timestampMap = new Map();
        this.head = 0;
    }

    private generateKey(source: number, destination: number, timestamp: number): string {
        return `${source}_${destination}_${timestamp}`;
    }

    private binarySearch(arr: number[], value: number, lower: boolean): number {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < value || (lower && arr[mid] === value)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    addPacket(source: number, destination: number, timestamp: number): boolean {
        const key = this.generateKey(source, destination, timestamp);

        if (this.packetSet.has(key)) return false;

        if (this.packetSet.size >= this.size) {
            const oldpacket = this.packets[this.head];
            this.packetSet.delete(this.generateKey(oldpacket.source, oldpacket.destination, oldpacket.timestamp));

            const timestampArr: number[] = this.timestampMap.get(oldpacket.destination) || [];
            const index = this.binarySearch(timestampArr, oldpacket.timestamp, true) - 1;
            if (index >= 0 && timestampArr[index] === oldpacket.timestamp) timestampArr.splice(index, 1);

            this.head = (this.head + 1) % this.size;
        }

        this.packets[(this.head + this.packetSet.size) % this.size] = { source, destination, timestamp };
        this.packetSet.add(key);

        if (!this.timestampMap.get(destination)) {
            this.timestampMap.set(destination, []);
        }
        const timestampArr: number[] = this.timestampMap.get(destination) || [];
        const index = this.binarySearch(timestampArr, timestamp, true);
        timestampArr.splice(index, 0, timestamp);

        return true;
    }

    forwardPacket(): number[] {
        if(this.packetSet.size === 0) return [];

        const packet = this.packets[this.head];
        this.packetSet.delete(this.generateKey(packet.source, packet.destination, packet.timestamp));

        const timestampArr: number[] = this.timestampMap.get(packet.destination) || [];
        const index = this.binarySearch(timestampArr, packet.timestamp, true) - 1;
        if (index >= 0 && timestampArr[index] === packet.timestamp) timestampArr.splice(index, 1);

        this.head = (this.head + 1) % this.size;
        
        return [packet.source, packet.destination, packet.timestamp];
    }

    getCount(destination: number, startTime: number, endTime: number): number {
        const timestampArr = this.timestampMap.get(destination);

        if(!timestampArr || timestampArr.length === 0) return 0;

        const startIndex = this.binarySearch(timestampArr, startTime, false);
        const endIndex = this.binarySearch(timestampArr, endTime, true);

        return endIndex - startIndex;
    }
}
