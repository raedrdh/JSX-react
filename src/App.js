import './App.css';
import imagesrc from "./imagesrc.png";
import './style.css';

function App() {
  return (
    <div style = {{border:'solid 1px black', maxwidth:'100vw'}}>
     <h1 className='titel red'>
       Rdhaounia Raed 
     </h1>
     <div>
       <br/>
     </div>
     <img src={imagesrc} alt='image source' />
     <div>
       <br/>
     </div>
     <img src='/imagepub.png'/>
     <div>
     <iframe width="692" height="389" src="https://www.youtube.com/embed/4wLflrOIb80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
    </div>
  );
}

export default App;