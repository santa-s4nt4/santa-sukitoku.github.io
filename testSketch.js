let mic, fft;
let num = 200;
let r = 400;

function setup() {
    createCanvas(windowWidth, windowHeight);

    mic = new p5.AudioIn();
    mic.start();

    fft = new p5.FFT();
    mic.connect(fft);
}

function draw() {
    background(255);
    let spc = fft.analyze();
    let slice = TAU / num;

    strokeWeight(2);
    stroke(0);
    fill(0);

    for (let i = 0; i < num; i++) {
        push();
        translate(width / 2, height / 2);
        rotate(slice * i);
        let d = map(spc[i], 0, 255, 0, height - (100 + r)) + r;
        arc(0, 0, d, d, 0, slice, PIE);
        pop();
    }

    fill(255);
    ellipse((width / 2), (height / 2), r);
}