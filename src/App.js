import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import Footer from "./Mycomponents/Footer";
import Todos from "./Mycomponents/Todos";

function App() {
  return (
    <>

    
     <Header title= "WebApp"/>
     
     <div className='Mainpage'>
     <Todos/>
     <Footer/>
     </div>
    </>
  );
}

export default App;
