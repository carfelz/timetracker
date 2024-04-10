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
    name
    description
    first_break
    secound_break
    lunch
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
    name
    description
    first_break
    secound_break
    lunch
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
    name
    description
    first_break
    secound_break
    lunch
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTimeTrackerSubscriptionVariables,
  APITypes.OnDeleteTimeTrackerSubscription
>;
