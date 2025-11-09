import './App.css';
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';

function App() {
  const utilisateur = { nom: 'Emma', photo: '/user.png' };

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Alice" />
      <Profil utilisateur={utilisateur} taille={150} />
      <Voiture marque= "Toyota" modele="XR 2018" couleur="Rouge" />
      <Voiture marque= "Dacia " modele="LODGY 2022" couleur="Noir" />

    </div>
  );
}


export default App;
