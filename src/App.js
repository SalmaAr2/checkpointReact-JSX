import React from "react";
import { Card, Container } from "react-bootstrap";
import product from "./Product";
import Name from "./Name";
import Description from "./Description";
import Price from "./Price";
import prf from "./prf.png";

function App() {
  const firstname = "Salma"; 

  return (
    <div className="App">
      <Container className="mt-3 mb-4 flex ">
        <h1 className="text-center text-danger">Card Product</h1>
        <br />
        <Card style={{ width: "20rem" }} border="danger">
          <Card.Body>
            <Name name={product.name} />
            <img src={product.image} alt="camera" style={{ width: "18rem" }} />
            <Price price={product.price} />
            <Description description={product.description} />
          </Card.Body>
        </Card>
        <br />
        <label style={{ fontWeight: "bold" }}>
          Hello, {firstname ? ` ${firstname} ` : "there!"}
        </label>{/* Le prenom s affiche si il est ecrit dans const firstname sinon  affiche there! */}
        
        {firstname && <img src={prf} alt="camera" style={{ width: "5rem" }} />} {/* Affiche une image si le prénom est fourni. */}
      </Container>
    </div>
  );
}

export default App;
