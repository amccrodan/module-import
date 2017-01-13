module.exports = {
  testVar: 7.7,
  publicFunc: function() {
    privateFunc();
  }
}

function privateFunc() {
  console.log("This is the output of the 'private' function!");
}