import { MongoClient, ServerApiVersion } from "mongodb";

const MONGODB_URI =
  "mongodb+srv://kha3321:wNS9s-M5MEbkBhY@cluster0-khadev.a72nn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-khadev";

const DATABASE_NAME = "trello-khadev";

let trelloDatabaseInstance = null;

const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect();
  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME);
};

export const GET_DB = () => {
  if (!trelloDatabaseInstance) {
    throw new Error("Database connection not established.");
  }
  return trelloDatabaseInstance;
};
