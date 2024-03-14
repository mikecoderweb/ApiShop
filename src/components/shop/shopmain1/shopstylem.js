import styled from "styled-components";

const Container = styled.div`
padding-top: 50px;
display: grid;
grid-template-columns: repeat(5,1fr);
>div {
    height: 400px;
}
.name{
    display: flex;
    align-items: center;
    height: 10px;
    justify-content: start;
}
.price{
    color: #46A358;
}
`

export { Container }