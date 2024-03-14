import React from "react";
import { Footer1, Footerimg, FooterCentre,FooterFooter } from "./stylefooter";
import img1 from '../../assest/img/Group 22.png'
import img2 from '../../assest/img/Group 21.png'
import img3 from '../../assest/img/Group 20.png'
import img4 from '../../assest/img/Logo (1).png'
import img5 from '../../assest/icon/Location.png'
import img6 from '../../assest/icon/Message.png'
import img7 from '../../assest/icon/Calling.png'
import img8 from '../../assest/icon/Facebook.png'
import img9 from '../../assest/icon/Instagram.png'
import img10 from '../../assest/icon/Twitter.png'
import img11 from '../../assest/icon/Linkedin.png'
import img12 from '../../assest/icon/Union.png'
import img13 from '../../assest/icon/image 16.png'



const Footer = () => {
  return (
    <Footer1>
      <Footerimg>
        <div> <img src={img1} alt="" /> </div>
        <div><img src={img2} alt="" /> </div>
        <div><img src={img3} alt="" /> </div>
        <div>
          <h1>Would you like to join newsletters?</h1>
          <input className="inputt"  type="text" value="enter your email address..."  /><button>Join</button>
          <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
        </div>
      </Footerimg>
      <FooterCentre>
        <div> <img src={img4} alt="" /> </div>
        <div><img src={img5} alt="" /> <h3>70 West Buckingham Ave.
Farmingdale, NY 11735</h3> </div>
        <div><img src={img6} alt="" /><h3>contact@greenshop.com</h3> </div>
        <div><img src={img7} alt="" /> <h3>+88 01911 717 490</h3> </div>
      </FooterCentre>
      <FooterFooter>
        <div>
          <h1>My Account</h1>
          <h2>My Account <br /> Our stores <br /> Contact us <br /> Career <br /> Specials</h2>
        </div>
        <div><h1>Help & Guide</h1>
          <h2>Help Center<br /> How to Buy <br /> Shipping & Delivery<br /> Product Policy <br /> How to Return</h2></div>
        <div><h1>Categories</h1>
          <h2>House Plants<br /> Potter Plants <br /> Seeds<br /> Small Plants <br /> Accessories</h2></div>
        <div>
          <h1>Social Media</h1>
          <button><img src={img8} alt="" /></button> 
          <button><img src={img9} alt="" /></button>
          <button><img src={img10} alt="" /></button>
          <button><img src={img11} alt="" /></button>
          <button><img src={img12} alt="" /></button>
          <h1>We accept</h1>
          <img src={img13} alt="" />
        </div>
      </FooterFooter>
      <h1>© 2021 GreenShop. All Rights Reserved.</h1>
    </Footer1>
  );
};

export default Footer;
