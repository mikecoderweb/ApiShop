import React, { useState } from "react";
import {
  ContainerCart,
  ContainerCart2,
  ContainerCart3,
  Totall,
  ContainerCart4,
} from "./style";
import imgg1 from "../../../assest/imgs/image 11 (1).png";
import imgg2 from "../../../assest/imgs/image 15.png";
import imgg3 from "../../../assest/imgs/image 16 (1).png";
import imgg4 from "../../../assest/imgs/Delete.png";
import imgg5 from '../../../assest/imgs/foot.jpg'
import Counter from "../../../components/shop/useState/index";

const datas = [
  {
    img: imgg1,
    id: 1,
    name: "Barberton Daisy",
    description: "SKU: 1995751877966",
    price: "$119.00",
    totalprice: "$238.00",
  },
  {
    img: imgg2,
    id: 2,
    name: "Blushing Bromeliad",
    description: "SKU: 19957518757065",
    price: "$139.00",
    totalprice: "$834.00",
  },
  {
    img: imgg3,
    id: 3,
    name: "Aluminum Plant",
    description: "SKU: 1995751877786",
    price: "$179.00",
    totalprice: "$179.00",
  },
];

const ShopCartt = () => {
  const [data, setData] = useState(datas);

  const deleteFun = (id) => {
    console.log(id);

    let res = data.filter((value) => value.id !== id);
    setData(res);
  };
  return (
    <ContainerCart>
      <ContainerCart2>
        <h1>Products</h1>
        <h1 className="price">Price</h1>
        <h1 className="quantity">Quantity</h1>
        <h1 className="total">Total</h1>
        <h1 className="cart">Cart Totals</h1>
      </ContainerCart2>
      <ContainerCart3>
      {datas.map((value, index) => {
        return (
          <div key={value.id}> 
            <div>
              <img src={value.img} alt="" />
            </div>
            <div>
              <p>{value.name}</p>
              <p>{value.description}</p>
            </div>
            <div>
              <b>{value.price}</b>
            </div>
            <div>
              <Counter />
            </div>
            <div>{value.totalprice}</div>
            <div>
              <img onClick={() => deleteFun(value.id)} src={imgg4} alt="" />
            </div>
            <div>
            </div>
          </div>
        );
      })}
      </ContainerCart3>
      <Totall>
      <div className='total'>
                    <div><h6>Coupon Apply</h6></div>
                    <div className='btn'> <input type="text"  value={'Enter coupon code here...'}/> <button>Apply</button> </div>
                    <div className='img'> <img src={imgg5} alt="" /> </div>
                    <div className='footbtn'><button>Proceed To Checkout</button></div>
                    <div className='footp'> <p>Continue Shopping</p></div>
                    </div>
                    </Totall>
      <ContainerCart4>
        <h1>You may be interested in</h1>
      </ContainerCart4>
    </ContainerCart>
  );
};

export default ShopCartt;
