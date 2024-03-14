import styled from "styled-components";

const ContainerShop = styled.div``;

const ContainerShop1 = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 10fr;
  gap: 10px;
  div > h1 {
    color: #3d3d3d;
    font-family: Cera Pro;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }
  div > h2 {
    padding: 20px 0px;
    color: #46a358;
    font-family: Cera Pro;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }
.imgs{
 margin-top: -33px;
 display: flex;
 padding-left: 200px;
 color: #3D3D3D;
font-family: Cera Pro;
font-size: 10px;
line-height: 16px; 
}
.imgs>img{
display: flex;
width: 15px;
height: 15px;
padding: 1.563px 1.249px 1.562px 1.25px;
}
.footer>h4{
  padding-top: 50px;
  color: #3D3D3D;
font-family: Cera Pro;
font-size: 15px;
font-weight: 500;
line-height: 16px; 
}
.footer>p{
  width: 500px;
height: 66px;
color: #727272;
font-family: Cera Pro;
font-size: 14px;
font-weight: 400;
line-height: 24px; 
}
.xarid{
  padding-top: 20px;
}
.xarid>button{
  margin: 20px 10px;
  justify-content: start;
  border-radius: 39px;
  padding: 10px 10px;
  cursor: pointer;
}
.xarid>button:hover{
  background-color: green;
  color: white;
}
.cardshop{
  display: flex;
  gap: 20px;
}
.button{
  width: 100px;
height: 30px;
border-radius: 6px;
border: 1px solid #46A358;
cursor: pointer;
}
.green{
 background-color: #46A358;
 width: 100px;
height: 30px;
border-radius: 6px;
border: 1px solid #46A358;
cursor: pointer;
}
.heart{
width: 40px;
height: 30px;
cursor: pointer;
}

.foot>div>p{
  padding: 5px 0px;
color: #A5A5A5;
font-family: Cera Pro;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 106.667% */
}
.social{
  display: flex;
}
.social>img{
  margin: 5px 20px;
  width: 8px;
height: 13px;
}
`;

const ContainerShop2 = styled.div`
div>h4{
  padding-top: 20px;
}
.mainn{
  display: flex;
  gap: 40px;
  padding-top: 60px;
  padding-bottom: 30px;
}
.mainn>h3{
  color: #46A358;
}
>p{
width: 1199px;
height: 190px;
color: #727272;
font-family: Cera Pro;
font-size: 14px;
font-weight: 400;
line-height: 24px; 
}
`
const CaruselS = styled.div`
div>h3{
  padding: 100px  0px;
  color: #46A358;
font-family: Cera Pro;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 16px;
}
`

export { ContainerShop, ContainerShop1, ContainerShop2, CaruselS };
