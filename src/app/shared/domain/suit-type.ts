import { SuitPart } from '../domain';

export interface SuitType {
  id: Number;
  title: string;
  'suit-part': SuitPart[];
}
