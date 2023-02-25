<?php
include_once 'include/config.php';
?>
<!DOCTYPE html>
<html>
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
      crossorigin="anonymous"
    />
    <link href="style.css" rel="stylesheet" type="text/css" />
    <title>BAID</title>
    <!-- Loading the FabricJS library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/3.6.2/fabric.min.js"></script>
  </head>

  <body>
  <div id="dpi" style="height: 1in; width: 1in; left: 100%; position: fixed; top: 100%;"></div>
   
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="index.php"><span style="font-size:30px">BA</span> ITDEP IDMAKER</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.php" >Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="printed.php" >Printed Id's</a>
          </li>
        </ul>  
      </div>
    </nav>
    <div class="container main_c">
      <div class="row">
        <div class="col-9 h1">
          <canvas id="canvas1" class="c1"> </canvas>
          
          <img style="display: none;" src=
          "smlogo.png"
                          id="my-image" alt="" >
		
          <!-- Camera Script-->
          
            <!--Script Ends here-->
        </div>
        
        <div class="col-3">
          <div class="form-hand">
            <form class="form-control" id="form">
              <div class="row">
                <label>Height & Width in Cm</label><br />
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label" for="height">Height:</label>
                    <input class="form-control" type="number" id="height" name="height" step="any" />
                  </div>
                  <!-- <br/>class='text-area' -->

                </div>
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label" for="width">Width:</label>

                    <input class="form-control" type="number" id="width" name="width" class="input-boxw" step="any" />
                  </div>
                  <!--<br>-->
                </div>
                <!-- <br> -->
              </div>
              <div class= "d-grid gap-2 d-md-block">
              <button class="btn btn-primary button buttonField" type="submit" id="adjust" >Custom Card</button>
              <button class="btn btn-primary button buttonField" type="button" id="sid" >Staff ID</button>
              </div>
              <button class="btn btn-primary button buttonField" type="button" id="vid" >Visitors ID</button>
              <button class="btn btn-primary button buttonField" type="button" id="create-text">Add Text</button>
              <!-- <label for="head">Head</label> -->
              <label for="file" class="btn btn-outline-primary">Choose Image</label>
              <input class="form-control"  style= "visibility:hidden;" type="file" id="file"/>
              <label for="fontf">Choose a font:</label>

              <select class="form-select" name="fontf" id="fontf">
                <option value="MB"></option>
                <!-- <option value="MN"></option> -->
                <!-- <option value="SS"></option>
		<option value="AR"></option> --></select
              ><br />
              <label for="color">Font Color</label>
              <input type="color" id="color-picker" name="color-picker" value="#e66465" /><br>
              <button class="btn btn-primary button buttonField" type="button" id="printID">Print Card</button>
              <button class="btn btn-primary button buttonField" type="button" id="del" >Delete</button><br>
              <button class="btn btn-primary button buttonField" type="button" id="save">Save</button>
            </form>
          </div>
        </div>
        <script type="module" src="main.js"></script>
      </div>
    </div>
  </body>
</html>
