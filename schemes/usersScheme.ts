// import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";
//
// const User = new GraphQLObjectType({
//     name: 'User',
//     fields: () => ({
//         id: {type : GraphQLNonNull(GraphQLID)},
//         email: {type : GraphQLNonNull(GraphQLString)},
//         password: {type : GraphQLNonNull(GraphQLString)},
//         jwtToken: {type: GraphQLNonNull(GraphQLString)}
//     })
// })
//
//
// const schema = new GraphQLSchema({
//     mutation: new GraphQLObjectType({
//         name: 'Mutation',
//         fields: {
//             signup: {
//                 type: User,
//                 args:{
//                     email: {type: GraphQLNonNull(GraphQLString)},
//                     password: {type: GraphQLNonNull(GraphQLString)},
//                 },
//                 resolve(parent, args){
//
//                 }
//             }
//         }
//     })
// })
// export {schema}