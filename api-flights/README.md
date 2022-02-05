npm i --save mongoose
npm i --save mongoose-autopopulate
npm i --save @nestjs/mongoose
npm i --save @nestjs/config
npm i class-validator transformer
npm i bcrypt
npm i @types/bcrypt
npm i axios moment
npm i @nestjs/swagger swagger-ui-express
npm i @nestjs/jwt passport-jwt
npm i @types/passport-jwt
npm i @types/passport-local
npm i @nestjs/passport passport passport-local

docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb
docker run -d -p 27017:27017 -p 28017:28017 -e MONGODB_PASS="mypass" tutum/mongodb