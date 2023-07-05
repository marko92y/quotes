import { FC } from "react";
import {
  useUpvoteQuoteMutation,
  useUpvoteQuoteDeleteMutation,
  useDownvoteQuoteMutation,
  useDownvoteQuoteDeleteMutation,
} from "features/api/apiSlice";
import styles from "./Votes.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface VotesProps {
  quoteId: string;
  upvotesCount: number;
  downvotesCount: number;
  givenVote: string;
}

const Votes: FC<VotesProps> = ({
  upvotesCount,
  downvotesCount,
  givenVote,
  quoteId,
}) => {
  const [upvoteQuote] = useUpvoteQuoteMutation();
  const [upvoteQuoteDelete] = useUpvoteQuoteDeleteMutation();
  const [downvoteQuote] = useDownvoteQuoteMutation();
  const [downvoteQuoteDelete] = useDownvoteQuoteDeleteMutation();
  const countPrecentage = Math.round(
    (100 / (upvotesCount + downvotesCount)) * upvotesCount
  );
  const color = getColor(countPrecentage);

  return (
    <div className={styles.container}>
      <button
        className={`${givenVote === "upvote" && styles.buttonActive}`}
        onClick={() => {
          if (givenVote === "upvote") {
            upvoteQuoteDelete(quoteId);
          } else if (givenVote === "downvote") {
            downvoteQuoteDelete(quoteId);
            upvoteQuote(quoteId);
          } else {
            upvoteQuote(quoteId);
          }
        }}
      >
        <FontAwesomeIcon onClick={() => console.log("sss")} icon={faCaretUp} />
      </button>
      <div className={styles.scoreContainer}>
        <p style={{ color: color }}>{countPrecentage}</p>
        <div>
          {upvotesCount}/{downvotesCount}
        </div>
      </div>
      <button
        className={`${givenVote === "downvote" && styles.buttonActive}`}
        onClick={() => {
          if (givenVote === "downvote") {
            downvoteQuoteDelete(quoteId);
          } else if (givenVote === "upvote") {
            upvoteQuoteDelete(quoteId);
            downvoteQuote(quoteId);
          } else {
            downvoteQuote(quoteId);
          }
        }}
      >
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
    </div>
  );
};

function getColor(value: number) {
  const hue = ((0 + value / 100) * 120).toString(10);
  return ["hsl(", hue, ",100%,50%)"].join("");
}

export default Votes;
