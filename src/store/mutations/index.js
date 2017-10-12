import TodoMutation from './todo.mutation';
import NewsMutation from './news.mutation';
export default {
    ...TodoMutation,
    ...NewsMutation
}