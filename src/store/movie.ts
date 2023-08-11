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
    movies: [] as Movies,
    movieInfo: {} as MovieInfo,
  }),
  getters: {
    filteredMovies(state) {
      if (!state.movies) return
      return state.movies
        .map((movie) => ({
          ...movie,
          Year: movie.Year.slice(0, 4),
        }))
        .sort((a, b) => Number(b.Year) - Number(a.Year))
    },
  },
  actions: {
    async fetchMovies({ title, page }: { title: string; page: number }) {
      const res = await axios.post('/api/fetchAPI', {
        path: `s=${title}&page=${page}`,
      })
      const { Search } = await res.data
      this.movies = Search
    },
    async fetchMovieInfo({ id, plot = 'full' }: { id: string; plot: string }) {
      const res = await axios.post('/api/fetchAPI', {
        path: `i=${id}&plot=${plot}`,
      })
      this.movieInfo = await res.data
    },
  },
})
