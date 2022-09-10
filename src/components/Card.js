import styled from "styled-components";
export default function Card() {
  return (
    <Wrapper>
      <Image src="imgs/image 12.png" />
      <Status></Status>
      <Text>
        <img src="imgs/Star 1.png" alt="" />
        <div className="l1">
          <span>5.0 </span>
          <span className="s1">(6) • </span>
          <span className="s1">USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <b>From $136 </b>
        <span> /person</span>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 15px 10px;
  width: 190px;
  height: 315px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Image = styled.img`
  width: 180px;
  height: 200px;
  border-radius: 9px;
  `;

const Status = styled.div`
  position: absolute;
  width: 61px;
  height: 20px;
  left: 43px;
  top: 527px;
  `;

const Text = styled.div`
  img {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    display: inline-block;
    width: 15px;
  }
  .l1 {
    margin-left: 1px;
    display: inline-block;
  }
  .s1{
    color: #918E9B;
  }
  p {
    margin: 0.2em;
    margin-left: 8px;
  }
  b{
    margin-left: 8px;
  }
`;
