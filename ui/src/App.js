import logo from './logo.png';
import image from './image.png'
import imageCroped from './download.png'
import './App.css';

function App() {
  return (
    <div className='backgroundImage' id = "backgroundImage">
      <div className='Header'>
      <img src={logo} alt="Logo"  />
      
      <div className='Header1'>
          <div className='child' id="home">Home</div>
          <div className='child'>About</div>
          <div className='child'>Project</div>
          <div className='child'>Services</div>
          <div className='child'>
            <select >
              <option>BLOGS</option>
            </select>
          </div>
          <div className='child'>
            <select >
              <option>BLOGS</option>
            </select>
          </div>
          <div className='child' id ="contact">Contact</div>
          <div className='child' id="get-in-touch">GET IN TOUCH</div>
      </div>
      </div>
    </div>
  );
}

export default App;
