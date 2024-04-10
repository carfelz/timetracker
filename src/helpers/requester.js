import { generateClient } from "aws-amplify/api";
import { createTimeTracker, updateTimeTracker } from "../graphql/mutations";

const client = generateClient();

/**
 *
 * @param {object} record
 * @param {*} fn function to be called to set the new record in the state
 */
export async function createRecord(record, fn) {
  try {
    const { data } = await client.graphql({
      query: createTimeTracker,
      variables: {
        input: record,
      },
    });

    fn(data.createTimeTracker);
  } catch (error) {
    this.error = error;
    console.error(error);
  }
}

export async function updateRecord(record, fn) {
  try {
    const { data } = await client.graphql({
      query: updateTimeTracker,
      variables: {
        input: record,
      },
    });

    fn(data.updateTimeTracker);
  } catch (error) {
    this.error = error;
    console.error(error);
  }
}
