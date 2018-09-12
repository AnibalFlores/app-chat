export class Mensaje {

    roomid: number;
    name: String = '';
    username: String = '';

    constructor(roomid: number, name: String, username: String) {
        this.roomid = roomid;
        this.name = name;
        this.username = username;
    }
}
