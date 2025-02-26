import { UniqueEntityID } from "../../src/core/entities/unique-entity-id"
import { Question, QuestionProps } from "../../src/domain/forum/enterprise/entities/question"


export function makeQuestion(override: Partial<QuestionProps> = {}) {
    const question = Question.create({
        authorId: new UniqueEntityID(),
        title: 'Example',
        content: 'Example content',
        ...override,
    })

    return question
}