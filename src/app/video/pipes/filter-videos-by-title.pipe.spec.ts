import { FilterVideosByTitlePipe } from './filter-videos-by-title.pipe';

describe('FilterVideosByTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterVideosByTitlePipe();
    expect(pipe).toBeTruthy();
  });
});
