import allFonts from "./fonts.js";

let canvas = new fabric.Canvas("canvas1");

// Create a new instance of Canvas

var dpr = window.devicePixelRatio;
var inch = 25.4;

var pixelHeight = screen.height * dpr;
var pixelWidth = screen.width * dpr;

function Adjust() {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    var dpi_x = document.getElementById('dpi').offsetWidth;
    var dpi_y = document.getElementById('dpi').offsetHeight;

    var width = screen.width / dpi_x;
    var height = screen.height / dpi_y;

    var py = (width*width) + (height* height);
    var npy = Math.sqrt(py);
    
    var winW = screen.width;
    var winH = screen.height;

    var pyth = (winW*winW)+(winH*winH); 
    var npyth = Math.sqrt(pyth);

    var diag =Math.round(npyth/npy) ;

 
    function calculatePpi(monitorDiagonal) {
      return (Math.sqrt(Math.pow(pixelWidth, 2) + Math.pow(pixelHeight, 2))) / monitorDiagonal;
     }  
    function mmToPx(mm) {
      return  (((mm / inch) *diag));//calculatePpi(diag)

    }
    let can = document.getElementById("canvas1");
    can.style.border = "solid black";
    let context = can.getContext("2d");
    context.fillStyle = "black";
    let x = document.getElementById("width").value;
    let y = document.getElementById("height").value;
    var xmm = x*10;
    var ymm = y*10;
    let xp =  mmToPx(xmm);//44.705882352941176470588235294118,x * 38.8;
    let yp = mmToPx(ymm);//0.0264583333
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
  console.log(reader);
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
    //var rh = (screen.height/10);
    //var sd = (screen.height*screen.height)+(screen.width*screen.width)
    //var nsd = Math.sqrt(sd);
    var dpi_x = document.getElementById('dpi').offsetWidth;
    var dpi_y = document.getElementById('dpi').offsetHeight;

    var width = screen.width / dpi_x;
    var height = screen.height / dpi_y;

    var py = (width*width) + (height* height);
    var npy = Math.sqrt(py);
    
    var winW = screen.width;
    var winH = screen.height;

    var pyth = (winW*winW)+(winH*winH); 
    var npyth = Math.sqrt(pyth);

    var diag =Math.round(npyth/npy) ;

    //var diag = 0; //Math.round(Math.sqrt(pyth)/nsd)/10; 
    var dpr = window.devicePixelRatio;
    var inch = 25.4;
    var pixelHeight = screen.height * dpr;
    var pixelWidth = screen.width * dpr;
    function calculatePpi(monitorDiagonal) {
      return (Math.sqrt(Math.pow(pixelWidth, 2) + Math.pow(pixelHeight, 2))) / monitorDiagonal;
     }  
    function mmToPx(mm) {
      return  (((mm / inch) * (diag + 0.5)));//

    }
    
    let xp = mmToPx(86);
    let yp = mmToPx(54);//0.0264583333

    canvas.setDimensions({ width: xp, height:yp ,excludeFromExport:true});//w=380 ,h=238
    canvas.backgroundColor="white";
    var image = document.getElementById('my-image');
    var fabricImage = new fabric.Image(image,{excludeFromExport:true});
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

    var dpi_x = document.getElementById('dpi').offsetWidth;
    var dpi_y = document.getElementById('dpi').offsetHeight;

    var width = screen.width / dpi_x;
    var height = screen.height / dpi_y;

    var py = (width*width) + (height* height);
    var npy = Math.sqrt(py);
    
    var winW = screen.width;
    var winH = screen.height;

    var pyth = (winW*winW)+(winH*winH); 
    var npyth = Math.sqrt(pyth);

    var diag =Math.round(npyth/npy) ;


    var inch = 25.4;
    var pixelHeight = screen.height * dpr;
    var pixelWidth = screen.width * dpr;
    function calculatePpi(monitorDiagonal) {
      return (Math.sqrt(Math.pow(pixelWidth, 2) + Math.pow(pixelHeight, 2))) / monitorDiagonal;
     }  
    function mmToPx(mm) {
      return  (((mm / inch) * diag));

    
    }
    let can = document.getElementById("canvas1");
    can.style.border = "solid black";
    let context = can.getContext("2d");
    context.fillStyle = "black";
    
    let xp = mmToPx(54);
    let yp = mmToPx(86);//0.0264583333

    canvas.setDimensions({ width: xp, height:yp});
    canvas.backgroundColor="white";
    var image = document.getElementById('my-image1');
    var fabricImage = new fabric.Image(image,{
    });
    canvas.add(fabricImage);
    const text = new fabric.Textbox("Visitor", {
      width:170,
      left:40,
      top:120,
      fill: "#920000",
      fontStyle: "bold",
      fontFamily: "montB",
    });
    canvas.add(text)
    const text2 = new fabric.Textbox("እንግዳ", {
      width:170,
      left:50,
      top:180,
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
<<<<<<< HEAD

function Delete() {
  document.getElementById("del").addEventListener("click" ,(e) => {
    e.preventDefault();
  var active = canvas.getActiveObject()
  if (active) {
    canvas.remove(active)
    if (active.type == "activeSelection") {
      active.getObjects().forEach(x => canvas.remove(x))
      canvas.discardActiveObject().renderAll()
    }
  }
});
}
Delete();

function Ser(){
  document.getElementById("save").addEventListener("click",(e) =>{
    e.preventDefault();
    var ob = JSON.stringify(canvas);
    var newa = JSON.parse(ob); 
   //console.log(ob["objects"]);
   console.log(newa.objects[0]);

  });
}
Ser();


// window.deleteObject = function() {
//   document.getElementById("del").addEventListener("click", (e) => {
//     e.preventDefault();
//     canvas.getActiveObject().remove();
//   });
 
// }
// window.deleteObject();
// - track the current / selected text box
// - get the get the selected font
// - set the fontFamily of the current / selected text box
// - re-render
//////////////////////////////////////Croping//////////////////////////////
// var pos = [0, 0];

// var r = document.getElementById('canvas1').getBoundingClientRect();
// pos[0] = r.left;
// pos[1] = r.top;

// var mousex = 0;
// var mousey = 0;
// var crop = false;
// var disabled = false;

// //console.log(pos);

// var el = new fabric.Rect({
//     //left: 100,
//     //top: 100,
//     fill: 'transparent',
//     originX: 'left',
//     originY: 'top',
//     stroke: '#ccc',
//     strokeDashArray: [2, 2],
//     opacity: 1,
//     width: 1,
//     height: 1
// });
// el.visible = false;
// canvas.add(el);
// var object;
// fabric.util.loadImage(src, function (img) {
//     object = new fabric.Image(img);
//     object.set({
//         left: 100,
//         top: 100,
//         selectable: false
//     });
//     object.hasRotatingPoint = true;
//     object.scaleX = object.scaleY = 0.25;
//     canvas.add(object);
//     canvas.renderAll();
// });

// canvas.on("mouse:down", function (event) {
//     if (disabled) return;
//     el.left = event.e.pageX - pos[0];
//     el.top = event.e.pageY - pos[1];
//     //el.selectable = false;
//     el.visible = true;
//     mousex = event.e.pageX;
//     mousey = event.e.pageY;
//     crop = true;
//     canvas.bringToFront(el);
// });
=======
>>>>>>> f730224b3de397d4d75b40fa7a567a58ce2a1487
