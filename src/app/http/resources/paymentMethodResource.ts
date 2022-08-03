import {IBaseResourceModel} from '../../models/resource_models/IBaseResourceModel'
import moment from "moment";
import {BaseResource} from "./BaseResource";
import { IPaymentMethodResourceModel } from '../../models/resource_models/IPaymentMethodResourceModel';
import { IPaymentMethodFindAllOutput } from '../../models/repository_models/IPaymentMethodRepositoryModel';

interface ExecInput extends IBaseResourceModel {
    data: Array<IPaymentMethodResourceModel>
}

class PaymentMethodResource extends BaseResource {

  static transformer(data: Array<any>): Array<IPaymentMethodResourceModel> {
    return data.map((row) => {
      const paymentList: IPaymentMethodResourceModel = {
        id: row.uuid,
        bank_name: row.bank_name,
        bank_code: row.bank_code,
        logo: row.logo,
        type: row.type,
        admin_fee: Number(row.admin_fee),
        description: row.description,
        created_at: row.created_at,
        updated_at: row.updated_at,
        active: row.active
      }

      return paymentList
    })
  }
  
  static exec(data: ExecInput): IBaseResourceModel {
    return super.exec({
      data: data.data,
      isSuccess: data.isSuccess,
      message: data.message,
      status: data.status,
      timestamp: moment().utc().format('YYYY-MM-DDTHH:mm:ssZZ')
    })
  }

}

export {
    PaymentMethodResource,
}