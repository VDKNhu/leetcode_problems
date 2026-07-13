class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const indegree = new Array(numCourses).fill(0);
        const adj: number[][] = Array.from({ length: numCourses }, () => []);
        
        for(const [src, dst] of prerequisites) {
            indegree[dst]++;
            adj[src].push(dst);
        }

        const q = new Queue();
        for(let i = 0; i < numCourses; i++) {
            if(indegree[i] === 0) {
                q.push(i);
            }
        }

        let finish = 0;
        const output = new Array(numCourses);
        while(!q.isEmpty()) {
            const node = q.pop();
            output[numCourses - finish - 1] = node;
            finish++;
            for(const nei of adj[node]) {
                indegree[nei]--;
                if(indegree[nei] === 0) {
                    q.push(nei);
                }
            }
        }

        if(finish !== numCourses) {
            return [];
        }
        return output;
    }
}
