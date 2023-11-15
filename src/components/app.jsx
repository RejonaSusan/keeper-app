import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Input from "./create"

function App() {

  const [notes, setNotes] = useState([])

  function addNote(newnote){
    setNotes(prevNote=>{
      return [...prevNote, newnote];

    })
  }

  function deleteNote(id){
    setNotes(prevNote=>{
      return prevNote.filter((noteitem, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <Input 
        onAdd = {addNote}
      />
      {notes.map((item, index)=>{
        return (
        <Note
          key = {index}
          id = {index}
          title = {item.title}
          content = {item.content}
          onDelete = {deleteNote}
        />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
