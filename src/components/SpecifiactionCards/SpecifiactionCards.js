import React, { useEffect } from "react";
import "./SpecifiactionCards.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faDownload,
  faClipboardList,
  faBook,
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
        <h1 className="card_title">Présentation projet</h1>
        <p className="para">
          Présentation du projet avec chronologie, librairies utilisées,
          problèmes rencontrés, solutions envisagées et objectifs à réaliser
        </p>
        <Link to="/presentation">
          <center>
            <button className="link_card">Présentation</button>
          </center>
        </Link>
      </div>

      <div className="card_specif" data-aos="fade-left">
        <center>
          <FontAwesomeIcon icon={faDownload} className="icon_card" />
        </center>
        <h1 className="card_title">Téléchargement du projet</h1>
        <p className="para">
          Voici le lien de téléchargement du projet en utilisant GitHub
        </p>
        <a href="https://github.com/Tristanh80/CRIT" target="blank">
          <center>
            <button className="link_card">Download du projet</button>
          </center>
        </a>
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
          <FontAwesomeIcon icon={faBook} className="icon_card" />
        </center>
        <h1 className="card_title">Documentation du projet</h1>
        <p className="para">
          Vous pouvez accéder à la documentation du projet en cliquant sur ce
          boutton
        </p>
        <Link to="/documentation">
          <center>
            <button className="link_card">Voir la documentation</button>
          </center>
        </Link>
      </div>
    </div>
  );
};
