import FrameworkError, { NOT_IMPLEMENTED } from '../errors/ocpp_rpc_framework_error';

export default class Command {
    constructor() { }

    getCommandName() {
        return this.constructor.name;
    }

    getRequest(payload) {
        return new FrameworkError(NOT_IMPLEMENTED);
    }

    getResponse(payload) {
        return new FrameworkError(NOT_IMPLEMENTED);
    }
}