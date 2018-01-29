const { resolver } = require('graphql-sequelize')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList } = require('graphql')
const { User, Order } = require('./models')

const orderType = new GraphQLObjectType({
  name: 'Order',
  description: 'An order',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The id of the order.',
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'status of the order'
    },
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The userId of the order.',
    },
  }
})

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The id of the user.',
    },
    firstName: {
      type: GraphQLString,
      description: 'The name of the user.',
    },
    lastName: {
      type: GraphQLString,
      description: 'The name of the user.',
    },
    email: {
      type: GraphQLString,
      description: 'The name of the user.',
    },
    password: {
      type: GraphQLString,
      description: 'The name of the user.',
    },
    orders: {
      type: new GraphQLList(orderType),
      resolve: resolver(Order)
    }
  }
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'root',
    fields: {
      user: {
        type: new GraphQLList(userType),
        resolve: resolver(User)
      }
    }
  })
})
module.exports = schema
