export default async function handler(req, res) {
  const { uid, region = "ind" } = req.query;

  if (!uid) {
    return res.status(400).json({
      error: "UID kosong"
    });
  }

  try {
    const response = await fetch(
      `https://proapis.hlgamingofficial.com/main/games/freefire/account/api?sectionName=AllData&PlayerUid=${uid}&region=${region}&useruid=qY1FPRF18JMzUwVMsEuzL0ecDS53&api=vZJXFyCmpIvRZBj3cfPmVYmITLWEB8`
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(response.status).json(data);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}
