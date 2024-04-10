import { generateClient } from "aws-amplify/api";
import { createTimeTracker, updateTimeTracker } from "../graphql/mutations";

const client = generateClient();

/**
 *
 * @param {object} record
 * @param {*} fn function to be called to set the new record in the state
 */
export async function createRecord(record, handleClockInStore) {
  try {
    const { data } = await client.graphql({
      query: createTimeTracker,
      variables: {
        input: record,
      },
    });
    if (handleClockInStore) handleClockInStore(data.createTimeTracker);
  } catch (error) {
    this.error = error;
    console.error(error);
  }
}

export async function updateRecord(record, handleUpdatedInStore) {
  try {
    const { data } = await client.graphql({
      query: updateTimeTracker,
      variables: {
        input: record,
      },
    });

    if (handleUpdatedInStore) handleUpdatedInStore(data.updateTimeTracker);
  } catch (error) {
    this.error = error;
    console.error(error);
  }
}

export function closeRecord({ id, clockOut }, handleClockOutInStore) {
  updateRecord({ id, clockOut }, null);

  if (handleClockOutInStore) handleClockOutInStore();
}
