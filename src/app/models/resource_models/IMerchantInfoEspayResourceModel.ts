
interface IDataMerchantInfo {
  bankCode: string,
  productCode: string,
  productName: string
}

interface IMerchantInfoEspayResourceModel {
  error_code: string,
  error_message: string,
  data: Array<IDataMerchantInfo>
}

export {
  IMerchantInfoEspayResourceModel,
  IDataMerchantInfo
}