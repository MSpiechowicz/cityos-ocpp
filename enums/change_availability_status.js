// Status returned in response to ChangeAvailabilityRequest.
// ChangeAvailabilityStatusEnumType is used by: changeAvailability:ChangeAvailabilityResponse

// Request has been accepted and will be executed
export const ACCEPTED = 'Accepted';

// Request has not been accepted and will not be executed
export const REJECTED = 'Rejected';

// Request has been accepted and will be executed when transaction(s) in progress have finished
export const SCHEDULED = 'Scheduled';