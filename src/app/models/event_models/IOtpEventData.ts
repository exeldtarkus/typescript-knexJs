import {IBaseEventData} from "./IBaseEventData";

interface IOtpEventData extends IBaseEventData {
    eventId: string,
    eventTimestamp: number,
    to: string,
    code: string,
    type: number,
    vendor?: string,
    sender: string,
    platform: string,
    template?: number
}

export {
    IOtpEventData
}