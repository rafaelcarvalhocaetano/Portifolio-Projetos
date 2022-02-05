npm i --save mongoose
npm i --save mongoose-autopopulate
npm i --save @nestjs/mongoose
npm i --save @nestjs/config
npm i class-validator transformer
npm i bcrypt
npm i @types/bcrypt

docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb
docker run -d -p 27017:27017 -p 28017:28017 -e MONGODB_PASS="mypass" tutum/mongodb