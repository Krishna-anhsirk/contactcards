import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data.results);
      });
  }, []);

  return (
    <>
      <h1 className="heading">Contact Cards</h1>

      <div className="contacts-list">
        {" "}
        {contacts.map((contact) => (
          <ContactCard
            avatar={contact.picture.large}
            name={contact.name.first + " " + contact.name.last}
            email={contact.email}
            age={contact.dob.age}
          />
        ))}
      </div>

      <h2 className="end-quote">Made with ❤️</h2>
    </>
  );
};

const ContactCard = ({ avatar, name, email, age }) => {
  const [showAge, setAge] = useState(true);
  return (
    <div className="contact-card">
      <img src={avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button onClick={() => setAge(!showAge)}>Toggle Age</button>
        {showAge && <p>Age: {age}</p>}
      </div>
    </div>
  );
};

export default App;
