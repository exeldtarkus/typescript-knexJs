import {paymentDBConnection as db} from '../config/knex/knex_config'
import {IRepository} from "./IRepository";
import { IMerchantConfigurationsFindAll, IMerchantConfigurationsFindAllOutput } from '../models/repository_models/MerchantConfigurationsRepositoryModel';

class MerchantConfigurationsRepository implements IRepository {
    static findEspayConfigByBengkelId(param: IMerchantConfigurationsFindAll): Promise<Array<IMerchantConfigurationsFindAllOutput>> {
      const query = db<IMerchantConfigurationsFindAllOutput>('mst_merchant_configurations')
      if (param) {
        if (param.q?.uuid) {
          query.where('uuid', param.q.uuid)
        }
        if (param.q?.bengkelId) {
          query.where('bengkel_id', param.q.bengkelId)
        }
      }
      return query
    }
}

export {
  MerchantConfigurationsRepository
}