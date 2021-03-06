import React from 'react'
import styled, { keyframes } from 'styled-components'
import style from '@/assets/css/global-style'

const loading = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`

const LoadingWrapper = styled.div`
  > div {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 60px;
    height: 60px;
    margin: auto;
    border-radius: 50%;
    opacity: 0.6;
    background-color: ${style['theme-color']};
    animation: ${loading} 1.2s infinite ease-in;
  }
  > div:nth-child(2) {
    animation-delay: -0.6s;
  }
`

function Loading() {
  return (
    <LoadingWrapper>
      <div></div>
      <div></div>
    </LoadingWrapper>
  )
}

export default React.memo(Loading)
