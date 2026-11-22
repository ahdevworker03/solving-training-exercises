// E3 — Corrected TDZ example and detached method behavior.
// Invalid ordering would throw ReferenceError:
// console.log(total);
// const total = 5;
const total = 5;
console.log(total);

const user = {
  name: "Maya",
  describe() {
    const readName = () => this.name;
    return readName();
  },
};

console.log(user.describe());

const describe = user.describe;
try {
  describe();
} catch (error) {
  console.log(error.name); // Expected TypeError in an ES module
}

const boundDescribe = user.describe.bind(user);
console.log(boundDescribe());
