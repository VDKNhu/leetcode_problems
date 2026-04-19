function removeSubfolders(folder: string[]): string[] {
    folder.sort();

    const res: string[] = [folder[0]];

    for (let index = 1; index < folder.length; index++) {
        const parentSize = res[res.length - 1].length;
        const currentSize = folder[index].length;

        if (!(parentSize < currentSize &&
            folder[index].slice(0, parentSize) === res[res.length - 1] &&
            folder[index][parentSize] === "/")) {
            res.push(folder[index]);
        }
    }

    return res;
};