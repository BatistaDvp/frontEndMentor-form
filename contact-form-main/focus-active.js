let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  if (!input.value === "") {
    input.style.borderColor = "green";
  }
});
