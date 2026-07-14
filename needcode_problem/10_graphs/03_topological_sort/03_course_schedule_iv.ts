class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
        const adj = Array.from({ length: numCourses }, () => new Set());
        const prereq = Array.from({ length: numCourses }, () => new Set());
        const indegree = new Array(numCourses).fill(0);

        for(const [pre, crs] of prerequisites) {
            adj[pre].add(crs);
            indegree[crs]++;
        }

        const q = new Queue();
        for(let i = 0; i < numCourses; i++) {
            if(indegree[i] === 0) {
                q.push(i);
            }
        }

        while(!q.isEmpty()) {
            const node = q.pop();
            for(const nei of adj[node] as Set<number>) {
                prereq[nei].add(node);
                for(const it of prereq[node]) {
                    prereq[nei].add(it);
                }
                indegree[nei]--;
                if(indegree[nei] === 0) {
                    q.push(nei);
                }
            }
        }

        return queries.map(([u, v]) => prereq[v].has(u));
    }
}
