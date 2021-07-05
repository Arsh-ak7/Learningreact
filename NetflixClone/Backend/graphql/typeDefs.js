const { gql } = require("apollo-server");

module.exports = gql`
	scalar Date
	type User {
		id: ID!
		email: String!
		token: String!
		createdAt: String!
		username: String!
		subscription: Int
		expiresOn: Date
	}
	input RegisterInput {
		username: String!
		email: String!
		password: String!
		confirmPassword: String!
	}

	type Subscriber {
		id: ID!
		username: String!
		currency: String!
		amount: Int!
	}

	type Query {
		getUserData(username: String!): User!
	}
	type Mutation {
		register(registerInput: RegisterInput): User!
		login(username: String!, password: String!): User!
		subscribe(subsValue: Int!): Subscriber!
	}
`;
