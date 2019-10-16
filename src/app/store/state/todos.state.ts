import { IToDo } from 'src/app/interfaces/todo.interface';
import { EntityState } from '@ngrx/entity';

export interface ITodosState extends EntityState<IToDo> {
    lastUpdate: Date,
    selectedTodoId: number
}

export const initialTodosState: ITodosState = {
    ids: [],
    entities: {},
    selectedTodoId: null,
    lastUpdate: null
};