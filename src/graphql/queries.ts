/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTimeTracker = /* GraphQL */ `query GetTimeTracker($id: ID!) {
  getTimeTracker(id: $id) {
    id
    userID
    name
    description
    clockIn
    clockOut
    first_break
    secound_break
    lunch
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTimeTrackerQueryVariables,
  APITypes.GetTimeTrackerQuery
>;
export const listTimeTrackers = /* GraphQL */ `query ListTimeTrackers(
  $filter: ModelTimeTrackerFilterInput
  $limit: Int
  $nextToken: String
) {
  listTimeTrackers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      name
      description
      clockIn
      clockOut
      first_break
      secound_break
      lunch
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTimeTrackersQueryVariables,
  APITypes.ListTimeTrackersQuery
>;
