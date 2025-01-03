import './App.css';
import PersonalBio from './components/PersonalBio'

function App() {
  return (
    <div className="App">
      <h1>Personal Bio</h1>
      <PersonalBio
        name="Rajendra Jat"
        age={26}
        profession="Front-End Developer"
        bio="Rajendra is a passionate frontend developer who loves building web applications and exploring new technologies. In his free time, he enjoys hiking and photography."
        image="./assets/Profile.jpg"
      />
    </div>
  );
}

export default App;
