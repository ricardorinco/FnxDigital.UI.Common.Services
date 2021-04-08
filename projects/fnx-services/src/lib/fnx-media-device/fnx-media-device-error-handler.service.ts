import { Injectable } from '@angular/core';

import { NotReadableMediaDeviceErrorHandler } from './handlers/not-readable-media-device-error.handler';
import { OverconstrainedMediaDeviceErrorHandler } from './handlers/overconstrained-media-device-error.handler';
import { PermissionDeniedMediaDeviceErrorHandler } from './handlers/permission-denied-media-device-error.handler';

/**
 * FnxMediaDeviceErrorHandler Service
 *
 * Class responsible for handling browser's media device errors
 */
@Injectable({ providedIn: 'root' })
export class FnxMediaDeviceErrorHandlerService {
    /** Not readable error handler */
    private readonly notReadableMediaDeviceErrorHandler = new NotReadableMediaDeviceErrorHandler();
    /** Overconstrained error handler */
    private readonly overconstrainedMediaDeviceErrorHandler = new OverconstrainedMediaDeviceErrorHandler();
    /** Permission denied error handler */
    private readonly permissionDeniedMediaDeviceErrorHandler = new PermissionDeniedMediaDeviceErrorHandler();

    /**
     * Class constructor
     */
    constructor() {
        this.setHandlers();
    }

    /**
     * Handles the errors returned from the media device
     *
     * @param error Media device error
     * @returns string Friendly error (pt-br)
     */
    public handler(error: string): string {
        return this.notReadableMediaDeviceErrorHandler.handle(error);
    }

    /**
     * Set the call of the context handlers
     */
    private setHandlers(): void {
        this.notReadableMediaDeviceErrorHandler
            .setNext(this.overconstrainedMediaDeviceErrorHandler)
            .setNext(this.permissionDeniedMediaDeviceErrorHandler);
    }
}
