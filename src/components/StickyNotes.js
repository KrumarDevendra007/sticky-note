import React from "react";
import Draggable, {DraggableCore} from "react-draggable";
import { useRef } from "react";



function StickyNotes({closeStickyNote}){

    // const Draggable = require('react-draggable');
    const yellowRef = useRef();
    const redRef = useRef();
    const viletRef = useRef();
   
    return(
        
        <div className="main">

        
        <Draggable>
         
        <div className="sticky-notes">
       
              <div className="sticky-note-header">
                <div>Sticky Notes</div>
                <div className="close" onClick={closeStickyNote}>&times;</div>
              </div>
              
              <textarea id="text-area" cols="30" rows="10" >
              </textarea>
             
        </div>
        </Draggable>
        </div>
    )
}


export default StickyNotes;