import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary'
// var cloudinary = require('cloudinary').v2

dotenv.config();

const cloudinaryConfig = {
  cloudinary_path : process.env.CLOUDINARY_PATH,
	cloudinary_cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
	cloudinary_api_key : process.env.CLOUDINARY_API_KEY,
	cloudinary_api_secret : process.env.CLOUDINARY_API_SECRET
}

cloudinary.config({
  cloud_name: cloudinaryConfig.cloudinary_cloud_name,
  api_key: cloudinaryConfig.cloudinary_api_key,
  api_secret: cloudinaryConfig.cloudinary_api_secret,
  secure: true,
});

// const cloudinaryBaseUrl = `https://res.cloudinary.com/adiramoservice/q_auto,f_auto/v1/${cloudinaryConfig.cloudinary_path}`

const cloudinaryBaseUrl = (setting: string): string => {
  let settings: Array<string> = ['q_auto','f_auto']

  if (setting) {
    settings.push(setting)
  }
  const basePathUrl: string = `https://res.cloudinary.com/adiramoservice/${settings.toString()}/v1/${cloudinaryConfig.cloudinary_path}`
  return basePathUrl
}

export {
  cloudinary,
  cloudinaryConfig,
  cloudinaryBaseUrl,
}