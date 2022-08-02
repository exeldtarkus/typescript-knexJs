import {paymentDBConnection as db} from '../config/knex/knex_config'
import {IRepository, IRepositoryParam} from "./IRepository";
import {IPaymentMethodFindAll, IPaymentMethodFindAllOutput} from "../models/repository_models/IPaymentMethodRepositoryModel";
import {IPaymentMethodResourceModel} from '../models/resource_models/IPaymentMethodResourceModel'

class PaymentMethodRepository implements IRepository {
    static findAllPaymentList(): Promise<Array<IPaymentMethodFindAllOutput>> {
      return db<IPaymentMethodFindAllOutput>('mst_payment_method').where('active', 1)
    }
}

export {
  PaymentMethodRepository,
}