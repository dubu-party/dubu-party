import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import BasicBtn from "@/components/atoms/BasicBtn";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/atoms/userState";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [check, isCheck] = useState<any>();
  const user = useRecoilValue(userState);
  console.log(user);

  const Example = async () => {
    const res = await axios.get("/api/articles");
  };
  return (
    <>
      {user && <div>{user.email}</div>}
      <BasicBtn text="test" color="black" onClick={Example} />
    </>
  );
}
