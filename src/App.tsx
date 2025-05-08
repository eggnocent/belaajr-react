import Welcome from './components/welcome.tsx';
import HeaderCustom from './components/HeaderCustom.tsx';
import ProfileCards from './components/ProfileCards.tsx';
import "./index.css"

type Teacher = {
  name: string;
  job: string;
  year: number;
  id: number;
}

const teachers: Teacher[] = [
  {
    job: "dosen",
    name: "eka",
    year: 2002,
    id: 1
  },
  {
    job: "guru",
    name: "rama",
    year: 2003,
    id: 2
  },
  {
    job: "karyawan",
    name: "nuri",
    year: 2001,
    id: 3
  },
  {
    job: "Internship",
    name: "adam",
    year: 2001,
    id: 4
  },

]

function App() {
  return (
    <div>
      <HeaderCustom />
      <h1>Hello World</h1>

      <div style={{ gap:"4px", display: "flex", flexDirection:"row" }}>
      {
        teachers.map((teacher) => {
          return <ProfileCards 
          name={teacher.name} 
          year={teacher.year} 
          job={teacher.job}
          key={teacher.id}
          />
        })
      }
      
      </div>
      <Welcome />
    </div>
  );
}

export default App
