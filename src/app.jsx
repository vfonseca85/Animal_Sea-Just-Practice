import { animals } from './animals';
import {React, createRoot} from 'react-dom/client'


function App()
{

  const title = " ";

  const background = 
      <img className="background" alt="ocean" src="/images/ocean.jpg" />;

  const images = [];
  for(const animal in animals){
    const image = (
      <img 
      key= {animal}
      className= "animal"
      alt= {animal}
      src={animals[animal].image}
      aria-label= {animal}
      role='button'
      onClick={displayFact}
      />
    );
    images.push(image);
  }

  const showBackground = true;

  const animalFacts = (
    <div>
      <h1>{title === " " ? "Click an animal for a fun fact" : title}</h1>
      {showBackground && background}
      <p id="fact"></p>
      <div className="animals">
        {images}
      </div>
    </div>
  );

  function displayFact (e) {
    const animal = e.target.alt;
    const index = Math.floor(Math.random() * animals[animal].facts.length);
    const funFact = animals[animal].facts[index];
    const p = document.getElementById("fact");
    p.innerHTML = funFact;
  }

  animalFacts();

}

export default App;
