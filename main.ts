
//A mathematically accurate spinning spiral
//rendered on a single 5X5 matrix(microbit 25px)
//Made by Martin Uzunov :3

//A to move the center of the spiral to the left
//B to move the center of the spiral to the right
//0 to move the center of the spiral up
//1 to move the center of the spiral down
//2 to reverse the rotation of the spiral

function fill(x: any, y: any) {
    led.plot(x, y);
}

let interval = 10;
let chA = 0;
let r = 0.5;
let dencity = 0.1;
let length = Math.PI * 8;
let centerX = 2;
let centerY = 2;
let speed = -0.2;

basic.forever(function () {
    basic.clearScreen();
    for (let a = 0; a < length; a += Math.PI * dencity) {
        fill(Math.round(centerX + Math.cos(a + chA) * a * r),
            Math.round(centerY + Math.sin(a + chA) * a * r));
    }
    chA += speed;
    basic.pause(interval);
})

input.onButtonPressed(Button.A, function () {
    centerX -= 1
})

input.onButtonPressed(Button.B, function () {
    centerX += 1
})

input.onPinPressed(TouchPin.P0, function () {
    centerY -= 1
})

input.onPinPressed(TouchPin.P1, function () {
    centerY += 1
})

input.onPinPressed(TouchPin.P2, function () {
    speed = -speed
})