interface IPaymentMethodResourceModel {
  uuid: string,
  bank_name: string,
  bank_code: string,
  logo: string,
  type: string,
  admin_fe: number,
  description: string,
  created_at: string,
  updated_at: string,
  active: number
}

export {
  IPaymentMethodResourceModel
}