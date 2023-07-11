import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Page } from "@/script/@type/article/page";

// export default function Pagination({ totalPages, current, size }: Page) {
//   const router = useRouter();

//   return (
//     <Container>
//       <Previous>previous</Previous>
//       <Current>{current}</Current>
//       <Next>next</Next>
//     </Container>
//   );
// }

// interface ContainerProps {
//   bgColor?: string;
// }
// const Container = styled.div<ContainerProps>`
//   width: 100%;
//   display: flex;
//   justify-content: space-around;
//   // TODO: 물어보기
//   /* max-width: 310px; */
//   height: 100%;
//   background-color: ${({ bgColor }) => bgColor};
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;
//   margin-bottom: calc(100vh * 0.05);
// `;

// const Previous = styled.div`
//   width: 50px;
//   height: 10px;
// `;

// const Current = styled.div`
//   width: 10px;
//   height: 10px;
// `;

// const Next = styled.div`
//   width: 50px;
//   height: 10px;
// `;

// import styled from "styled-components";

export default function Pagination({
  total,
  limit,
  page,
  setPage,
}: {
  total?: number;
  limit: number;
  page: number;
  setPage: (page: number) => void;
}) {
  //   const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(limit)
          .fill(undefined)
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              //   aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page)} disabled={page === limit}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
