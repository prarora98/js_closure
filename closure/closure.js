function nonsense(string) {
  var blab = function() {
    alert(string);
  };
}
//2
function nonsense(string) {
  var blab = function() {
    alert(string);
  };
  setTimeout(blab, 2000);
}
//3
function nonsense(string) {
  return function blab() {
    alert(string);
  };
}
var blabLater = nonsense("hello");
var blabAgainLater = nonsense("hel");

//4
var lastNameTrier = function(firstName) {
  //does stuff

  var innerFunction = function(lastName) {
    console.log(`${firstName} ${lastName}`);
  };
  return innerFunction;
};
var firstNameFarmer = lastNameTrier("Farmer"); //logs nothing
firstNameFarmer("Brown"); //logs 'Farmer Brown'

//5
function storyWriter() {
  let story = "";
  return {
    addWords: str => {
      story = story + " " + str;
      console.log(story);
    },
    erase: () => {
      story = "";
      console.log(story);
    }
  };
}
