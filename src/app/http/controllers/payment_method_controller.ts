import {Request, Response} from 'express';

const index = async (req: Request, res: Response) => {
    let json = {
        "data": {
            "va": [
                {
                    "bank_code": "001",
                    "bank_name": "NamaBank",
                    "logo": "link cloudinary",
                    "admin_fee": "0",
                    "type": "va"
                },
                {
                    "bank_code": "001",
                    "bank_name": "NamaBank",
                    "logo": "link cloudinary",
                    "admin_fee": "6000",
                    "type": "va"
                }
            ]
        }
    }

    res.json(json);
}

export {
    index
}