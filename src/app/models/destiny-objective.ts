import { DestinyDisplayPropertiesDefinition } from './general-models';

export class DestinyObjectiveDefinition {
  displayProperties: DestinyDisplayPropertiesDefinition;
  completionValue: number;
  locationHash: number;
  // location???
  allowNegativeValue: boolean;
  allowValueChangeWhenCompleted: boolean;
  isCountingDownward: boolean;
  valueStyle: number;
  progressDescription: string;
  perks: DestinyObjectivePerkEntryDefinition;
  stats: DestinyObjectiveStatEntryDefinition;
  hash: number;
  index: number;
  redacted: boolean;
}

export class DestinyObjectivePerkEntryDefinition {

}

export class DestinyObjectiveStatEntryDefinition {

}
