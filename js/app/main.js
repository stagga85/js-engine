define(function(require) {

  var log = require('log');

  var canvas = document.getElementById('canvas');

  canvas.width = 300;
  canvas.height = 300;

  var bufferCanvas = document.createElement('canvas');

  bufferCanvas.width = canvas.width;
  bufferCanvas.height = canvas.height;

  var ctx = canvas.getContext('2d');
  var bufferCtx = bufferCanvas.getContext('2d');

  var step = 0;
  var speed = 0.05;

  function loop () {
    update();
    render();
    requestAnimationFrame(loop);
  }

  function update () {
    step++;
  }

  function render () {
    bufferCtx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw

    bufferCtx.fillRect(0, 0, 20, (Math.sin(step*speed)+1)/2*canvas.width);

    // Draw

    var frame = bufferCtx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.putImageData(frame, 0, 0);
  }

  loop();

});
