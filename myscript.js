var program;
var w;
var h;

function setup() {
  pixelDensity(1);
  //w = document.documentElement.scrollWidth;
  //h = document.documentElement.scrollHeight;
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h, WEBGL);
  gl = this.canvas.getContext('webgl');
  rectMode(CENTER);
  noStroke();
  fill(1);
  program = createShader(vert, frag);
}

function draw() {
  shader(program);
  background(0);
  program.setUniform('resolution', [width, height]);
  program.setUniform('time', millis() / 1000);
  rect(0, 0, width, height);
}


var vert = `
#ifdef GL_ES
      precision highp float;
      precision highp int;
    #endif
		#extension GL_OES_standard_derivatives : enable

    // attributes, in
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    attribute vec2 aTexCoord;
    attribute vec4 aVertexColor;

    // attributes, out
    varying vec3 var_vertPos;
    varying vec4 var_vertCol;
    varying vec3 var_vertNormal;
    varying vec2 var_vertTexCoord;

    // matrices
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    //uniform mat3 uNormalMatrix;

    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);

      // just passing things through
      // var_vertPos      = aPosition;
      // var_vertCol      = aVertexColor;
      // var_vertNormal   = aNormal;
      // var_vertTexCoord = aTexCoord;
    }
`;
var frag = `

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;



const float Pi = 3.14159;

float sinApprox(float x)
{
  x = Pi * floor(x / Pi);
  return (4.0 / Pi) * x - (4.0 / Pi) * x * abs(x);
}

float cosApprox(float x)
{
  return sinApprox(x * Pi);
}

void main()
{
  vec2 p = (2.0*gl_FragCoord.xy-resolution)/max(resolution.x,resolution.y);
  for(int i = 1; i < 50; i++)
  {
    vec2 newp = p;
    float speed = 100.0;
    newp.x += 0.6/float(i)*sin(float(i)*p.y+time/(300.0/speed)+0.3*float(i));
    newp.y += 0.6/float(i)*cos(float(i)*p.x+time/(300.0/speed)+0.3*float(i+10))-2.0;
    p = newp;
  }
  vec3 color = vec3(1.5 * sin(2.0+p.y)+1.5, 1.0*sin(1.6*p.y), 1.5+sin(p.x+p.y));
  gl_FragColor = vec4(color, 1.0);
}`

function windowResized() {
  resizeCanvas(w, h);
}