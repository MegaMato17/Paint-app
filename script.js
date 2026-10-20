let colorPicker;
let slider;

function setup() {
  const paintCanvas = createCanvas(600, 400);
  paintCanvas.parent("canvas");

  colorPicker = createColorPicker("#000000");
  colorPicker.parent("drawingTools");

  slider = createSlider(1, 20, 5);
  slider.addClass("slider");
  slider.parent("drawingTools");

  const newCanvasButton = createButton("New canvas");
  newCanvasButton.parent("buttons");
  newCanvasButton.mousePressed(newCanvas);

  const downloadButton = createButton("Download drawing");
  downloadButton.parent("buttons");
  downloadButton.mousePressed(downloadDrawing);

  newCanvas();
}

function draw() {
  if (mouseIsPressed && mouseInsideCanvas()) {
    stroke(colorPicker.color());
    strokeWeight(slider.value());
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mouseInsideCanvas() {
  return mouseX >= 0 && mouseX <= width &&
         mouseY >= 0 && mouseY <= height;
}

function newCanvas() {
  background("white");
}

function downloadDrawing() {
  saveCanvas("my-drawing", "png");
}
