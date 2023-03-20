import { IArticle } from '@/types'
import { formatDate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IPropType {
  article: IArticle
}

const BlogCard = ({ article }: IPropType) => {
  return (
    <>
    <Link href={`/article/${article.attributes.Slug}`}>
    <div className="flex flex-col p-5 rounded-xl h-48 bg-gray-100 shadow-lg">
      <div className='text-lg font-semibold hover:text-primary-dark cursor-pointer hover:underline w-max'>{article.attributes.Title}</div>
      <div className="flex flex-row my-1 items-center">
        <Image
          src={`http://127.0.0.1:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
          height={35}
          width={35}
          alt= {`${'image of: '}${article.attributes.author.data.attributes.firstname}`}
          className='rounded-xl mr-2'
        />
        <span className='text-xs flex flex-row items-center'> By&nbsp;
          {article.attributes.author.data.attributes.firstname}{' '}
          {article.attributes.author.data.attributes.lastname} on: &nbsp;
        </span>
        <span className='text-xs flex flex-row items-center text-gray-500'>{formatDate(article.attributes.createdAt)}</span>
      </div>
      <div className='text-sm text-gray-500'>
        {article.attributes.shortDescription.slice(0,250)} {' '}
        {article.attributes.shortDescription.length > 250 ? '...': ''}
      </div>
    </div>
    </Link>
    </>
  )
}

export default BlogCard
