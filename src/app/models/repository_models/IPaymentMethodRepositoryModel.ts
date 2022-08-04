import {IRepositoryParam} from "../../repositories/IRepository";

interface IPaymentMethodFindAll extends IRepositoryParam {
  q?: {
      id?: number,
      uuid?: string
  }
}

interface IPaymentMethodFindAllOutput {
  id?: number,
  uuid?: string,
  bank_name: string,
  bank_code: string,
  logo: string,
  type: string,
  admin_fee: string,
  description: string,
  created_at: string,
  updated_at: string,
  active: number
}

export {
  IPaymentMethodFindAll,
  IPaymentMethodFindAllOutput
}