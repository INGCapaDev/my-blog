export interface SocialImage {
  path: string;
  alt: string;
  width: number;
  height: number;
}

export const socialImages: { en?: SocialImage; es?: SocialImage } = {};
