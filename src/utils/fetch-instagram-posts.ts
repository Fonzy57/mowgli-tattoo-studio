export const fetchInstagramPosts = async (
  token: string,
  limit: number = 40
) => {
  if (!token) {
    console.error("Access token non configuré.");
    return { posts: [], error: true };
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&limit=${limit}&access_token=${token}`
    );

    if (!response.ok) {
      console.error(`Erreur réponse API : ${response.statusText}`);
      return { posts: [], error: true };
    }

    const data = await response.json();
    const filteredData = data.data.filter(
      (item: any) => item.media_type !== "VIDEO"
    );

    return { posts: filteredData, error: false };
  } catch (error) {
    console.error("Erreur API Instagram : ", error);
    return { posts: [], error: true };
  }
};
