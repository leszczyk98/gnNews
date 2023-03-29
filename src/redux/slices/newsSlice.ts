import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export type NewsItem = {
  title: string
  author: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
  source: {
    id: string
    name: string
  }
}

type Country = {
  articles: NewsItem[]
  totalArticles: number
}

type NewsState = {
  byCountry: { [key: string]: Country }
  isLoading: boolean
}

const initialState: NewsState = {
  byCountry: {},
  isLoading: false,
}

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (country: string) => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country,
          apiKey: process.env.REACT_APP_NEWS_API_KEY,
        },
      })
      return {
        country,
        news: response.data,
      }
    } catch (e) {
      console.log(e)
    }
  }
)

export const countryNewsSlice = createSlice({
  name: 'countryNews',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        const country = action.payload?.country
        const news = action.payload?.news
        if (country) {
          state.isLoading = false
          state.byCountry = {
            ...state.byCountry,
            [country]: {
              articles: news.articles,
              totalArticles: news.articles.length,
            },
          }
        }
      })
      .addCase(fetchNews.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default countryNewsSlice.reducer
