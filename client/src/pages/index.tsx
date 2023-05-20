import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import BasicBtn from "@/components/atoms/BasicBtn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const Example = async () => {
    axios
      .post("http://heyhey.i234.me:3333/api/auth/login", {
        email: "string",
        password: "string",
      })
      .then((response) => {
        // 응답 성공 처리
        console.log(response.data);
      })
      .catch((error) => {
        // 응답 오류 처리
        console.error(error);
      });

    // const res = await customAxios.post("/api/auth/login", {
    //   email: "string",
    //   password: "string",
    // });
    // console.log(res);
  };
  return (
    <>
      <BasicBtn text="test" color="black" onClick={Example} />
    </>
  );
}
