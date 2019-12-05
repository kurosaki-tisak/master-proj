import { SuitPart, SuitColor } from '../domain';

export interface SuitType {
  id: Number;
  title: string;
  'suit-part': SuitPart[];
  'suit-color': SuitColor[];
}
