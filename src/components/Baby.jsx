import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Baby(props) {
  return (
    <DotLottieReact
      className={`w-80 ${props.className}`}
      src="/animation-baby.json"
      loop
      autoplay
    />
  );
}
