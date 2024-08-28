import { connect, connection, mongo, Mongoose } from "mongoose";

const conn = {
  isConnected: 0,
};

let client: Mongoose;
let bucket: mongo.GridFSBucket;

export default async function mongodbConnect() {
  if (client) {
    return { client, bucket };
  }
  if (conn.isConnected === 1) return;

  try {
    client = await connect(process.env.MONGODB_URI as string);

    bucket = new mongo.GridFSBucket(client.connection.db);

    conn.isConnected = client.connections[0].readyState;
    return { client, bucket };
  } catch (error) {
    console.log(error);
  }
}

connection.on("connected", () => {
  console.log("MONGODB IS CONNECTED");
});
connection.on("error", (error) => {
  console.log(error);
});
