const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
// Set the AWS Region.
const REGION = 'us-east-1'; // e.g. "us-east-1"
// Create an Amazon DynamodDB service client object.
const dynamoClient = new DynamoDBClient({ region: REGION });
module.exports = { dynamoClient };
