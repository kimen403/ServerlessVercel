import { BaseError } from './base-error';

export class UnauthorizedError extends BaseError {
    constructor(message: string = 'Unauthorized access') {
        super(message, 401, 'UNAUTHORIZED');
    }
}

export class ForbiddenError extends BaseError {
    constructor(message: string = 'Access forbidden') {
        super(message, 403, 'FORBIDDEN');
    }
}

export class TokenExpiredError extends BaseError {
    constructor(message: string = 'Token has expired') {
        super(message, 401, 'TOKEN_EXPIRED');
    }
}

export class InvalidTokenError extends BaseError {
    constructor(message: string = 'Invalid token') {
        super(message, 401, 'INVALID_TOKEN');
    }
}

export class MissingTokenError extends BaseError {
    constructor(message: string = 'Missing authentication token') {
        super(message, 401, 'MISSING_TOKEN');
    }
}
