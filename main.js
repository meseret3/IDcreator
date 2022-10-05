import allFonts from "./fonts.js";

let canvas = new fabric.Canvas("canvas1");

// Create a new instance of Canvas
function Adjust() {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let can = document.getElementById("canvas1");
    can.style.border = "solid black";
    let context = can.getContext("2d");
    context.fillStyle = "black";
    let x = document.getElementById("width").value;
    let y = document.getElementById("height").value;
    let xp = x / 0.0264583333;
    let yp = y / 0.0264583333;

    canvas.setDimensions({ width: xp, height: yp });
    canvas.clone(function (clonedCanvas) {
      // Convert our cloned Canvas Object to JSON
      const canvasJSON = clonedCanvas.toJSON();
      // Load the new cloned Canvas Object to canvas
    });
  });
}

Adjust();

const texts = new Map();
let activeText = null;

// const textOne = new fabric.Textbox("PutTextHere", {
//   fill: "blue",
//   fontStyle: "bold",
//   // fontFamily: "Times New Roman",
//   fontFamily: "Arial",

//   //fontFamily: 'montB'
// });

function CreateText(e) {
  document.getElementById("create-text").addEventListener("click", (e) => {
    try {
      const text = new fabric.Textbox("PutTextHere", {
        fill: "blue",
        fontStyle: "bold",
        fontFamily: "Arial",
      });

      texts.set(text, text);
      canvas.add(text).setActiveObject(text);
      activeText = text;
      text.onSelect = (e) => {
        if (e) {
          console.log("selected: ", text.fontFamily);
          activeText = text;
        }
      };
    } catch (error) {
      console.log("error: ", error);
    }
  });
}

CreateText();

document.getElementById("file").addEventListener("change", function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (f) {
    const data = f.target.result;
    fabric.Image.fromURL(data, function (img) {
      const oImg = img.set({ left: 40, top: 0, angle: 0, width: 520, height: 600 }).scale(0.4);
      canvas.add(oImg).renderAll();
      const a = canvas.setActiveObject(oImg);
      const dataURL = canvas.toDataURL({ format: "png", quality: 0.8 });
    });
  };
  reader.readAsDataURL(file);
});

//Selecting Font
let select = document.getElementById("fontf");
allFonts.forEach(function (font) {
  let option = document.createElement("option");
  option.innerHTML = font;
  option.value = font;
  select.appendChild(option);
});

document.getElementById("fontf").onchange = function () {
  console.log("value: ", this.value);
  loadAndUse(this.value);
};

function loadAndUse(font) {
  activeText.fontFamily = font;
  canvas.requestRenderAll();
}

function setColor(event) {
  canvas.requestRenderAll();
  canvas.getActiveObject().set("fill", event.target.value);
}

function pickColor() {
  let colorWell = document.querySelector("#color-picker");
  colorWell.addEventListener("input", setColor, false);
  colorWell.addEventListener("change", setColor, false);
  colorWell.select();
}

pickColor();
// - track the current / selected text box
// - get the get the selected font
// - set the fontFamily of the current / selected text box
// - re-render
