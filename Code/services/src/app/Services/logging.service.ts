export class LoggingService {
  loggingStatus(status:string){
    console.log('A server status changed, new status: ' + status);
  }
  constructor() { }
}
