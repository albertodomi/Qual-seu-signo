function vamosla() {

   
    var idia = document.querySelector("#dia");
    var imes = document.querySelector("#mes");

    var tdia = idia.value;
    var tmes = imes.value;


    const mesJaneiro = ["Capricornio"];
    const mesFevereiro = ["Aquario"];
    const mesMarco = ["Peixes"];
    const mesAbril = ["Aries"];
    const mesMaio = ["Touro"];
    const mesJunho = ["Gemeos"];
    const mesJulho = ["Cancer"];
    const mesAgosto = ["Leao"];
    const mesSetembro = ["Virgem"];
    const mesOutubro = ["Libra"];
    const mesNovembro = ["Escorpiao"];
    const mesDezembro = ["Sagitario"];
    const invalido =["Parâmetros Incorretos"];

    if (tmes == 3 && tdia >= 21 || tmes == 4 && tdia <= 20) {
        document.getElementById("demo").innerHTML = mesAbril;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';
      



        let img = document.createElement("img");
        img.setAttribute("src", "aries.png");
       
        document.getElementById("demo").appendChild(img)

    }
    else if (tmes == 4 && tdia >= 21 && texto <= 30 || tmes == 5 && tdia <= 20) {
        document.getElementById("demo").innerHTML = mesMaio;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';
       

        let img = document.createElement("img");
        img.setAttribute("src", "touro.png");
        
        document.getElementById("demo").appendChild(img)

    }
    else if (tmes == 5 && tdia >= 21 || tmes == 6 && tdia <= 20) {
        document.getElementById("demo").innerHTML = mesJunho;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';


        let img = document.createElement("img");
        img.setAttribute("src", "gemeos.png");
        
        document.getElementById("demo").appendChild(img)

    }
    else if (tmes == 6 && tdia >= 21 && tdia <= 30 || tmes == 7 && tdia <= 21) {
        document.getElementById("demo").innerHTML = mesJulho;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';
        

        let img = document.createElement("img");
        img.setAttribute("src", "cancer.png");
        
        document.getElementById("demo").appendChild(img)


    }
    else if (tmes == 7 && tdia >= 22 || tmes == 8 && tdia <= 22) {
        document.getElementById("demo").innerHTML = mesAgosto;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';
        

        let img = document.createElement("img");
        img.setAttribute("src", "leao.png");
        
        document.getElementById("demo").appendChild(img)

    }
    else if (tmes == 8 && tdia >= 23 || tmes == 9 && tdia <= 22) {
        document.getElementById("demo").innerHTML = mesSetembro;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';
       

        let img = document.createElement("img");
        img.setAttribute("src", "virgem.png");
        
        document.getElementById("demo").appendChild(img)

    }
    else if (tmes == 9 && tdia >= 23 && tdia < 31 || tmes == 10 && tdia <= 22) {
        document.getElementById("demo").innerHTML = mesOutubro;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';
       

        let img = document.createElement("img");
        img.setAttribute("src", "libra.png");
        
        document.getElementById("demo").appendChild(img)

    }
    else if (tmes == 10 && tdia >= 23 || tmes == 11 && tdia <= 21) {
        document.getElementById("demo").innerHTML = mesNovembro;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';
        
        let img = document.createElement("img");
        img.setAttribute("src", "escorpiao.png");
        
        document.getElementById("demo").appendChild(img)

    }
    else if (tmes == 11 && tdia >= 22 && tdia <= 30 || tmes == 12 && tdia <= 21) {
        document.getElementById("demo").innerHTML = mesDezembro;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';
       

        let img = document.createElement("img");
        img.setAttribute("src", "sagitario.png");
        
        document.getElementById("demo").appendChild(img)

    }
    else if (tmes == 12 && tdia >= 22 || tmes == 1 && tdia <= 20) {
        document.getElementById("demo").innerHTML = mesJaneiro;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';
       
        let img = document.createElement("img");
        img.setAttribute("src", "capricornio.png");
        
        document.getElementById("demo").appendChild(img)

    }
    else if (tmes == 1 && tdia >= 21 && tdia <= 28 || tmes == 2 && tdia <= 19) {

        document.getElementById("demo").innerHTML = mesFevereiro;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';

        let img = document.createElement("img");
        img.setAttribute("src", "aquario.png");
        
        document.getElementById("demo").appendChild(img)
    }
    else if (tmes == 2 && tdia >= 20 && tdia <= 28 || tmes == 3 && tdia <= 20) {

        document.getElementById("demo").innerHTML = mesMarco;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';
      

        let img = document.createElement("img");
        img.setAttribute("src", "peixes.png");
        
        document.getElementById("demo").appendChild(img)
    }
    else if (tmes == 9 && tdia == 31 || tmes == 2 && tdia == 29 || tmes == 4 && tdia == 31||tmes == 11 && tdia == 31 || tmes == 6 && tdia == 31) {

        document.getElementById("demo").innerHTML = invalido;
        document.getElementById('res').style.backgroundColor = '#F7EABD';
        document.getElementById('res').style.color = '#666666';
       

        let img = document.createElement("img");
        img.setAttribute("src", "nenhum.png");
        
        document.getElementById("demo").appendChild(img)
    }
    else if ( tdia < 1 ||tdia > 31) {
        alert("Dia errada informe um dia entre 1 e 31, ou Mês errado informe um mês entre 1 e 12  ");
    }

    else if (tmes < 1 || tmes > 12) {
        alert("Mês errado informe um mês entre 1 e 12 ");
    }





}

