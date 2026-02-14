import { create } from "zustand";

interface UserIdentity {
  username: string;
  email: string;
}

interface Message {
  sender: UserIdentity;
  receiver: UserIdentity;
  message: string;
}

interface NotificationStore {
  notifications: Message[];
  addNotification: (msg: Message) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],

  addNotification: (msg) =>
    set((state) => ({
      notifications: [msg, ...state.notifications],
    })),
}));
