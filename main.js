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
    let xp = x * 44.705882352941176470588235294118;
    let yp = y *44.705882352941176470588235294118;//0.0264583333
    canvas.setDimensions({ width:xp, height:yp});
    canvas.backgroundColor="white";
    canvas.renderAll;
   
  });
}

Adjust();

const texts = new Map();
let activeText = null;

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


function StaffId() {
  document.getElementById("sid").addEventListener("click", (e) => {
    e.preventDefault();

    let can = document.getElementById("canvas1");
    can.style.border = "solid black";
    let context = can.getContext("2d");
    context.fillStyle = "black";
    
    let xp = 15.4 / 0.0264583333;
    let yp = 7.5 *37.7952755906;//0.0264583333

    canvas.setDimensions({ width: 380, height:238});
    canvas.backgroundColor="white";
    var image = document.getElementById('my-image');
    var fabricImage = new fabric.Image(image);
    canvas.add(fabricImage);
    canvas.renderAll;
    // canvas.clone(function (clonedCanvas) {
    //   // Convert our cloned Canvas Object to JSON
    //   const canvasJSON = clonedCanvas.toJSON();
    //   // Load the new cloned Canvas Object to canvas
    // });
  });
}
StaffId()


function VisitorId() {
  document.getElementById("vid").addEventListener("click", (e) => {
    e.preventDefault();

    let can = document.getElementById("canvas1");
    can.style.border = "solid black";
    let context = can.getContext("2d");
    context.fillStyle = "black";
    
    // let xp = 12.0/ 0.0264583333;
    // let yp = 11.4 *37.7952755906;//0.0264583333

    canvas.setDimensions({ width: "238", height:"380"});
    canvas.backgroundColor="white";
    var image = document.getElementById('my-image');
    var fabricImage = new fabric.Image(image,{
    });
    canvas.add(fabricImage);
    const text = new fabric.Textbox("Visitor", {
      width:200,
      left:70,
      top:170,
      fill: "#920000",
      fontStyle: "bold",
      fontFamily: "montB",
    });
    canvas.add(text)
    const text2 = new fabric.Textbox("እንግዳ", {
      width:200,
      left:70,
      top:230,
      fill: "#00297A",
      fontStyle: "bold",
      fontFamily: "montB",
    });
    canvas.add(text2)
    canvas.renderAll;
    // canvas.clone(function (clonedCanvas) {
    //   // Convert our cloned Canvas Object to JSON
    //   const canvasJSON = clonedCanvas.toJSON();
    //   // Load the new cloned Canvas Object to canvas
    // });
  });
}
VisitorId();

function print(){
  document.getElementById("printID").addEventListener("click", (e) => {
    e.preventDefault();
    var dataUrl = document.getElementById('canvas1').toDataURL(); //attempt to save base64 string to server using this var  
    var windowContent = '<!DOCTYPE html>';
    windowContent += '<html>'
    windowContent += '<head><title>Print canvas</title></head>';
    windowContent += '<body>'
    windowContent += '<img src="' + dataUrl + '" onload=window.print();window.close();>';
    windowContent += '</body>';
    windowContent += '</html>';
    var printWin = window.open('', '', 'width=640,height=560');
    printWin.document.open();
    printWin.document.write(windowContent);

  
  });
  
}
print();
