import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function TitleBox() {
  return (
    <Container>
      <TextBox>
        <Title>안녕하세요, 임수빈님!</Title>
        <Content>오늘의 급식을 확인해보세요</Content>
      </TextBox>
      <Profile src="/imgs/main/profile.png" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextBox = styled.div`
  gap: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: ${theme.BLACK};
  font-size: 22px;
  font-weight: 600;
`;

const Content = styled.p`
  color: ${theme.GRAY1};
  font-size: 16px;
  font-weight: 500;
`;

const Profile = styled.img`
  width: 80px;
`;
