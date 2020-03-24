// Status of an authorization response.
// AuthorizationStatusEnumType is used by: Common:IdTokenInfoType

// Identifier is allowed for charging
export const ACCEPTED = 'Accepted';

// Identifier has been blocked and is not allowed for charging
export const BLOCKED = 'Blocked';

// Identifier is already involved in another transaction and multiple transactions are not allowed
// (Only relevant for the response to a transactionEventRequest(eventType = Started).)
export const CONCURRENT_TX = 'ConcurrentTx';

// Identifier has expired and is not allowed for charging
export const EXPIRED = 'Expired';

// Identifier is invalid and is not allowed for charging
export const INVALID = 'Invalid';

// Identifier is valid, but EV Driver doesn’t have enough credit to start charging and is not allowed for charging
export const NO_CREDIT = 'NoCredit'; 
    
// Identifier is valid, but not allowed to charge it this type of EVSE
export const NOT_ALLOWED_TYPE_EVSE = 'NotAllowedTypeEVSE';

// Identifier is valid, but not allowed to charge at this location
export const NOT_AT_THIS_LOCATION = 'NotAtThisLocation';

// Identifier is valid, but not allowed to charge at this location at this time
export const NOT_AT_THIS_TIME = 'NotAtThisTime';

// Identifier is unknown and is not allowed for charging
export const UNKNOWN = 'Unknown';