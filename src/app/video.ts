export interface Video {
  snippet: {
    publishedAt: string,
    title: string,
    thumbnails: {
      default: Thumbnail,
      medium: Thumbnail,
      high: Thumbnail,
      standard: Thumbnail,
      maxres: Thumbnail,
    },
  },
  statistics: {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    favoriteCount: string,
    commentCount: string,
  },
}

interface Thumbnail {
  url: string,
  width: number,
  height: number,
}
