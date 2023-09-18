import { iconName } from "../../components/Icon";

export type dataProps = {
  name: string;
  iconName: iconName;
  link?: string;
};

export const data: Readonly<dataProps[]> = [
  {
    name: "Dashboard",
    iconName: "RectangleGroupIcon",
    link: "Dashboard",
  },
  {
    name: "QuotePrice",
    iconName: "CurrencyEuroIcon",
    link: "QuotePrice",
  },
  {
    name: "Branch",
    iconName: "CreditCardIcon",
    link: "Branch",
  },
  {
    name: "Category",
    iconName: "ListBulletIcon",
    link: "Category",
  },
];
