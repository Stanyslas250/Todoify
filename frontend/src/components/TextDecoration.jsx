import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export function TextAnimatedDecoration({ children }) {
  return (
    <RoughNotation type="underline" show={true}>
      {children}
    </RoughNotation>
  );
}
