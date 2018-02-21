import { DestinyDestinationDefinition } from './destiny-activity';

export class DestinyVendorDefinition {

}

export class DestinyFactionVendorDefinition {
  vendorHash: number;
  vendor: DestinyVendorDefinition;
  destinationHash: number;
  destination: DestinyDestinationDefinition;
  backgroundImagePath: string;
}
