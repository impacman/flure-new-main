import { useState, useEffect } from "react";

export const useDevice = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (userAgent.match(/iPhone|iPad|iPod/i)) {
      setDeviceType("apple");
    } else if (userAgent.match(/Android/i)) {
      setDeviceType("android");
    } else {
      setDeviceType("Не удалось определить устройство");
    }
  }, []);

  return deviceType;
};
