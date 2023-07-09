import { atom, RecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

// 아무것도 설정하지 않는 경우 localStorage에 저장
// key: "recoil-persist"로 설정
const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;
const { persistAtom } = recoilPersist({
  key: "list-persist",
  storage: sessionStorage,
});

export const listPageState: RecoilState<number> = atom({
  key: "list_page_state",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userState: RecoilState<{ page: number }> = atom({
  key: "list",
  default: {
    page: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
