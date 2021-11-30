$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  /* ここで描画する*/

  // ? 8*8で点を表示
  // let c;
  // for(let x=25; x<400; x+=50) {
  //   for(let y=25; y<400; y+=50) {
  //     let c = Shape.Circle(x, y, 20);
  //     c.fillColor = 'green';
  //   }
  // }

  let tool = new Tool();

  // クリックしたところに円を表示
  tool.onMouseDown = function(event) {
    let c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'green';
  };
  
  // Hello World
  let c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  
  let text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';
  
  paper.view.draw();
  console.log('読み込み完了。')
});