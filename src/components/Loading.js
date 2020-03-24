import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import { LoadingIcon } from './Styling'

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <LoadingIcon>
      {isLoading && (
        <Loader
          type="BallTriangle"
          color="#f2acad"
          height={150}
          width={150}
        />)}
    </LoadingIcon>
  )
}