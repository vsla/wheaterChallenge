import moment, { Moment } from "moment";

export interface wheaterInterface {
  min: number;
  max: number;
  date: string,
  temp: number;
}

export type wheaterWeekInterface = wheaterInterface[];

export type cityInterface = string;

export interface stateInterface  {
  weeek: Array<wheaterInterface> | [];
  city: cityInterface;
}
