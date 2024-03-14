import React from "react";
import { Container  } from "./shopstylem";
import { shop } from '../../mocks/shopGallery'

const ShopComm = () => {
  return (
    <Container>
      {shop.map((value) => {
        return (
          <div>
            <img src={value.img} alt="" /> <br />
            <b className="name"> {value.name} </b> <br />
            <b className="price"> {value.price} </b>
          </div>
        );
      })}
    </Container>
  );
    };

export default ShopComm;