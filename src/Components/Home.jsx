import React from "react";
import Card from "../Components/Card";
import { api_Data } from "./Data";

export default function Home() {
  return (
    <div className="container mt-5 cards_container">
      {api_Data.map((val, i) => {
        return (
          <Card
            title={val.title}
            price={val.price}
            desc={val.description}
            category={val.category}
            image={val.image}
            rating={val.rating}
            key={i}
          />
        );
      })}
    </div>
  );
}