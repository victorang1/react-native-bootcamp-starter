import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPostItem } from '../../interfaces'

interface PostState {
  posts: IPostItem[];
}

const initialState = { 
    posts: []
} as PostState

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
      savePost(state, action: PayloadAction<IPostItem[]>) {
          state.posts = action.payload;
      },
      addPost(state, action: PayloadAction<IPostItem>) {
          action.payload.id = state.posts.length + 1;
          state.posts.unshift(action.payload);
      }

  },
})

export const { savePost, addPost } = postSlice.actions
export default postSlice.reducer