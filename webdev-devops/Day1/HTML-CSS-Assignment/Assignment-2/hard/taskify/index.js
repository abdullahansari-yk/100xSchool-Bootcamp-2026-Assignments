const btns = document.querySelectorAll(".AddBtn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // if user clcik on any btn, first check from which category it is clicked

    if (btn.parentElement.id == "todo") {
      //   console.log("it is todo section");

      const card = document.createElement("div");
      card.classList.add("card");

      const cards = document.querySelector(".todoCards");
      cards.appendChild(card);

      const inputField1 = document.createElement("input");
      inputField1.placeholder = "Enter Name";

      const inputField2 = document.createElement("input");
      inputField2.placeholder = "Enter description";

      card.append(inputField1, inputField2);

      inputField1.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          const title = document.createElement("div");
          title.classList.add("title");
          title.innerHTML = e.target.value;

          card.appendChild(title);

          //   delete input field
          inputField1.parentElement.removeChild(inputField1);
          //   console.log(inputField1.parentElement.removeChild(inputField1));
        }
      });

      inputField2.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          // console.log(e.target.value);
          const description = document.createElement("div");
          description.classList.add("description");
          description.innerHTML = e.target.value;
          console.log(e.target.value);

          card.appendChild(description);
          //   delete input field
          inputField2.parentElement.removeChild(inputField2);
        }
      });
    } else if (btn.parentElement.id == "inProgress") {
      const card = document.createElement("div");
      card.classList.add("card");

      const cards = document.querySelector(".inProgressCards");
      cards.appendChild(card);

      const inputField1 = document.createElement("input");
      inputField1.placeholder = "Enter Name";

      const inputField2 = document.createElement("input");
      inputField2.placeholder = "Enter description";

      card.append(inputField1, inputField2);

      inputField1.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          const title = document.createElement("div");
          title.classList.add("title");
          title.innerHTML = e.target.value;

          card.appendChild(title);

          //   delete input field
          inputField1.parentElement.removeChild(inputField1);
          //   console.log(inputField1.parentElement.removeChild(inputField1));
        }
      });

      inputField2.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          // console.log(e.target.value);
          const description = document.createElement("div");
          description.classList.add("description");
          description.innerHTML = e.target.value;
          console.log(e.target.value);

          card.appendChild(description);
          //   delete input field
          inputField2.parentElement.removeChild(inputField2);
        }
      });
    } else if (btn.parentElement.id == "underReview") {
      const card = document.createElement("div");
      card.classList.add("card");

      const cards = document.querySelector(".underReviewCards");
      cards.appendChild(card);

      const inputField1 = document.createElement("input");
      inputField1.placeholder = "Enter Name";

      const inputField2 = document.createElement("input");
      inputField2.placeholder = "Enter description";

      card.append(inputField1, inputField2);

      inputField1.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          const title = document.createElement("div");
          title.classList.add("title");
          title.innerHTML = e.target.value;

          card.appendChild(title);

          //   delete input field
          inputField1.parentElement.removeChild(inputField1);
          //   console.log(inputField1.parentElement.removeChild(inputField1));
        }
      });

      inputField2.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          // console.log(e.target.value);
          const description = document.createElement("div");
          description.classList.add("description");
          description.innerHTML = e.target.value;
          console.log(e.target.value);

          card.appendChild(description);
          //   delete input field
          inputField2.parentElement.removeChild(inputField2);
        }
      });
    } else {
      const card = document.createElement("div");
      card.classList.add("card");

      const cards = document.querySelector(".finishedCards");
      cards.appendChild(card);

      const inputField1 = document.createElement("input");
      inputField1.placeholder = "Enter Name";

      const inputField2 = document.createElement("input");
      inputField2.placeholder = "Enter description";

      card.append(inputField1, inputField2);

      inputField1.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          const title = document.createElement("div");
          title.classList.add("title");
          title.innerHTML = e.target.value;

          card.appendChild(title);

          //   delete input field
          inputField1.parentElement.removeChild(inputField1);
          //   console.log(inputField1.parentElement.removeChild(inputField1));
        }
      });

      inputField2.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          // console.log(e.target.value);
          const description = document.createElement("div");
          description.classList.add("description");
          description.innerHTML = e.target.value;
          console.log(e.target.value);

          card.appendChild(description);
          //   delete input field
          inputField2.parentElement.removeChild(inputField2);
        }
      });
    }
  });
});
