/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTimeTracker = /* GraphQL */ `subscription OnCreateTimeTracker(
  $filter: ModelSubscriptionTimeTrackerFilterInput
) {
  onCreateTimeTracker(filter: $filter) {
    id
    userID
    name
    description
    clockIn
    clockOut
    first_break_out
    first_break_in
    secound_break_out
    secound_break_in
    lunch_in
    lunch_out
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTimeTrackerSubscriptionVariables,
  APITypes.OnCreateTimeTrackerSubscription
>;
export const onUpdateTimeTracker = /* GraphQL */ `subscription OnUpdateTimeTracker(
  $filter: ModelSubscriptionTimeTrackerFilterInput
) {
  onUpdateTimeTracker(filter: $filter) {
    id
    userID
    name
    description
    clockIn
    clockOut
    first_break_out
    first_break_in
    secound_break_out
    secound_break_in
    lunch_in
    lunch_out
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTimeTrackerSubscriptionVariables,
  APITypes.OnUpdateTimeTrackerSubscription
>;
export const onDeleteTimeTracker = /* GraphQL */ `subscription OnDeleteTimeTracker(
  $filter: ModelSubscriptionTimeTrackerFilterInput
) {
  onDeleteTimeTracker(filter: $filter) {
    id
    userID
    name
    description
    clockIn
    clockOut
    first_break_out
    first_break_in
    secound_break_out
    secound_break_in
    lunch_in
    lunch_out
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTimeTrackerSubscriptionVariables,
  APITypes.OnDeleteTimeTrackerSubscription
>;
