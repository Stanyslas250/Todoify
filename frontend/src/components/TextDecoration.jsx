import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export function TextAnimatedDecoration({ children }) {
  return (
    <RoughNotation type="underline" color="#03964d" show={true}>
      {children}
    </RoughNotation>
  );
}
