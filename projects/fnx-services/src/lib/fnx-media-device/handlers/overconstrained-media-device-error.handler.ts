import { AbstractMediaDeviceErrorHandler } from './abstract-media-device-error.handler';

import { MEDIA_DEVICE_OVERCONSTRAINED_ERROR } from './../../shared/helpers/fnx-media-device/media-device.helper';

/**
 * OverconstrainedMediaDeviceErrorHandler
 *
 * Class responsible for handling Overconstrained and ConstraintNotSatisfied error
 */
export class OverconstrainedMediaDeviceErrorHandler extends AbstractMediaDeviceErrorHandler {
    /**
     * Handle the error Overconstrained and ConstraintNotSatisfied from the media device
     *
     * @param request Media device error
     * @returns string Friendly error (pt-br)
     */
    public handle(request: string): string {
        if (request === 'OverconstrainedError' || request === 'ConstraintNotSatisfiedError') {
            return MEDIA_DEVICE_OVERCONSTRAINED_ERROR;
        }

        return super.handle(request);
    }
}
