import instance from '@/utils/request'

// 轮播图数据
export const getBannerListRequest = () => {
  return instance.get('/banner?type=0')
}
// 推荐歌单
export const getRecommendListRequest = () => {
  return instance.get('/personalized')
}
// 热门歌手
export const getHotSingerListRequest = (count) => {
  return instance.get(`/top/artists?offset=${count}`)
}
// 歌手分类列表
export const getSingerListRequest = (category, area, alpha, count) => {
  return instance.get(
    `/artist/list?type=${category}&area=${area}&initial=${alpha.toLowerCase()}&offset=${count}`
  )
}
