/**
 * 排行榜组件
 */
import React, { useEffect } from 'react'
import Scroll from '@/base-ui/scroll'
import { useSelector, useDispatch } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import { RankListContainer, RankList, ListItem } from './style'

function Rank(props) {
  // 连接 redux
  const { rankList, loading } = useSelector((state) => ({
    rankList: state.rank.rankList,
    loading: state.rank.loading,
  }))
  const dispatch = useDispatch()
  const getRankListDispatch = () => {
    dispatch(actionTypes.getRankList())
  }

  useEffect(() => {
    if (!rankList.length) {
      getRankListDispatch()
    }
  })

  return (
    <RankListContainer>
      <Scroll>
        <div>
          {rankList.map((item) => {
            return (
              <RankList key={item.id}>
                <ListItem hasTracks={item.tracks.length}>
                  <div className='img-wrapper'>
                    <img
                      width='100px'
                      height='100px'
                      src={item.coverImgUrl}
                      alt={item.name}
                    />
                  </div>
                  <div className='desc-wrapper'>
                    <span className='name'>{item.name}</span>
                    <span className='desc'>{item.description}</span>
                  </div>
                </ListItem>
              </RankList>
            )
          })}
        </div>
      </Scroll>
    </RankListContainer>
  )
}

export default React.memo(Rank)
