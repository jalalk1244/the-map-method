  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2)
}
console.log(results)

// Using map()
function multiplyByTwo(num) {
  return num * 2;
}

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);


// Simplified w/ map()
const Simplfied = nums.map(function (num) {return num * 2});
console.log(Simplfied);

// Simplfied w/ map() + arrow function
const newResults = nums.map(num => num * 2);
console.log(newResults);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studetNameAndId = students.map(student => [student.name, student.id]);
console.log(studetNameAndId);

const studetNameAndId2 = students.map(student => [{id: student.id, name: student.name}]);
console.log(studetNameAndId2);

const studetNameAndId3 = students.map(student => {
  student.id == 1 ? student.age = 32 : student.id == 2 ? student.age = 26 : student.age = 28;
  return student

});
console.log(studetNameAndId3);
