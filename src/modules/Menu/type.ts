export interface MenuCategoriesMain {
  category_display_name: string;
  category_image: string;
  category_name: string;
  category_id: number;
  parent_category: number;
}

export interface SubChildren {
  category_display_name: string;
  category_id: number;
  category_image: string | null;
}

export interface MenuCategoriesSub {
  category_display_name: string;
  category_image: string;
  category_name: string;
  category_id: number;
  parent_category: number;
  sub_sub: SubChildren[];
}

export interface MenuCategories {
  main: MenuCategoriesMain;
  sub: MenuCategoriesSub[];
}
