export default async function handler(req, res) {

    const { uid, region = "IND" } = req.query;

    if (!uid) {
        return res.status(400).json({
            error: "UID kosong"
        });
    }

    try {

        const response = await fetch(
            `https://free-ff-api-src-5plp.onrender.com/api/v1/account?region=${region}&uid=${uid}`
        );

        const text = await response.text();

        res.setHeader("Access-Control-Allow-Origin", "*");

        res.status(response.status).send(text);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

}