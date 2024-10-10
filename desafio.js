//Variáveis
let nomesDosHerois = ["Wolverine", "Rogue", "Calisto", "jean Grey", "Storm", "Professor X", "Cyclops","Monkey", "Fera", "Gambit","Emma Frost",]
let nivelDePoder = [6000 ,7999 ,2999, 8000,  8000, 7000, 6080, 3850, 3001, 6000, 6050,] 

// Laço de repetição

for (let i = 0; i < nomesDosHerois.length; i++){



    // Variáveis
    let nome = nomesDosHerois[i]
    let xp = nivelDePoder[i]
    let nivel 

 if ( xp < 1000){

    nivel = "Zeta"
 }

 else if (xp >= 1001 && xp <= 2000 ) {
 
   nivel = "Épsilon"
    
 }
 else if (xp >= 2001 && xp <= 3000){
    nivel = "Delta"

} else if (xp >= 3001 && xp <= 4000) {
    nivel = "Gama"

} else if (xp >= 5001 && xp <= 6000) {
    nivel = "Beta"

} else if (xp >= 6001 && xp <= 7000) {
    nivel = "Alfa"

} else if (xp >= 7001 && xp <= 8000)
    nivel = "Ômega"



// Saída
console.log(`O Mutante de nome ${nome} está no nível ${nivel}`)

}