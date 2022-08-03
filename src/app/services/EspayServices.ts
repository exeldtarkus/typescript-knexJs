import {IRepository} from "../repositories/IRepository";
import axios from 'axios';
import qs from 'qs';
import dotenv from 'dotenv';
import { IMerchantInfoEspayResourceModel } from "../models/resource_models/IMerchantInfoEspayResourceModel";

dotenv.config();

const apiClient = axios.create({
  baseURL: process.env.ESPAY_API,
  timeout: 1000 * 5,
})

class EspayServices implements IRepository {
  static async findMerchantInfo (apiKey: string): Promise<IMerchantInfoEspayResourceModel | null> { 
    
    const body = {
      'key': apiKey 
    }

    try {
      const espayMerchantInfo = await apiClient.post('/rest/merchant/merchantinfo', 
        qs.stringify(body), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          }
        }
      )
      return espayMerchantInfo.data
    } catch (e) {
      console.error("error :",(e as Error).message)
      return null
    }
    
  }
}

export {
  EspayServices,
}