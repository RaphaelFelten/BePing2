import {MemberEntry} from '../../api/models/member-entry';
import {ClubEntry} from '../../api/models/club-entry';
import {TeamMatchesEntry} from '../../api/models/team-matches-entry';

export class Login {
    static readonly type = '[aftt] Login';

    constructor(
        public account: string,
        public password: string
    ) {
    }
}
export class LoginSuccess {
    static readonly type = '[aftt] Login success';

    constructor(
        public account: string,
        public password: string
    ) {
    }
}

export class LoginFailure {
    static readonly type = '[aftt] Login failure';

    constructor() {
    }
}
export class Logout {
    static readonly type = '[aftt] Logout';

}
