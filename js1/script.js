let arr = ["sukanya", "sandeep", "dhruv"];
console.log("Concept of for in on an array");
for (let i in arr) {
    console.log(i)
}

console.log("Concept of for of on an array");
for (let i of arr) {
    console.log(i);
}

console.log("Concept of for in on an array using objects");
let obj = {
    name: "sukanya",
    last_name: "KV",
    designation: "intern in web development"
}

for (let i in obj) {
    console.log(obj[i]);
}

console.log("Concept of for of on an array using objects");
let obj = {
    name: "sukanya",
    last_name: "KV",
    designation: "intern in web development"
}

for (let i of obj) {
    console.log(obj[i]);
}