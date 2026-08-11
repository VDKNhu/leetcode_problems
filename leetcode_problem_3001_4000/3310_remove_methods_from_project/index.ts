function remainingMethods(n: number, k: number, invocations: number[][]): number[] {
    const isVisited = new Array(n).fill(false);
    const isSuspicious = new Array(n).fill(false);
    const biDirectionalGraph: number[][] = Array.from({ length: n }, () => []);
    const directedGraph: number[][] = Array.from({ length: n }, () => []);

    for(const [invoker, invoked] of invocations) {
        biDirectionalGraph[invoker].push(invoked);
        biDirectionalGraph[invoked].push(invoker);
        directedGraph[invoker].push(invoked);
    }

    const markSuspiciousMethods = (i: number) => {
        isSuspicious[i] = true;
        for(const invoked of directedGraph[i]) {
            if(!isSuspicious[invoked]) {
                markSuspiciousMethods(invoked);
            }
        }
    }

    const clearConnectedMethods = (i: number) => {
        isVisited[i] = true;
        for(const connectedMethod of biDirectionalGraph[i]) {
            if(!isVisited[connectedMethod]) {
                isSuspicious[connectedMethod] = false;
                clearConnectedMethods(connectedMethod);
            }
        }
    }

    markSuspiciousMethods(k);
    for(let i = 0; i < n; i++) {
        if(!isVisited[i] && !isSuspicious[i]) {
            clearConnectedMethods(i);
        }
    }
    return Array.from({ length: n }, (_, i) => i).filter(i => !isSuspicious[i]);
};