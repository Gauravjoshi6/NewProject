import React,{ useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [color, setColor] = useState('#000000')
  const [font, setFont] = useState('Arial')
  const [fontsize, setFontsize] = useState('16px')
  const [history, setHistory] = useState([])
  const [redoStack, setRedoStack] = useState([])


  const onHandleChange = (e) =>{
    setHistory([...history, text])
    setText(e.target.value)
   
  }

  const handleAddText = () =>{
    setHistory([...history, text])
       setText(text + 'New Text')
    
  }

  const handleUndo = () =>{
    if (history.length > 0) {
      const laststate = history.pop()
      setRedoStack([...redoStack, text])
      setText(laststate)
    }
  };

  const handleRedo = () => {
    if(redoStack.length > 0){
      const nextstate = redoStack.pop()
      setHistory(...history, text)
      setText(nextstate)
    }
  };


  return (
    <>
      <div className="Box">
        <div className="div">
            
            <button className="undo" onClick={handleUndo}>Undo</button>
            <button className="undo" onClick={handleRedo}>Redo</button>

            <select className="selector" value={font} onChange={(e) => setFont(e.target.value)}>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Cascadia Mono">Cascadia Mono</option>
                <option value="Impact">Impact</option>
            </select>
            <button className="button" onClick={handleAddText}>Add Text</button>
               <input type="number" id="number" value={fontsize.replace('px', '')} onChange={(e) => setFontsize(`${e.target.value}px`)}/>
                <input type="color" id="color" value={color} onChange={(e) =>setColor(e.target.value)}/>
              </div>

        <div className="SmallBox">
             <textarea name="feedback" placeholder="" id="feedback" onChange={onHandleChange}
         
        style={{color:color, fontSize:fontsize, fontFamily:font}}
         value={text}

        />
        </div>                
            </div>  
    
    </>
  )
}

export default App
