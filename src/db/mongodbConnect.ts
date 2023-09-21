import { connect, connection } from "mongoose";

const conn = {
  isConnected: 0,
};

export default async function mongodbConnect() {
  if (conn.isConnected === 1) return;

  try {
    const connection = await connect(process.env.MONGODB_URI as string);

    conn.isConnected = connection.connections[0].readyState;
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
