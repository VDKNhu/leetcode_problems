class Solution010302 {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string) {
        if(s.length % 2 !== 0) {
            return false;
        }

        const stack = [];
        for(const char of s) {
            switch (char) {
                case '(':
                case '[':
                case '{':
                    stack.push(char);
                    continue;
                case ')':
                    if(stack.pop() !== '(') {
                        return false;
                    }
                    continue;
                case ']':
                    if(stack.pop() !== '[') {
                        return false;
                    }
                    continue;
                case '}':
                    if(stack.pop() !== '{') {
                        return false;
                    }
                    continue;
            }
        }

        return stack.length === 0;
    }
}
