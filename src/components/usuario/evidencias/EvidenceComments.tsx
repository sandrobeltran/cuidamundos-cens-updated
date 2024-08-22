import React, { useEffect, useState } from "react";
import Button from "../../Button";
import TextArea from "../../form/TextArea";
import { Form, Formik, FormikState } from "formik";
import { IComment } from "@/utils/customTypes";
import { postCommentValdationSchema } from "@/utils/validations";
import { useParams } from "next/navigation";
import CommentCard from "./CommentCard";
import useFetchAuthorData from "@/hooks/useFetchAuthorData";
import { useAuthorsStore } from "@/store/useAuthorsStore";
import { customFetch } from "@/utils/customFetch";

type TProps = {
  comments: IComment[];
};

const EvidenceComments = ({ comments }: TProps) => {
  const { id: evidenceId } = useParams();
  const [currentComments, setCurrentComments] = useState<IComment[]>(comments);
  const authorsStore = useAuthorsStore();
  // ? Array to pass to the server
  let newAuthorsId: string[] = [];

  // ? Delete repeating elements
  currentComments.forEach((e) =>
    !newAuthorsId.includes(e.author) ? newAuthorsId.push(e.author) : null,
  );

  // ? Delete existing elements
  newAuthorsId = newAuthorsId.filter(
    (e) => !authorsStore.authors.map((e) => e._id).includes(e),
  );

  const authors = useFetchAuthorData({ authorsId: newAuthorsId });

  type TInitialValues = {
    content: string;
  };

  const initialValues: TInitialValues = {
    content: "",
  };

  async function handleSubmit(
    values: TInitialValues,
    reset: (
      nextState?: Partial<FormikState<TInitialValues>> | undefined,
    ) => void,
  ) {
    const token = localStorage.getItem("session-token");

    const req = await customFetch(
      `/usuario/evidencias/${evidenceId}/api/comentarios`,
      {
        method: "PUT",
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      },
    );
    const res = await req.json();

    setCurrentComments(res.data);

    reset();
  }

  async function deleteComment(commentId: number) {
    const token = localStorage.getItem("session-token");

    const req = await customFetch(
      `/usuario/evidencias/${evidenceId}/api/comentarios`,
      {
        method: "DELETE",
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ commentId }),
      },
    );
    const res = await req.json();

    setCurrentComments(res.data);
  }

  useEffect(() => {}, []);

  return (
    <div className="flex w-full flex-col items-start justify-start gap-12">
      {/* NEW COMMENT */}
      <div className="flex w-full flex-col items-start justify-start gap-4">
        <h4 className="text-lg font-medium text-cens-brand">
          Comentarios ({currentComments.length})
        </h4>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
          validationSchema={postCommentValdationSchema}
        >
          <Form className="flex w-full flex-col items-end gap-4 text-stone-900">
            <TextArea
              placeholder="Agregar comentario"
              name="content"
              rows={4}
            />
            <Button type="submit" hierarchy="primary" size="md">
              Comentar
            </Button>
          </Form>
        </Formik>
      </div>

      {/* COMMENTS LIST */}
      <div className="flex w-full flex-col items-center justify-center gap-5">
        {currentComments.length && authorsStore.authors.length ? (
          currentComments.map((comment) => (
            <CommentCard
              comment={comment}
              deleteComment={deleteComment}
              key={comment._id}
              author={authorsStore.authors.find(
                (e) => e._id === comment.author,
              )}
            />
          ))
        ) : (
          <div className="text-center font-normal text-stone-500">
            No hay comentarios disponibles
          </div>
        )}
      </div>
    </div>
  );
};

export default EvidenceComments;
