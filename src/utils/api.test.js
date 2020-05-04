
import { searchRepoUrl } from "./api";

describe('API', () => {
  it('searchRepoUrl', () => {
    expect(searchRepoUrl("test")).toEqual(`https://api.github.com/search/repositories?q=topic:test`);
  })
});
