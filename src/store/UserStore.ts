import { create } from "zustand";
import type { MyProfile, Dossier, Message } from "@/services/models";

interface UserStore {
  profile: MyProfile | null;
  dossier: Dossier | null;
  messages: Message[] | null;
  count: number;
  isLoaded: boolean;

  setMyProfile: (profile: MyProfile) => void;
  setMyDossier: (dossier: Dossier) => void;
  setMessages: (messages: Message[]) => void;
  setCount: (count: number) => void;

  clearMyProfile: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  profile: null,
  dossier: null,
  messages: null,
  count: 0,
  isLoaded: false,

  setMyProfile: (profile) =>
    set(() => ({
      profile,
      isLoaded: true,
    })),

  setMyDossier: (dossier) =>
    set(() => ({
      dossier,
    })),

  setMessages: (messages) =>
    set(() => ({
      messages,
    })),

  setCount: (count) =>
    set(() => ({
      count,
    })),

  clearMyProfile: () =>
    set(() => ({
      profile: null,
      dossier: null,
    })),
}));
