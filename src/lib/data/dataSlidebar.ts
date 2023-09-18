import { iconName } from "../../components/Icon";

export type dataProps = {
  name: string;
  iconName: iconName;
};

export const data: Readonly<dataProps[]> = [
  {
    name: "Dashboard",
    iconName: "RectangleGroupIcon",
  },
  {
    name: "QuotePrice",
    iconName: "CurrencyEuroIcon",
  },
  {
    name: "Branch",
    iconName: "CreditCardIcon",
  },
  {
    name: "Category",
    iconName: "ListBulletIcon",
  },
];
