export type CuisineCategories = 'italian' | 'german' | 'japanese' | 'gourmet' | 'indian' | 'fusion';

export type CuisineCategoriesKey = CuisineCategories;

export interface CuisineCategoriesMeta {
  name: string;
  emoji: string;
  imagePath: string;
  heroCta: {
    mob: string;
    desktop: string;
  };
}

export const CUISINE_CATEGORIE_DATA: Record<CuisineCategoriesKey, CuisineCategoriesMeta> = {
  italian: {
    name: 'italian',
    emoji: '🤌',
    imagePath: '/assets/img/cuisine-cta/italian.png',
    heroCta: {
      mob: '/assets/img/hero_cuisine_mob/italian.png',
      desktop: '/assets/img/hero_cuisine_desktop/italian.png',
    },
  },
  german: {
    name: 'german',
    emoji: '🥨',
    imagePath: '/assets/img/cuisine-cta/german.png',
    heroCta: {
      mob: '/assets/img/hero_cuisine_mob/german.png',
      desktop: '/assets/img/hero_cuisine_desktop/german.png',
    },
  },
  japanese: {
    name: 'japanese',
    emoji: '🥢',
    imagePath: '/assets/img/cuisine-cta/japanese.png',
    heroCta: {
      mob: '/assets/img/hero_cuisine_mob/japanese.png',
      desktop: '/assets/img/hero_cuisine_desktop/japanese.png',
    },
  },
  gourmet: {
    name: 'gourmet',
    emoji: '✨',
    imagePath: '/assets/img/cuisine-cta/gourmet.png',
    heroCta: {
      mob: '/assets/img/hero_cuisine_mob/gourmet.png',
      desktop: '/assets/img/hero_cuisine_desktop/gourmet.png',
    },
  },
  indian: {
    name: 'indian',
    emoji: '🍛',
    imagePath: '/assets/img/cuisine-cta/indian.png',
    heroCta: {
      mob: '/assets/img/hero_cuisine_mob/indian.png',
      desktop: '/assets/img/hero_cuisine_desktop/indian.png',
    },
  },
  fusion: {
    name: 'fusion',
    emoji: '🍢',
    imagePath: '/assets/img/cuisine-cta/fusion.png',
    heroCta: {
      mob: '/assets/img/hero_cuisine_mob/fusion.png',
      desktop: '/assets/img/hero_cuisine_desktop/fusion.png',
    },
  },
};
