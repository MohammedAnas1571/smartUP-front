import React from "react";
import Turnstile from "react-turnstile";

interface TurnstileWidgetProps {
  setCloudFire: React.Dispatch<React.SetStateAction<string>>;
}

const TurnstileWidget: React.FC<TurnstileWidgetProps> = ({ setCloudFire }) => {
  return (
    <Turnstile
      sitekey="0x4AAAAAAAXY7K07__mpgWAd"
      onVerify={(token) => {
        setCloudFire(token);
      }}
    />
  );
};

export default TurnstileWidget;
