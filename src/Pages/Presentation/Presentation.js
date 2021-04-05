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
              Chronologie du projet{" "}
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
          Chronologie du projet
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id
          obcaecati dolore esse voluptates sint similique tenetur possimus
          consequuntur perferendis distinctio officiis temporibus incidunt culpa
          vel, dolor amet harum odit nesciunt pariatur numquam qui vero?
          Incidunt delectus velit beatae rerum molestiae, nostrum voluptates
          itaque adipisci sapiente eius a, error blanditiis saepe reprehenderit.
          Quidem quas et aspernatur facilis minus vero, velit assumenda nisi
          dolor molestias nihil adipisci pariatur eos molestiae earum dolores at
          modi quibusdam! Ullam at nam laudantium exercitationem, alias harum
          laborum incidunt ad tempore similique, est modi ducimus quasi?
          Laboriosam voluptates eligendi omnis nisi mollitia porro, delectus
          laborum quaerat deleniti inventore incidunt necessitatibus error,
          asperiores unde! Doloribus voluptatibus, nemo impedit officiis
          nesciunt mollitia. Vel quia dicta, explicabo incidunt est omnis alias
          ipsam odit odio earum natus sequi ea aliquid nisi quasi hic. Libero
          voluptate iste ullam sunt eaque nulla minima soluta a? Illum
          recusandae ratione dolor in quia similique consequuntur aliquid
          facilis aspernatur, iste velit doloribus labore a. Dolorum voluptas
          omnis consequatur perferendis, corrupti ut eos temporibus eligendi ab
          repellat aliquid possimus sit, maiores laborum, tempora doloribus
          distinctio ad vero beatae quidem illum provident rerum vel deleniti.
          Maxime, voluptates doloremque odio eius perspiciatis quasi tempora
          facere dolorem et possimus rem! Atque fugiat aliquam molestiae ipsa
          dicta beatae quis sit accusamus, veritatis eum, cumque quae provident
          obcaecati sint saepe blanditiis, consequuntur molestias ullam ex iure.
          Optio praesentium libero distinctio tempore, suscipit non? Repellat
          quasi alias laudantium, commodi voluptas sunt quos quam, repudiandae
          vel dolorem veniam reiciendis iusto dicta consequatur corrupti
          laborum? Itaque labore facere illo deleniti consequuntur esse dolor
          cum velit sapiente beatae debitis expedita exercitationem, quod
          reprehenderit. Doloremque, voluptates dolores quis maxime velit ipsum
          maiores cupiditate consequuntur ut eum laboriosam voluptate ad
          voluptatibus porro ducimus itaque similique, optio natus totam cumque.
          Ratione modi eligendi corrupti officiis vero corporis sunt!
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id
          obcaecati dolore esse voluptates sint similique tenetur possimus
          consequuntur perferendis distinctio officiis temporibus incidunt culpa
          vel, dolor amet harum odit nesciunt pariatur numquam qui vero?
          Incidunt delectus velit beatae rerum molestiae, nostrum voluptates
          itaque adipisci sapiente eius a, error blanditiis saepe reprehenderit.
          Quidem quas et aspernatur facilis minus vero, velit assumenda nisi
          dolor molestias nihil adipisci pariatur eos molestiae earum dolores at
          modi quibusdam! Ullam at nam laudantium exercitationem, alias harum
          laborum incidunt ad tempore similique, est modi ducimus quasi?
          Laboriosam voluptates eligendi omnis nisi mollitia porro, delectus
          laborum quaerat deleniti inventore incidunt necessitatibus error,
          asperiores unde! Doloribus voluptatibus, nemo impedit officiis
          nesciunt mollitia. Vel quia dicta, explicabo incidunt est omnis alias
          ipsam odit odio earum natus sequi ea aliquid nisi quasi hic. Libero
          voluptate iste ullam sunt eaque nulla minima soluta a? Illum
          recusandae ratione dolor in quia similique consequuntur aliquid
          facilis aspernatur, iste velit doloribus labore a. Dolorum voluptas
          omnis consequatur perferendis, corrupti ut eos temporibus eligendi ab
          repellat aliquid possimus sit, maiores laborum, tempora doloribus
          distinctio ad vero beatae quidem illum provident rerum vel deleniti.
          Maxime, voluptates doloremque odio eius perspiciatis quasi tempora
          facere dolorem et possimus rem! Atque fugiat aliquam molestiae ipsa
          dicta beatae quis sit accusamus, veritatis eum, cumque quae provident
          obcaecati sint saepe blanditiis, consequuntur molestias ullam ex iure.
          Optio praesentium libero distinctio tempore, suscipit non? Repellat
          quasi alias laudantium, commodi voluptas sunt quos quam, repudiandae
          vel dolorem veniam reiciendis iusto dicta consequatur corrupti
          laborum? Itaque labore facere illo deleniti consequuntur esse dolor
          cum velit sapiente beatae debitis expedita exercitationem, quod
          reprehenderit. Doloremque, voluptates dolores quis maxime velit ipsum
          maiores cupiditate consequuntur ut eum laboriosam voluptate ad
          voluptatibus porro ducimus itaque similique, optio natus totam cumque.
          Ratione modi eligendi corrupti officiis vero corporis sunt!
        </p>
      </div>
      <div className="liste-container" id="solution">
        <h3>
          <FontAwesomeIcon icon={faTools} className="logo-liste" />
          Solutions envisagées pour ces problèmes
        </h3>
        <p>Nous avons songé à utiliser la librairie lglib mais</p>
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
        </ul>
      </div>
    </Fragment>
  );
};
