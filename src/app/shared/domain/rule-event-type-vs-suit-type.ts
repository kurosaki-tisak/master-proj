import { EventType, SuitType } from '../domain';

export interface RuleEventTypeVsSuitType {
  'event-type': EventType[];
  'suit-type': SuitType[];
}
