// Задание 1
function counterLogger() {
  const count = 0;
  function logCounter() {
    console.log('count', count);
  }

  function incrementCounter() {
    count++;
  }
  return {
    logCounter,
    incrementCounter,
  };
}
const oneCounter = new counterLogger();
oneCounter.incrementCounter();
oneCounter.logCounter();

const twoCounter = new counterLogger();
twoCounter.incrementCounter();
twoCounter.incrementCounter();
twoCounter.logCounter();

// Задание 2
const pets = {
  age: 3,
  name: 'Карамель',
  getName() {
    console.log(this.name);
  },
  getAge() {
    console.log(this.age);
  },
};

pets.getName();
pets.getAge();

function Pets(name, age) {
  this.name = name;
  this.age = age;
}

Pets.prototype.getName = function () {
  console.log(this.name);
};

Pets.prototype.getAge = function () {
  console.log(this.age);
};

const pet1 = new Pets('Тоша', 5);
pet1.getName();
pet1.getAge();

const pet2 = new Pets('Акари', 1);
pet2.getName();
pet2.getAge();
