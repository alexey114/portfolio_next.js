# Базовый образ Node.js
FROM node:18-alpine

# Рабочая директория в контейнере
WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./
COPY next.config.js ./
COPY .next ./.next
COPY public ./public

# Устанавливаем зависимости (только production)
RUN npm install --only=production

# Открываем порт
EXPOSE 3000

# Команда запуска
CMD ["npm", "start"]