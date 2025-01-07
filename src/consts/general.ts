import { BeanAttribute } from "../enums/beans";
import { IconMappingItem, NavItem } from "../types/general";

export const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/chart", label: "Statistics" },
  { to: "/timi", label: "Help Timi" },
];

export const IconMapping: Record<BeanAttribute, IconMappingItem> = {
  [BeanAttribute.GLUTEN_FREE]: {
    type: BeanAttribute.GLUTEN_FREE,
    tooltip: "Gluten Free",
  },
  [BeanAttribute.SUGAR_FREE]: {
    type: BeanAttribute.SUGAR_FREE,
    tooltip: "Sugar Free",
  },
  [BeanAttribute.SEASONAL]: {
    type: BeanAttribute.SEASONAL,
    tooltip: "Seasonal",
  },
  [BeanAttribute.KOSHER]: {
    type: BeanAttribute.KOSHER,
    tooltip: "Kosher",
  },
};
