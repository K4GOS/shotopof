import React, { useEffect } from "react";
import "./Member.css";
import AOS from "aos";

export const Member = () => {
  useEffect(() => {
    AOS.init({
      duration: 350,
    });
  }, []);
  return (
    <div className="list_of_members">
      <div className="carte" data-aos="zoom-in">
        <img
          src="images/avatar_one.webp"
          alt="avatar"
          className="image_avatar"
        />
        <p className="name">Tristan Hersent</p>
        <p>
          Je m'appelle Tristan Hersent, 20 ans ayant intégré l'EPITA après un an
          de prépa MPSI, cette dernière étant sans goût car (presque) sans
          informatique. Je suis passionné de sport et d'informatique. J'ai
          d'ailleurs été en sport étude durant 6 ans de ma vie ce qui m'a appris
          à m'organiser. Côté informatique, j'ai déjà touché à Python de mon
          coté et au C grâce à mon projet de terminal via Arduino ainsi que
          l'OCR et les tp du premier semestre.
        </p>
      </div>
      <div className="carte" data-aos="zoom-in">
        <img
          src="images/avatar_one.webp"
          alt="avatar"
          className="image_avatar"
        />
        <p className="name">Côme Paya</p>
        <p>
          Je m’appelle Côme Paya, j’ai 20 ans et suis arrivé cette année à
          l'EPITA après une année de classe prépatoire PCSI. J’ai rejoint
          l'EPITA avec pour objectif de m’améliorer en informatique afin de
          pouvoir programmer et développer mes propres projets. Je suis
          particulièrement intéressé par le machine learning, l’intelligence
          artificielle et le développement Web. Ce sera pour moi une opportunité
          de consolider mon adaptation à ces nouveaux outils que sont Linux et
          la compilation.
        </p>
      </div>
      <div className="carte" data-aos="zoom-in">
        <img
          src="images/avatar_two-min.png"
          alt="avatar"
          className="image_avatar"
        />
        <p className="name">Iony Rakotoson</p>
        <p>
          Je suis Iony et actuellement étudiante en deuxième année à l’EPITA.
          L’informatique est un domaine dont je ne suis pas passionnée, j’ai
          fait le choix de cette école surtout parce que je voulais découvrir ce
          qu’il s’y passait dedans. A côté de ça, je passe mon temps libre à
          faire de la musique ou bien à confectionner des layercake. Concernant
          le projet, il m’enthousiasme plus que le précédent car nous avons la
          liberté de choisir le sujet.
        </p>
      </div>
      <div className="carte" data-aos="zoom-in">
        <img
          src="images/avatar_one.webp"
          alt="avatar"
          className="image_avatar"
        />
        <p className="name">Romain Busani</p>
        <p>
          Je m'appelle Romain Busani, j'ai 19 ans et c'est la deuxième année que
          je suis à l'EPITA. J'y suis rentré parce que je voulais découvrir ce
          qu'était la programmation et l'informatique à proprement parler, et si
          je suis toujours là c'est parce que ça me plait. J'ai changé de groupe
          pour chaque projet, ça rajoute un peu de difficulté et demande de
          s'adapter à chacun mais je trouve que c'est aussi un des facteurs qui
          rend ces projets intéressants.
        </p>
      </div>
    </div>
  );
};
