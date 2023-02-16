'use strict';
// Load the required clients and commands.
const { DynamoDBClient, ScanCommand } = require('@aws-sdk/client-dynamodb');
const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');

//Set the AWS Region.
const REGION = 'us-east-1'; //e.g. "us-east-1"

// Get today's date.
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
const date = yyyy + '-' + mm + '-' + dd;

// Set the parameters for the ScanCommand method.
const params = {
  // Specify which items in the results are returned.
  FilterExpression: 'startDate = :topic',
  // Define the expression attribute value, which are substitutes for the values you want to compare.
  ExpressionAttributeValues: {
    ':topic': { S: date },
  },
  // Set the projection expression, which the the attributes that you want.
  ProjectionExpression: 'address, ',
  TableName: 'auto-fwd',
};
