var renderer = PIXI.autoDetectRenderer(1500, 800, { backgroundColor: 0xFFFFFF, antialias: true });
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();
var graphics = new PIXI.Graphics();

var x = 0.0;
var y = 0.0;

stage.addChild(graphics);

var distance = 2.0;

function animate() {
    // console.log(angle);
    // console.log(distance);
    // console.log(Math.sin(angle));
    x = x + (distance * Math.cos(angle));
    // console.log(x);
    y = y - (distance * Math.sin(angle));
    // console.log(y);
    // console.log(distance * Math.sin(angle));
    graphics.clear();

    graphics.beginFill(0xff0000);
    graphics.drawRect(x, y, 50, 50);
    graphics.endFill();

    renderer.render(stage);
    requestAnimationFrame(animate);
}

animate();
