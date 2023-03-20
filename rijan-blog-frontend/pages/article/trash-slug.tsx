import { fetchArticleBySlug } from '@/http'
import { IArticle, ICollectionResponse } from '@/types'
import { AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import qs from 'qs'
import React from 'react'

interface IPropType {
    articles: IArticle;
    notFound?: boolean;
}

const slug = ({ articles, notFound = false}: IPropType) => {
  return <div>{ articles.attributes.Title} </div>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const queryString = qs.stringify({
        populate: ['Image', 'author.avatar'],
        filters: {
            Slug: {
                $eq: query.slug,
            },
        },
    });

    const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
        await fetchArticleBySlug(queryString);
    if (articles.data.length === 0) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            article: articles.data[0],
        },
    };
};

export default slug
