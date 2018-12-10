paper.install(window);
var aisleWidth = 30;
var aisleHeight = 800;
var gap = 40;
var aisles = [
  {"x" : 0, "y" : 0},
  {"x" : aisleWidth+gap, "y" : 0},
  {"x" : 2*(aisleWidth+gap), "y" : 0},
  {"x" : 3*(aisleWidth+gap), "y" : 0},
  {"x" : 4*(aisleWidth+gap), "y" : 0},
  {"x" : 5*(aisleWidth+gap), "y" : 0}
];
var carts = [
  {"aruco" : "A3.3", "distance": 1.3},
  {"aruco" : "A10.2", "distance": 0.25}
]


window.onload = function() {
  paper.setup(myCanvas);
  for(var i = 0;i < aisles.length;i++) {
    var aisle = new Path.Rectangle({
      point: [aisles[i].x, aisles[i].y],
      size: [aisleWidth, aisleHeight],
      fillColor: "#ff6666"
    });
  }

  /* extract information from "aruco" */
  var test = carts[1].aruco;
  console.log(test.slice(-1)); // 3, 2
  console.log(test.charAt(0)); // A, A
  console.log(test.split(".")[0].substr(1)); // 3, 10
}
