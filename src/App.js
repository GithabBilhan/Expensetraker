
import { useState } from 'react';
import './App.css';
import Data from './componets/Data';
import Header from './componets/Header';

function App() {
  const [statlifting,setlifting]= useState([])
  const [statmos,setmos]=useState("https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Free-Download.png")


  function clikmos() {
    setmos("https://cdn-icons-png.flaticon.com/128/5165/5165792.png")
  }

  const sawe = (e)=>{

setlifting((prevstate)=>{
return [...prevstate,e]


})
  }
  
const[statopen,setopen]=useState(false)
function open() {
  setopen(true)
}

  return (
    <div className="App">
      <Header korzine={statmos} onClik={open}/>
    
    <Data clikmos={clikmos} data = {sawe}/>
    
   {statopen? <div className='divdadmap'>
    {statlifting.map((e)=>{
return <div className='divmap'>

<h1>{e.Name}</h1>
<h2>{e.age}</h2>


</div>    
    })}
    </div>:null}
    </div>
  );
}

export default App;
