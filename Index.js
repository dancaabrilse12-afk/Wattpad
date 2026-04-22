const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test
app.get("/api/healthz", (req, res) => {
  res.json({ status: "ok" });
});

// Procesar
app.post("/api/procesar", (req, res) => {
  const { titulo, autor, texto } = req.body;

  if (!texto) {
    return res.status(400).json({ error: "No hay texto" });
  }

  res.json({
    mensaje: "OK",
    titulo: titulo || "Sin título",
    autor: autor || "Desconocido",
    longitud: texto.length
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
