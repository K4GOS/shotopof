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
        src="images/photograph.png"
        alt="logo shotopof"
        className="image_welcome"
        data-aos="zoom-in"
      />
      <div>
        <h1 className="welcome_title">Notre projet de S4</h1>
        <p className="welcome_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga
          itaque consequuntur dolorem enim dolorum corporis perferendis ducimus?
          Maiores temporibus accusamus ea repellendus, cum ipsum nobis eius
          omnis laudantium eligendi in cumque reiciendis ducimus delectus
          suscipit modi labore, amet quod. Commodi aut recusandae corrupti, esse
          animi porro ex enim ipsum explicabo, consequatur velit dolore soluta
          odio, facere magni! Ab, consectetur? Culpa ullam exercitationem et,
          ipsa temporibus explicabo sapiente nemo, incidunt enim at dolores
          atque obcaecati similique sequi sed rem tenetur? Magni,
          necessitatibus? Ad excepturi at amet libero molestiae error minus,
          veritatis molestias qui rem velit illo sequi in voluptatibus neque.
        </p>
      </div>
    </div>
  );
};
