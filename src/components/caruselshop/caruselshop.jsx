import React from "react";
import { Carousel } from "antd";
import { Box } from "./shop";
import ShopComm from '../../components/shop/shopmain1/Mainshop1'

    
const contentStyle = {
  margin: 0,
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const CaruselShopCom = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel autoplay>
      <Box>
        <div>
        <ShopComm/>
        </div>
      </Box>
      <Box>
        <div>
        <ShopComm/>
        </div>
      </Box>
    </Carousel>
  );
};
export default CaruselShopCom;






  