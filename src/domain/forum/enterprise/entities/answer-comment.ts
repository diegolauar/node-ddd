
import { Comment, CommentProps } from './comment'
import { Optional } from "../../../../core/entities/types/optional"
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"


export interface AnswerCommentProps extends CommentProps {
    answerId: UniqueEntityID
}

export class AnswerComment extends Comment<AnswerCommentProps> {
    get answerId() {
        return this.props.answerId
    }

    static create(
        props: Optional<AnswerCommentProps, 'createdAt'>,
        id?: UniqueEntityID,
    ) {
        const answerComment = new AnswerComment(
            {
                ...props,
                createdAt: props.createdAt ?? new Date(),
            },
            id,
        )

        return answerComment
    }
}