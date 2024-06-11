

document.querySelector(".container").addEventListener("submit", (e) => {
  const emailCheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const fields = [
    {
      element: document.querySelector(".firstName-box"),
      error: document.querySelector("#firstName-error"),
      message: "This field is required",
    },
    {
      element: document.querySelector(".lastName-box"),
      error: document.querySelector("#lastName-error"),
      message: "This field is required",
    },
    {
      element: document.querySelector(".message-box"),
      error: document.querySelector("#message-error"),
      message: "This field is required",
    },
    {
      element: document.querySelector(".email-box"),
      error: document.querySelector("#emailError"),
      message: "Please enter a valid email address",
      regex: emailCheck,
    },
    {
      element: document.querySelector(".square"),
      error: document.querySelector(".term-error"),
      message: "You must agree to the terms",
      checkbox: true,
    },
  ];

  const queryError = document.querySelector(".query-error");
  const queryGeneral = document.querySelector(".general");
  const querySupport = document.querySelector(".support");

  let valid = true;

  fields.forEach(({ element, error, message, regex, checkbox }) => {
    error.innerHTML = "";
    element.style.borderColor = "";

    if (
      (checkbox && !element.checked) ||
      (!checkbox &&
        (element.value === "" ||
          element.value == null ||
          (regex && !element.value.match(regex))))
    ) {
      e.preventDefault();
      error.innerHTML = message;
      element.style.borderColor = "red";
      valid = false;
    }
  });

  queryError.innerHTML = "";
  if (!queryGeneral.checked && !querySupport.checked) {
    e.preventDefault();
    queryError.innerHTML = "To submit this form, please select a query type";
    valid = false;
  }

  if (valid) {
    e.preventDefault();
    let popup = document.querySelector(".popup");
    popup.style.visibility = "visible";
    form.submit();
  }
});
