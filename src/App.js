import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


function App() {
  return (
    <>
      <Navbar heading="Converter" />
      <div className='container'>
        <TextForm title="Enter your text Below" />
      </div>
    </>
  );
}

export default App;
