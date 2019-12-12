import { EventType, SuitColor } from '../domain';

export interface RuleEventTypeVsSuitColor {
  'event-type': EventType[];
  'suit-color': SuitColor[];
}
