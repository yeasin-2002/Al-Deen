"use client";
import Lottie, { LottieComponentProps } from "lottie-react";
interface LottieAnimationsProps extends LottieComponentProps {
  animationData: unknown;
  width?: number;
  height?: number;
}

export const LottieAnimations = ({
  animationData,

  ...rest
}: LottieAnimationsProps) => {
  return <Lottie animationData={animationData} {...rest} />;
};
