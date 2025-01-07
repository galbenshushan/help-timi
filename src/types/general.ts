import { BeanAttribute } from "../enums/beans";

export interface NavItem {
  to: string;
  label: string;
}
export interface IconMappingItem {
  type: BeanAttribute;
  tooltip: string;
}