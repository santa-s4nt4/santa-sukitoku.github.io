float r;

void setup() {
        fullScreen();
        background(255);
        rectMode(CENTER);
        frameRate(random(6, 10));
}

void draw() {
        r = random(25, 500);
        for (float i = 0; i < 1; ++i) {
                noFill();
                stroke(random(100, 200));
                ellipse(random(width), random(height), r, r);
                fadeOut();
        }
}

void fadeOut() {
        noStroke();
        fill(255, 120);
        rectMode(CORNER);
        rect(0, 0, width, height);
}