const winston = require("winston")
const { ElasticsearchTransport } = require("winston-elasticsearch")

// Create a Winston logger instance
const logger = winston.createLogger({
  level: "error", // Set the log level
  format: winston.format.json(), // You can customize the log format
  transports: [
    // Add Elasticsearch transport
    new ElasticsearchTransport({
      level: "error", // Log level for this transport
      index: "pms_logs", // Index name in Elasticsearch
      clientOpts: { node: process.env.ELASTICSEARCH_HOST }, // Elasticsearch connection configuration
    }),
  ],
})

module.exports = logger
