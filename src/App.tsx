import Welcome from './components/welcome.tsx';
import HeaderCustom from './components/HeaderCustom.tsx';
import ProfileCards from './components/ProfileCards.tsx';
import "./index.css"

function App() {
  return (
    <div>
      <HeaderCustom />
      <h1>Hello World</h1>

      <div style={{ gap:"4px", display: "flex", flexDirection:"row" }}>
      <ProfileCards name="egnooc" job="Backend Engineer" year={2000} />
      <ProfileCards name="Alice"  year={1995} />
      <ProfileCards name="Bob" job="DevOps Engineer" year={1990} />
      <ProfileCards name="Charlie" job="Fullstack Developer" year={1985} />
      
      </div>
      <Welcome />
    </div>
  );
}

export default App
