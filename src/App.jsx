// import logo from './logo.svg';
import './App.css';
import arrayOfContacts from './contacts.json'
import { useState } from 'react'
import './component/Button';



function App() {

  //  GET THE FIVE FIRST CELEBRITY OF THE LIST
  const [contacts, setContacts] = useState(arrayOfContacts.slice(0, 5))


  const handleAdd = () => {
  // GET ALL THE REMAINING CONTACTS
  const remainingContacts = arrayOfContacts.filter((contact) => !contacts.includes(contact))

  // PICK ONE RANDOM CELEBRITY FROM THE REMAINING CONTACTS
  const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)]

  // COPY LIST -> ADD RANDOM TO COPY -> SET MODIFY INTO ORIGINAL
  const copyArray = [...contacts]
  copyArray.push(randomContact)
  setContacts(copyArray)
}

const handleSortName = () => {
  const copy = [...contacts]
  copy.sort((a, b) => a.name.localeCompare(b.name))
  setContacts(copy)
}

const handleSortPopularity = () => {
  const copy = [...contacts]
  copy.sort((a, b) => b.popularity - a.popularity)
  setContacts(copy)
}

const handleDelete = (id) => {
  const arrayAfterDelete = contacts.filter((contact) => contact.id !== id)
  setContacts(arrayAfterDelete)
}

  return (
    <div className="App"> 
  
        <table>
          <thead>
            <tr>
              <th>Won Emmy</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((his) => {
              return (
                <tr>
                  <td>{his.wonEmmy && ('🏆')}</td>
                  <td><img src={his.pictureUrl} alt="portrait" /></td>
                  <td>{his.name}</td>
                  <td>{(his.popularity).toFixed(2)}</td>
                  <td>{his.wonOscar && ('🏆')}</td>
                  <td><button className='delete-button' onClick={() => handleDelete(his.id)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div id="button-container">
          <button className="button" onClick={handleAdd}>Add contact</button>

          <button className="button" onClick={handleSortName}>sort by name</button>
          <button className="button" onClick={handleSortPopularity}>sort by pop</button>
        </div>


    </div>
  )
}

export default App;
