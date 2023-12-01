import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer 628dbe27d29e3447d46634e6820364`,
  },
  cache: new InMemoryCache(),
});
