function maximumGain(s: string, x: number, y: number): number {
    let top, bot, top_char, bot_char;
    let res = 0;

    if(x >= y) {
        top = x;
        top_char = 'ab';
        bot = y;
        bot_char = 'ba';
    } else {
        top = y;
        top_char = 'ba';
        bot = x;
        bot_char = 'ab';
    }

    const top_stack: string[] = [];
    for(const char of s) {
        if(char === top_char[1] && top_stack.length > 0 && top_stack[top_stack.length - 1] === top_char[0]) {
            res += top;
            top_stack.pop();
        } else {
            top_stack.push(char);
        }
    }

    const bot_stack: string[] = [];
    for(const char of top_stack) {
        if(char === bot_char[1] && bot_stack.length > 0 && bot_stack[bot_stack.length - 1] === bot_char[0]) {
            res += bot;
            bot_stack.pop();
        } else {
            bot_stack.push(char);
        }
    }

    return res;
};