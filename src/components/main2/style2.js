import styled from "styled-components";

const Container1 = styled.div`
`
const Containerimg = styled.div`
padding-top: 100px;
  display: flex;
  gap: 30 px;
`
const Containerbtn = styled.div`
display: grid;
grid-template-columns: 2fr 2fr 2fr;
div>button{
width: 35px;
height: 35px;
flex-shrink: 0;
border-radius: 4px;
background: #46A358;
cursor: pointer;
}
`

const Containerfooter =styled.div`
>h1{
padding-top: 100px;
color: #3D3D3D;
text-align: center;
font-family: Cera Pro;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 16px;
}
>p {
padding-top: 10px;
color: #727272;
text-align: center;
font-family: Cera Pro;
font-size: 14px;
font-weight: 400;
line-height: 24px;
}
`
const Containerfooterimg =styled.div`
padding-top: 
50px;
display: grid;
grid-template-columns: 2fr 2fr 2fr 2fr;
gap: 20px;
div>h6{
    color: #46A358;
}
div>h3{
    padding-top: 10px;
color: #3D3D3D;
font-family: Cera Pro;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 25px;
}
div>p{
    padding-top: 10px;
    width: 242px;
height: 44px;
flex-shrink: 0;
color: #727272;
font-family: Cera Pro;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 157.143% */
}
div>h2{
padding-top: 30px;
color: #3D3D3D;
font-family: Cera Pro;
font-size: 14px;
font-style: normal;
font-weight: 800;
line-height: 16px;
}
`


export { Container1, Containerimg, Containerbtn, Containerfooter, Containerfooterimg }