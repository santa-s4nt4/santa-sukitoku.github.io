let mic, fft;
let num = 1;
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

    //strokeWeight(0);
    noStroke();

    for (let i = 0; i < spc.length; i++) {
        push();
        translate(width / 2, height / 2);
        rotate(slice * i);
        let hue = map(i, 0, spc.length - 1, 0, 255);
        let brightness = spc[i / 2];
        stroke(hue, 255, brightness * 2);
        fill(hue, 255, brightness);
        let d = map(spc[i], 0, 255, 0, height - (100 + r)) + r;
        console.log(d);
        arc(0, 0, d, d, 0, slice, PIE);
        pop();
    }

    fill(255);
    ellipse((width / 2), (height / 2), r);
}