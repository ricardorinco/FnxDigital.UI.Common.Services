import { IMediaDeviceErrorHandler } from './../interfaces/imedia-device-error.handler';

import { MEDIA_DEVICE_DEFAULT_ERROR } from './../../shared/helpers/fnx-media-device/media-device.helper';

/**
 * AbstractMediaDeviceErrorHandler
 *
 * Abstract class for composing the media device error handlers
 */
export abstract class AbstractMediaDeviceErrorHandler implements IMediaDeviceErrorHandler {
    /** Next handler */
    private nextHandler: IMediaDeviceErrorHandler;

    /**
     * Set the next call to the chain of responsibility controller
     *
     * @param handler IMediaDeviceErrorHandler
     * @returns IMediaDeviceErrorHandler
     */
    public setNext(handler: IMediaDeviceErrorHandler): IMediaDeviceErrorHandler {
        this.nextHandler = handler;

        return handler;
    }

    /**
     * Handle media device default error
     *
     * @param request Media device error
     * @returns string Friendly error (pt-br)
     */
    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return MEDIA_DEVICE_DEFAULT_ERROR;
    }
}
