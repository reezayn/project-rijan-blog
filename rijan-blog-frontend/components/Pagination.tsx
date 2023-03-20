import React from 'react'
import qs from 'qs'
import { TDirection } from '../types'
import { useRouter } from 'next/router'
interface IPropType {
  page: number
  pageCount: number
  redirectUrl?: string
}

const Pagination = ({ page, pageCount, redirectUrl = '/' }: IPropType) => {
  const router = useRouter()

  const isNextDisabled = (): boolean => {
    return page >= pageCount
  }

  const isPrevDisabled = (): boolean => {
    return page <= 1
  }

  const handlePaginate = async (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) {
      return
    }

    if (direction === -1 && isPrevDisabled()) {
      return
    }
    const queryString = qs.stringify({
      ...router.query,
      page: page + direction,
    })

    router.push(`${redirectUrl}?${queryString}`)
  }
  return (
    <div className="flex flex-row w-full justify-center text-white">
      <button
        onClick={() => handlePaginate(-1)}
        className={`${'p-2 w-20 rounded-md mx-2 bg-primary'} ${
          isPrevDisabled() ? 'disabled' : ''
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className={`${'p-2 w-20 rounded-md mx-2 bg-primary'} ${
          isNextDisabled() ? 'disabled' : ''
        }`}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
