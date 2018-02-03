export const loadPage = state => {
  state.isLoaded = true
}

export const search = (state, value) => {
  state.search = value
}

export const movies = (state, value) => {
  state.movies = value
}

export const clearMovies = (state) => {
  state.movies = []
}

export const loadMovies = (state, value) => {
  state.loadMovies = value
}

export const moviesCount = (state, value) => {
  state.moviesCount = value
}
