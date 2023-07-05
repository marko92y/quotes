import { useGetQuotesQuery } from "features/api/apiSlice";
import styles from "./HomePage.module.scss";

import Quote from "Components/Quote/Quote";

export const HomePage = () => {
  const {
    data: quotes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetQuotesQuery();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quotes</h1>
      {isSuccess && quotes.quotes.map((item) => <Quote quote={item} />)}
    </div>
  );
};
