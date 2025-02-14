import { Entity } from "../../core/entities/entity"

interface AwnserProps {
    content: string,
    authorId: string,
    questionId: string,
}


export class Answer extends Entity<AwnserProps> {
    get content() {
        return this.props.content
    }
}