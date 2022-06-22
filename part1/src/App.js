import './App.css';
import Mensaje from './Mensaje'
function App() {

  const a =2
  const b =3


  const Descripcion =()=>{
    return <p>Esta es una aplicacion en React</p>
  }  

  return (
    <div className="App">
      < Mensaje color='red' message='Estamos trabajando'/>
      < Mensaje color='yellow' message='En un curso'/>
      < Mensaje color='green'message='De React'/>
    <Descripcion />
      <strong>Estoy trabajando</strong>
      <div>
        <p>El sesultado de la suma es:</p>
      {a+b}
      </div>
    </div>
  );
}

export default App;
