import Head from "next/head";
import styles from "@/styles/Home.module.css";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/articles");
  }, []);

  return <Container></Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  /* background-color: #1a4524; */
`;

const Section = styled.section`
  width: 100%;
`;

const Menu = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const ContentWrap = styled.div`
  overflow: scroll;
  margin-top: 10px;
  justify-content: center;

  @media all and (min-width: 479px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 310px));
    gap: 30px 20px;
    justify-items: center;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 310px));
    gap: 30px 20px;
    justify-items: center;
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 310px));
    gap: 30px 20px;
    justify-items: center;
  }

  @media all and (max-width: 479px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 310px));
    gap: 30px 10px;
    justify-items: center;
  }
`;

const Green = styled.div`
  width: 88%;
  font-family: DungGeunMo;
  font-size: 30px;
  line-height: 17px;
  position: absolute;
  top: 10%;
  color: green;
  text-align: center;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 100%;
  font-family: DungGeunMo;
  font-size: 30px;
  line-height: 17px;
  position: absolute;
  top: 10%;
  color: white;
  text-align: center;
  cursor: pointer;
`;

const LoginBtn = styled.div`
  font-family: DungGeunMo;
  font-size: 15px;
  line-height: 17px;
  position: absolute;
  top: 0;
  right: 0;
  color: #000000;
`;

const CreateBtn = styled.div`
  width: 100px;
  margin-top: calc(100vh * 0.2);
  margin-left: auto;
`;
