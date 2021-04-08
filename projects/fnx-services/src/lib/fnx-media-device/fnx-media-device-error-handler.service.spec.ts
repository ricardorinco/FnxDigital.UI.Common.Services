import { getTestBed, TestBed } from '@angular/core/testing';

import { FnxMediaDeviceErrorHandlerService } from './fnx-media-device-error-handler.service';

import {
    MEDIA_DEVICE_DEFAULT_ERROR,
    MEDIA_DEVICE_NOT_READABLE_ERROR,
    MEDIA_DEVICE_OVERCONSTRAINED_ERROR,
    MEDIA_DEVICE_PERMISSION_DENIED_ERROR
} from './../shared/helpers/fnx-media-device/media-device.helper';

describe('FnxMediaDeviceErrorHandlerService', () => {
    let fnxMediaDeviceErrorHandlerService: FnxMediaDeviceErrorHandlerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FnxMediaDeviceErrorHandlerService]
        });

        fnxMediaDeviceErrorHandlerService = getTestBed().inject(FnxMediaDeviceErrorHandlerService);
    });

    describe('Constructor:', () => {
        it('should create a instance', () => {
            expect(fnxMediaDeviceErrorHandlerService).toBeTruthy();
        });
    });

    describe('Methods:', () => {
        it(`should returned a default error in an unsuccessful attempt to use the user's camera`, () => {
            spyOn(fnxMediaDeviceErrorHandlerService, 'handler').and.callThrough();

            const erro = fnxMediaDeviceErrorHandlerService.handler(null);

            expect(fnxMediaDeviceErrorHandlerService.handler).toHaveBeenCalledTimes(1);
            expect(erro).toEqual(MEDIA_DEVICE_DEFAULT_ERROR);
        });

        it(`should returned a not readable error in an unsuccessful attempt to use the user's camera (NotReadableError)`, () => {
            spyOn(fnxMediaDeviceErrorHandlerService, 'handler').and.callThrough();

            const erro = fnxMediaDeviceErrorHandlerService.handler('NotReadableError');

            expect(fnxMediaDeviceErrorHandlerService.handler).toHaveBeenCalledTimes(1);
            expect(erro).toEqual(MEDIA_DEVICE_NOT_READABLE_ERROR);
        });

        it(`should returned a not readable error in an unsuccessful attempt to use the user's camera (TrackStartError)`, () => {
            spyOn(fnxMediaDeviceErrorHandlerService, 'handler').and.callThrough();

            const erro = fnxMediaDeviceErrorHandlerService.handler('TrackStartError');

            expect(fnxMediaDeviceErrorHandlerService.handler).toHaveBeenCalledTimes(1);
            expect(erro).toEqual(MEDIA_DEVICE_NOT_READABLE_ERROR);
        });

        it(`should returned a overconstrained error in an unsuccessful attempt to use the user's camera (OverconstrainedError)`, () => {
            spyOn(fnxMediaDeviceErrorHandlerService, 'handler').and.callThrough();

            const erro = fnxMediaDeviceErrorHandlerService.handler('OverconstrainedError');

            expect(fnxMediaDeviceErrorHandlerService.handler).toHaveBeenCalledTimes(1);
            expect(erro).toEqual(MEDIA_DEVICE_OVERCONSTRAINED_ERROR);
        });

        it(`should returned a overconstrained error in an unsuccessful attempt to use the user's camera (ConstraintNotSatisfiedError)`, () => {
            spyOn(fnxMediaDeviceErrorHandlerService, 'handler').and.callThrough();

            const erro = fnxMediaDeviceErrorHandlerService.handler('OverconstrainedError');

            expect(fnxMediaDeviceErrorHandlerService.handler).toHaveBeenCalledTimes(1);
            expect(erro).toEqual(MEDIA_DEVICE_OVERCONSTRAINED_ERROR);
        });

        it(`should returned a permission denied error in an unsuccessful attempt to use the user's camera (PermissionDeniedError)`, () => {
            spyOn(fnxMediaDeviceErrorHandlerService, 'handler').and.callThrough();

            const erro = fnxMediaDeviceErrorHandlerService.handler('PermissionDeniedError');

            expect(fnxMediaDeviceErrorHandlerService.handler).toHaveBeenCalledTimes(1);
            expect(erro).toEqual(MEDIA_DEVICE_PERMISSION_DENIED_ERROR);
        });

        it(`should returned a permission denied error in an unsuccessful attempt to use the user's camera (NotAllowedError)`, () => {
            spyOn(fnxMediaDeviceErrorHandlerService, 'handler').and.callThrough();

            const erro = fnxMediaDeviceErrorHandlerService.handler('NotAllowedError');

            expect(fnxMediaDeviceErrorHandlerService.handler).toHaveBeenCalledTimes(1);
            expect(erro).toEqual(MEDIA_DEVICE_PERMISSION_DENIED_ERROR);
        });
    });
});
