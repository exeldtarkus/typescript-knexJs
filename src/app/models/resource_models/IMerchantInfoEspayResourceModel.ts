
interface dataMerchantInfo {
  bankCode: string,
  productCode: string,
  productName: string
}

interface IMerchantInfoEspayResourceModel {
  error_code: string,
  error_message: string,
  data: Array<dataMerchantInfo>
}

export {
  IMerchantInfoEspayResourceModel,
  dataMerchantInfo
}