import { Moment } from "moment";

export interface wheaterInterface {
  min: number;
  max: number;
  date: Moment;
  temp: number;
}

export type wheaterWeekInterface = wheaterInterface[];

export type city = string;
