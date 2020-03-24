/*
* Information from official 2.0.1 specification document:
* 
* To identify the type of message one of the following Message Type Numbers MUST be used.
* When a server receives a message with a Message Type Number not in this list, it SHALL ignore the message payload. 
* Each message type may have additional required fields.
*/

export const CALL = 2;          // Request message
export const CALLRESULT = 3;    // Response message
export const CALLERROR = 4;     // Error response to a request message