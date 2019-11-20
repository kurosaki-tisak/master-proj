import { SubSuitPart } from '../domain';

export interface SuitPart {
  id: Number;
  title: string;
  sub: SubSuitPart[];
}
