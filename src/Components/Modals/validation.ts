import * as Yup from "yup";

export const Validation = Yup.object({
    content: Yup.string().required("content is required field"),
    author: Yup.string().required("author is required field"),
    tags: Yup.string().required("tags is required field"),
});