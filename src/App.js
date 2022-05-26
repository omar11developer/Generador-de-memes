import React, {useState} from 'react';
import './App.css';
import html2canvas from 'html2canvas';



function App() {
  //1- Select picker de memes
  //2- input text - first line
  //3- Input text -second line
  //4- botton exportar
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
const [imagen, setImagen] = useState('fire');
  const onChangeLinea1 = (event)=>{

     setLinea1(event.target.value);
  }
  const onChangeLinea2 = (event)=>{
    setLinea2(event.target.value);
  }
  const selectorImg = (event)=>{
    setImagen(event.target.value);
  }
  const onClickExportar =(event)=>{
    html2canvas(document.querySelector("#capture")).then(canvas => {
      const img = canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.download = `meme.png`
      link.href= img;
      link.click();
    });
  }
  return (
    <div className="App">
      <div className='container'>
      <h1 className='mt-5'>Generador de memes </h1>
      <div className='row'>
      <div className='col-md-6 mt-3 p-3'>
      <select className='form-select' onChange={selectorImg}>
       <option value="fire">Casa en llamas</option>
       <option value="futurama">Futurama</option>
       <option value="history">History Channel</option>
       <option value="matrix">Matrix</option>
       <option value="philosoraptor">Philosoraptor</option>
       <option value="smart">Smart Guy</option>
     </select>
     <br/>
     <br/>
     <input className='form-control mb-3' onChange={onChangeLinea1} type='text' placeholder='Escribe primer linea' />    
     <input className='form-control mb-4' onChange={onChangeLinea2} type='text' placeholder='Escribe segunda linea' /> 
     <button onClick={onClickExportar} className='btn btn-primary'>Exportar</button>
      </div>
      <div className='col-md-6 p-4'>
      <div className='container-img' id='capture'>
        <span className='span1'>{linea1}</span>
        
        <span className='span2'>{linea2}</span>
        <img className='img-fluid' src={"/img/"+ imagen +".jpg"} alt="img" />
      </div>
      </div>
      </div>
      </div>
     

     

    </div>
  );
}

export default App;
