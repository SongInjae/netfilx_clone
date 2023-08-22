import { defineStore } from 'pinia'
import axios from 'axios'

type Movies = Movie[]
interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface MovieInfo {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export const useMovieStore = defineStore('movie', {
  state: () => ({
    loading: false as boolean,
    movies: [] as Movies,
    movieInfo: {} as MovieInfo,
  }),
  actions: {
    async fetchMovies({
      title,
      page,
      newFind,
    }: {
      title: string
      page: number
      newFind: boolean
    }) {
      if (this.loading) return
      this.loading = true
      try {
        const res = await axios.post('/api/fetchAPI', {
          path: `s=${title}&page=${page}`,
        })
        const { Search, totalResults } = await res.data
        if (!totalResults) {
          alert('검색결과가 없습니다.')
          return
        }
        if (!Search) {
          alert('마지막 페이지 입니다.')
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
          return
        }
        if (newFind) this.movies = Search
        else this.movies = this.movies.concat(Search)
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async fetchMovieInfo({ id, plot = 'full' }: { id: string; plot?: string }) {
      if (this.loading) return
      this.loading = true
      try {
        const res = await axios.post('/api/fetchAPI', {
          path: `i=${id}&plot=${plot}`,
        })
        this.movieInfo = await res.data
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  },
})
