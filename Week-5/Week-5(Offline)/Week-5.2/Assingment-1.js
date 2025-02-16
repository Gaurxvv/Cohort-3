const input = [2, 3, 4, 5, 67, 77, 9];
const transform = (n) => (i) => i * n;

const n = 5;
const ans = input.map(transform(n));
console.log(ans);
