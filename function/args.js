// trendy style
function newStyle(first, last, ...otherInfo) {
  return otherInfo;
}
//old style
function oldStyle(first, last) {
  return arguments;
}

console.log(newStyle(1, 2, 3, 4, 5));
console.log(oldStyle(1, 2, 3, 4, 5));
