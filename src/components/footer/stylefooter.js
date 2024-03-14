import styled from "styled-components";

const Footer1 = styled.div`
padding-top: 200px;
>h1{
margin: 20px 0px;
text-align: center;
color: #3D3D3D;
font-family: Cera Pro;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 30px; 
}
`
const Footerimg = styled.div`
display: grid;
grid-template-columns: 2fr 2fr 2fr 4fr;
gap: 20px;
div>h1{
color: #3D3D3D;
font-family: Cera Pro;
font-size: 18px;
font-weight: 700;
line-height: 16px; 
}
div>.inputt{
width: 200px;
height: 40px;
flex-shrink: 0;
border-radius:6px 0px 0px 6px;
}
div>button{
margin-top: 20px;
margin-bottom: 20px;
width: 100px;
height: 40px;
border-radius: 0px 6px 6px 0px;
background: #46A358;
margin-right: 30px;
}
>p {
width: 354px;
height: 89px;
color: #727272;
font-family: Cera Pro;
font-size: 13px;
font-weight: 400;
line-height: 22px; 
}
`
const FooterCentre = styled.div`
margin-top: 40px;
width: 1200px;
height: 150px;
background: rgba(70, 163, 88, 0.10);
padding-top: 45px;
display: grid;
grid-template-columns: 2fr 2fr 2fr 2fr;
gap: 20px;
div>h3{
color: #3D3D3D;
font-family: Cera Pro;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px; 
}
`

const FooterFooter =styled.div`
margin-top: 40px;
display: grid;
grid-template-columns: 2fr 2fr 2fr 2fr;
gap: 100px;
div>h1{
margin: 20px 0px;
color: #3D3D3D;
font-family: Cera Pro;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 16px; 
}
div>h2{
padding-top: 20px;
color: #3D3D3D;
font-family: Cera Pro;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 30px; 
}
div>button{
margin: 20px 0px;
width: 30px;
height: 30px;
border-radius: 4px;
border: 1px solid rgba(70, 163, 88, 0.20);
cursor: pointer;
}
`

export { Footer1, Footerimg, FooterCentre, FooterFooter }