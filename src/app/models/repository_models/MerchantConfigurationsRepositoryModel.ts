import {IRepositoryParam} from "../../repositories/IRepository";

interface IMerchantConfigurationsFindAll extends IRepositoryParam {
  q?: {
      id?: number,
      uuid?:string,
      bengkelId?: number
  }
}

interface IMerchantConfigurationsFindAllOutput {
  id?: number,
  uuid?: string,
  bengkel_id: number,
  espay_merchant_code: string,
  espay_merchant_signature: string,
  espay_merchant_api_key: string,
  created_at: string,
  updated_at: string
}

export {
  IMerchantConfigurationsFindAll,
  IMerchantConfigurationsFindAllOutput
}