class Spreadsheet {
    private spsh: Map<string, number>;

    constructor(rows: number) {
        this.spsh = new Map<string, number>();
    }

    setCell(cell: string, value: number): void {
        this.spsh.set(cell, value);
    }

    resetCell(cell: string): void {
        this.spsh.delete(cell);
    }

    getValue(formula: string): number {
        let res = 0;
        const terms = formula.slice(1).split("+");
        for(const term of terms) {
            const numbericValue = Number(term);
            if(isNaN(numbericValue)) {
                res += this.spsh.get(term) || 0;
            } else {
                res += numbericValue;
            }
        }
        return res;
    }
}