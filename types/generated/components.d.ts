import type { Schema, Attribute } from '@strapi/strapi';

export interface BannersBannersapp extends Schema.Component {
  collectionName: 'components_banners_bannersapp';
  info: {
    displayName: 'Banners App';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    type: Attribute.Enumeration<
      [
        'Colecci\u00F3n',
        'Marca',
        'Departamento',
        'Catergor\u00EDa',
        'Pdp',
        'Web View',
        'Funcionalidad',
        'Funcionalidad Lobby',
        'Pdp Mi descuento',
        'Landing'
      ]
    >;
    sliders: Attribute.Component<'elements.banner', true>;
    emarsysID: Attribute.Component<'elements.emarsys-id'>;
  };
}

export interface CarouselsCarouselapp extends Schema.Component {
  collectionName: 'components_carousels_carouselapp';
  info: {
    displayName: 'Carousel App';
    description: 'Carousel App';
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
    listOfPlus: Attribute.Component<'elements.text-field', true>;
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

export interface ChronometersChronometer extends Schema.Component {
  collectionName: 'components_chronometers_chronometer';
  info: {
    displayName: 'Cron\u00F3metro App';
    description: 'Cron\u00F3metro App \u00E9xito';
  };
  attributes: {
    title: Attribute.String;
    backgroundColor: Attribute.String;
    textColor: Attribute.String;
    showDays: Attribute.Boolean & Attribute.DefaultTo<true>;
    showHours: Attribute.Boolean & Attribute.DefaultTo<true>;
    showMinutes: Attribute.Boolean & Attribute.DefaultTo<true>;
    showSeconds: Attribute.Boolean & Attribute.DefaultTo<true>;
    startDate: Attribute.DateTime;
    endDate: Attribute.DateTime;
    banners: Attribute.Component<'elements.banner', true>;
  };
}

export interface CtaLink extends Schema.Component {
  collectionName: 'components_cta_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<
      [
        'Colecci\u00F3n',
        'Marca',
        'Departamento',
        'Catergor\u00EDa',
        'Pdp',
        'Web View',
        'Funcionalidad',
        'Funcionalidad Lobby',
        'Pdp Mi descuento',
        'Landing'
      ]
    >;
    value: Attribute.String;
    contieneAlimentos: Attribute.Boolean & Attribute.DefaultTo<false>;
    contieneLicor: Attribute.Boolean & Attribute.DefaultTo<false>;
    contieneTextil: Attribute.Boolean & Attribute.DefaultTo<false>;
    loginRequerido: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsBanner extends Schema.Component {
  collectionName: 'components_elements_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    redirect: Attribute.Component<'cta.link'>;
  };
}

export interface ElementsEmarsysId extends Schema.Component {
  collectionName: 'components_elements_emarsys_ids';
  info: {
    displayName: 'emarsysID';
  };
  attributes: {
    emarsysID: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTextField extends Schema.Component {
  collectionName: 'components_elements_text_fields';
  info: {
    displayName: 'textField';
    description: '';
  };
  attributes: {
    textField: Attribute.String & Attribute.DefaultTo<'00000'>;
  };
}

export interface GridsGrid extends Schema.Component {
  collectionName: 'components_grids_grid';
  info: {
    displayName: 'Grid App';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    selecStyle: Attribute.Enumeration<['Cuadrado', 'Rect\u00E1ngulo']>;
    selectColumn: Attribute.Enumeration<['1', '2', '3', '4', '5', '6']>;
    cards: Attribute.Component<'elements.banner', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banners.bannersapp': BannersBannersapp;
      'carousels.carouselapp': CarouselsCarouselapp;
      'categories.categories-pasillos-recomendados': CategoriesCategoriesPasillosRecomendados;
      'categories.standar-categories': CategoriesStandarCategories;
      'chronometers.chronometer': ChronometersChronometer;
      'cta.link': CtaLink;
      'elements.banner': ElementsBanner;
      'elements.emarsys-id': ElementsEmarsysId;
      'elements.text-field': ElementsTextField;
      'grids.grid': GridsGrid;
    }
  }
}
