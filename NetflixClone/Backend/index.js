const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const server = new ApolloServer({ typeDefs, context: ({ req }) => ({ req }) });

mongoose
	.connect("mongodb://127.0.0.1:27017", {
		useUnifiedTopology: true,
		useCreateIndex: true,
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("mongo connected");
		return server.listen(5000);
	})
	.then(() => console.log("Server Running"));
