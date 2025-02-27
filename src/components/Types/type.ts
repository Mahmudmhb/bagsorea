export type TReview = {
  user: string;
  rating: number; // 1 to 5 stars
  comment: string;
  imageUrl: string; // URL to user's image
};

export type TBags = {
  id: number;
  name: string;
  price: string; // "$99.99" (Consider using `number` if needed)
  imageUrl: string;
  description: string;
  reviews: TReview[];
};

export type TBagsResponse = {
  bags: TBags[];
};
