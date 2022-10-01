
var canvas = new fabric.Canvas("canvas1");
//var fonts = ["Montesserat bold", "Montesserat", "Times New Roman", "SanSerif","Arial"];
var fonts = ["Pacifico", "VT323", "Quicksand", " montB"];
// Create a new instance of Canvas
function Adjust(){
var can = document.getElementById('canvas1');
can.style.border="solid black";
var context = can.getContext('2d');
context.fillStyle ="black";
var x = document.getElementById("width").value;
var y = document.getElementById("height").value;
xp = x/0.0264583333;
yp=y/0.0264583333;

canvas.setDimensions({width:xp,height:yp});
canvas.clone(function(clonedCanvas) {
    // Convert our cloned Canvas Object to JSON
    var canvasJSON = clonedCanvas.toJSON();
    // Load the new cloned Canvas Object to canvas
    
 });
}

function CreateText(){
   // canvas.loadFromJSON(canvasJSON);
    //var canvas1 = new fabric.Canvas('canvas')
    var text = new fabric.Textbox('PutTextHere', {
        fill: 'blue',
        fontStyle: "bold",
        fontFamily: "montB"
         

        
        //fontFamily: 'montB'
    });
    canvas.add(text).setActiveObject(text);
    fonts.unshift('Times New Roman');
}

document.getElementById('file').addEventListener("change", function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (f) {
      var data = f.target.result;                    
      fabric.Image.fromURL(data, function (img) {
        var oImg = img.set({left: 40, top: 0, angle: 0,width:520, height:600}).scale(0.4);
        canvas.add(oImg).renderAll();
        var a = canvas.setActiveObject(oImg);
        var dataURL = canvas.toDataURL({format: 'png', quality: 0.8});
      });
    };
    reader.readAsDataURL(file);
  });
  //Selecting Font
  var select = document.getElementById("fontf");
  fonts.forEach(function(font) {
    var option = document.createElement('option');
    option.innerHTML = font;
    option.value = font;
    select.appendChild(option);
  });

  document.getElementById('fontf').onchange = function() {
    if (this.value !== 'Times New Roman') {
      loadAndUse(this.value);
    } else {
      canvas.getActiveObject().set("fontFamily", this.value);
      canvas.requestRenderAll();
    }
  };

  function loadAndUse(font) {
    var myfont = new FontFaceObserver(font)
    myfont.load()
      .then(function() {
        // when font is loaded, use it.
        canvas.getActiveObject().set("fontFamily", font);
        canvas.requestRenderAll();
      }).catch(function(e) {
        console.log(e)
        alert('font loading failed ' + font);
      });
  }
// Render the Text on Canvas
