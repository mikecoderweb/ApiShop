import React from "react";
import {ContainerShop, ContainerShop1, ContainerShop2, CaruselS } from "./shopstyle";
import png1 from '../../../assest/icon/product-20-320x320 1 (1).png'
import png2 from '../../../assest/icon/image 11.png'
import png3 from '../../../assest/icon/image 1 (1).png'
import png4 from '../../../assest/icon/Search.png'
import png5 from '../../../assest/icon/Star color.png'
import png6 from '../../../assest/icon/Star.png'
import Counter from '../../../components/shop/useState/index'
import heart from '../../../assest/imgs/heart 1.png'
import facebook from '../../../assest/imgs/Facebook (1).png'
import twitter from '../../../assest/imgs/Twitter (1).png'
import linkedin from '../../../assest/imgs/Linkedin (1).png'
import messages from '../../../assest/imgs/Message (1).png'



const ShopMain = () => {
    return(
        <ContainerShop>
            <ContainerShop1>
                <div>
                    <img src={png1} alt="" />
                    <img src={png2} alt="" />
                    <img src={png1} alt="" />
                    <img src={png2} alt="" />
                </div>
                <div ><img src={png3} alt="" /></div>
                <div><img src={png4} alt="" /></div>
                <div>
                    <h1> <b>Barberton Daisy</b></h1>
                    <h2>$119.00</h2>
                    <div className="imgs"> 
                        <img src={png5} alt="" /> 
                        <img src={png5} alt="" />
                        <img src={png5} alt="" />
                        <img src={png5} alt="" />
                        <img  src={png6} alt="" /> <p>19 Customer Review</p>
                    </div>
                    <div className="footer">
                        <h4>Short Description:</h4>
                        <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                    </div>
                    <div className="xarid">
                        <h3>Size:</h3>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                    <div className="cardshop">
                    <Counter/>
                    <button className="green">Buy NOW</button>
                    <button className="button">Add to cart</button>
                    <button className="heart"> <img src={heart} alt="" /> </button>
                    </div>

                    <div className="foot">
                    <div><p>SKU: 1995751877966</p></div>
                    <div><p>Categories: Potter Plants</p></div>
                    <div><p>Tags: Home, Garden, Plants</p></div>
                    <div className="social"> <p>Share this products:</p> 
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={messages} alt="" />
                    </div>
                    </div>
                </div>
            </ContainerShop1>
            <ContainerShop2>
                <div className="mainn">
                    <h3>Product Description</h3> <h5>Reviews (19)</h5> </div>
                    <div>
                    <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                </div>
                <div>
                    <h4>Living Room:</h4>
                    <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <h4>Dining Room:</h4>
                    <p>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
                </div>
                <div>
                    <h4>Office:</h4>
                    <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <CaruselS>
                    <div>
                    <h3>Releted Products</h3>
                    </div>
                </CaruselS>
            </ContainerShop2>
        </ContainerShop>
    )
}



export default ShopMain;