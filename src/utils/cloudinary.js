import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
      
cloudinary.config({ 
    cloud_name: 'deixnz24w', 
    api_key: '668745974185335', 
    api_secret: '_Wtm9zu4EJhq8LDYRA2mRCFv2dU'
  });

const uploadFileOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath)
            return null;

        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" });
        console.log("File has been uploaded on Cloudinary: ", response.url);

        // If upload is successful, unlink the local file
        fs.unlinkSync(localFilePath);

        // console.log("Response of cloudinary", response)

        return response;

    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error.message);
        throw error; // Rethrow the error to handle it in the caller function
    }
}

export { uploadFileOnCloudinary };
