import { IArticle } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IPropType {
  article: IArticle
}

const BlogCardWithImage = ({ article }: IPropType) => {
  return (
    <>
      <Link href="/">
        <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-lg h-52 text-white flex flex-row w-full p-6 items-center justify-center shadow-violet-400 shadow-2xl">
          <div className="flex flex-col w-2/3">
            <div className="text-xl font-semibold hover:underline">
              {article.attributes.Title}
            </div>
            <div className="text-sm text-gray-200 my-2">
              {article.attributes.shortDescription.slice(0, 250)}{' '}
              {article.attributes.shortDescription.length > 250 ? '...' : ''}
            </div>
            <div className='h-1 w-28 bg-primary'></div>

          </div>
          <div className="w-1/3 m-1 p-1">
            <Image
              src={`http://127.0.0.1:1337${article.attributes.Image.data.attributes.url}`}
              height={150}
              width={150}
              alt={article.attributes.Title}
            />
          </div>
        </div>
      </Link>
    </>
  )
}

export default BlogCardWithImage
