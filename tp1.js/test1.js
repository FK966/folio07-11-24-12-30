function test_age() {
    let age = prompt("Quelle est votre âge ?");
    if(age < 18) {
        document.write("Vous êtes mineur");
        document.body.style.backgroundColor="red";

    }
    else {
        document.write("Vous êtes majeur");
        document.body.style.backgroundcolor="green";
    }
}

function test_age() {
    let age = prompt("Quelle est votre âge ?");
    if (age < 18) {
        document.write("Vous êtes mineur");
        document.body.style.backgroundColor = "red";
    } else {
        document.write("Vous êtes majeur");
        document.body.style.backgroundColor = "green";
    }
}

function calcul_moyenne() {
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);
    document.write("Voici la somme : " + somme + "<br>");
    
    var moyenne = somme / 3;
    document.write("Voici la moyenne : " + moyenne + "<br>");

    // Vérification si la moyenne est invalide
    if (moyenne < 0 || moyenne > 20) {
        document.write("Moyenne invalide. Veuillez entrer des notes valides (entre 0 et 20).<br>");
        document.body.style.backgroundColor = "gray";
    } 
    
    else {
        if (moyenne < 10) {
            document.write("Désolé, vous redoublez.<br>");
            document.body.style.backgroundColor = "tomato";
        } else if (moyenne < 14) {
            document.write("Vous passez, mais avec des résultats moyens.<br>");
            document.body.style.backgroundColor = "orange";
        } else {
            document.write("Félicitations, vous êtes admis avec mention bien de bons résultats !<br>");
            document.body.style.backgroundColor = "lightgreen";
        }
    }
}


function test_couleur() {
    let couleur = prompt("Donner une couleur en anglais");
    document.body.style.background = couleur;
}

