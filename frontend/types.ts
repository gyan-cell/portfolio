interface LottiePlayerProps {
  animationData: object; // The raw Lottie JSON data
  loop?: boolean | number;
  play?: boolean;
  speed?: number;
  direction?: 1 | -1;
  style?: React.CSSProperties;
  lottieRef?: React.RefObject<any>; // Type can be more specific if using a defined Lottie instance type
  onComplete?: () => void;
  // ... other event handlers
}
