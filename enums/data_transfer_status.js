// Status in DataTransferResponse.
// DataTransferStatusEnumType is used by: dataTransfer:DataTransferResponse

// Message has been accepted and the contained request is accepted
export const ACCEPTED = 'Accepted';

// Message has been accepted but the contained request is rejected
export const REJECTED = 'Rejected';

// Message could not be interpreted due to unknown messageId string
export const UNKNOWNMESSAGEID = 'UnknownMessageId';

// Message could not be interpreted due to unknown vendorId string
export const UNKNOWNVENDORID = 'UnknownVendorId';