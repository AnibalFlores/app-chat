import { Mensaje } from './mensaje';

export class Sala {
    static instances: number = 0;
    get instances(): number { return this.constructor['instances'] };
    set instances(val: number) { this.constructor['instances'] = val }
    id: number;
    name: String = '';
    mensajes: Mensaje[];

    constructor(name: String) {
        this.instances++;
        this.id = this.instances;
        this.name = name;
        this.mensajes = [];
    }

    addMessage(msg: String) {
        let nota: Mensaje = new Mensaje(this.id, msg, '#_bot');
        this.mensajes.push(nota);
        //console.log(msg);
    }
}
