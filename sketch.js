let c = [];
let positionsX = [100, 100, 100, 200, 200, 200, 300, 300, 300, 400, 400, 400, 100, 200, 300, 400, 500, 500, 500, 500];
let positionsY = [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300, 400, 400, 400, 400, 100, 200, 300, 400];
let index = 0;
let begin = false;
let counterPressed = 0;
function setup() {
    createCanvas(700, 500);
    background(255, 227, 150);
    frameRate(20);
    for (let i = 0; i < 20; i++) {
        let cubeObj;
        cubeObj = new cube();
        cubeObj.limitPos = 50;
        cubeObj.col1 = random(0, 255);
        cubeObj.col2 = random(0, 255);
        cubeObj.col3 = random(0, 255);
        cubeObj.posX = positionsX[index];
        cubeObj.posY = positionsY[index];
        cubeObj.w = random(10, 50);
        cubeObj.h = cubeObj.w;
        cubeObj.initPositionX = cubeObj.posX;
        cubeObj.initPositionY = cubeObj.posY;
        c.push(cubeObj);
        index++;
    }
}
function draw() {
    if (begin) {
        for (let j = 0; j < c.length; j++) {
            c[j].show();
            c[j].update();
            c[j].checkState();
            c[j].makeRectInFront();
        }
    }
    if (!begin) {
        background(0);
    }
}

function mousePressed() {
    if (counterPressed == 0) {
        begin = true;
        background(255, 227, 150);
    }
    if (counterPressed >= 1) {
        background(255, 227, 150);
        for (let j = 0; j < c.length; j++) {
            c[j].posX = c[j].initPositionX;
            c[j].posY = c[j].initPositionY;
            c[j].col1=random(0,255);
            c[j].col2=random(0,255);
            c[j].col3=random(0,255);
            if (c[j].finsihed) {
                c[j].finsihed = false;
            }
        }
    }
    counterPressed++;
}