import { BodyObj } from '.';

export interface Customer {
  id: string;
  prefix: string;
  name: string;
  lastname: string;
  address: string;
  'sub-district': string;
  district: string;
  province: string;
  mobile: Number;
  bodytype: string;
  'body-obj': BodyObj;
}
