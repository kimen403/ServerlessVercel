import { BaseError } from './base-error';

export class BadRequestError extends BaseError {
    constructor(message: string) {
        super(message, 400, 'BAD_REQUEST');
    }
}

export class NotFoundError extends BaseError {
    constructor(message: string) {
        super(message, 404, 'NOT_FOUND');
    }
}

export class ValidationError extends BaseError {
    constructor(message: string) {
        super(message, 422, 'VALIDATION_ERROR');
    }
}

export class ConflictError extends BaseError {
    constructor(message: string) {
        super(message, 409, 'CONFLICT');
    }
}

export class TooManyRequestsError extends BaseError {
    constructor(message: string = 'Too many requests') {
        super(message, 429, 'TOO_MANY_REQUESTS');
    }
}
