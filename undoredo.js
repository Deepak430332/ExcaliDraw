

function onUndo(){
    // console.log(history)
    
    

    if(historyIndex !== -1){

        console.log(historyIndex);
        // history.pop();
        
        // historyIndex;

        if(historyIndex === 0){

            c.clearRect(0,0,canvas.width , canvas.height );
        }

        else{

            c.putImageData(history[historyIndex-1],0,0);
        }

        historyIndex--;
        
    }
}

function onRedo(){

    if(historyIndex < history.length){

        historyIndex++;
        

        if(historyIndex < history.length){

            console.log(historyIndex);
            c.putImageData(history[historyIndex],0,0);
        }
            
    }
    
   

            
    
}