# 🌦️ Weather Analytics App

A modern weather application built with **Node.js**, **Express.js**, **MongoDB**, and **OpenWeather API**.

The application allows users to:

- Search weather by city
- View current weather conditions
- Auto-detect user location
- Store search history in MongoDB
- Track weather analytics
- Run with Docker and Docker Compose

---

## 🚀 Features

### Current Features

✅ Search weather by city

✅ Auto-detect current location

✅ Current temperature

✅ Humidity

✅ Wind speed

✅ Weather condition

✅ Weather icons

✅ Search history stored in MongoDB

✅ Responsive UI

✅ Dockerized application

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### API

- OpenWeather API

### DevOps

- Docker
- Docker Compose

---

## 📁 Project Structure

```text
mini-weather-app-with-mongo/
│
├── config/
│   └── db.js
│
├── controllers/
│
├── models/
│
├── routes/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── server.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGO_URI=mongodb://mongo:27017/weatherapp

WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

---

## 🔑 Getting OpenWeather API Key

1. Create an account at OpenWeather:

https://openweathermap.org/api

2. Generate an API Key

3. Add it to `.env`

```env
WEATHER_API_KEY=YOUR_KEY
```

---

## 💻 Local Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Move into project

```bash
cd mini-weather-app-with-mongo
```

### Install dependencies

```bash
npm install
```

### Start application

```bash
node server.js
```

Application:

```text
http://localhost:5000
```

---

## 🐳 Docker Setup

### Build Application

```bash
docker compose build
```

### Run Application

```bash
docker compose up
```

Or:

```bash
docker compose up -d
```

---

### Verify Containers

```bash
docker ps
```

Expected:

```text
weather-app
weather-mongo
```

---

### Stop Containers

```bash
docker compose down
```

---

### Remove Containers and Volumes

```bash
docker compose down -v
```

---

## 🗄 MongoDB

### Connect to MongoDB Container

```bash
docker exec -it weather-mongo mongosh
```

### Use Database

```javascript
use weatherapp
```

### View Collections

```javascript
show collections
```

### View Search History

```javascript
db.searchhistories.find()
```

---

## 📡 API Endpoints

### Get Weather By City

```http
GET /api/weather/:city
```

Example:

```http
GET /api/weather/Indore
```

Response:

```json
{
  "status": 1,
  "message": "Fetched Successfully",
  "data": {
    "name": "Indore",
    "main": {
      "temp": 35.09
    }
  }
}
```

---

### Get Search History

```http
GET /api/history
```

---

## 📊 Future Enhancements

- Hourly Forecast
- 5-Day Forecast
- Favorite Cities
- Weather Analytics Dashboard
- Temperature Trend Graphs
- Search Analytics using MongoDB Aggregation
- Air Quality Index (AQI)
- Weather Alerts
- Dark Mode
- Interactive Weather Map
- Redis Caching
- JWT Authentication

---

## 📸 Screenshots

Add screenshots here after UI completion.

```text
screenshots/
├── home.png
├── dashboard.png
└── analytics.png
```

---

## 🧑‍💻 Author

Developed using:

- Node.js
- Express.js
- MongoDB
- Docker

---

## 📄 License

MIT License
