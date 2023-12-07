import { Kafka } from "kafkajs";
import axios from "axios";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["kafka:9092"],
});

const producer = kafka.producer({
  allowAutoTopicCreation: true,
  transactionTimeout: 30000
});

const _axios = axios;

const run = async () => {
  const headers = {
    headers: {
      "X-Api-Key": process.env.API_KEY,
    },
  };


  await producer.connect();

  try {
    setInterval(async () => {

      const one = await _axios.get(process.env.QUOTE_API_ONE_URL, headers);
      
      try {
        console.log(
          "process.env.QUOTE_API_ONE: ",
          process.env.QUOTE_API_ONE_URL
        );

        const message  = one.data[0];

        console.log("message: ", message);
        
        await producer.send({
          topic: "test-topic",
          messages: [{ key: 'key1', value: 'hello world' },
          { key: 'key2', value: 'hey hey!' }],
        });

        console.log(`messages sent`);
        console.log(`Topic: test-topic\t Message: ${message}`);
      } catch (e) {
        console.log("error sending messages", e);
      }
    }, 1000 * 60 * 1);
  } catch (e) {
    console.log("error sending messages");
    console.log(e);
  }

  try {
    const two = await _axios.get(process.env.QUOTE_API_TWO_URL, headers);

    const message = two.data[0];
    
    setInterval(async () => {
      try {
          console.log(
            "process.env.QUOTE_API_TWO: ",
            process.env.QUOTE_API_TWO_URL
          );
        

        console.log("message: ", message);

        await sendMessage("test-topic", message);
        // await producer.send({
        //   topic: "get-quote",
        //   messages: [message],
        // });

        console.log(`messages sent`);
        console.log(`Topic: 'get-quote'\t Message: ${message}`);
      } catch (e) {
        console.log("error sending messages");
        await sendMessage("test-topic", message);
      }
    }, 1000 * 60 * 1);
  } catch (error) {
    console.log("error sending messages");
    console.log(error);
  }
};

const sendMessage = async (topic, message) => {

  await producer.send({
    topic,
    messages: [message],
  });

};


await run().catch(console.error);
