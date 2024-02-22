import { useState } from "react";
import experiences from "./data";
import "./Styles.css";

const Accordion = () => {
  const [select, setSelect] = useState(null);
  const [enableMultiple, setEnableMultiple] = useState(false);
  const [multipleSelected, setMultiSelected] = useState([]);

  // # calling function for a singleSelection
  const singleSelection = (getCurrentTitle) => {
    setSelect(getCurrentTitle === select ? null : getCurrentTitle);
  };
  console.log(select);

  // # Calling Function For A MultipleSelection
  function multipleSelection(getCurrentTitle) {
    let copyMultiple = [...multipleSelected];
    const findIndexOfCurrentTitle = copyMultiple.indexOf(getCurrentTitle);
    console.log(findIndexOfCurrentTitle);

    if (findIndexOfCurrentTitle === -1) copyMultiple.push(getCurrentTitle);
    else copyMultiple.splice(findIndexOfCurrentTitle, 1);
    setMultiSelected(copyMultiple);
  }

  console.log(select, multipleSelected);

  return (
    <div className="container">
      <button onClick={() => setEnableMultiple(!enableMultiple)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {experiences && experiences.length > 0 ? (
          experiences.map((experience, title) => (
            <div key={title} className="item">
              <div className="Title">
                <h3> {experience.title}</h3>
                <button
                  className="button"
                  onClick={
                    enableMultiple
                      ? () => multipleSelection(experience.title)
                      : () => singleSelection(experience.title)
                  }
                >
                  Roles
                </button>
              </div>

              {/* # Conditions  */}
              {enableMultiple
                ? multipleSelected.indexOf(experience.title) !== -1 && (
                    <div className="content">{experience.points}</div>
                  )
                : select === experience.title && (
                    <div className="content">{experience.points}</div>
                  )}
              {/* {select === experience.id ? (
                <div className="content">{experience.points}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div> No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
