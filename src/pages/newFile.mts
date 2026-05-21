import { fileInput, handleImageFile } from "./index.astro.0.mts";

fileInput!.addEventListener("change", (e) => {
  if (e.target!.files.length > 0) {
    handleImageFile(e.target.files[0]);
  }
});
