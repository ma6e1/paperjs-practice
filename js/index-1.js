/* 12/06/2018 */

// Make the paper scope global, by injecting it into window
paper.install(window);
window.onload = function() {

  // Setup directly from canvas id
  paper.setup("myCanvas");
  // var path = new Path();
  // path.strokeColor = 'black';
  // var start = new Point(100, 100);
  // path.moveTo(start);
  // path.lineTo(start.add([ 200, -50 ]));
  //
  // var recs = new Path.Rectangle([75, 75], [100, 100]);
  // recs.strokeColor = 'black';
  //
  // view.onFrame = function(event) {
  //   recs.rotate(3);
  // }

  var myPoint = new Point();
  var urPoint = new Point(40, 40);
  myPoint.x = 10;
  myPoint.y = myPoint.x + 10;
  console.log(myPoint);
  var myPath = new Path();
  myPath.strokeColor = 'black';
  myPath.add(myPoint);
  myPath.add(urPoint);
  // myPath.moveTo(myPoint);
  // myPath.lineTo(myPoint.add(urPoint));

  // var topLeft = new Point(10, 20);
  // var rectSize = new Size(200, 100);
  // var rect = new Rectangle(topLeft, rectSize);
  // rect.strokeColor = 'black';
  //
  paper.view.draw();

}
