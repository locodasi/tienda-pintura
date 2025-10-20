@echo off
echo ================================
echo Instalando dependencias de Node...
echo ================================

REM Instalar dependencias (si no existen)
npm install

echo ================================
echo Generando la versión de producción...
echo ================================

REM Generar la carpeta dist/
npm run build

echo ================================
echo ¡Build completado!
echo La carpeta 'dist' está lista para subir a Netlify.
echo ================================
pause
