let myArray = [];
if (player.name.match(searchInput)) {
  myArray.push(player);
} else if (player.breed.match(searchInput)) {
  myArray.push(player);
} else if (player.status.match(searchInput)) {
  myArray.push(player);
} else if (
  searchInput.toLowerCase() === "fluff" ||
  searchInput.toLowerCase() === "team fluff"
) {
  if (player.teamId === 4) {
    myArray.push(player);
  }
} else if (
  searchInput.toLowerCase() === "ruff" ||
  searchInput.toLowerCase() === "team ruff"
) {
  if (player.teamId === 3) {
    myArray.push(player);
  }
} else if (
  searchInput.toLowerCase() === "free agent" ||
  searchInput.toLowerCase() === "fa"
) {
  if (player.teamId === undefined) {
    myArray.push(player);
  }
}
console.log("myArrayyyyyyyyyyyyyyyyyyyyyyyy");
console.log(myArray);
