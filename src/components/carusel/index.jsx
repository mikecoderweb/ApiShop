import React from "react";
import { Carousel } from "antd";
import { Box } from "./style";
import flowers from "../../assest/icon/01 1 (1).png";

const contentStyle = {
  margin: 0,
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const CaruselCom = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel autoplay>
      <Box>
        <div>
          <p>Welcome to GreenShop</p>
          <h1>
            LET’S MAKE A BETTER <b>PLANET</b>
          </h1>
          <h6>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </h6>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img src={flowers} alt="" />
        </div>
      </Box>
      <Box>
        <div>
          <p>Welcome to GreenShop</p>
          <h1>
            LET’S MAKE A BETTER <b>PLANET</b>
          </h1>
          <h6>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </h6>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img src={flowers} alt="" />
        </div>
      </Box>
    </Carousel>
  );
};
export default CaruselCom;
