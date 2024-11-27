import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = process.env.INSTAGRAM_TOKEN;
  const limit = 40;

  if (!token) {
    return res.status(500).json({ error: "Access token non configuré." });
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&limit=${limit}&access_token=${token}`
    );

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Erreur réponse API : " + response.statusText });
    }

    const posts = await response.json();

    const filteredData = posts.data.filter(
      (item: any) => item.media_type !== "VIDEO"
    );

    res.status(200).json(filteredData);
  } catch (error) {
    console.error("Erreur API Instagram : ", error);
    res.status(500).json({ error: "Erreur lors de l'appel API." });
  }
}
