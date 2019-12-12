import { EventType, SuitPart } from '../domain';

export interface RuleEventTypeVsSuitPart {
  'event-type': EventType[];
  'suit-part': SuitPart[];
}
