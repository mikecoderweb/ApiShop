import styled from "styled-components";
const ContainerCart = styled.div``

const ContainerCart2 = styled.div`
display: flex;
gap: 50px;
>h1{
padding-top: 20px;
color: #3D3D3D;
font-family: Cera Pro;
font-size: 16px;
font-weight: 500;
line-height: 16px;
}
.price{
    margin-left: 170px;
}
.cart{
    margin-left: 150px; 
}
.quantity{
    margin-left: 50px;
}
.total{
    margin-left: 50px;
}
`

const ContainerCart3 = styled.div`
>div{
display: grid;
grid-template-columns: 0fr 2fr 1fr 2fr 1fr 3fr  1fr;
margin-top: 20px;
gap: 10px;
}
`
const Totall = styled.div`
.total{
    padding-left: 800px;
    margin-top: -250px;
}
 div>h6{
    padding-bottom: 20px;
}
.btn{
display: flex;
width: 200px;
height: 40px;
border-radius:6px 0px 0px 6px;
}
div>.btn>button{
width: 100px;
padding-left: 25px;
padding-right: 25px;
height: 40px;
border-radius: 0px 6px 6px 0px;
background: #46A358;
margin-right: 30px;
cursor: pointer;
}
div>.img{
    padding-top: 20px;
    margin-left: -12px;
} 
 .footbtn>button{
    color: white;
width: 250px;
height: 40px;
border-radius: 3px;
background: #46A358;
cursor: pointer;
}
.footp>p{
color: #46A358;
font-family: Cera Pro;
font-size: 15px;
font-weight: 400;
line-height: 16px; 
text-align: center;
padding-top: 20px;
} 
`

const ContainerCart4 = styled.div`
>h1{
padding-top: 215px;
padding-bottom: 50px;
color: #46A358;
font-family: Cera Pro;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 94.118% */
}
`

export {ContainerCart, ContainerCart2, ContainerCart3, Totall, ContainerCart4}