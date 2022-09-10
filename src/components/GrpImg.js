import styled from "styled-components";

export default function GrpImg() {
  return <Image src="imgs/Group.png"></Image>;
}

const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  width: 50em;
  height: 30em;
  @media only screen and (max-width: 600px){
    width: 23em;
    height: 15em;
  }
`;
