import { FC } from "react";
import { useAddQuoteMutation } from "features/api/apiSlice";
import styles from "./Modal.module.scss";
import ReactModal from "react-modal";
import { useFormik } from "formik";
import { TextField } from "Components/Inputs/TextField";
import { Button } from "Components/Buttons/Button";
import { Validation } from "./validation";

interface ModalProps {
  isOpen: boolean;
  setOpenModal: (e: boolean) => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, setOpenModal }) => {
  const [addQuoteMutation] = useAddQuoteMutation();
  const formik = useFormik({
    initialValues: {
      content: "",
      author: "",
      tags: "",
    },
    validationSchema: Validation,
    onSubmit: (values) => {
      addQuoteMutation({
        ...formik.values,
        tags: formik.values.tags.split(",").map((e) => e.trim()) || [
          formik.values.tags,
        ],
      });
      setOpenModal(false);
      formik.resetForm();
    },
  });
  return (
    <ReactModal
      className={styles.modal}
      isOpen={isOpen}
      onRequestClose={() => {
        setOpenModal(false);
      }}
    >
      <div className={styles.container}>
        <button className={styles.button} onClick={() => setOpenModal(false)}>
          X
        </button>
        <TextField
          label={"add content"}
          name="content"
          value={formik.values.content}
          onChange={formik.handleChange}
          error={
            formik.submitCount && formik.touched["content"]
              ? formik.errors["content"]
              : undefined
          }
        />
        <TextField
          label={"add author"}
          name="author"
          value={formik.values.author}
          onChange={formik.handleChange}
          error={
            formik.submitCount && formik.touched["author"]
              ? formik.errors["author"]
              : undefined
          }
        />
        <TextField
          placeholder="wisdom, sky, run"
          label={"add tags"}
          name="tags"
          value={formik.values.tags}
          onChange={formik.handleChange}
          error={
            formik.submitCount && formik.touched["tags"]
              ? formik.errors["tags"]
              : undefined
          }
        />
        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
          text={"add quote"}
        />
      </div>
    </ReactModal>
  );
};
