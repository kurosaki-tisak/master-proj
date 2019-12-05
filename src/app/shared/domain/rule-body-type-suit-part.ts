import { SuitPart, BodyType } from '../domain';

export interface RuleBodyTypeSuitPart {
  'body-type': BodyType;
  'suit-part': SuitPart[];
}
