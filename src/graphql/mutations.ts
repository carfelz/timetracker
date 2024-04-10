/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTimeTracker = /* GraphQL */ `mutation CreateTimeTracker(
  $input: CreateTimeTrackerInput!
  $condition: ModelTimeTrackerConditionInput
) {
  createTimeTracker(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTimeTrackerMutationVariables,
  APITypes.CreateTimeTrackerMutation
>;
export const updateTimeTracker = /* GraphQL */ `mutation UpdateTimeTracker(
  $input: UpdateTimeTrackerInput!
  $condition: ModelTimeTrackerConditionInput
) {
  updateTimeTracker(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTimeTrackerMutationVariables,
  APITypes.UpdateTimeTrackerMutation
>;
export const deleteTimeTracker = /* GraphQL */ `mutation DeleteTimeTracker(
  $input: DeleteTimeTrackerInput!
  $condition: ModelTimeTrackerConditionInput
) {
  deleteTimeTracker(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTimeTrackerMutationVariables,
  APITypes.DeleteTimeTrackerMutation
>;
