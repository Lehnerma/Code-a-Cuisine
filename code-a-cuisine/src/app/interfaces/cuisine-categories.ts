export type CuisineCategories = 'italian' | 'german' | 'japanese' | 'gourmet' | 'indian' | 'fusion';

export type CuisineCategoriesKey = CuisineCategories;

export interface CuisineCategoriesMeta {
  name: string;
  emoji: string;
  imagePath: string;
}

export const CUISINE_CATEGORIE_DATA: Record<CuisineCategoriesKey, CuisineCategoriesMeta> = {
  italian: { name: 'italian', emoji: '🤌', imagePath: '/assets/img/cuisine-cta/italian.png' },
  german: { name: 'german', emoji: '🥨', imagePath: '/assets/img/cuisine-cta/german.png' },
  japanese: { name: 'japanese', emoji: '🥢', imagePath: '/assets/img/cuisine-cta/japanese.png' },
  gourmet: { name: 'gourmet', emoji: '✨', imagePath: '/assets/img/cuisine-cta/gourmet.png' },
  indian: { name: 'indian', emoji: '🍛', imagePath: '/assets/img/cuisine-cta/indian.png' },
  fusion: { name: 'fusion', emoji: '🍢', imagePath: '/assets/img/cuisine-cta/fusion.png' },
};
