const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/products", async (req, res) => {
  try {
    const response = await axios.get(
      "https://timbu-get-all-products.reavdev.workers.dev",
      {
        headers: {
          "Content-Type": "application/json",
          Appid: "KIUUGK32JE1OYTR",
          Apikey: "9dc61904927f48909f2b6cccf31583b520240712173958870026",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
