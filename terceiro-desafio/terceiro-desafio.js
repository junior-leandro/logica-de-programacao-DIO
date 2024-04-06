class heroCreator {
    constructor (name, xp, type){
        this.name = name;
        this.xp = xp;
        this.type = type
    }
    
    attack(){
        let typeOfAttack;

        if (this.type == "mago"){
            typeOfAttack = "Magia"
        } else if (this.type == "guerreiro"){
            typeOfAttack = "Espada"
        } else if (this.type == "monge"){
            typeOfAttack = "Artes Marciais"
        } else if (this.type == "ninja"){
            typeOfAttack = "Shuriken"
        } else {
            typeOfAttack = "Poder Desconhecido"
        }

        console.log(`O Herói ${this.name} do tipo ${this.type} nivel ${this.xp}, atacou usando ${typeOfAttack}`)
    }
}

const hero1 = new heroCreator("Mago Supremo", 99, "mago");
const hero2 = new heroCreator("Felipão da Espada Fulmegante", 35, "guerreiro");
const hero3 = new heroCreator("Mestre das artes", 75, "monge"); 
const hero4 = new heroCreator("Dr. Oculto", 20, "ninja"); 
const hero5 = new heroCreator("Dr. Estranho", 5000, "Mago Supremo");

hero1.attack()
hero2.attack()
hero3.attack()
hero4.attack()
hero5.attack()

/* SAIDAS:

O Herói Mago Supremo do tipo "mago" nivel 99, atacou usando Magia
O Herói Felipão da Espada Fulmegante do tipo "guerreiro" nivel 35, atacou usando Espada
O Herói Mestre das artes do tipo "monge" nivel 75, atacou usando Artes Marciais
O Herói Dr. Oculto do tipo "ninja" nivel 20, atacou usando Shuriken
O Herói Dr. Estranho do tipo "Mago Supremo" nivel 5000, atacou usando Poder Desconhecido

*/