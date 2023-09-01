import { FC } from "react";
import * as HIcons from "@heroicons/react/24/solid";
const Icon: FC<{ icon: string }> = (props) => {
  const { ...icons } = HIcons;
  const TheIcon: React.ComponentType<React.SVGProps<SVGSVGElement>> = (
    icons as any
  )[props.icon];

  return <>{TheIcon && <TheIcon className="" />}</>;
};

export default Icon;
