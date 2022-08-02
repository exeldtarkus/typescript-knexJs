import { Request, Response } from 'express';
import { cloudinaryBaseUrl } from '../../config/cloudinary_config';
import { EspayRepository } from '../../repositories/EspayRepository';
import { PaymentMethodRepository } from '../../repositories/PaymentMethodRepository';
import { BaseResource } from '../resources/BaseResource';

const index = async (req: Request, res: Response) => {

  // const params: IPaymentMethodFindAll = {
  //   q: {
  //     id: +req.params.id
  //   },
  //   t: {
  //     bank_code: req.query.bank_code
  //   }
  // }

  type typeOfPayment = {
    va: Array<any>;
    wallet: Array<any>;
  }
  const result: typeOfPayment = {
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
  const esapayPaymentAvailable: Array<any> = espayPaymentList.data.data

  for (let i in paymentList) {
    if (esapayPaymentAvailable.find(item => item.bankCode === paymentList[i].bank_code)){
      paymentList[i].logo = `${cloudinaryBaseUrl}/${paymentList[i].logo}`
      if (paymentList[i].type == 'va'){
        result.va.push(paymentList[i])
      }
      if (paymentList[i].type == 'wallet'){
        result.wallet.push(paymentList[i])
      }
    }
  }
  res.json(BaseResource.exec({
    data: result,
    isSuccess: true,
    message: "200 OK",
    status: 200,
  }));
}

export {
    index
}