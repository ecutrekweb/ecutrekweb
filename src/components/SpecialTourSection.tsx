import { FeatureSection } from "@/components/FeatureSection";
import { getFolderImages } from "@/lib/cloudinary";
import type { SpecialTour } from "@/lib/data";

export async function SpecialTourSection({ tour }: { tour: SpecialTour }) {
  const cloudinaryImages = await getFolderImages(tour.cloudinaryFolder);
  const images = cloudinaryImages.length ? cloudinaryImages : tour.images;

  return <FeatureSection {...tour} images={images} />;
}
