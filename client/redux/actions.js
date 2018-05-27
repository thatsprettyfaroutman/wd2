import * as api from 'Client/api'

import {
  SET_SPLASH_SHOWING,
  SET_BLOG_POSTS,
} from './types'


export const setSplashShowing = bool => ({
  type: SET_SPLASH_SHOWING,
  payload: bool
})


export const getBlogPosts = () => async dispatch => {
  const blogPosts = await api.getBlogPosts()
  dispatch({
    type: SET_BLOG_POSTS,
    payload: blogPosts,
  })
}
