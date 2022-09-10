import styled from "styled-components";

export default function Navbar(){
    return(
        <Wrapper>
            <img src="imgs/logo.svg" alt="" />
        </Wrapper>
    );
}

const Wrapper=styled.div`
width: 100%;
height: 70px;
background: #FFFFFF;
box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);

display: flex;
align-items: center;
img{
    margin-left: 1em ;
    height: 35px;
}
`;