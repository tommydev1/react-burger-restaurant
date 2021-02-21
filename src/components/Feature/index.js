import React from "react";
import { FeatureButton, FeatureContainer } from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Burger of the Day</h1>
      <p>Argentinan Back Bone Meat with Chili Sauce and Gold Topping</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
