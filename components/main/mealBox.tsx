import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function MealBox() {
  return (
    <Container>
      <InfoBox>
        <Title>9월 12일 화요일 급식</Title>
        <Content>1,351kcal 단백질 78g 탄수화물 193g 지방 31g</Content>
      </InfoBox>

      <MealContainer>
        <MealWrapper>
          <Tag>
            <Img src="/imgs/main/sun.png" />
            <TagText>아침</TagText>
          </Tag>
          <ItemBox>
            <Item>
              수제샌드위치
              <br />
              누룽지탕
              <br />
              방울토마토
              <br />
              짜먹는요거바포도
              <br />
              롱스틱오징어바
            </Item>
            <Kcal>648.1 Kcal</Kcal>
          </ItemBox>
        </MealWrapper>
        <MealWrapper>
          <Tag>
            <Img id="lunch" src="/imgs/main/lunch.png" />
            <TagText>점심</TagText>
          </Tag>
          <ItemBox>
            <Item>
              수제샌드위치
              <br />
              누룽지탕
              <br />
              방울토마토
              <br />
              짜먹는요거바포도
              <br />
              롱스틱오징어바
            </Item>
            <Kcal>648.1 Kcal</Kcal>
          </ItemBox>
        </MealWrapper>
        <MealWrapper>
          <Tag>
            <Img src="/imgs/main/moon.png" />
            <TagText>저녁</TagText>
          </Tag>
          <ItemBox>
            <Item>
              수제샌드위치
              <br />
              누룽지탕
              <br />
              방울토마토
              <br />
              짜먹는요거바포도
              <br />
              롱스틱오징어바
            </Item>
            <Kcal>648.1 Kcal</Kcal>
          </ItemBox>
        </MealWrapper>
      </MealContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 110px;
  margin: 20px 0;
  padding-left: 20px;
  border-radius: 20px;
  gap: 14px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.GREEN};
  color: ${theme.WHITE};
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

const Content = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const MealContainer = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MealWrapper = styled.div`
  width: 100%;
  gap: 6px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Tag = styled.div`
  width: 74px;
  height: 28px;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background-color: ${theme.GREEN};
  color: ${theme.WHITE};
  font-size: 12px;
  font-weight: 500;
  #lunch {
    width: 18px;
  }
`;

const Img = styled.img`
  width: 15px;
`;

const TagText = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

const ItemBox = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid ${theme.GRAY2};
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Item = styled.p`
  line-height: 150%;
`;

const Kcal = styled.div``;
