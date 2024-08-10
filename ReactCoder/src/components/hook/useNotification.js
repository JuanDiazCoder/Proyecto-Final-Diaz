import { useContext } from "react";
import { NotificationContext } from "../../context/Notification"; 

export const useNotification = () => {
    return useContext(NotificationContext);
};
