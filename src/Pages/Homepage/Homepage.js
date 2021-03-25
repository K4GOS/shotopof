import React from "react";
import { SpecificationsCards } from "../../components/SpecifiactionCards/SpecifiactionCards";
import { WelcomeCard } from "../../components/WelcomeCard/WelcomeCard";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <WelcomeCard />
      <SpecificationsCards />
    </div>
  );
};
