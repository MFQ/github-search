const proxy = (url) => `https://cors-anywhere.herokuapp.com/${url}`

const GithubBaseURL = 'https://api.github.com'

export const searchRepoUrl = (query) =>
  `${GithubBaseURL}/search/repositories?q=topic:${query}`
