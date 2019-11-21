let mic, fft;
let num = 150;
let r = 300;

function setup() {
    createCanvas(windowWidth, windowHeight);

    mic = new p5.AudioIn();
    mic.start();

    fft = new p5.FFT();
    mic.connect(fft);
}

function draw() {
    background(0);
    let spc = fft.analyze();
    let slice = TAU / num;

    strokeWeight(2);
    stroke(0);
    fill(255);

    for (let i = 0; i < num; i++) {
        push();
        translate(width / 2, height / 2);
        rotate(slice * i);
        let d = map(spc[i], 0, 50, 0, height - (100 + r)) + r;
        arc(0, 0, d, d, 0, slice, PIE);
        pop();
    }

    fill(0);
    //stroke(255)
    //strokeWeight(1)
    ellipse((width / 2), (height / 2), r);
}