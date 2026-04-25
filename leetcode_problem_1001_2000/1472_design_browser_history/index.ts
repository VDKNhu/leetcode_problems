class BrowserHistory {
    backHistory: string[];
    forwardHistory: string[];
    constructor(homepage: string) {
        this.backHistory = [homepage];
        this.forwardHistory = [];
    }

    visit(url: string): void {
        this.backHistory.push(url);
        this.forwardHistory = [];
    }

    back(steps: number): string {
        while(steps-- > 0 && this.backHistory.length > 1) {
            this.forwardHistory.push(this.backHistory.pop() as string);
        } 

        return this.backHistory[this.backHistory.length - 1];
    }

    forward(steps: number): string {
        while(steps-- > 0 && this.forwardHistory.length > 0) {
            this.backHistory.push(this.forwardHistory.pop() as string);
        }

        return this.backHistory[this.backHistory.length - 1];
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */