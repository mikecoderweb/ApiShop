import styled from "styled-components";

const Box = styled.div`
display: grid !important;
grid-template-columns: 5fr 5fr !important;
gap: 20px;
height: 500px;
>div{
    background: linear-gradient(98deg, rgba(245, 245, 245, 0.50) -23.46%, rgba(245, 245, 245, 0.50) 107.51%) !important;
>p {
color: #3D3D3D;
font-family: Cera Pro;
font-size: 14px;
font-weight: 500;
letter-spacing: 1.4px;
margin-top: 51px;
}
}
h1 {
margin-top: 10px;
color: #3D3D3D;
font-family: Cera Pro;
font-size: 70px;
font-style: normal;
font-weight: 900;
line-height: 70px; /* 100% */
text-transform: uppercase;
}
b {
    color: #46A358;
}
h6 {
width: 557px;
height: 45px;
flex-shrink: 0;
color: #727272;
font-family: Cera Pro;
font-size: 14px;
font-weight: 400;
line-height: 24px; 
}

button {
margin-top: 50px;
width: 140px;
height: 40px;
border-radius: 6px;
background: #46A358;
color: #fff;
}

img {
width: 518px;
height: 518px;
background-color: #3D3D3D;
}
`



export { Box }