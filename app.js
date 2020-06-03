//Console check for js load
console.log("Hello from app.js");

//Constants and Lets
let viz;
const vizContainer = document.getElementById("vizContainer");
const hidebutton = document.getElementById("hidebutton");
const showbutton = document.getElementById("showbutton");
const exportPDFbutton = document.getElementById("exportPDFbutton");
const exportPPTbutton = document.getElementById("exportPPTbutton");
const url =
  "https://public.tableau.com/views/GettingStartedwithEmbedding/CarTypesandFuelEfficiency";
const options = {
  device: "deskop",
};

//funtction to initiate your viz
function initViz() {
  console.log("My viz is loading..");
  viz = new tableau.Viz(vizContainer, url, options);
}

//when to execute the function
document.addEventListener("DOMContentLoaded", initViz);

//hide the viz
function hideTheViz() {
  console.log("going to hide the viz");
  viz.hide();
}

hidebutton.addEventListener("click", hideTheViz);

//show the viz
function showTheViz() {
  console.log("going to show the viz");
  viz.show();
}

showbutton.addEventListener("click", showTheViz);

//export pdf function and event listener
function exportPDFfunction() {
  console.log("generating PDF export");
  viz.showExportPDFDialog();
}

exportPDFbutton.addEventListener("click", exportPDFfunction);

//export powerpoint dialog and event listener
function exportPPTfunction() {
  console.log("generating PPT export");
  viz.showExportPowerPointDialog();
}

exportPPTbutton.addEventListener("click", exportPPTfunction);
