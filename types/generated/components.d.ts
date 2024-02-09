import type { Schema, Attribute } from '@strapi/strapi';

export interface CarouselsCarouselapp extends Schema.Component {
  collectionName: 'components_carousels_carouselapp';
  info: {
    displayName: 'Carousel App';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    numberMaxOfPluShow: Attribute.Integer;
    logicEmarsys: Attribute.Enumeration<
      [
        'Tambi\u00E9n compraron',
        'Seg\u00FAn b\u00FAsqueda',
        'Departamento popular',
        'Categor\u00EDa',
        'Productos relacionados',
        'M\u00E1s agregados',
        'Productos m\u00E1s vistos',
        'Me podr\u00EDa interesar',
        'M\u00E1s populares en categor\u00EDa',
        'Productos Frecuentes',
        'Lista de PLUs'
      ]
    >;
    complement: Attribute.String;
    listOfPlus: Attribute.Media;
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
    carouselApp: Attribute.Component<'carousels.carouselapp'>;
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
