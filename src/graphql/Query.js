import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query characters($page: Int, $filter: FilterCharacter){
    characters(page: $page, filter: $filter){
      info{
        count
        pages
        next
        prev
      }
      results{
        id
        name
        image
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  query locations($page: Int, $filter: FilterLocation){
    locations(page: $page, filter: $filter){
      info{
        count
        pages
        next
        prev
      }
      results{
        id
        name
        dimension
      }
    }
  }
`;

export const GET_EPISODES = gql`
  query episodes($page: Int, $filter: FilterEpisode){
    episodes(page: $page, filter: $filter){
      info{
        count
        pages
        next
        prev
      }
      results{
        id
        name
        episode
      }
    }
  }
`;

export const GET_INFO_CHARACTER = gql`
  query character($id: ID!){
    character(id: $id){
      name
      type
      gender
      species
      image
    }
  }
`;

export const GET_INFO_LOCATION = gql`
  query location($id: ID!){
    location(id: $id){
      name
      type
      dimension
      residents{
        id
        name
        image
      }
    }
  }
`;

export const GET_INFO_EPISODE = gql`
  query episode($id: ID!){
    episode(id: $id){
      name
      air_date
      episode
      characters{
        id
        name
        image
      }
    }
  }
`;