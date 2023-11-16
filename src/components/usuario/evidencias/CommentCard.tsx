"use client";

import useFetchAuthorData from "@/hooks/useFetchAuthorData";
import { useUserStore } from "@/store/useUserStore";
import { IAuthor, IComment } from "@/utils/customTypes";
import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

type TProps = {
  comment: IComment;
  author: IAuthor | undefined;
  deleteComment: (commentId: number) => void;
};

const CommentCard = ({ comment, author, deleteComment }: TProps) => {
  const user = useUserStore((state) => state.user);

  async function handleDeleteComment() {
    if (comment.author === user?._id) {
      deleteComment(comment._id);
    }
  }

  return (
    <div className="flex w-full justify-start gap-4 border-b border-b-stone-300 p-2 pb-6">
      <div className="relative aspect-square h-32 w-32 min-w-[128px] rounded-full max-sm:h-20 max-sm:w-20 max-sm:min-w-[80px]">
        {author ? (
          <Image
            src={author.avatar}
            fill
            alt="Avatar del autor del comentario"
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="relative w-full rounded-lg border-2 border-stone-300 px-4 py-3 pr-14">
        {comment.author === user?._id ? (
          <button
            className="absolute right-3 top-3 grid h-10 w-10 place-content-center rounded-xl transition-all hover:scale-110 hover:bg-stone-100"
            onClick={() => handleDeleteComment()}
          >
            <TrashIcon className="h-6 text-red-500" />
          </button>
        ) : null}
        <p>{comment.content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
