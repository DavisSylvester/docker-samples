# Kafka Producer

## Build command
    
    
    docker build --build-arg="KAFKA_DOWNLOAD_URL=https://downloads.apache.org/kafka/3.6.0/kafka_2.13-3.6.0.tgz"  --build-arg="NODE_MAJOR=21" --build-arg="API_KEY=q/HwrRxg+MreBhYAqs/fzA==nstD37j3wp1DGPHQ"  --build-arg="QUOTE_API_ONE_URL=https://api.api-ninjas.com/v1/quotes?category=happiness" --build-arg="QUOTE_API_TWO_URL=https://api.api-ninjas.com/v1/trivia?category=entertainment" --build-arg="DB_ROOT_USER=dsylvester" --build-arg="DB_ROOT_PASSWORD=Packers7124#" -t davis-kafka .
    ```
