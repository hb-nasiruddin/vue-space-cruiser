import gql from 'graphql-tag';

// GraphQL query to get all characters from the external API
export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id,
        name,
        status,
        species,
        gender,
        image,        
      }
    }
  }
`;

export default {
  GET_CHARACTERS,
};
