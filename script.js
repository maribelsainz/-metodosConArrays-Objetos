var radiologia = [{
  Hora: "11:00",
  Especialista: "IGNACIO SCHULZ",
  Paciente: "FRANCISCA ROJAS",
  RUT: "9878782-1",
  Previsión: "FONASA"
}, {
  Hora: "11:30",
  Especialista: "FEDERICO SUBERCASEAUX",
  Paciente: "PAMELA ESTRADA",
  RUT: "15345241-3",
  Previsión: "ISAPRE"
}, {
  Hora: "15:00",
  Especialista: "FERNANDO WURTHZ",
  Paciente: "ARMANDO LUNA",
  RUT: "16445345-9",
  Previsión: "ISAPRE"
}, {
  Hora: "15:30",
  Especialista: "ANA MARIA GODOY",
  Paciente: "MANUEL GODOY",
  RUT: "17666419-0",
  Previsión: "FONASA"
}, {
  Hora: "16:00",
  Especialista: "PATRICIA SUAZO",
  Paciente: "RAMON ULLOA",
  RUT: "14989389-K",
  Previsión: "FONASA"
}];

var traumatologia = [{
  Hora: "08:00",
  Especialista: "MARIA PAZ ALTUZARRA",
  Paciente: "PAULA SANCHEZ",
  RUT: "15554774-5",
  Previsión: "FONASA"
}, {
  Hora: "10:00",
  Especialista: "RAUL ARAYA",
  Paciente: "ANGÉLICA NAVAS",
  RUT: "15444147-9",
  Previsión: "ISAPRE"
}, {
  Hora: "10:30",
  Especialista: "MARIA ARRIAGADA",
  Paciente: "ANA KLAPP",
  RUT: "17879423-9",
  Previsión: "ISAPRE"
}, {
  Hora: "11:00",
  Especialista: "ALEJANDRO BADILLA",
  Paciente: "FELIPE MARDONES",
  RUT: "1547423-6",
  Previsión: "ISAPRE"
}, {
  Hora: "11:30",
  Especialista: "CECILIA BUDNIK",
  Paciente: "DIEGO MARRE",
  RUT: "16554741-K",
  Previsión: "FONASA"
}, {
  Hora: "12:00",
  Especialista: "ARTURO CAVAGNARO",
  Paciente: "CECILIA MENDEZ",
  RUT: "9747535-8",
  Previsión: "ISAPRE"
}, {
  Hora: "12:30",
  Especialista: "ANDRES KANACRI",
  Paciente: "MARCIAL SUAZO",
  RUT: "11254785-5",
  Previsión: "ISAPRE"
}];

var dental = [{
  Hora: "08:30",
  Especialista: "ANDREA ZUÑIGA",
  Paciente: "MARCELA RETAMAL",
  RUT: "11123425-6",
  Previsión: "ISAPRE"
}, {
  Hora: "11:00",
  Especialista: "MARIA PIA ZAÑARTU",
  Paciente: "ANGEL MUÑOZ",
  RUT: "9878789-2",
  Previsión: "ISAPRE"
}, {
  Hora: "11:30",
  Especialista: "SCARLETT WITTING",
  Paciente: "MARIO KAST",
  RUT: "7998789-5",
  Previsión: "FONASA"
}, {
  Hora: "13:00",
  Especialista: "FRANCISCO VON TEUBER",
  Paciente: "KARIN FERNANDEZ",
  RUT: "18887662-K",
  Previsión: "FONASA"
}, {
  Hora: "13:30",
  Especialista: "EDUARDO VIÑUELA",
  Paciente: "HUGO SANCHEZ",
  RUT: "17665461-4",
  Previsión: "FONASA"
}, {
  Hora: "14:00",
  Especialista: "RAQUEL VILLASECA",
  Paciente: "ANA SEPULVEDA",
  RUT: "14441281-0",
  Previsión: "ISAPRE"
}];

document.write('<p> Cantidad de atenciones para Radiología: ' + radiologia.length + '</p>');

document.write('<p> Cantidad de atenciones para Traumatología: ' + traumatologia.length + '</p>');

document.write('<p> Cantidad de atenciones para Dental: ' + dental.length + '</p>');

document.write('<p> Primera atención: ' + radiologia[0].Paciente + ' - ' + radiologia[0].Previsión + ' | Última atención: ' + radiologia[4].Paciente + ' - ' + radiologia[4].Previsión + '.</p>');

document.write('<p> Primera atención: ' + traumatologia[0].Paciente + ' - ' + traumatologia[0].Previsión + ' | Última atención: ' + traumatologia[6].Paciente + ' - ' + traumatologia[6].Previsión + '.</p>');

document.write('<p> Primera atención: ' + dental[0].Paciente + ' - ' + dental[0].Previsión + ' | Última atención: ' + dental[5].Paciente + ' - ' + dental[5].Previsión + '.</p>');