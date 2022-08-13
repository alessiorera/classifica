var link="https://raw.githubusercontent.com/alessiorera/classifica/main/dati.json";
var dati={};
const carica=()=>{
    $.getJSON(link,(data)=>{
        dati=data;
        data[0].campionati.forEach(camp => {
            $("#selCamp").append(`<option>${camp.nome}</option>`);
        });
        aggiornaClass();
    });
}
const aggiornaClass=()=>{
    $("#posizioni").empty();
    $("#squadre").empty();
    dati[0].campionati.forEach(camp => {
        if(camp.nome==$("#selCamp").val()){
            var cont=0;
            camp.squadre.forEach(squad => {
                cont++;
                $("#posizioni").append(`<div>${cont}</div>`);
                $("#squadre").append(`<div><span>${squad.nome}</span><div><i class="fa-solid fa-angle-up" onclick="squadraSu(event)"></i><i class="fa-solid fa-angle-down" onclick="squadraGiu(event)"></i></div></div>`);
            });
        }
    });
}
const squadraSu=(e)=>{
    let squadra=$(e.target).parent().parent();
    let squadra2=$(e.target).parent().parent().prev();
    squadra.after(squadra2);
}
const squadraGiu=(e)=>{
    let squadra=$(e.target).parent().parent();
    let squadra2=$(e.target).parent().parent().next();
    squadra.before(squadra2);
}
const hideShowBtn=()=>{
    $("i").each((i,el)=>{
        el.classList.toggle("hide");
    })
}