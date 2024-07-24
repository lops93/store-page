# api folder

## Project setup

### Install projct dependencies
```
composer create-project
```
### setup .env file
```
DB_CONNECTION=mysql
DB_HOST=YOUR_HOST
DB_PORT=3306
DB_DATABASE=store
DB_USERNAME=USERNAME
DB_PASSWORD=PASSWORD
```
### Run migrations
```
php artisan migrate
```
### Seed the database
```
php artisan db:seed
```
### Start the server
```
php artisan serve
```

# client folder

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```