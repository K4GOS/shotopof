import React, { useEffect } from "react";
import "./WelcomeCard.css";
import AOS from "aos";

export const WelcomeCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="welcome_card">
      <img
        src="images/camera.png"
        alt="logo shotopof"
        className="image_welcome"
        data-aos="zoom-in"
      />
      <div>
        <h1 className="welcome_title">Notre projet de S4</h1>
        <p className="welcome_para">
          Notre idée est de réaliser un programme utilitaire similaire à
          Photoshop. Ceprogramme incorporerait notamment toutes les
          fonctionnalités basiques d’un logiciel de traitement d’image comme la
          mise en noir et blanc, la rotation d’imageset plein d’autres.
        </p>
      </div>
    </div>
  );
};
