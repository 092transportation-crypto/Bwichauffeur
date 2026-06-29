/**
 * Optional MongoDB persistence, mirroring the original Python backend
 * (collections: quote_requests, contact_messages).
 *
 * Persistence is OPTIONAL: if MONGO_URL is not set, saveDoc() is a no-op so the
 * form keeps working (email-only). When set, the connection is cached across
 * warm serverless invocations.
 *
 * Env: MONGO_URL, DB_NAME (default "bwichauffeur")
 */
let cachedClientPromise = null;

function getClientPromise() {
  if (cachedClientPromise) return cachedClientPromise;
  const url = process.env.MONGO_URL;
  if (!url) return null;

  // Lazy require so the dependency is only loaded when actually used.
  const { MongoClient } = require("mongodb");
  const client = new MongoClient(url, { maxPoolSize: 5 });
  cachedClientPromise = client.connect();
  return cachedClientPromise;
}

/**
 * Persist a document to the given collection. Never throws — returns true on
 * success, false if persistence is disabled or fails (so it can't break the
 * form submission). Mongo's injected _id is stripped from the passed object.
 */
async function saveDoc(collection, doc) {
  const promise = getClientPromise();
  if (!promise) return false;
  try {
    const client = await promise;
    const dbName = process.env.DB_NAME || "bwichauffeur";
    await client.db(dbName).collection(collection).insertOne({ ...doc });
    return true;
  } catch (err) {
    console.error(`MongoDB save to ${collection} failed:`, err.message);
    return false;
  }
}

module.exports = { saveDoc };
