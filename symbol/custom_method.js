Array.prototype.find = function () {
  return "i don't wanna work lol";
};

const found = [1, 2, 3, 4].find();

console.log(found);

// add using symbol(make sure it's not overwrite)

Array.prototype[Symbol.for("blabla")] = function () {
  return "yo";
};

const found2 = [1, 2, 3, 4][Symbol.for("blabla")]();

console.log(found2);
