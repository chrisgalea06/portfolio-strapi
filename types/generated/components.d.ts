import type { Schema, Attribute } from '@strapi/strapi';

export interface ListItemListItem extends Schema.Component {
  collectionName: 'components_list_item_list_items';
  info: {
    displayName: 'List Item';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    image: Attribute.Media;
    images: Attribute.Media;
  };
}

export interface TestimonyTestimony extends Schema.Component {
  collectionName: 'components_testimony_testimonies';
  info: {
    displayName: 'testimony';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    comment: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    rate: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list-item.list-item': ListItemListItem;
      'testimony.testimony': TestimonyTestimony;
    }
  }
}
