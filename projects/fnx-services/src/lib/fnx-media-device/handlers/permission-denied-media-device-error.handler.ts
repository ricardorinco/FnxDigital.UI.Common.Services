import { AbstractMediaDeviceErrorHandler } from './abstract-media-device-error.handler';

import { MEDIA_DEVICE_PERMISSION_DENIED_ERROR } from './../../shared/helpers/fnx-media-device/media-device.helper';

/**
 * PermissionDeniedMediaDeviceErrorHandler
 *
 * Class responsible for handling PermissionDenied and NotAllowed error
 */
export class PermissionDeniedMediaDeviceErrorHandler extends AbstractMediaDeviceErrorHandler {
    /**
     * Handle the error PermissionDenied and NotAllowed from the media device
     *
     * @param request Media device error
     * @returns string Friendly error (pt-br)
     */
    public handle(request: string): string {
        if (request === 'PermissionDeniedError' || request === 'NotAllowedError') {
            return MEDIA_DEVICE_PERMISSION_DENIED_ERROR;
        }

        return super.handle(request);
    }
}
