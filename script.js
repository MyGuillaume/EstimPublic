const secteurs = [
    { secteur: "Maçon - BTP", prix: 250 },
    { secteur: "Plaquiste - BTP", prix: 250 },
    { secteur: "Peinte - BTP", prix: 250 },
    { secteur: "Carreleur - BTP", prix: 250 },
    { secteur: "Plombier - BTP", prix: 250 },
    { secteur: "Electricien - BTP", prix: 250 },
    { secteur: "Construction - BTP", prix: 250 },
    { secteur: "Location de bennes", prix: 250 },
    { secteur: "Bureau d'étude", prix: 250 },
    { secteur: "Paysagiste", prix: 250 },
    { secteur: "Coiffure", prix: 200 },
    { secteur: "Esthétique", prix: 200 },
    { secteur: "Protésiste ongulaire", prix: 230 },
    { secteur: "Négoce Automobile", prix: 380 },
    { secteur: "Mécanique Automobile", prix: 260 },
    { secteur: "Carrosserie Automobile", prix: 260 },
    { secteur: "Centre de Lavage Automobile", prix: 250 },
    { secteur: "Agent commercial", prix: 180 },
    { secteur: "Agence immobilière sans gestion locative", prix: 230 },
    { secteur: "Agence immobilière avec gestion locative", prix: 250 },
    { secteur: "Promotion immobilière", prix: "Sur Rendez-vous" },
    { secteur: "Marchand de biens", prix: "Sur Rendez-vous" },
    { secteur: "Agence de communication et de publicité", prix: 220 },
    { secteur: "Community Manager", prix: 220 },
    { secteur: "Spécialiste en diagnostique immobilier", prix: 250 },
    { secteur: "Courtier en crédit", prix: 180 },
    { secteur: "Agence d'assurance", prix: 250 },
    { secteur: "Grossiste", prix: "Sur Rendez-vous" },
    { secteur: "Pizzeria, Sushi, Burgers à emporter et en livraison", prix: 250 },
    { secteur: "Boucherie, cahrcuterie et traiteur", prix: 250 },
    { secteur: "Traiteur", prix: 250 },
    { secteur: "Prêt à porter", prix: 280 },
    { secteur: "Presse, bimbeloterie", prix: 280 },
    { secteur: "Tabac, française des jeux, bimbeloterie", prix: 350 },
    { secteur: "Tabac, française des jeux, bimbeloterie et presses", prix: 390 },
    { secteur: "Tabac, française des jeux, bimbeloterie, presses et BAR", prix: 450 },
    { secteur: "BAR, PMU", prix: 250 },
    { secteur: "Restauration traditionnelle", prix: 280 },
    { secteur: "Brasserie, restauration", prix: 300 },
    { secteur: "PUB", prix: 450 },
    { secteur: "Club et boîte de nuit", prix: 450 },
    { secteur: "Influenceur", prix: "Sur Rendez-vous" },
    { secteur: "Fleuriste", prix: 240 },
    { secteur: "Pressing", prix: 220 },
    { secteur: "Laverie automatique", prix: 180 },
    { secteur: "Location de box (conteneur)", prix: 200 },
    { secteur: "Primeur fruits et légumes", prix: 220 },
    { secteur: "Boulangerie, pâtisserie, sandwicherie", prix: 350 },
    { secteur: "Poissonnerie, crustacés", prix: 220 },
    { secteur: "Cigarettes électronique et CBD", prix: 250 },
    { secteur: "Téléphonie, ventes et réparations", prix: 280 },
    { secteur: "Commerçants divers", prix: "Sur Rendez-vous" },
    { secteur: "Vente à distance (internet)", prix: "Sur Rendez-vous" },
    { secteur: "Prestataires aide à la personne", prix: 250 },
    { secteur: "Micro-crèche", prix: 180 },
    { secteur: "Pompes funèbres", prix: 290 },
    { secteur: "Fossoyeur", prix: 180 },
    { secteur: "Taxi", prix: 180 },
    { secteur: "VTC", prix: 180 },
    { secteur: "Ambulance", prix: "Sur Rendez-vous" },
    { secteur: "Pharmacie", prix: 450 },
    { secteur: "Infirmier - Infirmière - BNC", prix: 80 },
    { secteur: "Kinésithérapeuthe - BNC", prix: 80 },
    { secteur: "Infirmier - Infirmière - SEL", prix: 150 },
    { secteur: "Kinésithérapeuthe - SEL", prix: 150 },
    { secteur: "Médecin - BNC", prix: 220 },
    { secteur: "Dentiste -BNC", prix: 220 },
    { secteur: "Avocat - BNC", prix: 200 },
    { secteur: "Médecin - SEL", prix: 270 },
    { secteur: "Dentiste - SEL", prix: 270 },
    { secteur: "Avocat - SEL", prix: 270 },
    { secteur: "SCM - Infirmier", prix: 120 },
    { secteur: "SCP - Infirmier", prix: 120 },
    { secteur: "SCM - Kinésithérapeuthe", prix: 120 },
    { secteur: "SCP - Kinésithérapeuthe", prix: 150 },
    { secteur: "SCM - Médecin", prix: 180 },
    { secteur: "SCP - Médecin", prix: 180 },
    { secteur: "SCM - Dentiste", prix: 180 },
    { secteur: "SCP - Dentiste", prix: 180 },
    { secteur: "SCI Revenu foncier", prix: 45 },
    { secteur: "SCI IS", prix: 45 },
    { secteur: "Holding", prix: 80 },
    { secteur: "LMNP", prix: 80 },
    { secteur: "Association", prix: "Sur Rendez-vous" }    
];
function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
    /* Style général de la box */



        /* Style pour la liste des résultats */
        .autocomplete-items {
            font-family: 'Poppins', sans-serif;
            border: 1px solid #d4d4d4;
            max-height: 200px;
            overflow-y: auto;
            position: absolute;
            background-color: white;
            max-width: 500px;
        }
        .autocomplete-item {
            padding: 10px;
            cursor: pointer;
        }
        .autocomplete-item:hover {
            background-color: #f0f0f0;
        }




    .pricing-box {
        border: 2px solid #D4ac17;
        border-radius: 15px;
        padding: 20px;
        margin: 25px 0;
        font-family: 'Poppins', sans-serif;
        max-width: 400px;
        background-color: #1a2a4a;
        color: white;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    .pricing-box .sectorsector {
        font-size: 1.8em;
        text-align: center;
        margin-bottom: 15px;
        color: #D4ac17;
        text-transform: uppercase;
    }

    .price-big {
        font-size: 2.5em;
        font-weight: bold;
        text-align: center;
        color: white;
    }

    .price-big span {
        font-size: 0.6em;
    }

    .separator {
        border-top: 1px solid #D4ac17;
        margin: 15px 0;
    }

    .sub-text {
        font-size: 0.8em;
        color: #1a2a4a;
        text-align: left;
        padding: 10px;
        background-color: white;
        border-radius: 8px;
    }

    .checklist {
        list-style: none;
        padding: 0;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #1a2a4a;
        background-color: white;
        padding: 10px;
        border-radius: 8px;
    }

    .checklist li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .check-icon {

        color: #28a745;
        padding: 5px;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cross-icon {

        color: #dc3545;
        padding: 5px;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .note {
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
        color: white;
        margin-top: 20px;
        padding: 10px;
        max-width:430px;
        background-color: #1a2a4a;
        border-top: 3px solid #D4ac17;
        border-radius: 0 0 15px 15px;
    }

    /* Responsive */
    @media (max-width: 600px) {
        .pricing-box {
            max-width: 100%;
            padding: 15px;
        }

        .price-big {
            font-size: 2em;
        }
    }
    `;
    document.head.appendChild(style);
}


function filterResults() {
  const input = document.getElementById('activity').value.toLowerCase();
  const resultDiv = document.getElementById('autocomplete-list');
  resultDiv.innerHTML = ''; // Clear previous results

  if (input.length > 0) {
    const filteredSectors = secteurs.filter(s => s.secteur.toLowerCase().includes(input));

    filteredSectors.forEach(sector => {
      const item = document.createElement('div');
      item.classList.add('autocomplete-item');
      item.innerHTML = sector.secteur;
      
      // Quand l'utilisateur clique sur un secteur
      item.addEventListener('click', function() {
        document.getElementById('activity').value = sector.secteur;
        resultDiv.innerHTML = ''; // Efface la liste après la sélection
        displayPrice(sector.prix, sector.secteur);
      });

      resultDiv.appendChild(item);
    });
  }
}

function formatPrice(price) {
    return price.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function displayPrice(price, sector) {
    const resultDiv = document.getElementById('result');
  
    // Calcul de la TVA (20%) et du montant TTC
    const tva = price * 0.20;
    const ttc = price + tva;

    // Calcul pour une année (12 mois)
    const annualHT = price * 12;
    const annualTVA = tva * 12;
    const annualTTC = ttc * 12;

    // Affichage sous forme de box
    resultDiv.innerHTML = `
    <div class="pricing-box">
      <div class="sectorsector">${sector}</div>
      <div class="price-big">${formatPrice(price)} € <span>/ mois</span></div>

      <div class="separator"></div>
      
      <div class="sub-text">
        TVA : ${formatPrice(tva)} €<br>
        TTC : ${formatPrice(ttc)} €
      </div>

      <div class="checklist">
        <li><div class="check-icon">✔</div> Comptabilité</li>
        <li><div class="check-icon">✔</div> Fiscalité</li>
        <li><div class="cross-icon">✖</div> Gestion</li>
        <li><div class="cross-icon">✖</div> Juridique</li>
      </div>

      <div class="separator"></div>
      
      <div class="sub-text">
        <strong>ANNUEL</strong><br><br>
        <strong>HT  :</strong> ${formatPrice(annualHT)} €<br>
        <strong>TVA :</strong> ${formatPrice(annualTVA)} €<br>
        <strong>TTC :</strong> ${formatPrice(annualTTC)} €
      </div>
    </div>

    <div class="note">
      <strong>Note :</strong> Ce prix est estimatif et peut varier de +/- 20% en fonction de la charge de travail, la complexité de votre dossier et les services demandés.<br>
      Cette estimation n'est ni un devis ni une facture officielle.
    </div>
    `;
}

// Injecter les styles au chargement de la page
injectStyles();
