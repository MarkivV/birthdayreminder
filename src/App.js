import List from "./List";
import {useState} from "react";
import data from "./data";
import InputForm from "./InputForm";

function App() {

    const [people, setPeople] = useState(data)
    const addBirth = (userInput, userAge) =>{
        const newBirth = {
            id: Math.random().toString(36).substr(2,9),
            name: userInput,
            age: userAge,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        }
        setPeople([...people, newBirth])
    }

  return (
    <main>
        <section className="container">
            <InputForm addBirth={addBirth} />
            <h3>{people.length} birthdays</h3>
            <List people={people}/>
            <button onClick={()=>setPeople([])}>Clear all</button>
        </section>
    </main>
  );
}

export default App;
