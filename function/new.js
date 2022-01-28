// new 연산자 사용
function Structure(first, last) {
  this.first = first;
  this.last = last;
  this.printer = function () {
    return this.first + " " + this.last;
  };
}
const building1 = new Structure("Samsung", "빌딩");
console.log(building1.printer());

const building2 = Structure("Apple", "빌딩");
console.log(printer()); // 전역객체로 되어있음
