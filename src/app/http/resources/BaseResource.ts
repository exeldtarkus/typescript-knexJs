import { IBaseResourceModel } from '../../models/resource_models/IBaseResourceModel'
import moment from "moment";

class BaseResource {
    static exec(data: IBaseResourceModel): IBaseResourceModel {
        return {
            data: data.data,
            isSuccess: data.isSuccess,
            message: data.message,
            status: data.status,
            timestamp: moment().utc().format('YYYY-MM-DDTHH:mm:ssZZ')
        }
    }
}

export {
    BaseResource,
}