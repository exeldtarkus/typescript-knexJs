import {IRepositoryParam} from "../../repositories/IRepository";

interface IPaymentMethodFindAll extends IRepositoryParam {}

interface IPaymentMethodFindAllOutput {
  uuid: string,
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

export {
  IPaymentMethodFindAll,
  IPaymentMethodFindAllOutput
}