import styled from 'styled-components'

export const RankList = styled.div``
export const ListItem = styled.div`
  display: flex;
  padding: 5px 5px 0 5px;
  border-bottom: 1px solid #eee;
  .img-wrapper {
    img {
      border-radius: 8px;
    }
  }
  .desc-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 5px 10px 5px 5px;
    .name {
      color: ${(props) => (props.hasTracks ? '#7a88fe' : '#000')};
      font-weight: ${(props) => (props.hasTracks ? 'bold' : 'normal')};
      font-size: 16px;
      padding-bottom: 10px;
    }
    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-height: 22px;
    }
  }
`
export const RankListContainer = styled.div`
  position: fixed;
  top: 94px;
  bottom: 0;
  left: 0;
  right: 0;
`
