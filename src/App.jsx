import { use } from "react";
import data from "./data";
import { useState } from "react";
const App = () => {
  const [people, setPeople] = useState(data);
  const [isloaded, setLoaded] = useState(true);
  
  const handleclick = () => {
    setLoaded(!isloaded);
    if(isloaded) setPeople([]);
    else setPeople(data);
  }

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Today brithday</h3>
          {people.map((person) => {
            const { id, name, age, image } = person;
            return (
              <section>
                <article className="person">
                  <img src={image} />
                  <div>
                    <h2>{name}</h2>
                    <h3>{age}</h3>
                  </div>
                </article>
              </section>
            );
          })}

          <button className="btn btn-block" onClick={handleclick}>
            {isloaded ? "clear all" : "show all"}
          </button>
          <p
            style={{
              color: "blue",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            This project is Developed By Ayush Katiyar - 2300320120076
          </p>
        </section>
      </main>
    </>
  );
};
export default App;
