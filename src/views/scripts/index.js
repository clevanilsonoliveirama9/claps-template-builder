const selectParceiros = document.getElementById("select-parceiros");
const selectTemplates = document.getElementById("select-templates");

selectParceiros.addEventListener("input", (event) => {
  console.log(event);
});

selectTemplates.onchange = async () => {
  const response = await fetch(
    `/api/parceiros/${selectParceiros.value}/template/${selectTemplates.value}`
  );
  const responseBody = await response.json();
  const iframeTemplateView = document.getElementById("iframe-template-view");
  iframeTemplateView.src = responseBody.path;
};

async function carregarTemplates() {
  const response = await fetch("/api/templates");
  const responseBody = await response.json();
  responseBody.forEach((template) => {
    const option = document.createElement("option");
    option.value = template;
    option.innerText = template;
    selectTemplates.appendChild(option);
  });
}

async function carregarParceiros() {
  const response = await fetch("/api/parceiros");
  const responseBody = await response.json();
  responseBody.forEach((parceiro) => {
    const option = document.createElement("option");
    option.value = parceiro;
    option.innerText = parceiro;
    selectParceiros.appendChild(option);
  });
  console.log(responseBody);
}

carregarParceiros();
carregarTemplates();
