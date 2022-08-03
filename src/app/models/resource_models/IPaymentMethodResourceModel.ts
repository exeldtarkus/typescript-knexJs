interface IPaymentMethodResourceModel {
  id: string,
  bank_name: string,
  bank_code: string,
  logo: string,
  type: string,
  admin_fee: number,
  description: string,
  created_at: string,
  updated_at: string,
  active: number
}

type typeOfPayment = {
  va: Array<any>;
  wallet: Array<any>;
}

export {
  IPaymentMethodResourceModel,
  typeOfPayment
}