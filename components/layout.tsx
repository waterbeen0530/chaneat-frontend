import { NextPage } from "next";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import React, { use, useEffect, useState } from "react";
import Navigation from "./common/navigation";

interface props {
  children: React.ReactNode;
}

const Layout: NextPage<props> = ({ children }) => {
  const [pageSize, setPageSize] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 460) {
        setPageSize(true);
      } else {
        setPageSize(false);
      }
    });

    return () => {
      window.removeEventListener("resize", function () {});
    };
  }, []);

  return pageSize ? (
    <>
      <WebView>
        <main>{children}</main>
        <Navigation />
      </WebView>
    </>
  ) : (
    <>
      <Container>
        <ItemBox>
          <TextBox>
            <Logo src="/imgs/common/logo.png" />
            <Title>
              대마고
              <br />
              식사시간의 정석
            </Title>
          </TextBox>

          <RouteBox>
            <Github target="_blank" href="https://github.com/gabo-zago">
              <Quokka src="/imgs/quokka/quokka_1.png" />
              <Image src="/imgs/layout/github.png" />
              github
            </Github>
            <Notion target="_blank" href="">
              <Quokka src="/imgs/quokka/quokka_1.png" />
              <Image src="/imgs/layout/notion.png" />
              notion
            </Notion>
          </RouteBox>
        </ItemBox>

        <WebView>
          <main id="main">{children}</main>
          <Navigation />
        </WebView>
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  gap: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: hidden;
  background-color: ${theme.GRAY4};
`;

const WebView = styled.div`
  position: relative;
  aspect-ratio: 1/2;
  height: 100%;
  max-height: 900px;
  padding: 20px 20px 90px 20px;
  overflow-y: scroll;
  background-color: ${theme.WHITE};
`;

const ItemBox = styled.div`
  margin-top: 15%;
  gap: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  gap: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 48px;
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${theme.BLACK};
`;

const RouteBox = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Image = styled.img`
  width: 30px;
`;

const Button = styled.a`
  position: relative;
  width: 160px;
  height: 60px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 20px;
  background-color: ${theme.WHITE};
  color: ${theme.BLACK};
`;

const Quokka = styled.img`
  position: absolute;
  right: -10px;
  bottom: 0;
  width: 20px;
`;

const Github = styled(Button)``;

const Notion = styled(Button)``;
