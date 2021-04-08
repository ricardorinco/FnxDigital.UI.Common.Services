/**
 * IMediaDeviceErrorHandler
 *
 * Media device error handling interface
 */
export interface IMediaDeviceErrorHandler {
    /**
     * Set the next call to the chain of responsibility controller
     *
     * @param handler IMediaDeviceErrorHandler
     * @returns IMediaDeviceErrorHandler
     */
    setNext(handler: IMediaDeviceErrorHandler): IMediaDeviceErrorHandler;

    /**
     * Handle the media device error
     *
     * @param request Media device error
     * @returns string Friendly error (pt-br)
     */
    handle(request: string): string;
}
