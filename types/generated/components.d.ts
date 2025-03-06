import type { Schema, Struct } from '@strapi/strapi';

export interface ImageImage extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    displayName: 'image';
  };
  attributes: {};
}

export interface MediaMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_media';
  info: {
    displayName: 'Media';
  };
  attributes: {
    Media: Schema.Attribute.String;
  };
}

export interface TextText extends Struct.ComponentSchema {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    Text: Schema.Attribute.String;
  };
}

export interface TimelineComponentsContentItem extends Struct.ComponentSchema {
  collectionName: 'components_timeline_components_content_items';
  info: {
    displayName: 'contentItem';
  };
  attributes: {
    Text: Schema.Attribute.String;
  };
}

export interface VideoMedia extends Struct.ComponentSchema {
  collectionName: 'components_video_media';
  info: {
    displayName: 'Media';
  };
  attributes: {};
}

export interface VideoMediaItem extends Struct.ComponentSchema {
  collectionName: 'components_video_media_items';
  info: {
    displayName: 'MediaItem';
  };
  attributes: {
    video: Schema.Attribute.Enumeration<['video']>;
  };
}

export interface VideoVideo extends Struct.ComponentSchema {
  collectionName: 'components_video_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    video: Schema.Attribute.String;
  };
}

export interface WholeAgencyclientcarousel extends Struct.ComponentSchema {
  collectionName: 'components_whole_agencyclientcarousels';
  info: {
    description: '';
    displayName: 'agencyclientcarousel';
  };
  attributes: {
    avatar: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface WholeContentItem extends Struct.ComponentSchema {
  collectionName: 'components_whole_content_items';
  info: {
    displayName: 'ContentItem';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image.image': ImageImage;
      'media.media': MediaMedia;
      'text.text': TextText;
      'timeline-components.content-item': TimelineComponentsContentItem;
      'video.media': VideoMedia;
      'video.media-item': VideoMediaItem;
      'video.video': VideoVideo;
      'whole.agencyclientcarousel': WholeAgencyclientcarousel;
      'whole.content-item': WholeContentItem;
    }
  }
}
