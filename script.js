document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultSection = document.getElementById('resultSection');

  // Simulation de données (à remplacer par une requête vers le backend)
  const mockData = [
    {
      matricule: "STC001",
      nom: "Bonheur",
      classe: "Seconde STC",
      notes: {
        Mathématiques: 15,
        Physique: 14,
        Français: 16
},
      moyenne: 15,
mention: "Bien"
},
    {
      matricule: "STC002",
      nom: "Amina",
      classe: "Seconde STC",
      notes: {
        Mathématiques: 12,
        Physique: 13,
        Français: 14
},
      moyenne: 13,
      mention: "Assez Bien"
},
{
    matricule: "JB240036",
    nom: "ABA GANGOUE",
    prenom: "ALBERTO SM",
    sexe: "M",
    classe: "Première D2",
    moyenne: 4.9,
    observation: "Redouble la classe",
    prochaineClasse: "Première D"
},
  {
    matricule: "JB201278",
    nom: "ABALOU",
    prenom: "Eunice",
    sexe: "F",
    classe: "Première A",
    moyenne: 7.73,
    observation: "Redouble la classe",
    prochaineClasse: "Première A"
},
  ];

  const result = mockData.find(el =>
    el.matricule.toLowerCase() === query || el.nom.toLowerCase() === query
);

  resultSection.style.display = 'block';

  if (result) {
    resultSection.innerHTML = `
      <h3>Résultats de ${result.nom}</h3>
      <p><strong>Classe:</strong> ${result.classe}</p>
      <ul>
        ${Object.entries(result.notes).map(([matiere, note]) => `<li>${matiere}: ${note}/20</li>`).join('')}
      </ul>
      <p><strong>Moyenne:</strong> ${result.moyenne}/20</p>
      <p><strong>Mention:</strong> ${result.mention}</p>
    `;
} else {
    resultSection.innerHTML = `<p>Aucun résultat trouvé pour "${query}".</p>`;
}
});