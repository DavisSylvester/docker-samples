import { Kafka } from "kafkajs";
import axios from "axios";

const _axios = axios;

const run = async () => {
  const headers = {
    headers: {
      "X-Api-Key": process.env.API_KEY,
    },
  }; 

  try {
    setInterval(async () => {

      // const one = await _axios.get(process.env.QUOTE_API_ONE_URL, headers);
      
      try {
        // console.log(
        //   "process.env.QUOTE_API_ONE: ",
        //   process.env.QUOTE_API_ONE_URL
        // );

        // const message  = one.data[0];
        
        const randmonNumber = generateRandom();
        const randomValue = randmonNumber * generateRandom(1, 25);

        console.log("message: ", randmonNumber);
        
        const result = {
          randmonNumber,
          randomValue
        };

        console.log('result', result);

        await sendMessage(
         "test-topic",
          result,
        );

        
      } catch (e) {
        console.log("error sending messages", e);
      }
    }, 1000 * 25 * 1);
  } catch (e) {
    console.log("error sending messages");
    console.log(e);
  }

 
};

const sendMessage = async (topic, message) => {

  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["kafka:9092"],
  });

  const producer = kafka.producer({
    allowAutoTopicCreation: true,
    transactionTimeout: 30000,
    connectionTimeout: 3000,
    retry: {
      initialRetryTime: 100,
      retries: 8
    }
  });

  await producer.connect();

  const a = await producer.send({
    topic,
    messages: [{
      key: null,
      value: JSON.stringify(message)
    }],
  });

  console.log('a', a);
  
  await producer.disconnect()

};

const generateRandom = (min = 0, max = 100000) => {

  // find diff
  let difference = max - min;

  // generate random number 
  let rand = Math.random();

  // multiply with difference 
  rand = Math.floor( rand * difference);

  // add with min value 
  rand = rand + min;

  return rand;
}



await run().catch(console.error);
