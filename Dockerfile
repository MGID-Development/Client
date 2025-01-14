# Wybierz obraz bazowy z Node.js
FROM node:18-alpine

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj plik package.json i package-lock.json (jeśli istnieje)
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj całą aplikację
COPY . .

# Zbuduj aplikację Vite
RUN npm run build

# Ustaw domyślny port, na którym będzie działać aplikacja
EXPOSE 3000

# Uruchom serwer produkcyjny, np. przy użyciu serve
CMD ["npx", "serve", "dist"]
