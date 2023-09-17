import * as SolidIcons from "@heroicons/react/24/solid";
import * as OutlineIcons from "@heroicons/react/24/outline";
export type iconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;
type HeroIconProps = {
  solid?: false;
  iconName: iconName;
  className?: string;
};

const Icon = ({ solid, iconName, className }: HeroIconProps): JSX.Element => {
  const Icon = solid ? SolidIcons[iconName] : OutlineIcons[iconName];

  return <Icon className={className}></Icon>;
};

export default Icon;
