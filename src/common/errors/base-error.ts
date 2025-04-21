export class BaseError extends Error {
    constructor(
        public message: string,
        public statusCode: number = 500,
        public errorCode?: string
    ) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }

    toJSON() {
        return {
            error: {
                name: this.name,
                message: this.message,
                statusCode: this.statusCode,
                errorCode: this.errorCode
            }
        };
    }
}
