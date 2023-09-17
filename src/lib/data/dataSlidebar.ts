import { iconName } from "../../components/Icon";

export type dataProps = {
  name: string;
  iconName: iconName;
};

export const data: Readonly<dataProps[]> = [
  {
    name: "Dashboard",
    iconName: "HomeIcon",
  },
  {
    name: "QuotePrice",
    iconName: "CurrencyDollarIcon",
  },
  {
    name: "Branch",
    iconName: "IdentificationIcon",
  },
  {
    name: "Category",
    iconName: "ListBulletIcon",
  },
];
