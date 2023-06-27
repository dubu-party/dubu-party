import styled from "@emotion/styled";
import theme from "@/styles/theme";
import React, { useEffect, useState } from "react";
import { userIdState } from "@/atoms/userState";
import BasicBtn from "@/components/atoms/BasicBtn";
import { FollowAPI } from "@/api/follow";
import { useRecoilValue } from "recoil";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: number;
  nickname: string;
  profileUrl: string | undefined;
}

const UserCard = ({ id, nickname, profileUrl }: Props) => {
  const userId = useRecoilValue(userIdState);

  const [followings, setFollowings] = useState<number[]>();
  const [followers, setFollowers] = useState<number[]>();

  const following = () => {
    FollowAPI.following(userId);
  };

  const fetchData = async () => {
    const follower = await FollowAPI.getFollowers(id);
    const following = await FollowAPI.getFollowings(id);

    setFollowers(follower);
    setFollowings(following);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Flex>
        <img src={profileUrl} alt={profileUrl} />
        <Name>{nickname}</Name>
      </Flex>
      <FollowWrap>
        <Text>작성한 글</Text>
        <Text>팔로워 {followers ? followers.length : 0}</Text>
        <Text>팔로잉 {followings ? followings?.length : 0}</Text>
      </FollowWrap>
      <CreateBtn>
        <BasicBtn text={"팔로우"} icon={faUserPlus} onClick={following} />
      </CreateBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 330px;
  height: 250px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;

  img {
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 50px;
    object-fit: cover;
    z-index: 1;
  }
`;

const Flex = styled.div`
  display: flex;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  font-family: ${theme.font.regular};
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;

  color: #000000;
`;

const Name = styled(Text)`
  font-family: ${theme.font.medium};
  line-height: 100px;
  margin-left: 10px;
`;

const FollowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const CreateBtn = styled.div`
  width: 100px;
`;

export default UserCard;
