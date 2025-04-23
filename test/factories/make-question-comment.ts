import { faker } from '@faker-js/faker'
import { QuestionComment, QuestionCommentProps } from '../../src/domain/forum/enterprise/entities/question-comment'
import { UniqueEntityID } from '../../src/core/entities/unique-entity-id'


export function makeQuestionComment(
    override: Partial<QuestionCommentProps> = {},
    id?: UniqueEntityID,
) {
    const question = QuestionComment.create(
        {
            authorId: new UniqueEntityID(),
            questionId: new UniqueEntityID(),
            content: faker.lorem.text(),
            ...override,
        },
        id,
    )

    return question
}