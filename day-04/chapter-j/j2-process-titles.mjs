// J2 — The callback is called synchronously for each title.
function processTitles(titles, onTitle) {
  for (const title of titles) {
    onTitle(title);
  }
}

console.log("Before");

processTitles(["Read", "Review"], (title) => {
  console.log(title);
});

console.log("After");
