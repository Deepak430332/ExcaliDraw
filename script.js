const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

// c is the context object responsible for making anykind of drawing on the canvas.

// the below code is for drawing a line between two points by giving co-ordinates of it.



//     /**
//      * Properties of stroking
//      * 1. Strokestyle = color to be drawn.
//      * 2. linewidht = thickness of the line
//      */

// c.beginPath();

// c.moveTo(200,300); //starting point of the line.
// c.lineTo(400,100); //edning poinf of the line

// c.strokeStyle = "red";
// c.lineWidth = 10;
// c.stroke();// stroke function draws the line with black color from p1 to p2
// c.closePath();
// 

/**Now i will draw three lines by giving some function
 * L1 : P1( 100, 50 ) , P2 ( 90, 200 )  => red colored , 3px thickness
 * L2 : P1( 50, 150 ) , P2 ( 300, 40 ) => blue colored, 10px thickness
 * L3 : P1(500, 500 ) , P2 (600 , 600 ) => tomato colored, 5px thickness.
*/

// function drawLine(p1,p2,color='blue',thickness=5){ // if color and thcikenss is not given default ones will be added

//     c.beginPath();

//     c.moveTo(p1.x,p1.y); //starting point of the line.
//     c.lineTo(p2.x,p2.y); //edning poinf of the line

//     c.strokeStyle = color;
//     c.lineWidth = thickness;
//     c.stroke();// stroke function draws the line with black color from p1 to p2
//     c.closePath();

// }

// // calling the function three times
// drawLine({x:100,y:50},{x:90,y:200},"red",3);
// drawLine({x:50,y:150},{x:300,y:40});
// drawLine({x:500,y:500},{x:600,y:600},"tomato",5);

// Dynamic Line Drawing --> this means based on mouse click events we can do

/**
function onMouseDown(event){

    let {clientX,clientY} = event;

    // {clientX,clientY} is position where we make the mouse down
    console.log(clientX,clientX);
    c.beginPath();

    c.moveTo(clientX,clientY); // starts the line at that point

    c.strokeStyle = "blue";
    c.lineWidth = 4;

}

function onMouseUp(event){

    let {clientX,clientY} = event;

    // {clientX,clientY} is position where we make the mouse down
    console.log(clientX,clientX);


    c.lineTo(clientX,clientY); // starts the line at that point
    c.stroke();
    c.closePath();

}

 */
// canvas.addEventListener('mousedown',onMouseDown);
// canvas.addEventListener('mouseup',onMouseUp);

// if we want to make continuous lines with different colors and thickness

// c.beginPath();
// c.strokeStyle = 'red';
// c.lineWidth = 3;
// c.moveTo(100,100); //point1
// c.lineTo(200,100);// point 2
// c.stroke();
// c.closePath();
// c.beginPath();
// c.lineWidth = 5;
// c.strokeStyle = 'blue';
// c.moveTo(200,100);
// c.lineTo(200,200);
// c.stroke();
// c.closePath();
// c.beginPath();
// c.lineWidth = 7;
// c.strokeStyle = 'yellow';
// c.moveTo(200,200);
// c.lineTo(100,200);
// c.stroke();
// c.closePath();
// c.beginPath();
// c.lineWidth = 9;
// c.strokeStyle = 'green';
// c.moveTo(100,200);
// c.lineTo(100,100);
// c.stroke();
// c.closePath();


// const drawingHistory = [];
// let pathCount = 0;

// let options = {

//     isFreeHandDrawing : true,
//     isRectangleDrawing:false,
// }

// let drawingColor = 'blue';
// let prevPos =null;

// function enableRectDrawing(){

//     options={

//         isFreeHandDrawing:false,
//         isRectangleDrawing:true,
//     }

//     console.log(options);
// }

// let initCnt;

// function onMouseDown(e){

//     prevPos = [e.clientX,e.clientY];
//     c.strokeStyle = drawingColor;
//     c.lineWidth = 2;
//     initCnt = pathCount;

//     canvas.addEventListener('mousedown',onMouseMove);
//     canvas.addEventListener('mouseup',onMouseUp);

// }

// function onMouseUp(e){

//     canvas.removeEventListener('mousemove',)
// }
