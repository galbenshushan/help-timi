export type Order = "asc" | "desc";

export interface BeansRes {
  data: any[];
  total: number;
}

export interface Bean {
  BeanId: number;
  GroupNameSerialized: string;
  FlavorName: string;
  Description: string;
  IngredientsSerialized: string;
  ColorGroup: string;
  BackgroundColor: string | null;
  ImageUrl: string;
  GlutenFree: boolean;
  SugarFree: boolean;
  Seasonal: boolean;
  Kosher: boolean;
}

