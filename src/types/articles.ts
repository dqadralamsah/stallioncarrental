export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
};

export type Article = {
  meta: ArticleMeta;
  content: string;
};
