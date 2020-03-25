// Status in CancelReservationResponse.
// CustomerInformationStatusEnumType is used by: customerInformation:CustomerInformationResponse

// The Charging Station accepted the message
export const ACCEPTED = 'Accepted';

// When the Charging Station is in a state where it cannot process this request
export const REJECTED = 'Rejected';

// In a request to the Charging Station no reference to a customer is included
export const INVALID = 'Invalid';