/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTimeTrackerInput = {
  id?: string | null,
  userID: string,
  name: string,
  description?: string | null,
  clockIn?: string | null,
  clockOut?: string | null,
  first_break_out?: string | null,
  first_break_in?: string | null,
  secound_break_out?: string | null,
  secound_break_in?: string | null,
  lunch_in?: string | null,
  lunch_out?: string | null,
};

export type ModelTimeTrackerConditionInput = {
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  clockIn?: ModelStringInput | null,
  clockOut?: ModelStringInput | null,
  first_break_out?: ModelStringInput | null,
  first_break_in?: ModelStringInput | null,
  secound_break_out?: ModelStringInput | null,
  secound_break_in?: ModelStringInput | null,
  lunch_in?: ModelStringInput | null,
  lunch_out?: ModelStringInput | null,
  and?: Array< ModelTimeTrackerConditionInput | null > | null,
  or?: Array< ModelTimeTrackerConditionInput | null > | null,
  not?: ModelTimeTrackerConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type TimeTracker = {
  __typename: "TimeTracker",
  id: string,
  userID: string,
  name: string,
  description?: string | null,
  clockIn?: string | null,
  clockOut?: string | null,
  first_break_out?: string | null,
  first_break_in?: string | null,
  secound_break_out?: string | null,
  secound_break_in?: string | null,
  lunch_in?: string | null,
  lunch_out?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTimeTrackerInput = {
  id: string,
  userID?: string | null,
  name?: string | null,
  description?: string | null,
  clockIn?: string | null,
  clockOut?: string | null,
  first_break_out?: string | null,
  first_break_in?: string | null,
  secound_break_out?: string | null,
  secound_break_in?: string | null,
  lunch_in?: string | null,
  lunch_out?: string | null,
};

export type DeleteTimeTrackerInput = {
  id: string,
};

export type ModelTimeTrackerFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  clockIn?: ModelStringInput | null,
  clockOut?: ModelStringInput | null,
  first_break_out?: ModelStringInput | null,
  first_break_in?: ModelStringInput | null,
  secound_break_out?: ModelStringInput | null,
  secound_break_in?: ModelStringInput | null,
  lunch_in?: ModelStringInput | null,
  lunch_out?: ModelStringInput | null,
  and?: Array< ModelTimeTrackerFilterInput | null > | null,
  or?: Array< ModelTimeTrackerFilterInput | null > | null,
  not?: ModelTimeTrackerFilterInput | null,
};

export type ModelTimeTrackerConnection = {
  __typename: "ModelTimeTrackerConnection",
  items:  Array<TimeTracker | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTimeTrackerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  clockIn?: ModelSubscriptionStringInput | null,
  clockOut?: ModelSubscriptionStringInput | null,
  first_break_out?: ModelSubscriptionStringInput | null,
  first_break_in?: ModelSubscriptionStringInput | null,
  secound_break_out?: ModelSubscriptionStringInput | null,
  secound_break_in?: ModelSubscriptionStringInput | null,
  lunch_in?: ModelSubscriptionStringInput | null,
  lunch_out?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTimeTrackerFilterInput | null > | null,
  or?: Array< ModelSubscriptionTimeTrackerFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateTimeTrackerMutationVariables = {
  input: CreateTimeTrackerInput,
  condition?: ModelTimeTrackerConditionInput | null,
};

export type CreateTimeTrackerMutation = {
  createTimeTracker?:  {
    __typename: "TimeTracker",
    id: string,
    userID: string,
    name: string,
    description?: string | null,
    clockIn?: string | null,
    clockOut?: string | null,
    first_break_out?: string | null,
    first_break_in?: string | null,
    secound_break_out?: string | null,
    secound_break_in?: string | null,
    lunch_in?: string | null,
    lunch_out?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTimeTrackerMutationVariables = {
  input: UpdateTimeTrackerInput,
  condition?: ModelTimeTrackerConditionInput | null,
};

export type UpdateTimeTrackerMutation = {
  updateTimeTracker?:  {
    __typename: "TimeTracker",
    id: string,
    userID: string,
    name: string,
    description?: string | null,
    clockIn?: string | null,
    clockOut?: string | null,
    first_break_out?: string | null,
    first_break_in?: string | null,
    secound_break_out?: string | null,
    secound_break_in?: string | null,
    lunch_in?: string | null,
    lunch_out?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTimeTrackerMutationVariables = {
  input: DeleteTimeTrackerInput,
  condition?: ModelTimeTrackerConditionInput | null,
};

export type DeleteTimeTrackerMutation = {
  deleteTimeTracker?:  {
    __typename: "TimeTracker",
    id: string,
    userID: string,
    name: string,
    description?: string | null,
    clockIn?: string | null,
    clockOut?: string | null,
    first_break_out?: string | null,
    first_break_in?: string | null,
    secound_break_out?: string | null,
    secound_break_in?: string | null,
    lunch_in?: string | null,
    lunch_out?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTimeTrackerQueryVariables = {
  id: string,
};

export type GetTimeTrackerQuery = {
  getTimeTracker?:  {
    __typename: "TimeTracker",
    id: string,
    userID: string,
    name: string,
    description?: string | null,
    clockIn?: string | null,
    clockOut?: string | null,
    first_break_out?: string | null,
    first_break_in?: string | null,
    secound_break_out?: string | null,
    secound_break_in?: string | null,
    lunch_in?: string | null,
    lunch_out?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTimeTrackersQueryVariables = {
  filter?: ModelTimeTrackerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTimeTrackersQuery = {
  listTimeTrackers?:  {
    __typename: "ModelTimeTrackerConnection",
    items:  Array< {
      __typename: "TimeTracker",
      id: string,
      userID: string,
      name: string,
      description?: string | null,
      clockIn?: string | null,
      clockOut?: string | null,
      first_break_out?: string | null,
      first_break_in?: string | null,
      secound_break_out?: string | null,
      secound_break_in?: string | null,
      lunch_in?: string | null,
      lunch_out?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTimeTrackerSubscriptionVariables = {
  filter?: ModelSubscriptionTimeTrackerFilterInput | null,
};

export type OnCreateTimeTrackerSubscription = {
  onCreateTimeTracker?:  {
    __typename: "TimeTracker",
    id: string,
    userID: string,
    name: string,
    description?: string | null,
    clockIn?: string | null,
    clockOut?: string | null,
    first_break_out?: string | null,
    first_break_in?: string | null,
    secound_break_out?: string | null,
    secound_break_in?: string | null,
    lunch_in?: string | null,
    lunch_out?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTimeTrackerSubscriptionVariables = {
  filter?: ModelSubscriptionTimeTrackerFilterInput | null,
};

export type OnUpdateTimeTrackerSubscription = {
  onUpdateTimeTracker?:  {
    __typename: "TimeTracker",
    id: string,
    userID: string,
    name: string,
    description?: string | null,
    clockIn?: string | null,
    clockOut?: string | null,
    first_break_out?: string | null,
    first_break_in?: string | null,
    secound_break_out?: string | null,
    secound_break_in?: string | null,
    lunch_in?: string | null,
    lunch_out?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTimeTrackerSubscriptionVariables = {
  filter?: ModelSubscriptionTimeTrackerFilterInput | null,
};

export type OnDeleteTimeTrackerSubscription = {
  onDeleteTimeTracker?:  {
    __typename: "TimeTracker",
    id: string,
    userID: string,
    name: string,
    description?: string | null,
    clockIn?: string | null,
    clockOut?: string | null,
    first_break_out?: string | null,
    first_break_in?: string | null,
    secound_break_out?: string | null,
    secound_break_in?: string | null,
    lunch_in?: string | null,
    lunch_out?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
