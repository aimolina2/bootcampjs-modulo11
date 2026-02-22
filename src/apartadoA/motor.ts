import { mostrarInfo } from "./ui";

export const inicializarFormulario = () => {
  const form = document.querySelector("#form");
  if (form && form instanceof HTMLFormElement) {
    form.addEventListener("submit", submitForm);
  }
};

const submitForm = (event: SubmitEvent) => {
  event.preventDefault();
  const ibanInput = document.querySelector("#iban");
  if (ibanInput && ibanInput instanceof HTMLInputElement) {
    mostrarInfo(ibanInput.value);
  }
};
