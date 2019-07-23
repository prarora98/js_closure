function nonsense(string) {
  var blab = function() {
    alert(string);
  };
}
//2
function nonsense(string) {
  var blab = function () {
    alert(string);
  };
  setTimeout(blab, 2000);
}
