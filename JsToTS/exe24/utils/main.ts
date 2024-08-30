interface Matiere {
    [key: string]: number;
}

interface Etudiant {
    prenom: string;
    nom: string;
    matieres: Matiere;
}

let etudiants: Etudiant[] = [
    {
        prenom: "José",
        nom: "Garcia",
        matieres: {
            francais: 16,
            anglais: 7,
            humour: 14
        }
    },
    {
        prenom: "Antoine",
        nom: "De Caunes",
        matieres: {
            francais: 15,
            anglais: 6,
            humour: 16,
            informatique: 4,
            sport: 10
        }
    }
];

const displayStudentInfo = (etudiant) => {
    console.log(`Étudiant: ${etudiant.prenom} ${etudiant.nom}`);

    let totalNotes = 0;
    let nombreMatieres = 0;

    Object.keys(etudiant.matieres).forEach(matiere => {
        const note = etudiant.matieres[matiere];
        console.log(`  Matière: ${matiere}, Note: ${note}/20`);
        totalNotes += note;
        nombreMatieres++;
    });

    const moyenne = totalNotes / nombreMatieres;
    console.log(`  Moyenne générale: ${moyenne.toFixed(2)}\n`);
};

// Iterate over each student and display their information
etudiants.forEach(etudiant => {
    console.log("##### Début de l'affichage de l'étudiant #####");
    displayStudentInfo(etudiant);
    console.log("##### Fin de l'affichage de l'étudiant #####");
    console.log("\n");
    
});