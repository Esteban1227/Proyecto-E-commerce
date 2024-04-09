const { exec } = require('child_process');

// Reemplaza 'scriptStart.py' con la ruta de tu script de Python si no está en el mismo directorio.
const pythonScript = '../backend/app.py';

exec(`python ${pythonScript}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el script: ${error}`);
    return;
  }
  console.log(`Resultado: ${stdout}`);
  console.error(`Errores: ${stderr}`);
});