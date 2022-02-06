## Microservices:

  - Run applications:
    
    ```
      - npm run build in dir (gateway - flight - passengers - users)
      - docker-compose up --build -d
    ```

### Send to docker hub:
    `` run within each directories ``

  - (TAG):

      ```
      

      docker tag api_gateway:v1 rafaelcarvalhocaetano/api_gateway:v1
      docker tag microservice_flights:v1 rafaelcarvalhocaetano/microservice_flights:v1
      docker tag microservice_passengers:v1 rafaelcarvalhocaetano/microservice_passengers:v1
      docker tag microservice_users:v1 rafaelcarvalhocaetano/microservice_users:v1
      ```
  - (SEND):

      ```
      docker push rafaelcarvalhocaetano/api_gateway:v1
      docker push rafaelcarvalhocaetano/microservice_flights:v1
      docker push rafaelcarvalhocaetano/microservice_passengers:v1
      docker push rafaelcarvalhocaetano/microservice_users:v1
      ```
 
