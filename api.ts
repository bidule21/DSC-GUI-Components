import { InjectionToken } from '@angular/core'

import { ReplaySubject } from "rxjs";

import { Session, Config, User } from "./classes/session";


export interface DscAPIInterface {
  connected: ReplaySubject<boolean>;
  session: ReplaySubject<Session>;
  config: ReplaySubject<Config>;
  
  setNewTarget();
  setPart(partId: string, forceNewPart: boolean);
  togglePart();
  setSessionIndex(sessionIndex: number);
  setUser(user: User);
  setDisciplin(disziplinID: string);
  print();
  // loadData(data)
  // getTempToken()
}

export const DscAPI_Token = new InjectionToken<DscAPIInterface>('DscAPI_Token');
