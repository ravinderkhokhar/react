import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
   <>
     {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>
     <Navbar aboutText="About TextUtils"/>
     */}
      <Navbar title="TextUtils"/>
      <div className="container mb-3">
      {/* <TextForm heading="Enter the text to analyze below" /> */}
      <About/>
      </div>
      
   </>
  );
}

export default App;
