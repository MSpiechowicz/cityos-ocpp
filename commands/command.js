import FrameworkError, { NOT_IMPLEMENTED } from '../errors/ocpp_rpc_framework_error';

export default class Command {
    constructor() { }

    getCommandName() {
        return this.constructor.name;
    }

    createRequest(payload) {
        return new FrameworkError(NOT_IMPLEMENTED);
    }

    createResponse(payload) {
        return new FrameworkError(NOT_IMPLEMENTED);
    }
}