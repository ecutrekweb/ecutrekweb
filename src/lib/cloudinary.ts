import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getFolderImages(folder: string): Promise<string[]> {
  try {
    const result = await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by("public_id", "asc")
      .max_results(30)
      .execute();

    return (result.resources as { secure_url: string }[]).map(
      (resource) => resource.secure_url
    );
  } catch {
    return [];
  }
}
