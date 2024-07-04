export interface SocialItemsProps {
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
  youtube_id: string;
}

export interface SocialLinkProps {
  data: SocialItemsProps | null;
}
