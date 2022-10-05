export default function mostCommon(arr) {
  let d = arr.reduce((a, c) => ({ ...a, [c]: a[c] + 1 || 1 }), {})
  let m = Math.max(...Object.values(d))
  return Object.keys(d).find((k) => d[k] === m)
}
