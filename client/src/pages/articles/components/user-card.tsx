import styled from "@emotion/styled";
import theme from "@/styles/theme";
import React from "react";

interface Props {
  nickname: string;
  profileUrl: string | undefined;
}

const UserCard = ({ nickname, profileUrl }: Props) => {
  return (
    <Wrapper>
      <Name>{nickname}</Name>
      <img src={profileUrl} alt={profileUrl} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  height: 500px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e5e5e5;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const Text = styled.div`
  font-family: ${theme.font.regular};
  font-size: 14px;
  line-height: 17px;

  color: #000000;
`;

const Name = styled(Text)`
  font-family: ${theme.font.medium};
`;

export default UserCard;
