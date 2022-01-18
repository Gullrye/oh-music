import instance from '@/utils/request'

// 轮播图数据
export const getBannerListRequest = () => {
  return instance.get('/banner?type=0')
}
// 推荐歌单
export const getRecommendListRequest = () => {
  return instance.get('/personalized')
}
