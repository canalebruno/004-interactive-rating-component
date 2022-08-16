import { useState } from "react";
import styles from "./styles.module.scss";
import ThankYouCard from "./ThankYouCard";

export default function RatingCard() {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRating(value: number) {
    const newRating = value;

    setRating(newRating);
  }

  function handleSubmit() {
    if (rating > 0) {
      setIsSubmitted(true);
    }
  }

  return (
    <div
      className={`${styles.container} ${
        isSubmitted && styles.thankYouContainer
      }`}
    >
      {isSubmitted && (
        <>
          <img
            src="illustration-thank-you.svg"
            alt="Illustration Submitted Rating"
          />
          <div className={styles.ratingScore}>
            You selected {rating} out of 5
          </div>
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </>
      )}
      {!isSubmitted && (
        <>
          <div className={styles.star}>
            <img src="icon-star.svg" alt="Star" />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className={styles.ratingButtonsContainer}>
            <button
              onClick={() => handleRating(1)}
              className={`${styles.ratingButton} ${
                rating === 1 && styles.active
              }`}
            >
              1
            </button>
            <button
              onClick={() => handleRating(2)}
              className={`${styles.ratingButton} ${
                rating === 2 && styles.active
              }`}
            >
              2
            </button>
            <button
              onClick={() => handleRating(3)}
              className={`${styles.ratingButton} ${
                rating === 3 && styles.active
              }`}
            >
              3
            </button>
            <button
              onClick={() => handleRating(4)}
              className={`${styles.ratingButton} ${
                rating === 4 && styles.active
              }`}
            >
              4
            </button>
            <button
              onClick={() => handleRating(5)}
              className={`${styles.ratingButton} ${
                rating === 5 && styles.active
              }`}
            >
              5
            </button>
          </div>
          <button onClick={handleSubmit} className={styles.submitButton}>
            SUBMIT
          </button>
        </>
      )}
    </div>
  );
}
