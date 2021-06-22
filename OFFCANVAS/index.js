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