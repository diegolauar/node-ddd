import { randomUUID } from "node:crypto"

interface AwnserProps {
    content: string,
    authorId: string,
    questionId: string,
}


export class Answer {
    public id: string
    public content: string
    public authorId: string
    public questionId: string

    constructor(props: AwnserProps, id?: string) {
        this.content = props.content
        this.authorId = props.authorId
        this.questionId = props.questionId
        this.id = id ?? randomUUID()
    }
}