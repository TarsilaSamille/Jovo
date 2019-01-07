document.getElementById('inicio').className = 'escondido';

function colocarQuestionariosDisponiveis(arr) {
    var comboCidades = document.getElementById("cboQuestionario");

    var opt0 = document.createElement("option");
    opt0.value = "0";
    opt0.text = "-----------";
    comboCidades.add(opt0, comboCidades.options[0]);


    for (i = 0; i < arr.length; i++) {
        var optI = document.createElement("option");
        optI.value = i+1;
        optI.text = arr[i];
        comboCidades.add(optI, comboCidades.options[i+1]);
    }
}

colocarQuestionariosDisponiveis(questionarios);

document.getElementById("btnAleatoriamente").onclick = function () {
    var comboCidades = document.getElementById("cboQuestionario");
    comboCidades.selectedIndex = Math.floor(Math.random() * comboCidades.length);
};

var i =0;
document.getElementById("btnRedirecionar").onclick = function() {
    if (i==0) {
        addScript();
        i++;
    }
    redirecionar2();
};

function addScript() {
    var comboCidades = document.getElementById("cboQuestionario");
    var questionario = comboCidades.options[comboCidades.selectedIndex].text;
    var script = document.createElement('script');
    script.src = 'conteudo/'+questionario+'.js'; // URL do seu script aqui
    document.body.appendChild(script);

    var script = document.createElement('script');
    script.src =  'conteudo/example.js'; // URL do seu script aqui
    document.body.appendChild(script);
}


function redirecionar2() {
    document.getElementById("btnRedirecionar").click();
    document.getElementById('painelInicial').className = 'escondido';
    document.getElementById('inicio').className = 'mostrar';
}