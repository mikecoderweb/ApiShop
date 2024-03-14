import React from "react";
import {
  Container1,
  Containerimg,
  Containerbtn,
  Containerfooter,
  Containerfooterimg,
} from "./style2";
import png1 from "../../assest/img/1.pngg.jpg";
import png2 from "../../assest/img/2.pngg.jpg";
import png3 from "../../assest/img/01 (1).png";
import png4 from "../../assest/img/02.png";
import png5 from "../../assest/img/03.png";
import png6 from "../../assest/img/04.png";

const MainCom2 = () => {
  return (
    <Container1>
      <Containerbtn>
        <div></div>
        <div></div>
        <div>
          <button>1</button> <button>2</button> <button>3</button>
          <button>4</button> <button>;-)</button>
        </div>
      </Containerbtn>
      <Containerimg>
        <img src={png1} alt="" />
        <img src={png2} alt="" />
      </Containerimg>
      <Containerfooter>
        <h1>Our Blog Posts</h1>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </Containerfooter>
      <Containerfooterimg>
        <div>
          <img src={png3} alt="" />
          <h6>September 12 I Read in 6 minutes</h6>
          <h3>Cactus & Succulent Care Tips</h3>
          <p>
            Cacti are succulents are easy care plants for any home or patio.
          </p>
          <h2>Read More =)</h2>
        </div>
        <div>
          <img src={png4} alt="" />
          <h6>September 13 I Read in 2 minutes</h6>
          <h3>Top 10 Succulents for Your Home</h3>
          <p>Best in hanging baskets. Prefers medium to high light.. </p>
          <h2>Read More =)</h2>
        </div>
        <div>
          <img src={png5} alt="" />
          <h6>September 15  I Read in 3 minutes</h6>
          <h3>Cacti & Succulent 
Care Tips</h3>
          <p>
          Cacti and succulents thrive in containers and because most are..
          </p>
          <h2>Read More =)</h2>
        </div>
        <div>
          <img src={png6} alt="" />
          <h6>September 15  I Read in 2 minutes</h6>
          <h3>Best Houseplants 
Room by Room</h3>
          <p>
          The benefits of houseplants are endless. In addition to..
          </p>
          <h2>Read More →</h2>
        </div>
      </Containerfooterimg>
    </Container1>
  );
};

export default MainCom2;
