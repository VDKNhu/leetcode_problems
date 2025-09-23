function compareVersion(version1: string, version2: string): number {
    const revisions1 = version1.split(".");
    const revisions2 = version2.split(".");
    const len = revisions1.length < revisions2.length ? revisions1.length : revisions2.length;

    let i = 0;
    for (; i < len; i++) {
        if (Number(revisions1[i]) < Number(revisions2[i])) return -1;
        if (Number(revisions1[i]) > Number(revisions2[i])) return 1;
    }

    if (revisions1.length > i && revisions1.slice(i).filter((revision: string) => Number(revision) !== 0).length > 0) return 1;
    if (revisions2.length > i && revisions2.slice(i).filter((revision: string) => Number(revision) !== 0).length > 0) return -1;
    return 0;
};