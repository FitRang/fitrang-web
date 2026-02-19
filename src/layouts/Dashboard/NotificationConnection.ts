import Sarus from "@anephenix/sarus";
import { useNotificationStore } from "@/store/UnreadMessageCount";

let sarusInstance: Sarus | null = null;

export function initNotificationWS(token: string) {

  if (sarusInstance) return sarusInstance;

  sarusInstance = new Sarus({
    url: `ws://127.0.0.1:8000/ws?access_token=${token}`,

    retryConnectionDelay: 1000,

    exponentialBackoff: {
      backoffRate: 2,
      backoffLimit: 30000,
    },
  });

  sarusInstance.on("connecting", () => {
    console.log("WS connecting...");
  });

  sarusInstance.on("connected", () => {
    console.log("WS connected");
  });

  sarusInstance.on("disconnected", () => {
    console.log("WS disconnected");
  });

  sarusInstance.on("error", (err) => {
    console.error("WS error:", err);
  });

  sarusInstance.on("message", (event: any) => {
    const data = JSON.parse(event.data);
    useNotificationStore.getState().addNotification(data);
  });

  return sarusInstance;
}
