import styled from "styled-components";

const DivContainer = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-color: black;
`;

const TextWrap = styled.div`
  pointer-events: none;
  position: sticky;
  top: 20px;
  width: 800px;
  left: 120px;
  z-index: 200;
  padding: 130px 0;
  text-shadow: 1px 1px 0px #00000011;

  @media (max-width: 768px) {
    width: calc(100% - 14vw);
    padding: 13.889vw 0;
    left: 6.944vw;
  }
`;

const WhiteHeader = styled.h1`
  color: white;
  font-size: 3em;
  line-height: 30px;

  @media (max-width: 768px) {
    font-size: 2em;
    line-height: 20px;
  }
`;

const Video = styled.video`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

function FirstContainer() {
  return (
    <div>
      <DivContainer>
        <Video autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4" />
        </Video>
        <TextWrap>
          <WhiteHeader>We Code Together</WhiteHeader>
          <WhiteHeader>We Learn Together</WhiteHeader>
          <WhiteHeader>We Make Together</WhiteHeader>
        </TextWrap>
      </DivContainer>
    </div>
  );
}

export default FirstContainer;
