import React from 'react'
import styled from 'styled-components'
import style from '@/assets/css/global-style'

const LoadingWrapper = styled.div`
  & > div {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    svg path,
    svg rect {
      fill: ${style['theme-color']};
    }
  }
`

function Loading() {
  return (
    <LoadingWrapper>
      <div>
        <svg x='0px' y='0px' width='24px' height='30px'>
          <rect x='0' y='13' width='4' height='5' fill='#7a88fe'>
            <animate
              attributeName='height'
              values='5;21;5'
              begin='0s'
              dur='0.6s'
              repeatCount='indefinite'
            />
            <animate
              attributeName='y'
              values='13; 5; 13'
              begin='0s'
              dur='0.6s'
              repeatCount='indefinite'
            />
          </rect>
          <rect x='10' y='13' width='4' height='5' fill='#7a88fe'>
            <animate
              attributeName='height'
              values='5;21;5'
              begin='0.15s'
              dur='0.6s'
              repeatCount='indefinite'
            />
            <animate
              attributeName='y'
              values='13; 5; 13'
              begin='0.15s'
              dur='0.6s'
              repeatCount='indefinite'
            />
          </rect>
          <rect x='20' y='13' width='4' height='5' fill='#7a88fe'>
            <animate
              attributeName='height'
              values='5;21;5'
              begin='0.3s'
              dur='0.6s'
              repeatCount='indefinite'
            />
            <animate
              attributeName='y'
              values='13; 5; 13'
              begin='0.3s'
              dur='0.6s'
              repeatCount='indefinite'
            />
          </rect>
        </svg>
      </div>
    </LoadingWrapper>
  )
}

export default React.memo(Loading)
