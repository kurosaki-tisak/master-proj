export interface Order {
  id: string;
  'suit-type': BaseOrderDetail;
  'suit-part': TransactionSuitPart;
  'suit-color': BaseOrderDetail;
  'shirt-part': TransactionShirtPart;
}

export interface Payment {
  method: string;
  price: string;
}

export interface TransactionSuitPart {
  lapel: BaseOrderDetail;
  'shoulder-tips': BaseOrderDetail;
  shoulder: BaseOrderDetail;
  lined: BaseOrderDetail;
  vent: BaseOrderDetail;
  pocket: BaseOrderDetail;
  botton: BaseOrderDetail;
  canvas: BaseOrderDetail;
  fabric: BaseOrderDetail;
  wale: BaseOrderDetail;
}

export interface BaseOrderDetail {
  id: Number;
  title: string;
}
export interface TransactionShirtPart {
  wale: BaseOrderDetail;
  collar: BaseOrderDetail;
  'pleat-back': BaseOrderDetail;
  'pleat-front': BaseOrderDetail;
  cuff: BaseOrderDetail;
}
