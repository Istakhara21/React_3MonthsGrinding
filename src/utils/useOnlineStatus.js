import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  //Check if online
  useEffect(() => {
    //eventListener for checking online/offline
    window.addEventListener("Offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("Online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //return a boolean value
  return onlineStatus;
};

export default useOnlineStatus;
