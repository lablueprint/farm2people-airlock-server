import { Tables, Columns } from '../airtable/schema';

module.exports = {
  [Tables.Farms]: {
    write: (farms, authedUser) => {
      return (
        authedUser &&
        authedUser.fields['farms'] &&
        authedUser.fields['Project Group'].includes(farms.id)
      );
    }
  },
};