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
        var firstCss = this.types[0];
        var secondCss = this.types[1];
        // Si le pkmn a qu'un type
        if (this.types.length == 1) {
            secondCss = "#FFFF";
            console.log("1st Css " + firstCss + "2nd Css " + secondCss);
            switch(firstCss) {
                case 'Dragon':
                    firstCss = '#ff7e3388';
                    break;
                case 'Feu':
                    firstCss = '#ac101088';
                    break;
                case 'Eau':
                    firstCss = '#33ffe688';
                    break;
                default:
                    firstCss = '#ffff'  ;
                    break;  
            }
            return{firstCss};
        }
        // Si le pkmn a plus de 1 (ici 2 max)
        else {
            // Premier Swtich pour le type[0] <> firstCss
            switch(firstCss) {
                case 'Dragon':
                    firstCss = '#ff7e3388';
                    break;
                case 'Feu':
                    firstCss = '#ac101088';
                    break;
                case 'Eau':
                    firstCss = '#33ffe688';
                    break;
            }
            // Second switch pour le type[1] <> secondCss
            switch(secondCss) {
                case 'Dragon':
                    secondCss = '#ff7e3388';
                    break;
                case 'Feu':
                    secondCss = '#ac101088';
                    break;
                case 'Eau':
                    secondCss = '#33ffe688';
                    break;
            }
            // On renvoie la valeur des 2 var firstCss et secondCss pour le [style.background]
            return{firstCss, secondCss};
        }
    }

       
    
}