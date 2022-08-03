import {paymentDBConnection as db} from '../config/knex/knex_config'
import {IRepository} from "./IRepository";
import {IPaymentMethodFindAllOutput} from "../models/repository_models/IPaymentMethodRepositoryModel";

class PaymentMethodRepository implements IRepository {
    static findAllPaymentList(): Promise<Array<IPaymentMethodFindAllOutput>> {
      return db<IPaymentMethodFindAllOutput>('mst_payment_method').where('active', 1)
    }
}

export {
  PaymentMethodRepository,
}