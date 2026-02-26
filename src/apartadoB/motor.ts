import { mostrarUrls, mostrarImagenes } from "./ui";

export const inicializarFormulario = () => {
  const form = document.querySelector("#form");
  if (form && form instanceof HTMLFormElement) {
    form.addEventListener("submit", submitForm);
  }
};

const submitForm = (event: SubmitEvent) => {
  event.preventDefault();
  const codigoHTML = document.querySelector("#campo-codigo");
  if (codigoHTML && codigoHTML instanceof HTMLTextAreaElement) {
    mostrarUrls(codigoHTML.value);
    mostrarImagenes(codigoHTML.value);
  }
};
