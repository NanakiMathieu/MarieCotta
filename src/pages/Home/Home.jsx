import React from 'react';
import './Home.css';
import photo from '../../assets/images/test.jpg';

function Home() {
  return (
    <div>
      <div className="image__accueil">
        <img src={photo} alt="nourriture" />
      </div>
      <div className="home__text">
        <h3> Traiteur eco-responsable sur Montaigu</h3>
      </div>
    </div>
  );
}

export default Home;
