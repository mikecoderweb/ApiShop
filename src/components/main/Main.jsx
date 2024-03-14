import React from "react";
import { Container  } from "./style";
import { data } from "../../components/mock/dataGallery";

const MainCom = () => {
  return (
    <Container>
      {data.map((value) => {
        return (
          <div>
            <img src={value.img} alt="" /> <br />
            <b> {value.name} </b> <br />
            <b> {value.price} </b>
          </div>
        );
      })}
    </Container>
  );
    };

export default MainCom;

