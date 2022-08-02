import {IRepository} from "./IRepository";
import axios from 'axios';
import qs from 'qs';
import dotenv from 'dotenv';

dotenv.config();

class EspayRepository implements IRepository {
  static findMerchantInfo(apiKey: string) { 
    let config = {
      method: 'POST',
      url: `${process.env.ESPAY_API}/rest/merchant/merchantinfo`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({ 
        'key': apiKey 
      }),
      json: true,
    }
    return axios(config)
  }
}

export {
  EspayRepository,
}