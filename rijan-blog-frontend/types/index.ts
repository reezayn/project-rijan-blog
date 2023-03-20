import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ICategoryAttributes {
  Title: string;
  Slug: string;
}

export interface ICategory {
    id: number;
    attributes: ICategoryAttributes;
}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface IResrouceMeta {
    pagination: IPagination;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResrouceMeta;
}

export interface IImageData{
  data: {
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
        }
      }
    }
  }
}

export interface IAuthor {
  data: {
    attributes: {
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              }
            }
          }
        }
      }
    }
  }
}

export interface IArticleAttributes {
  Title: string;
  Body: string | MDXRemoteSerializeResult;
  Slug: string;
  Image: IImageData;
  createdAt: string;
  author: IAuthor;
  shortDescription: string;
}

export interface IArticle {
  id: number;
  attributes: IArticleAttributes;
}

export type TDirection = 1 | -1;

export interface IQueryOptions {
  filters: any;
  sort: any;
  populate: any;
  pagination: {
    page: number;
    pageSize: number;
  }
}