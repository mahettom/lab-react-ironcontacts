import logo from './logo.svg';
import './App.css';
import arrayOfContacts from './contacts.json'
import { useState } from 'react'



function App() {

  const [contacts, setContacts] = useState(arrayOfContacts.slice(0, 5))


  return (
    <div className="App"> 
  
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((his) => {
              return (
                <tr>
                  <td><img src={his.pictureUrl} alt="portrait" /></td>
                  <td>{his.name}</td>
                  <td>{(his.popularity).toFixed(2)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

    </div>
  )
}

export default App;
