import type { Schema, Attribute } from '@strapi/strapi';

export interface CarrouselCarrouselApp extends Schema.Component {
  collectionName: 'components_carrousel_carrousel_app';
  info: {
    displayName: 'Carrousel App';
    description: 'Carrusel de productos';
  };
  attributes: {
    title: Attribute.String;
    numberMaxOfPluShow: Attribute.Integer;
    logic: Attribute.Enumeration<
      [
        'f%3AALSO_BOUGHT%2Cl%3A5%2Co%3A0',
        'f%3ASEARCH%2Cl%3A5%2Co%3A0',
        'f%3ADEPARTMENT%2Cl%3A5%2Co%3A0',
        'f%3ACATEGORY%2Cl%3A5%2Co%3A0',
        'f%3ARELATED%2Cl%3A5%2Co%3A0',
        'f%3ACART%2Cl%3A5%2Co%3A0',
        'f%3AHOME%2Cl%3A5%2Co%3A0',
        'f%3APERSONAL%2Cl%3A5%2Co%3A0',
        'f%3APOPULAR%2Cl%3A5%2Co%3A0',
        'UsualOrder',
        ''
      ]
    >;
    complement: Attribute.String;
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
    lista_categorias: Attribute.Enumeration<['standar']>;
  };
}

export interface LadingPagesStandarLandingPage extends Schema.Component {
  collectionName: 'components_lading_pages_standar_landing_pages';
  info: {
    displayName: 'Standar landing page';
    description: '';
  };
  attributes: {
    Carrousel: Attribute.Component<'carrousel.carrousel-app'>;
    Categories: Attribute.Component<'categories.categories-pasillos-recomendados'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'carrousel.carrousel-app': CarrouselCarrouselApp;
      'categories.categories-pasillos-recomendados': CategoriesCategoriesPasillosRecomendados;
      'categories.standar-categories': CategoriesStandarCategories;
      'lading-pages.standar-landing-page': LadingPagesStandarLandingPage;
    }
  }
}
