const btns = document.querySelectorAll(".AddBtn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target);

    //  when user click on add btn

    // create label and input
    const label = document.createElement("label");
    label.innerText = "Todo name :";
    const input = document.createElement("input");
    input.type = "text";

    const div = document.createElement("div");
    div.id = "takingInput1";
    div.append(label, input);

    // create label and input
    const label2 = document.createElement("label");
    label2.innerText = "Todo description? :";
    const input2 = document.createElement("input");
    input2.type = "text";

    const div2 = document.createElement("div");
    div2.id = "takingInput2";
    div2.append(label2, input2);

    // append
    const btnParent = btn.parentElement;
    btnParent.append(div, div2);
    console.log(btnParent);

  });
});
