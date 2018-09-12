export class Usuario {
    static instances: number = 0;
    get instances(): number { return this.constructor['instances'] };
    set instances(val: number) { this.constructor['instances'] = val }
    id: number;
    name: String;
    alias: String;
    dateCreation: Date;
    role: String;

    constructor() {
        this.instances++;
        this.id = this.instances;
        //this.role = Roles.Test;
    }

    
}
