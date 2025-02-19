function getHappyString(n: number, k: number): string {
  let happyStrings: string[] = [];

  function generateHappyString(cur: string, n: number) {
    if (cur.length === n) {
      happyStrings.push(cur);
      return;
    }

    for (let i = "a".charCodeAt(0); i <= "c".charCodeAt(0); i++) {
      if (String.fromCharCode(i) !== cur[cur.length - 1]) {
        generateHappyString(cur + String.fromCharCode(i), n);
      }
    }
  }

  generateHappyString("", n);
  return happyStrings?.length >= k ? happyStrings[k - 1] : "";
}
