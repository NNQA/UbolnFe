import React, { AnchorHTMLAttributes, ReactNode } from "react";
import {
  LinkProps,
  NavLinkProps,
  Link as Linknav,
  NavLink,
} from "react-router-dom";
import { cn } from "../lib/utils/utils";

type Props =
  | ({ as?: "a" } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as?: "link" } & LinkProps)
  | ({ as?: "navlink" } & NavLinkProps);

export default function Link({ className, as, children, ...props }: Props) {
  let node: ReactNode | null = null;

  switch (as) {
    case "link": {
      node = <Linknav {...(props as LinkProps)} />;
      break;
    }
    case "a": {
      node = <a {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
      break;
    }
    case "navlink": {
      node = <NavLink {...(props as NavLinkProps)} />;
      break;
    }
  }
  return <div className={cn("", className)}>{node}</div>;
}
