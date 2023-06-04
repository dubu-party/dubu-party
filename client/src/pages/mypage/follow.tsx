import { MypageAPI } from "@/api/myPage";
import { userIdState } from "@/atoms/userState";
import ProfileCard from "@/components/atoms/ProfileCard";
import MypageLayout from "@/components/layout/mypageLayout";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function Follow() {
  const userId = useRecoilValue(userIdState);
  const [followings, setFollowings] = useState([]);
  const [isFollower, setIsFollower] = useState<boolean>(true);

  // 여기서 통신하고 보내주기
  const fetchData = async () => {
    const followings = await MypageAPI.getFollowings(userId);
    setFollowings(followings);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickIsFollow = (isfollow: boolean) => () => {
    setIsFollower(isfollow);
  };
  return (
    <MypageLayout>
      <Container>
        <Menu>
          <MenuButton active={isFollower} onClick={onClickIsFollow(true)}>
            Following
          </MenuButton>
          <MenuButton active={!isFollower} onClick={onClickIsFollow(false)}>
            Follower
          </MenuButton>
        </Menu>
        <CardContainer>
          {followings.map((following: any) => (
            <ProfileCard
              key={following.id}
              // id={following.id}
              // name={following.name}
              // profileImg={following.profileImg}
              // isFollow={following.isFollow}
            />
          ))}
        </CardContainer>
      </Container>
    </MypageLayout>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Menu = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #a3bcb6;
`;

const MenuButton = styled.div<{ active: boolean }>`
  padding: 14px;
  flex: 1;
  text-align: center;
  border-bottom: 3px solid
    ${({ active }) => (active ? "#425d52" : "transparent")};
  transition: border-bottom 0.2s;
  font-family: ${theme.font.medium};
  color: ${({ active }) => (active ? "#425d52" : "#a3bcb6")};
  &:hover {
    cursor: pointer;
    color: #425d52;
    /* border-bottom: 3px solid #425d52; // Main color? */
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
`;
