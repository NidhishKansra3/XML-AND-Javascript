const timeout = (ms = 3000) =>
 new Promise((resolve) => setTimeout(resolve, ms)) 

const inc = async (a) => {
  return new Promise((resolve) => timeout().then(() => resolve(a+1)));
};

const sum = async (a, b) => {
  return new Promise((resolve) => timeout().then(() => resolve(a + b)));
};

const max = (a, b) => {
 return new Promise((resolve) => timeout().then(() => resolve(a > b ? a : b)));
};
const avg = (a, b) => { 
  const s = sum(a, b);
  return new Promise((resolve) => timeout().then(()=>sum(a,b)).then((s) => resolve(s / 2)));
};

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return  new Promise((resolve) => timeout().then(() => resolve(this.name.split(sep))));
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return  new Promise((resolve) => timeout().then(() => resolve( new Person(name))));
  }

  split(sep = " ") {
    return new Promise((resolve) => timeout().then(() => resolve(this.name.split(sep))));
  }
}

const person = Person.of("Marcus Aurelius");

//console.log("inc(5) =", inc(5));
//console.log("sum(1, 3) =", sum(1, 3));
//console.log("max(8, 6) =", max(8, 6));
//console.log("avg(8, 6) =", avg(8, 6));
//console.log("obj.split() =", obj.split());
//console.log("person.split() =", person.split());

inc(5).then((x) => console.log(x));
sum(1, 3).then((y) => console.log(y));
max(8, 6).then((s) => console.log(s));
avg(8, 6).then((avg) => console.log(avg));
