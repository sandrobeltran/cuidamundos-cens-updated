"use client"

import useFetchAuthorData from '@/hooks/useFetchAuthorData'
import { IAuthor, IComment } from '@/utils/customTypes'
import Image from 'next/image'
import React from 'react'

type TProps = {
    comment: IComment,
    author: IAuthor | undefined
}

const CommentCard = ({ comment, author }: TProps) => {

    return (
        <div
            className="flex w-full justify-start gap-4 border-b border-b-stone-300 p-2 pb-6"
        >
            <div className="aspect-square min-w-[128px] relative h-32 w-32 rounded-full">
                {author ? <Image src={author.avatar} fill alt='Avatar del autor del comentario' /> : <p>Loading...</p>}
            </div>
            <div className="w-full rounded-lg border-2 border-stone-300 px-4 py-3">
                <p>
                    {comment.content}</p>
            </div>
        </div>
    )
}

export default CommentCard