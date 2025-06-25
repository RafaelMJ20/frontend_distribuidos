const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta principal - verificar token antes de servir index.html
app.get('/', (req, res) => {
  // Aquí puedes agregar lógica de verificación de token si lo prefieres
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Ruta /login - servir directamente sin verificación
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Todas las demás rutas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
