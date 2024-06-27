import { atom } from "jotai";

type postContent = {
    date: string;
    content: string;
};

type postContentsType = {
    month: string;
    post_data: postContent[];
};

export const currentHomeComponentAtom = atom<"diary" | "emotion">("diary");
export const postContents = atom<postContentsType>({
    month: "",
    post_data: [
        { date: "", content: "" },
        // 他の日記情報
    ],
});
