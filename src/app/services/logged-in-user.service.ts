import { Injectable } from '@angular/core';

import { UserInfoCard } from '../models/destiny-user';

@Injectable()
export class LoggedInUserService {

  loggedInUserInfoCard: UserInfoCard;

  constructor() { }

}
