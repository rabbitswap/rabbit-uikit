import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 160 30" {...props}>
      <image width="160" height="30" href={isDark ? "/logo-text-dark.png" : "/logo-text.png"} />
    </Svg>
  );
};

export default Logo;
