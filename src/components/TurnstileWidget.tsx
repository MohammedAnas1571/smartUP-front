import Turnstile, { useTurnstile } from "react-turnstile";



export function TurnstileWidget({setCloudFire}) {
   useTurnstile();
  return (
    <Turnstile
      sitekey="0x4AAAAAAAXY7K07__mpgWAd"
      onVerify={(token) => {
        setCloudFire(token);
      }}
    />
  );
}