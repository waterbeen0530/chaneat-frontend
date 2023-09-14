import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Navigation() {
  return (
    <Container>
      <ItemBox>
        <Img src="imgs/navigation/house-icon.svg" />
        <Text>홈</Text>
      </ItemBox>
      <ItemBox>
        <Img src="imgs/navigation/bab-icon.svg" />
        <Text>식사</Text>
      </ItemBox>
      <ItemBox>
        <WriteButton>
          <Plus src="imgs/navigation/plus-icon.svg" />
        </WriteButton>
      </ItemBox>
      <ItemBox>
        <Img src="imgs/navigation/chat-icon.svg" />
        <Text>챗봇</Text>
      </ItemBox>
      <ItemBox>
        <Img id="user" src="imgs/navigation/user-icon.svg" />
        <Text>내 정보</Text>
      </ItemBox>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0 40px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px 20px 0 0;
  background-color: ${theme.WHITE};
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.15);
  #user {
    width: 22px;
  }
`;

const ItemBox = styled.div`
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover > p {
    color: ${theme.BLACK};
  }

  &:hover > img {
    filter: invert(51%) sepia(24%) saturate(1046%) hue-rotate(95deg)
      brightness(88%) contrast(85%);
  }
`;

const Img = styled.img`
  width: 26px;
`;

const Text = styled.p`
  color: ${theme.GRAY5};
  font-size: 12px;
  font-weight: 600;
`;

const WriteButton = styled.div`
  width: 44px;
  height: 44px;
  margin-top: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  background-color: ${theme.GREEN};
`;

const Plus = styled.img``;
