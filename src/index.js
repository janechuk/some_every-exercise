import "./styles.css";
document.getElementById("app").innerHTML = `

`;

//Some Every Exercise

//hasOddNumber
function hasOddNumber(arr) {
  return arr.some(function(val) {
    return val % 2 !== 0;
  });
}
hasOddNumber([1, 2, 2, 2, 2, 2, 4]);

//hasAZero
function hasAZero(num) {
  return num
    .toString()
    .split("")
    .some(function(val) {
      return val === "0";
    });
}
hasAZero(33321232131012);

//hasOnlyOddNumbers
function hasOnlyOddNumbers(num) {
  return num.every(function(val) {
    return val % 2 === 1;
  });
}
hasOnlyOddNumbers([1, 3, 5, 7]);

//hasNoDuplicates
function hasNoDuplicates(arr) {
  return arr.every(function(val, i, array) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}
hasNoDuplicates([1, 2, 3, 1]);

//hasCertainKey
function hasCertainKey(arr, key) {
  return arr.every(function(val) {
    return key in val;
  });
}

let arr = [
  { title: "Instructor", first: "Elie", last: "Schoppik" },
  { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: "Matt", last: "Lane" },
  { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true }
];

hasCertainKey(arr, "first"); // true
hasCertainKey(arr, "isCatOwner"); // false

//hasCertainValue
function hasCertainValue(arr, key, searchValue) {
  return arr.every(function(val) {
    return val[key] === searchValue;
  });
}

let arr2 = [
  { title: "Instructor", first: "Elie", last: "Schoppik" },
  { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: "Matt", last: "Lane" },
  { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true }
];

hasCertainValue(arr2, "title", "Instructor"); // true
hasCertainValue(arr2, "first", "Elie"); // false
