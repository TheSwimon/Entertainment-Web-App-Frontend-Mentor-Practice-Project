interface ThumbnailSize {
  small: string;
  medium?: string;
  large: string;
}

interface Thumbnail {
  trending?: ThumbnailSize;
  regular: ThumbnailSize;
}

interface Post {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface TrendingThumbnail {
  trending: ThumbnailSize;
  regular: ThumbnailSize;
}

type TrendingPost = {
  title: string;
  thumbnail: TrendingThumbnail;
  year: number;
  category: "Movie" | "TV Series";
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};

interface PostProps {
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
}
