// Code your solution in this file

function findMatching (collection, value) {
  return collection.filter(function (element) {return element.toUpperCase() === value.toUpperCase()});
  }

function fuzzyMatch (collection, value) {
  return collection.filter(function (element) {return element.charAt() === value.charAt()}
    );
  }
//
function matchName (collection, value) {
//<<<<<<< HEAD
 // return collection.filter(function (element) {return element.value === value}
//=======
  return collection.filter(function (name) {return name === value{}}
//>>>>>>> 5e0d64f44c929ac7d5091b0a606031f166ce3784
  );
} 