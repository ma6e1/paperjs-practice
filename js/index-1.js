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

  // var myPoint = new Point();
  // var urPoint = new Point(40, 40);
  // myPoint.x = 10;
  // myPoint.y = myPoint.x + 10;
  // console.log(myPoint);
  // var myPath = new Path();
  // myPath.strokeColor = 'black';
  // myPath.add(myPoint);
  // myPath.add(urPoint);
  // myPath.moveTo(myPoint);
  // myPath.lineTo(myPoint.add(urPoint));

  // var topLeft = new Point(10, 20);
  // var rectSize = new Size(200, 100);
  // var rect = new Rectangle(topLeft, rectSize);
  // rect.strokeColor = 'black';
  //

/* 12/07/2018 */
  // var point1 = new Point(20, 40);
  // var point2 = point1.add(30);
  // var point3 = point1.add(new Point(10, 20));
  // var path1 = new Path();
  // path1.strokeColor = 'black';
  // path1.add(new Point(30, 75), new Point(30, 25), new Point(80, 25), new Point(80, 75));
  // path1.closed = true;
  // path1.fullySelected = false;
  // path1.smooth();
  // var copy = path1.clone();
  // copy.fullySelected = false;
  // copy.position.x += 100;
  // copy.smooth();
  // console.log(path1);
  // path1.insert(1, new Point(0, 0));
  // console.log(path1);
  // var path2 = new Path();
  // path2.strokeColor = 'black';
  // path2.add(point2, point3);

  // var myCircle = new Path.Circle(new Point(100, 70), 50);
  // myCircle.strokeColor = 'black';
  // myCircle.fillColor = 'pink';
  // myCircle.fullySelected = false;
  // myCircle.removeSegment(0);

  // var rect = new Rectangle(new Point(50, 150), new Size(100, 50));
  // var radius = new Size(20, 20);
  // var myRect = new Path.Rectangle(rect, radius);
  // console.log(rect);
  // myRect.strokeColor = 'black';
  // myRect.fillColor = 'blue';
  // myRect.selected = true;


  // copy.remove();

  // var myPath = new Path({
  //   segments: [[40, 115], [80, 180], [200, 20]],
  //   selected: true,
  //   strokeColor: 'black',
  //   strokeWidth: 10,
  //   strokeCap: 'round',
  //   strokeJoin: 'round',
  //   dashArray : [10, 12]
  // });
  //
  // paper.view.draw();

  // var rect = new Rectangle(new Point(10, 10), new Size(50, 50));
  // var myCart = new Path.Rectangle(rect, new Size(0, 0));
  // var cartStyle = {
  //   strokeColor : 'black',
  //   fillColor : 'grey'
  // }
  var cart1 = new Path.Rectangle({
    point: [70, 10],
    size: [40, 30],
    fillColor: 'grey'
  })

  var cart2 = new Path.Rectangle({
    point: [185, 785],
    size: [40, 30],
    fillColor: 'grey'
  })
  // function onFrame(event) {
  //   // // myCart.position += new Point(10, 0);
  //   // myCart.position.add(new Point(10, 0));
  //   // console.log(myCart.position);
  //   path.rotate(3);
  // }

  var aisle1 = new Path.Rectangle({
    point: [0, 0],
    size: [30, 800],
    fillColor: '#ff6666'
  })
  var aisle2 = new Path.Rectangle({
    point: [35, 0],
    size: [30, 800],
    fillColor: '#ff6666'
  })

  var aisle3 = new Path.Rectangle({
    point: [115, 0],
    size: [30, 800],
    fillColor: '#ff6666'
  })
  var aisle4 = new Path.Rectangle({
    point: [150, 0],
    size: [30, 800],
    fillColor: '#ff6666'
  })

  var aisle5 = new Path.Rectangle({
    point: [230, 0],
    size: [30, 800],
    fillColor: '#ff6666'
  })
  var aisle6 = new Path.Rectangle({
    point: [265, 0],
    size: [30, 800],
    fillColor: '#ff6666'
  })

  view.onFrame = function(event) {
    // cart.position.x += 1;
    if(cart1.position.y < 785)
      cart1.position.y += 1;
    if(cart2.position.y > 15)
      cart2.position.y -= 1;
  }

}
