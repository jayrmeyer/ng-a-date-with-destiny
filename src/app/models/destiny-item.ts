import {
  DestinyInventoryItemDefinition,
  DestinyInventoryBucketDefinition } from './destiny-definitions';
import { ItemLocation } from './destiny';

export class DestinyItemComponent {
  itemHash: number;
  item: DestinyInventoryItemDefinition;
  itemInstanceId: number;
  quantity: number;
  bindStatus: number;
  location: ItemLocation;
  bucketHash: number;
  bucket: DestinyInventoryBucketDefinition;
  transferStatus: number;
  lockable: boolean;
  state: number;
}
