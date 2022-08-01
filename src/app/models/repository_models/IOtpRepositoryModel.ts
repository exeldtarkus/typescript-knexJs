import {IRepositoryParam} from "../../repositories/IRepository";

interface IOtpRepositoryFind extends IRepositoryParam {
    q?: {
        id?: number,
        code?: number,
        otp_key?: number,
        created_today?: boolean,
        email?: string,
        phonenumber?: string,
        verified?: number,
    }
}

interface IOtpRepositoryFindOutput {
    id: number,
    otp_key: string,
    code: number,
    email: string,
    phonenumber: string,
    verified: number,
    created: string,
    updated: string
}

interface IOtpRepositoryData {
    otp_key: string,
    code: number,
    email?: string,
    phonenumber?: string,
    verified: number,
    created: string,
    updated: string | null
}

interface IOtpRepositoryUpdateData {
    otp_key?: string,
    code?: number,
    email?: string,
    phonenumber?: string,
    verified?: number,
    created?: string,
    updated?: string | null
}

export {
    IOtpRepositoryFind,
    IOtpRepositoryFindOutput,
    IOtpRepositoryData,
    IOtpRepositoryUpdateData
}