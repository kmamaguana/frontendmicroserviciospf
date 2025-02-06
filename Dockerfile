# Usar una imagen de Node.js como base
FROM node:14-alpine
LABEL authors="Isaac LLanda"

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación al contenedor
COPY . .

# Aceptar argumentos de la variable de entorno
ARG REACT_APP_URL_API

# Establecer la variable de entorno
ENV REACT_APP_URL_API=${REACT_APP_URL_API}

# Construir la aplicación
RUN npm run build

# Instalar un servidor estático para servir la aplicación construida
RUN npm install -g serve

# Exponer el puerto utilizado por la aplicación React
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["serve", "-s", "build"]