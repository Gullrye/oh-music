import React from "react"
import { Redirect } from 'react-router-dom'
import Home from '../views/Home'
import Recommend from '../views/Recommend'
import Singers from '../views/Singers'
import Rank from '../views/Rank'

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        // 精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件
        exact: true,
        render: () => {
          <Redirect to={'/recommend'} />
        }
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/singers',
        component: Singers
      },
      {
        path: '/rank',
        component: Rank
      }
    ]
  }
]

export default routes
