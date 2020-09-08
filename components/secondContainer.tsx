import { Row, Col } from "antd";
import styled from "styled-components";

const DivContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f9;
`;

const StyledRow = styled(Row)`
  padding-top: 150px;
  padding-bottom: 100px;

  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const FirstColumn = styled(Col)`
  text-align: center;
`;

const LeftText = styled.h1`
  font-weight: lighter;
  @media (max-width: 768px) {
    font-size: 1.7em;
    text-align: left;
  }
`;

const SecondColumn = styled(Col)`
  text-align: left;
`;

const RightTextTitle = styled.h1`
  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;

const RightTextParagraph = styled.p`
  font-size: 1.3em;
  font-weight: lighter;
  word-break: keep-all;
`;

function SecondContainer() {
  return (
    <div>
      <DivContainer>
        <StyledRow>
          <FirstColumn xs={24} lg={10}>
            <LeftText>Let us introduce ourselves</LeftText>
          </FirstColumn>
          <SecondColumn xs={24} lg={14}>
            <RightTextTitle>
              안녕하세요,
              <br />
              코딩하는 청년들입니다!
            </RightTextTitle>
            <RightTextParagraph>
              코딩, 참으로 쉽고도 어렵게 느껴지는 단어입니다. 개발자의 중요성이
              현재 많이 대두되는 상황에, 많은 청년들이 코딩을 배우려고 도전하고
              있습니다.
            </RightTextParagraph>
          </SecondColumn>
        </StyledRow>
      </DivContainer>
    </div>
  );
}

export default SecondContainer;
