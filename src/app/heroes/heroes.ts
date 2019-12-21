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


    public getCssClasses() {
        const firstType = this.types[0];
        const secondType = this.types[1];
        return  [this.typeToColor(firstType), (this.types.length==1) ? '#FFF' : this.typeToColor(secondType)];  
    }    

    typeToColor(type) {
        let color;
        switch (type) {
            case 'Dragon':
                color = '#ff7e3388';
                break;
            case 'Feu':
                color = '#ac101088';
                break;
            case 'Eau':
                color = '#33ffe688';
                break;
            default:
                color = '#ffff';
                break;
        }
        return color;
    }
}