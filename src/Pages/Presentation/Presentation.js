import React, { Fragment } from "react";
import "./Presentation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faBook,
  faTimesCircle,
  faTools,
  faBullseye,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
// ! On peut remplacer la liste de librairies par un tableau avec en colonne : nom utilité lien

export const Presentation = () => {
  return (
    <Fragment>
      <div className="liste-container">
        <h2 className="card_title big">Présentation</h2>
      </div>
      <div className="liste-container">
        <ul className="liste">
          <li className="item">
            <a href="#chrono" className="anchor_link">
              <FontAwesomeIcon icon={faStopwatch} className="logo-liste" />
              Chronologie de réalisation{" "}
              <FontAwesomeIcon icon={faChevronDown} className="logo-liste" />
            </a>
          </li>
          <li className="item">
            <a href="#library" className="anchor_link">
              <FontAwesomeIcon icon={faBook} className="logo-liste" />
              Librairies utilisées pour ce projet{" "}
              <FontAwesomeIcon icon={faChevronDown} className="logo-liste" />
            </a>
          </li>
          <li className="item">
            <a href="#problem" className="anchor_link">
              <FontAwesomeIcon icon={faTimesCircle} className="logo-liste" />
              Problèmes rencontrés lors de l'implémentation{" "}
              <FontAwesomeIcon icon={faChevronDown} className="logo-liste" />
            </a>
          </li>
          <li className="item">
            <a href="#solution" className="anchor_link">
              <FontAwesomeIcon icon={faTools} className="logo-liste" />
              Solutions envisagées pour ces problèmes{" "}
              <FontAwesomeIcon icon={faChevronDown} className="logo-liste" />
            </a>
          </li>
          <li className="item">
            <a href="#goal" className="anchor_link">
              <FontAwesomeIcon icon={faBullseye} className="logo-liste" />
              Prochains objectifs à réaliser{" "}
              <FontAwesomeIcon icon={faChevronDown} className="logo-liste" />
            </a>
          </li>
        </ul>
      </div>
      <div className="liste-container" id="chrono">
        <h3>
          <FontAwesomeIcon icon={faStopwatch} className="logo-liste" />
          Chronologie de réalisation
        </h3>
        <p>
          Nous avons travaillé sur deux fronts. D'un côté l'interface graphique
          et le site internet, de l'autre l'import des images et les fonctions
          de modification de base de celles-ci.
        </p>
        <p>
          Nous avons ensuite relié l'interface graphique aux fonctions
          réalisées.
        </p>
      </div>
      <div className="liste-container" id="library">
        <h3>
          <FontAwesomeIcon icon={faBook} className="logo-liste" />
          Librairies utilisées pour ce projet
        </h3>
        <h4>Interface graphique</h4>
        <ul className="list_basic">
          <li>
            <a
              href="https://www.gtk.org/"
              target="blank"
              className="link_target_blank"
            >
              Gtk
            </a>
          </li>
          <li>
            <a
              href="https://glade.gnome.org/"
              target="blank"
              className="link_target_blank"
            >
              Glade
            </a>
          </li>
        </ul>
        <h4>Fonctionnalités</h4>
        <ul className="list_basic">
          <li>
            <a
              href="https://glade.gnome.org/"
              target="blank"
              className="link_target_blank"
            >
              Stdlib
            </a>
          </li>
          <li>stdio</li>
          <li>unistd</li>
          <li>err pour la gestion d'erreur</li>
          <li>SDL</li>
          <li>
            <a
              href="https://www.libsdl.org/projects/SDL_image/docs/index.html"
              target="blank"
              className="link_target_blank"
            >
              SDL-image
            </a>
          </li>
        </ul>
        <h4>Site Web</h4>
        <ul className="list_basic">
          <li>
            <a
              href=" https://reactjs.org/"
              target="blank"
              className="link_target_blank"
            >
              Reacts js
            </a>
          </li>
          <li>
            <a
              href="https://michalsnik.github.io/aos/"
              target="blank"
              className="link_target_blank"
            >
              Animate On Scroll (AOS)
            </a>
          </li>
          <li>
            <a
              href="https://fontawesome.com/"
              target="blank"
              className="link_target_blank"
            >
              Font Awesome
            </a>
          </li>
        </ul>
      </div>
      <div className="liste-container" id="problem">
        <h3>
          <FontAwesomeIcon icon={faTimesCircle} className="logo-liste" />
          Problèmes rencontrés lors de l'implémentation
        </h3>
        <p>
          Nous avons eu des problèmes d'adaptation aux coordonnées d'images SDL.
          La navigation de fichiers nous a aussi posé problème pour l'interface
          graphique. Nous n'avons cependant pas rencontré de problèmes
          nécessitant de grands ajustement au niveau du code ou du choix des
          librairiies utilisées.
        </p>
      </div>
      <div className="liste-container" id="solution">
        <h3>
          <FontAwesomeIcon icon={faTools} className="logo-liste" />
          Solutions envisagées pour ces problèmes
        </h3>
        <p>
          Nous avons résolu nos problèmes de coordonnées en effectuant des
          recherches.
        </p>
      </div>
      <div className="liste-container" id="goal">
        <h3>
          <FontAwesomeIcon icon={faBullseye} className="logo-liste" />
          Prochains objectifs à réaliser
        </h3>
        <ul className="list_basic">
          <li>
            Passer des paramètres aux fonctions d'images (bordure, etc) au
            clique du bouton de la fonction associée. Ainsi l'utilisateur pourra
            donner lui-même la largeur ainsi que la couleur de la bordure
            souhaitée.
          </li>
          <li>
            Avoir plusieurs variantes de même fonctions. Ces variantes seront
            accessibles par le menu déroulant du bouton de la fonctions associée
            sur l'interface graphique. Ainsi pour la bordure, l'utilisateur
            pourra sélectionner des options de bordures (solide, pointillé etc)
          </li>
          <li>Bouton de retour arrière (CTRL + Z)</li>
          <li>
            Améliorer le design de l’interface, la rendre plus agréable à l’œil
          </li>
          <li>Ne pas modifier l’image originale mais modifier une copie</li>
          <li>
            Commencer à réfléchir et à développer un système de sauvegarde pour
            neplus modifier l’image originale
          </li>
          <li>Faire une fonction de détection des arêtes</li>
          <li>
            Etudier la possibilité de dessiner sur une image, ou d’y ajouter du
            texte
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
