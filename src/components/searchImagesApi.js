import axios from "axios";

const accessKey = "1gIVIxzxLHTsUa4ePPB1HgijWCWZQL8olEwVfgd2_gc";

export default async function searchPhotos(query) {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      params: {
        query: query,
        page: 1,
        per_page: 10,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Ошибка при поиске фотографий:", error);
  }
}
