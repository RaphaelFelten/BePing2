/* tslint:disable */
/* eslint-disable */
import { TournamentSerieEntry } from './tournament-serie-entry';
export interface TournamentEntry {
  DateFrom: string;
  DateTo: string;
  ExternalIndex: string;
  Level: string;
  Name: string;
  RegistrationDate: string;
  SerieCount: number;
  SerieEntries: Array<TournamentSerieEntry>;
  UniqueIndex: number;
  Venue?: {  };
}
