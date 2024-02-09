import type { Schema, Attribute } from '@strapi/strapi';

export interface CarouselsCarouselapp extends Schema.Component {
  collectionName: 'components_carousels_carouselapp';
  info: {
    displayName: 'Carousel App';
    description: '';
  };
  attributes: {
    Banners: Attribute.Media;
  };
}

export interface CategoriesCategoriesPasillosRecomendados
  extends Schema.Component {
  collectionName: 'components_categories_categories_pasillos_recomendados';
  info: {
    displayName: 'Categories Pasillos Recomendados';
    description: '';
  };
  attributes: {
    lista_categorias: Attribute.Enumeration<
      [
        'mi descuento',
        'vinos del mes',
        'licores',
        'bebidas y pasabocas',
        'l\u00E1cteos, huevos y refrigerados',
        'despensa',
        'carnes, pollo y pescado',
        'frutas y verduras'
      ]
    > &
      Attribute.Required;
  };
}

export interface CategoriesStandarCategories extends Schema.Component {
  collectionName: 'components_categories_standar_categories';
  info: {
    displayName: 'Standar Categories';
  };
  attributes: {
    listOfcategories: Attribute.Enumeration<['standar']>;
  };
}

export interface LadingPagesStandarLandingPage extends Schema.Component {
  collectionName: 'components_lading_pages_standar_landing_pages';
  info: {
    displayName: 'Standar landing page';
    description: '';
  };
  attributes: {
    carousel: Attribute.Component<'carousels.carouselapp'>;
    categories: Attribute.Component<'categories.categories-pasillos-recomendados'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'carousels.carouselapp': CarouselsCarouselapp;
      'categories.categories-pasillos-recomendados': CategoriesCategoriesPasillosRecomendados;
      'categories.standar-categories': CategoriesStandarCategories;
      'lading-pages.standar-landing-page': LadingPagesStandarLandingPage;
    }
  }
}
