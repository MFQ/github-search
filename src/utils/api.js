const GithubBaseURL = 'https://api.github.com'

export const searchRepoUrl = (query) =>
  `${GithubBaseURL}/search/repositories?q=topic:${query}`
