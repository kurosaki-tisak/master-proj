import { SuitType } from '../domain';

export interface EventType {
    id: Number;
    title: string;
    'suit-type': SuitType[];
}
