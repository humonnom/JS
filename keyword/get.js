class Person {
  constructor() {
    console.log("생성자 출동");
    this.name = "jueun";
  }
  get name() {
    return this.name;
  }
  set name(name) {
    this.name = name;
  }
}
