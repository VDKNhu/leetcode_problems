class Solution020301 {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]) {
        let n = students.length;
        let q = new Queue<number>();
        for(const student of students) {
            q.push(student);
        }

        let res = n;
        for(const sandwich of sandwiches) {
            let cnt = 0;
            while(cnt < n && q.front() !== sandwich) {
                q.push(q.pop());
                cnt++;
            }

            if(q.front() === sandwich) {
                q.pop();
                res--;
            } else {
                break;
            }
        }

        return res;
    }
}
