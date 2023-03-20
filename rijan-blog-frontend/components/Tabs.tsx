import { ICategory } from '@/types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface IPropType {
  categoriesItems: ICategory[]
  handleOnSearch: (query: string) => void
}

const Tabs = ({ categoriesItems, handleOnSearch }: IPropType) => {
  const router = useRouter()

  const isActiveLink = (category: ICategory) => {
    return category.attributes.Slug === router.query.category;
  }

  return (
    <div className="border-b-2 border-gray-200 flex flex-row justify-between">
      <ul className="flex flex-row">
        <Link href="/">
          <li
            className={
              'p-4 mr-2 ' +
              `${
                router.pathname === '/'
                  ? 'text-primary border-b-4 border-primary'
                  : 'text-gray-400'
              }`
            }
          >
            Recents
          </li>
        </Link>
        {categoriesItems.map((category) => (
          <Link href={`/category/${category.attributes.Slug}`} key={category.id}>
            <li
              className={
                'p-4 mr-2 ' +
                `${
                  isActiveLink(category)
                    ? 'text-primary border-b-4 border-primary'
                    : 'text-gray-400'
                }`
              }
            >
              {category.attributes.Title}
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex items-center">
                <svg
                    className="h-4 fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
                <input
                    onChange={(e) => handleOnSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="outline-none px-2 py-1 ml-1"
                />
        </div>
    </div>
  )
}

export default Tabs
