import { FC } from "react";
import styles from "./Quote.module.scss";
import { QuoteType } from "Interfaces/QuotesType";
import Votes from "./Votes/Votes";

interface QuoteProps {
  quote: QuoteType;
}

const Quote: FC<QuoteProps> = ({ quote }) => {
  console.log(quote);
  return (
    <div className={styles.container}>
      <Votes
        upvotesCount={quote.upvotesCount}
        downvotesCount={quote.downvotesCount}
        givenVote={quote.givenVote}
      />
      <div className={styles.quoteContainer}>
        <p className={styles.quote}>{quote.content}</p>
        <p className={styles.author}>- {quote.author}</p>
      </div>
    </div>
  );
};

export default Quote;
