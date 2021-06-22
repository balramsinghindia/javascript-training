function openOffCanvas(){
    // alert('off-canvas is working');
    // let canvas = document.getElementById('canvas-division').style.display="block";
    //  let canvas = document.getElementById('canvas-division').style.visibility="visible";
   document.getElementById('canvas-division').style.visibility="visible";
   let canvasdivison = document.getElementById('canvas-division').style.transform="none";
   console.log(canvasdivison);
}


function closeOffCanvas(){
    let canvas = document.getElementById('canvas-division').style.visibility="hidden";
    document.getElementById('canvas-division').style.transform="translateX(-100%)";
    console.log(canvas);
}

function openOffCanvasTop(){
    document.getElementById('canvas-division-two').style.visibility="visible";
    let canvasdivison = document.getElementById('canvas-division-two').style.transform="none";
    console.log(canvasdivison);
}

function closeOffCanvasTop(){
    let canvas = document.getElementById('canvas-division-two').style.visibility="hidden";
    document.getElementById('canvas-division-two').style.transform="translateY(-100%)";
    console.log(canvas);
}

function openOffCanvasRight(){
    document.getElementById('canvas-division-three').style.visibility="visible";
    let canvasdivison = document.getElementById('canvas-division-three').style.transform="none";
    console.log(canvasdivison);
}


function closeOffCanvasRight(){
    let canvas = document.getElementById('canvas-division-three').style.visibility="hidden";
    document.getElementById('canvas-division-three').style.transform="translateX(100%)";
    console.log(canvas);
}

function openOffCanvasBottom(){
    document.getElementById('canvas-division-four').style.visibility="visible";
    let canvasdivison = document.getElementById('canvas-division-four').style.transform="none";
    console.log(canvasdivison);
}

function closeOffCanvasBottom(){
    let canvas = document.getElementById('canvas-division-four').style.visibility="hidden";
    document.getElementById('canvas-division-four').style.transform="translateY(100%)";
    console.log(canvas);
}






