import { AbstractMediaDeviceErrorHandler } from './abstract-media-device-error.handler';

import { MEDIA_DEVICE_NOT_READABLE_ERROR } from './../../shared/helpers/fnx-media-device/media-device.helper';

/**
 * NotReadableMediaDeviceErrorHandler
 *
 * Class responsible for handling NotReadable and TrackStart error
 */
export class NotReadableMediaDeviceErrorHandler extends AbstractMediaDeviceErrorHandler {
    /**
     * Handle the error NotReadable and TrackStart from the media device
     *
     * @param request Media device error
     * @returns string Friendly error (pt-br)
     */
    public handle(request: string): string {
        if (request === 'NotReadableError' || request === 'TrackStartError') {
            return MEDIA_DEVICE_NOT_READABLE_ERROR;
        }

        return super.handle(request);
    }
}
