/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 function reverseString(s) {
  let i = 0, j = s.length - 1;

  while (i < j) {
    const temp = s[i]
    s[i] = s[j]
    s[j] = temp
    i++
    j--
  }
}