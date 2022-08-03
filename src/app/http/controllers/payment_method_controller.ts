import { Request, Response } from 'express';
import { cloudinaryBaseUrl } from '../../config/cloudinary_config';
import { IBaseResourceModel } from '../../models/resource_models/IBaseResourceModel';
import { IDataMerchantInfo } from '../../models/resource_models/IMerchantInfoEspayResourceModel';
import { IPaymentMethodResourceModel, ITypeOfPayment } from '../../models/resource_models/IPaymentMethodResourceModel';
import { EspayRepository } from '../../repositories/EspayRepository';
import { PaymentMethodRepository } from '../../repositories/PaymentMethodRepository';
import { BaseResource } from '../resources/BaseResource';
import { PaymentMethodResource } from '../resources/paymentMethodResource';

const index = async (req: Request, res: Response) => {

  const result: ITypeOfPayment = {
    va: [],
    wallet: []
  }

  const { bengkelId } = req.params
  let apiKey: string = '776b8c15b1ab864e1b96bb61d6bb56d0'

  const paymentList = await PaymentMethodRepository.findAllPaymentList();
  const espayPaymentList = await EspayRepository.findMerchantInfo(apiKey);

  if (espayPaymentList.data.error_code != '0000' || !espayPaymentList) {
    res.status(500).json(BaseResource.exec({
      data: null,
      isSuccess: false,
      message: `Error - ${espayPaymentList.data.error_message}`,
      status: 500,
    }));
  }
  const esapayPaymentAvailable: Array<IDataMerchantInfo> = espayPaymentList.data.data
  const dataPaymentTransform: Array<IPaymentMethodResourceModel> = PaymentMethodResource.transformer(paymentList)
  
  for (let i in dataPaymentTransform) {
    if (esapayPaymentAvailable.find(item => item.bankCode === dataPaymentTransform[i].bank_code)){
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