import Sarus from "@anephenix/sarus";
import { useNotificationStore } from "@/store/UnreadMessageCount";

export function initNotificationWS() {
  const sarus = new Sarus({
    url: "ws://localhost:8000/ws/notifications",
  });

  sarus.on("message", (event: any) => {
    const data = JSON.parse(event.data);

    useNotificationStore.getState().addNotification(data);
  });

  return sarus;
}

