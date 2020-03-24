// Valid errors from 2.0.1 OCPP RC

// Payload for Action is syntactically incorrect
export const FORMAT_VIOLATION = 'FormatViolation';

// Any other error not covered by the more specific error codes in this table
export const GENERIC_ERROR = 'GenericError';

// An internal error occurred and the receiver was not able to process the requested Action successfully
export const INTERNAL_ERROR = 'InternalError';

// A message with an Message Type Number received that is not supported by this implementation
export const MESSAGE_TYPE_NOT_SUPPORTED = 'MessageTypeNotSupported';

// Requested Action is not known by receiver
export const NOT_IMPLEMENTED = 'NotImplemented';

// Requested Action is recognized but not supported by the receiver
export const NOT_SUPPORTED = 'NotSupported';

// Payload for Action is syntactically correct but at least one of the fields violates occurrence constraints
export const OCCURRENCE_CONSTRAINT_VIOLATION = 'OccurrenceConstraintViolation';

// Payload is syntactically correct but at least one field contains an invalid value
export const PROPERTY_CONSTRAINT_VIOLATION = 'PropertyConstraintViolation';

// Payload for Action is not conform the PDU structure
export const PROTOCOL_ERROR = 'ProtocolError';

// Content of the call is not a valid RPC Request, for example: MessageId could not be read
export const RPC_FRAMEWORK_ERROR = 'RpcFrameworkError';

// During the processing of Action a security issue occurred preventing receiver from completing the Action successfully
export const SECURITY_ERROR = 'SecurityError';

// Payload for Action is syntactically correct but at least one of the fields violates data type constraints (e.g. "somestring": 12)
export const TYPE_CONSTRAINT_VIOLATION = 'TypeConstraintViolation';

export default class FrameworkError extends Error {
    constructor(code, message, details) {
        super(message);

        this.name = 'OCPP RPC Framework Error';
        this.code = code;
        this.message = message;
        this.details = details;

        Object.setPrototypeOf(this, FrameworkError.prototype);

        Error.captureStackTrace ? (Error.captureStackTrace(this, this.constructor)) : (this.stack = (new Error(this.message)).stack);
    }
}