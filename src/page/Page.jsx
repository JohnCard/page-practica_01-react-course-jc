import React from "react";
import { Title } from "../components/Title"
import { Card } from "../components/Card"
import { cardsData } from "../data/data.js"

export const Page = () => {
  return <>
  <div className="container">
    <Title/>
    <p>Descripción de la data principal</p>
    <div className="row g-3">
      {cardsData.map(item => <Card key={item.id} card={item} />)}
    </div>
  </div>
  </>;
};
