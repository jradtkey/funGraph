const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');


const schema = require('./schema');

console.log(schema);

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000);
console.log('Listening on 4000');
