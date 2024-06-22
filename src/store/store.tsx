import { atom } from "jotai";

export const currentHomeComponentAtom = atom<"diary" | "emotion">("diary");
