import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

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

const LoadingIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1em;
`
