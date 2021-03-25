import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom, faHeart } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <p className="first_para_footer">
        Codé avec <FontAwesomeIcon icon={faHeart} className="heart" /> avec
        React js
        <FontAwesomeIcon icon={faAtom} className="react" />
      </p>
      <p className="para_footer">Projet S4</p>
    </div>
  );
};
