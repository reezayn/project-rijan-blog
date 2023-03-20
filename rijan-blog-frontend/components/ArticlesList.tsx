import { IArticle } from '@/types'
import React from 'react'
import BlogCard from './BlogCard';
import BlogCardWithImage from './BlogCardWithImage';

interface IPropType {
    articles: IArticle[];
}

const ArticlesList = ({articles}: IPropType) => {
  return (
    <>
    <div className='grid lg:grid-cols-2 gap-10'>
        {
            articles.map((article, id) => {
                return (
                  <div key={article.id}>
                  {
                    id === 1? <BlogCardWithImage article={article} /> : <BlogCard article={article} />
                  }
                  </div>
                )
            })
        }

    </div>
    </>
  )
}

export default ArticlesList