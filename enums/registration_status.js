// Result of registration in response to BootNotificationRequest.
// RegistrationStatusEnumType is used by: bootNotification:BootNotificationResponse

// Charging Station is accepted by the CSMS
export const ACCEPTED = 'Accepted';

// CSMS is not yet ready to accept the Charging Station. CSMS may send messages to retrieve information orprepare the Charging Station
export const PENDING = 'Pending';

// Charging Station is not accepted by CSMS. This may happen when the Charging Station id is not known by CSMS
export const REJECTED = 'Rejected';