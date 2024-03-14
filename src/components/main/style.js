import styled from "styled-components";

const Container = styled.div`
padding-top: 50px;
display: grid;
grid-template-columns: repeat(3,1fr);
justify-content: start;
>div {
    height: 400px;
}
b{
    display: flex;
    align-items: center;
    height: 10px;
    justify-content: start;
}
`

export { Container }

