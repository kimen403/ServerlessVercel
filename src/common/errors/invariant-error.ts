import { BaseError } from './base-error';

export class InvariantError extends BaseError {
    constructor(message: string) {
        super(message, 500, 'INVARIANT_ERROR');
    }
}

/**
 * Helper function untuk memvalidasi invariant condition
 * @param condition Kondisi yang harus true
 * @param message Pesan error jika kondisi false
 * @throws {InvariantError}
 */
export function invariant(condition: any, message: string): asserts condition {
    if (!condition) {
        throw new InvariantError(message);
    }
}

/**
 * Helper function untuk memastikan nilai tidak null/undefined
 * @param value Nilai yang dicek
 * @param message Pesan error jika nilai null/undefined
 * @throws {InvariantError}
 */
export function assertNotNull<T>(value: T | null | undefined, message: string): asserts value is T {
    if (value === null || value === undefined) {
        throw new InvariantError(message);
    }
}

/**
 * Helper function untuk memastikan nilai adalah number
 * @param value Nilai yang dicek
 * @param message Pesan error jika bukan number
 * @throws {InvariantError}
 */
export function assertNumber(value: any, message: string): asserts value is number {
    if (typeof value !== 'number' || isNaN(value)) {
        throw new InvariantError(message);
    }
}
