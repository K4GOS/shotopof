import React, { Fragment, useEffect } from "react";
import "./Documentation.css";
import AOS from "aos";

export const Documentation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Fragment>
      <div className="liste-container">
        <h2 className="card_title big">Documentation</h2>
      </div>
      <div className="liste-container">
        <center>
          <p>
            Voici l'image d'exemple que nous utiliserons pour illustrer l'effet
            de nos fonctionnalités Shotopof.
          </p>

          <img
            src="images/base.bmp"
            alt="Illustration de dessert"
            className="base_image"
          />
        </center>
        <hr className="blue" />
        <div className="flex">
          <div>
            <h4 className="function">Bordure</h4>
            <p>Prototype : border(SDL_Surface *img)</p>
            <p>
              Cette fonction permet d'appliquer un contour à l'image. Nous
              proposerons des variantes de contour comme les pointillés. Il sera
              aussi possible de sélectionner la largeur et la couleur du
              contour.
            </p>
          </div>
          <div data-aos="fade-left">
            <img src="images/border.bmp" alt="bordure" className="flex_image" />
          </div>
        </div>
        <hr className="blue" />
        <div className="flex">
          <div data-aos="fade-right">
            <img src="images/sym.bmp" alt="Symétrie" className="flex_image" />
          </div>
          <div>
            <h4 className="function">Symétrie</h4>
            <p>Prototype : symh(SDL_Surface *img) (Symétrie horizontale)</p>
            <p>Prototype : symv(SDL_Surface *img) (Symétrie verticale)</p>
            <p>
              Cette fonction permet d'effectuer une symétrie de l'image par
              rapport à son axe horizontal ou vertical.
            </p>
          </div>
        </div>
        <hr className="blue" />
        <div className="flex">
          <div>
            <h4 className="function">Rotation</h4>
            <p>Prototype : rotate(SDL_Surface *img)</p>
            <p>
              Cette fonction permet d'effectuer une rotation de l'image de vers
              la droite ou la gauche. Les dimensions de l'images seront donc
              inversées.
            </p>
          </div>
          <div data-aos="fade-left">
            <img src="images/rotate.bmp" alt="Rotation" className="rot" />
          </div>
        </div>
        <hr className="blue" />
        <div className="flex">
          <div data-aos="fade-right">
            <img
              src="images/base_image.bmp"
              alt="Saturation"
              className="flex_image"
            />
          </div>
          <div>
            <h4 className="function">Saturation</h4>
            <p>Prototype : border(SDL_Surface *img)</p>
            <p>
              Cette fonction permet de saturer l'image et donc d'intensifier les
              couleurs présentes sur l'image.
            </p>
          </div>
        </div>
        <hr className="blue" />
        <div className="flex">
          <div>
            <h4 className="function">Nuance de gris</h4>
            <p>Prototype : greyscale(SDL_Surface *img)</p>
            <p>
              Cette fonction permet de transformer les couleurs en gris plus ou
              moins foncé selon la couleur d'origine.
            </p>
          </div>
          <div data-aos="fade-left">
            <img src="images/grey.bmp" alt="Rotation" className="flex_image" />
          </div>
        </div>
        <hr className="blue" />
        <div className="flex">
          <div data-aos="fade-right">
            <img src="images/blur.bmp" alt="Flou" className="flex_image" />
          </div>
          <div>
            <h4 className="function">Blur</h4>
            <p>Prototype : blur(SDL_Surface *img)</p>
            <p>Cette fonction permet de flouter l'image.</p>
          </div>
        </div>
        <hr className="blue" />
        <div className="flex">
          <div>
            <h4 className="function">Filtre de couleur</h4>
            <p>Prototype : filter(SDL_Surface *img)</p>
            <p>
              Cette fonction permet de ne préserver que la couleur choisie
              (rouge, vert ou bleu). Ici la couleur choisie a été le rouge.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src="images/filtre.bmp"
              alt="Rotation"
              className="flex_image"
            />
          </div>
        </div>
        <hr className="blue" />
        <div className="flex">
          <div data-aos="fade-right">
            <img
              src="images/black_white.bmp"
              alt="Flou"
              className="flex_image"
            />
          </div>
          <div>
            <h4 className="function">Mise en noir et blanc</h4>
            <p>Prototype : monochromatic(SDL_Surface *img)</p>
            <p>
              Cette fonction permet de modifier chaque pixel de l'image de sorte
              à ce que son code RGB soit (0,0,0) ou (255,255,255) en fonction de
              son code RGB d'origine.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
