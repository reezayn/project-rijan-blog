import { serialize } from 'next-mdx-remote/serialize';
import { IArticle } from '../types';

export const formatDate = (dateString: string):string => {
    const date = new Date(dateString).toLocaleDateString('en-US',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return date;
};

export const slugToTitle = (slug: string): string => {
  if (typeof slug === 'string') {
    return slug.split('-').join(' ')
  }
  return 'Blog';
}

export const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const debounce = (fn: (query: string) => void, timeout = 300) => {
  // for future rijan: use lodash npm package for debouncing instead of this function
  let timer: NodeJS.Timeout;
  const debounced = (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
          fn.apply(this, args);
      }, timeout);
  };
  return debounced;
};

export const serializeMarkdown = async (item: IArticle) => {
  const Body = await serialize(item.attributes.Body as string);
  return {
      ...item,
      attributes: {
          ...item.attributes,
          Body,
      },
  };
};


