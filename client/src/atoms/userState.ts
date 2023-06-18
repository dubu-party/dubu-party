import { atom, RecoilState, RecoilRoot } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface UserState {
  email: string;
  id: number;
  instagram: string;
  nickName: string;
  profileUrl: string;
  setting: {
    bgColor: string;
  };
}

// 아무것도 설정하지 않는 경우 localStorage에 저장
// key: "recoil-persist"로 설정
const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;
const { persistAtom } = recoilPersist({
  key: "test-persist",
  // storage: sessionStorage,
});

// TODO: 이걸 왜 number로 하는건지 확인
export const userIdState: RecoilState<number> = atom({
  key: "userId_state",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userState: RecoilState<UserState> = atom({
  key: "user_state",
  default: {
    email: "",
    id: 0,
    instagram: "",
    nickName: "",
    profileUrl: "",
    setting: {
      bgColor: "",
    },
  },
  effects_UNSTABLE: [persistAtom],
});
