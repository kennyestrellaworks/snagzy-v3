import { createContext, useContext, useMemo } from "react";
import { reviews } from "../data/reviews";

const ReviewsAnalyticsContext = createContext();

export const ReviewsAnalyticsProvider = ({ children }) => {
  const getAllReviews = () => {
    return reviews;
  };

  const reviewsAnalyticsValue = useMemo(() => {
    // Get all reviews using productId.
    const getAllReviewsByProductId = (productId) => {
      return getAllReviews().filter(
        (review) => review.orderInfo?.productId === productId,
      );
    };

    // Get all reviews of a variant using a list of reviews by product.
    const getVariantReviewsInAProductReviews = (variantId, productReviews) => {
      return productReviews.filter(
        (review) => review.orderInfo?.variantId === variantId,
      );
    };

    // Get average rating by product.
    const getAverageRating = (productReviews) => {
      const totalRating = productReviews.reduce(
        (sum, review) => sum + (review.rating || 0),
        0,
      );
      return (totalRating / productReviews.length).toFixed(1);
    };

    // Get average rating by product.
    const getVariantRatingAverage = (variantId, productReviews) => {
      const variantReviews = productReviews.filter(
        (review) => review.orderInfo?.variantId === variantId,
      );
      if (variantReviews.length === 0) return "N/A";
      const totalRating = variantReviews.reduce(
        (sum, review) => sum + (review.rating || 0),
        0,
      );
      return (totalRating / variantReviews.length).toFixed(1);
    };

    return {
      getAllReviewsByProductId,
      getVariantReviewsInAProductReviews,
      getAverageRating,
      getVariantRatingAverage,
    };
  }, [reviews]);

  return (
    <ReviewsAnalyticsContext.Provider
      value={{ reviewsAnalyticsValue, getAllReviews }}
    >
      {children}
    </ReviewsAnalyticsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useReviewsAnalytics = () => useContext(ReviewsAnalyticsContext);
