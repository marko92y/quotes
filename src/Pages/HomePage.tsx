import { useGetQuotesQuery } from "features/api/apiSlice";
import styles from "./HomePage.module.scss";

import Quote from "Components/Quote/Quote";
import { Button } from "Components/Buttons/Button";
import { Modal } from "Components/Modals/Modal";
import { useState } from "react";

export const HomePage = () => {
  const { data: quotes, isLoading, isSuccess } = useGetQuotesQuery();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quotes</h1>
      {isLoading && "Loading ..."}
      {isSuccess && quotes.quotes.map((item) => <Quote quote={item} />)}
      <Modal isOpen={openModal} setOpenModal={setOpenModal} />
      <Button onClick={() => setOpenModal(true)} text="add quote" />
    </div>
  );
};
