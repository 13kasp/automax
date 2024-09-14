import imageCompression from "browser-image-compression";

export default async function compressFetchedImage(imageUrl) {
  const response = await fetch(imageUrl);
  const blob = await response.blob();

  const options = {
    maxSizeMB: 0.1,
    maxWidthOrHeight: 800,
    useWebWorker: true,
  };

  try {
    const compressedBlob = await imageCompression(blob, options);
    const compressedUrl = URL.createObjectURL(compressedBlob);
    return compressedUrl;
  } catch (error) {
    console.log(error);
  }
}
