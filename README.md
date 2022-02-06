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
        docker tag api_gateway:v1 your_name/api_gateway:v1
        docker tag microservice_flights:v1 your_name/microservice_flights:v1
        docker tag microservice_passengers:v1 your_name/microservice_passengers:v1
        docker tag microservice_users:v1 your_name/microservice_users:v1
      
      ```
  - (SEND):

      ```
        docker push your_name/api_gateway:v1
        docker push your_name/microservice_flights:v1
        docker push your_name/microservice_passengers:v1
        docker push your_name/microservice_users:v1
      
      ```
 
