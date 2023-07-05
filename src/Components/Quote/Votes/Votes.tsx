import { FC, useState } from "react";
import styles from "./Votes.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface VotesProps {
  upvotesCount: number;
  downvotesCount: number;
  givenVote: string;
}

const Votes: FC<VotesProps> = ({ upvotesCount, downvotesCount, givenVote }) => {
  const countPrecentage = Math.round(
    (100 / (upvotesCount + downvotesCount)) * upvotesCount
  );
  const color = getColor(countPrecentage);
  const [vote, setVote] = useState(givenVote);

  return (
    <div className={styles.container}>
      <button className={`${vote === "upvote" && styles.buttonActive}`}>
        <FontAwesomeIcon onClick={() => console.log("sss")} icon={faCaretUp} />
      </button>
      <div className={styles.scoreContainer}>
        <p style={{ color: color }}>{countPrecentage}</p>
        <div>
          {upvotesCount}/{downvotesCount}
        </div>
      </div>
      <button className={`${vote === "downvote" && styles.buttonActive}`}>
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
