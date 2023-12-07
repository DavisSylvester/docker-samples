## Commands

| Action                | Command                | Arguments                                 |
| ----------------------| -----------------------|-------------------------------------------|
| List Topics           | bin/kafka-topics.sh    | --bootstrap-server localhost:9092 --list  |
| Create Topic          | bin/kafka-topics.sh    | --bootstrap-server localhost:9092 <br>--create <br>--partitions 3<br> --replication-factor 1<br>--topic *TOPIC-NAME* |
