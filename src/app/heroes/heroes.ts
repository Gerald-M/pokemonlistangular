export class Hero {
    id: number;
    name: string;
    skill: number;
    picture: string;
    types: Array<string>;

    constructor(id, name, skill, picture, types) {
        this.id = id;
        this.name = name;
        this.skill = skill;
        this.picture = picture;
        this.types = types;
    }


    
}