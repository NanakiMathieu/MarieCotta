import React from 'react';
import './Concept.css';
import photo from '../../assets/images/test.jpg';
import profilpic from '../../assets/images/PP.jpg';

function Concept() {
  return (
    <div>
      <div className="concept__image">
        <img src={photo} alt="" />
      </div>
      <div className="concept__h2">
        <h2> Le Concept </h2>
      </div>
      <div className="concept__profil">
        <img src={profilpic} alt="marie" className="concept__profilpic" />
        <p className="concept__presentation">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="Concept__list">
        <ul>
          <li> Cuisine maison</li>
          <li> Produits locaux et de saison</li>
          <li> Bocaux réutilisés</li>
          <li> Compostage des déchets vert</li>
        </ul>
      </div>
    </div>
  );
}

export default Concept;
