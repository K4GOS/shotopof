import React, { useEffect } from "react";
import "./SpecifiactionCards.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBookReader,
  faClipboardList,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";

export const SpecificationsCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="flex_container">
      <div className="card_specif" data-aos="fade-right">
        <center>
          <FontAwesomeIcon icon={faClipboardList} className="icon_card" />
        </center>
        <h1 className="card_title">Presentation projet</h1>
        <p className="para">
          Ce projet a été réalisé dans le cadre du projet de C du S4
        </p>
        <Link to="/members">
          <center>
            <button className="link_card">Présentation</button>
          </center>
        </Link>
      </div>

      <div className="card_specif" data-aos="fade-left">
        <center>
          <FontAwesomeIcon icon={faBookReader} className="icon_card" />
        </center>
        <h1 className="card_title">Librairies externes</h1>
        <p className="para">
          Voici les librairies auxquelles nous avons eu recours pour mener à
          bien notre logiciel de retouche photo en C
        </p>
        <Link to="/members">
          <center>
            <button className="link_card">Librairies utilisées</button>
          </center>
        </Link>
      </div>

      <div className="card_specif" data-aos="fade-right">
        <center>
          <FontAwesomeIcon icon={faUsers} className="icon_card" />
        </center>
        <h1 className="card_title">Membres du groupe</h1>
        <p className="para">
          Liste des membres ayant participé dans l'élaboration de ce logiciel de
          retouche
        </p>
        <Link to="/members">
          <center>
            <button className="link_card">Membres</button>
          </center>
        </Link>
      </div>

      <div className="card_specif" data-aos="fade-left">
        <center>
          <FontAwesomeIcon icon={faSortAmountUp} className="icon_card" />
        </center>
        <h1 className="card_title">Avancement du projet</h1>
        <p className="para">
          Vous pouvez accéder à l'avancement du projet en cliquant sur ce
          boutton
        </p>
        <Link to="/members">
          <center>
            <button className="link_card">Voir l'avancement</button>
          </center>
        </Link>
      </div>
    </div>
  );
};
