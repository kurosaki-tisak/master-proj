import { SuitType, SuitColor, SuitPart } from '../domain';

export interface MockRecommed {
  id: string;
  'suit-type': SuitType;
  'suit-color': SuitColor;
  'suit-part': SuitPart[];
}
