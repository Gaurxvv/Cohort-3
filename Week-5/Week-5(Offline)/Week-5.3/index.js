// axio vs fetch
// function main() {
//   fetch("./2.json").then(async (response) => {
//     const json = await response.json();
//     console.log(json);
//   });
// }
async function main() {
  const response = await fetch("./2.json");
  const json = await response.json();
  console.log(json);
}
main();
