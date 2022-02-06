## Microservices:

  - Run applications:
    
    ```

    npm run build in dir (gateway - flight - passengers - users)
    docker-compose up --build -d
    
    ```

### Send to docker hub: 
  
  - ``` run within each directories ```

  - (Tag):

      ```

      docker tag api_gateway:v1 rafaelcarvalhocaetano/api_gateway:v1
      docker tag microservice_flights:v1 varlab/microservice_flights:v1
      docker tag microservice_passengers:v1 varlab/microservice_passengers:v1
      docker tag microservice_users:v1 varlab/microservice_users:v1
      
      ```
  - (Send):

      ```

      docker push rafaelcarvalhocaetano/api_gateway:v1
      docker push rafaelcarvalhocaetano/microservice_flights:v1
      docker push rafaelcarvalhocaetano/microservice_passengers:v1
      docker push rafaelcarvalhocaetano/microservice_users:v1
      
      ```

### Run mongodb single:
  - docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb
  - docker run -d -p 27017:27017 -p 28017:28017 -e MONGODB_PASS="mypass" tutum/mongodb
