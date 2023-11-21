document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.getElementsByClassName("check");

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", function () {
      if (!this.checked) {
        return;
      }

      for (let j = 0; j < checkboxes.length; j++) {
        if (checkboxes[j] !== this) {
          checkboxes[j].checked = false;
        }
      }
    });
  }
});

//

document
  .querySelector(".custom-select select")
  .addEventListener("change", function () {
    document.querySelector(".selected-option").textContent = this.value;
  });
document
  .querySelector(".custom-select2 select")
  .addEventListener("change", function () {
    document.querySelector(".selected-option2").textContent = this.value;
  });

var municipioOptions = {
  AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
  AL: ["Maceió", "Arapiraca", "Marechal Deodoro"],
  AP: ["Macapá", "Santana", "Laranjal do Jari"],
  AM: ["Manaus", "Parintins", "Itacoatiara"],
  BA: ["Salvador", "Feira de Santana", "Vitória da Conquista"],
  CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte"],
  DF: ["Brasília"],
  ES: ["Vitória", "Vila Velha", "Cariacica"],
  GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis"],
  MA: ["São Luís", "Imperatriz", "Timon"],
  MT: ["Cuiabá", "Várzea Grande", "Rondonópolis"],
  MS: ["Campo Grande", "Dourados", "Três Lagoas"],
  MG: ["Belo Horizonte", "Contagem", "Uberlândia"],
  PA: ["Belém", "Ananindeua", "Santarém"],
  PB: ["João Pessoa", "Campina Grande", "Santa Rita"],
  PR: ["Curitiba", "Londrina", "Maringá"],
  PE: ["Recife", "Jaboatão dos Guararapes", "Olinda"],
  PI: ["Teresina", "Parnaíba", "Picos"],
  RJ: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias"],
  RN: ["Natal", "Mossoró", "Parnamirim"],
  RS: ["Porto Alegre", "Caxias do Sul", "Canoas"],
  RO: ["Porto Velho", "Ji-Paraná", "Ariquemes"],
  RR: ["Boa Vista", "Rorainópolis", "Cantá"],
  SC: ["Florianópolis", "Joinville", "Blumenau"],
  SP: ["São Paulo", "Guarulhos", "Campinas"],
  SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
  TO: ["Palmas", "Araguaína", "Gurupi"],
};
// determina os municipios
function changeMunicipioOptions() {
  var selectEstado = document.getElementById("select-estado");
  var selectMunicipio = document.getElementById("select-municipio");

  selectMunicipio.innerHTML = "";

  var estadoValue = selectEstado.options[selectEstado.selectedIndex].value;

  if (municipioOptions.hasOwnProperty(estadoValue)) {
    for (var i = 0; i < municipioOptions[estadoValue].length; i++) {
      var option = document.createElement("option");
      option.text = municipioOptions[estadoValue][i];
      option.value = municipioOptions[estadoValue][i];
      selectMunicipio.add(option);
    }
  }
}

document
  .getElementById("select-estado")
  .addEventListener("change", changeMunicipioOptions);
