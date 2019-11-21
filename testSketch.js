let mic, fft;
let num = 150;
let r = 300;

function setup() {
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 255);

    mic = new p5.AudioIn();
    mic.start();

    fft = new p5.FFT();
    mic.connect(fft);
}

function draw() {
    background(255);
    let spc = fft.analyze();
    let slice = TAU / num;

    strokeWeight(0);

    for (let i = 0; i < spc.length; i++) {
        push();
        translate(width / 2, height / 2);
        rotate(slice * i);
        let hue = map(i / 2, 10, spc.length - 10, 0, 500);
        let brightness = spc[i];
        noStroke();
        stroke(hue * 4, 255, brightness * 20);
        fill(hue * 4, 255, brightness * 20);
        let d = map(spc[i], 0, 80, 0, height - (100 + r)) + r;
        arc(0, 0, d, d, 0, slice, PIE);
        pop();
    }

    noStroke();
    ellipse((width / 2), (height / 2), r);
}