import * as SolidIcons from "@heroicons/react/24/solid";
import * as OutlineIcons from "@heroicons/react/24/outline";
import clsx from "clsx";
export type iconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;
type HeroIconProps = {
  solid?: false;
  iconName: iconName;
  className?: string;
};

const Icon = ({
  solid,
  iconName,
  className,
}: HeroIconProps): React.ReactElement => {
  const Icon = solid ? SolidIcons[iconName] : OutlineIcons[iconName];

  return (
    <Icon
      className={clsx("h-[1.6rem] [&>path]:stroke-[1.7]", className)}
    ></Icon>
  );
};

export default Icon;
