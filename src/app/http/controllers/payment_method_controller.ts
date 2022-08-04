import { Request, Response } from 'express';
import { cloudinaryBaseUrl } from '../../config/cloudinary_config';
import { IBaseResourceModel } from '../../models/resource_models/IBaseResourceModel';
import { IMerchantInfoEspayResourceModel } from '../../models/resource_models/IMerchantInfoEspayResourceModel';
import { IPaymentMethodResourceModel, ITypeOfPayment } from '../../models/resource_models/IPaymentMethodResourceModel';
import { EspayServices } from '../../services/EspayServices';
import { PaymentMethodRepository } from '../../repositories/PaymentMethodRepository';
import { BaseResource } from '../resources/BaseResource';
import { PaymentMethodResource } from '../resources/paymentMethodResource';
import { IPaymentMethodFindAllOutput } from '../../models/repository_models/IPaymentMethodRepositoryModel';
import { IMerchantConfigurationsFindAll, IMerchantConfigurationsFindAllOutput } from '../../models/repository_models/MerchantConfigurationsRepositoryModel';
import { MerchantConfigurationsRepository } from '../../repositories/MerchantConfigurationsRepository';

const index = async (req: Request, res: Response) => {

  const paramsMerchantConfig: IMerchantConfigurationsFindAll = {
    q: {
      bengkelId: +req.params.bengkelId
    }
  }

  let apiKey: string = '776b8c15b1ab864e1b96bb61d6bb56d0'

  const result: ITypeOfPayment = {
    va: [],
    wallet: []
  }

  const espayMerchantConfig: Array<IMerchantConfigurationsFindAllOutput> = await MerchantConfigurationsRepository.findEspayConfigByBengkelId(paramsMerchantConfig);
  const paymentList: Array<IPaymentMethodFindAllOutput> = await PaymentMethodRepository.findAllPaymentList();
  const espayPaymentList: IMerchantInfoEspayResourceModel | null = await EspayServices.findMerchantInfo(espayMerchantConfig[0].espay_merchant_api_key);
  
  if (!espayPaymentList || espayPaymentList.error_code != '0000') {
    res.status(500).json(BaseResource.exec({
      data: null,
      isSuccess: false,
      message: espayPaymentList ? `Error - ${espayPaymentList.error_message}` : 'Error - Failed Connected to Espay Service Merchant Info',
      status: 500,
    }));
  }

  const dataPaymentTransform: Array<IPaymentMethodResourceModel> = PaymentMethodResource.transformer(paymentList)

  for (let i in dataPaymentTransform) {
    if (espayPaymentList?.data.find(item => item.bankCode === dataPaymentTransform[i].bank_code)){
      dataPaymentTransform[i].logo = `${cloudinaryBaseUrl}/${dataPaymentTransform[i].logo}`
      if (dataPaymentTransform[i].type == 'va'){
        result.va.push(dataPaymentTransform[i])
      }
      if (dataPaymentTransform[i].type == 'wallet'){
        result.wallet.push(dataPaymentTransform[i])
      }
    }
  }

  const response: IBaseResourceModel = {
    data: result,
    isSuccess: true,
    message: "200 OK",
    status: 200,
  }
  res.json(PaymentMethodResource.exec(response));
}

export {
    index
}