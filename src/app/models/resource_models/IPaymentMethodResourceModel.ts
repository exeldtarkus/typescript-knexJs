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

interface ITypeOfPayment {
  va: Array<IPaymentMethodResourceModel>;
  wallet: Array<IPaymentMethodResourceModel>;
}

export {
  IPaymentMethodResourceModel,
  ITypeOfPayment
}