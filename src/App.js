import React from 'react';
import { useState } from 'react';
import './App.css';
import StickyNotes from './components/StickyNotes';

function App() {

   const [notes, setNotes] = useState([])



   const addStickyNote = () => {
       setNotes([
        ...notes, {
          id: Date.now(),

        }
       ])
   }


   function removeNotes(noteId){
    setNotes(notes.filter((item) => item.id !== noteId ));
   }

  return (
    
    <div className="App">
      
       <button className='sticky-btn' onClick={addStickyNote}>+ Create Note</button>

       {
        notes.map((item) => (
          <StickyNotes key={item.id} closeStickyNote = {() => removeNotes(item.id)} />
        
        ))
       }

       
       
    </div>
    
  );
}

export default App;
