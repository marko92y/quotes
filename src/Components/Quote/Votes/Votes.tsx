import { FC } from "react";
import styles from "./Votes.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface VotesProps {
  upVote: () => void;
  downVote: () => void;
}

function getColor(value: number) {
  const hue = ((0 + value / 100) * 120).toString(10);
  return ["hsl(", hue, ",100%,50%)"].join("");
}

const Votes: FC<VotesProps> = () => {
  const color = getColor(50);
  return (
    <div className={styles.container}>
      <button>
        <FontAwesomeIcon onClick={() => console.log("sss")} icon={faCaretUp} />
      </button>
      <div className={styles.scoreContainer}>
        <p style={{ color: color }}>68%</p>
        <div>88/25</div>
      </div>
      <button>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
    </div>
  );
};

export default Votes;
