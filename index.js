// access ShowenField fucntion
const accessShownDataField = (event) => {
  return event.target.parentNode.parentNode.children[1];
};

const handleclick = (event) => {
  //   increment Section
  if (event.target.innerText === "Increment") {
    const dataField = accessShownDataField(event);
    let data = parseInt(dataField.innerText);
    dataField.innerText = ++data;
  }
  //   Decrement Section
  if (event.target.innerText === "Decrement") {
    const dataField = accessShownDataField(event);
    let data = parseInt(dataField.innerText);
    if (data < 1) {
    } else {
      dataField.innerText = --data;
    }
  }
};
const handleReset = () => {
  const valueClasses = document.getElementsByClassName("v");
  for (const valueClass of valueClasses) {
    valueClass.innerText = 0;
  }
};

const allCardContainer = document.getElementById("mainContainer");
allCardContainer.addEventListener("click", (event) => handleclick(event));

const reset = document.getElementById("reset");
reset.addEventListener("click", handleReset);
