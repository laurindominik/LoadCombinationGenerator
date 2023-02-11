let btnGet = document.getElementById('create-table');
let btnRemove = document.getElementById('remove-table');
let myTable = document.querySelector('#table');
let checkDead = document.querySelector("#dead");
let checkboxLive = document.querySelector("#live");
let headers1 = ['uls load combination', '', ''];




btnRemove.addEventListener( 'click', function(){
    document.getElementById('table').innerHTML="";
    if(headers1.includes("total value") == true){
        headers1.splice(3);
    }
});


btnGet.addEventListener( 'click', function() {
    //partial safety factors
    let factorDead = document.getElementById("factor-dead").value.toString();
    let factorDeadLower = document.getElementById("factor-dead-lower").value.toString();
    let factorLive = document.getElementById("factor-var").value.toString();
    
    //psi factors
    let psiLive = document.getElementById("psi-live").value.toString();
    let psiSnow = document.getElementById("psi-snow").value.toString();
    let psiWind = document.getElementById("psi-wind").value.toString();

    //load values
    let deadValue = document.getElementById("dead-value").value.toString();
    let liveValue = document.getElementById("live-value").value.toString();
    let snowValue = document.getElementById("snow-value").value.toString();
    let windValue = document.getElementById("wind-value").value.toString();

    //checkboxes
    let checkDead = document.querySelector("#dead");
    let checkLive = document.querySelector("#live");
    let checkSnow = document.querySelector("#snow");
    let checkWind = document.querySelector("#wind");
    let checkTotal = document.querySelector("#totalvalue");


    //dropdown kN, kN/m or kN/m2
    selectElement = document.querySelector('#select1');
    unit = selectElement.value;

    
    let sub = "\u2096";
    console.log(sub);



    //second column
    let loadCFinal = [];
    let lcDead = [factorDead + ' g' + sub ];
    let lcDeadLive = [factorDead + " g" + sub, factorDead + " g" + sub + " + " + factorLive+" q" + sub];
    let lcDeadLiveSnow = [factorDead + " g" + sub, factorDead + " g" + sub + " + " + factorLive + " q" + sub, factorDead + " g" + sub + " + " + factorLive+" s" + sub, factorDead + " g" + sub + " + " + factorLive+" q" + sub + " + " + factorLive +" * "+ psiSnow +" * s" + sub, factorDead + " g" + sub + " + " + factorLive +" * " + psiLive + " * q" + sub + " + " + factorLive +" * s" + sub];
    let lcDeadLiveSnowWind = [factorDead + " g" + sub, factorDead + " g" + sub + " + " + factorLive + " q" + sub, factorDead + " g" + sub + " + " + factorLive + " s" + sub, factorDeadLower + " g" + sub + " + " + factorLive+" w" + sub, factorDead + " g" + sub + " + " + factorLive + " w" + sub, factorDead + " g" + sub + " + " + factorLive + " q" + sub + " + " + factorLive +" * "+ psiSnow +" * s" + sub, factorDead + " g" + sub + " + " + factorLive+" q" + sub + " + " + factorLive +" * "+ psiWind +" * w" + sub, factorDead + " g" + sub + " + " + factorLive +" * " + psiLive + " * q" + sub + " + " + factorLive +" * s" + sub, factorDead + " g" + sub + " + " + factorLive +" * " + psiLive + " * q" + sub + " + " + factorLive +" * w" + sub, factorDead + " g" + sub + " + " + factorLive +" * " + psiSnow + " * s" + sub + " + " + factorLive +" * w" + sub, factorDead + " g" + sub + " + " + factorLive +" * " + psiWind + " * w" + sub + " + " + factorLive + " * s" + sub, factorDead + " g" + sub + " + " + factorLive +" * " + psiLive + " * q" + sub + " + " + factorLive +" * s" + sub + " + " + factorLive +" * " + psiWind + " * w" + sub, factorDead + " g" + sub + " + " + factorLive + " * q" + sub + " + " + factorLive + " * " + psiSnow + " * s" + sub + " + " + factorLive +" * " + psiWind + " * w" + sub, factorDead + " g" + sub + " + " + factorLive +" * " + psiLive + " * q" + sub + " + " + factorLive + " * " + psiSnow + " * s" + sub + " + " + factorLive + " * w" + sub];
    let lcDeadLiveWind = [factorDead + " g" + sub, factorDead + " g" + sub + " + " + factorLive+" q" + sub, factorDead + " g" + sub + " + " + factorLive+" w" + sub, factorDeadLower + " g" + sub + " + " + factorLive+" w" + sub, factorDead + " g" + sub + " + " + factorLive+" q" + sub + " + " + factorLive +" * "+ psiWind +" * w" + sub, factorDead + " g" + sub + " + " + factorLive +" * " + psiLive + " * q" + sub + " + " + factorLive +" * w" + sub];
    let lcDeadSnowWind = [factorDead + " g" + sub, factorDead + " g" + sub + " + " + factorLive+" s" + sub, factorDead + " g" + sub + " + " + factorLive+" w" + sub, factorDeadLower + " g" + sub + " + " + factorLive+" w" + sub, factorDead + " g" + sub + " + " + factorLive+" s" + sub + " + " + factorLive +" * "+ psiWind +" * w" + sub, factorDead + " g" + sub + " + " + factorLive +" * " + psiSnow + " * s" + sub + " + " + factorLive +" * w" + sub];
    let lcDeadWind = [factorDead + " g" + sub, factorDead + " g" + sub + " + " + factorLive+" w" + sub, factorDeadLower + " g" + sub + " + " + factorLive+" w" + sub];
    let lcDeadSnow = [factorDead + " g" + sub, factorDead + " g" + sub + " + " + factorLive+" s" + sub];



    //third column
    let combValueFinal = [];
    let lcDeadValue = [factorDead + " * " + deadValue + unit];
    let lcDeadLiveValue = [factorDead + " * " + deadValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive+ " * " + liveValue + unit];
    let lcDeadLiveSnowValue = [factorDead + " * " + deadValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive+" * " + liveValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive+ " * " + snowValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive+" * " + liveValue + unit + " + "  + factorLive +" * "+ psiSnow +" * " + snowValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive +" * " + psiLive + " * " + liveValue + unit + " + " + factorLive +" * " + snowValue + unit];
    let lcDeadLiveSnowWindValue = [factorDead + " * " + deadValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive+" * " + liveValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive+ " * " + snowValue + unit, factorDeadLower + " * " + deadValue + unit + " + " + factorLive + " * " + windValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive + " * " + windValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive+" * " + liveValue + unit + " + "  + factorLive +" * "+ psiSnow +" * " + snowValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive+" * " + liveValue + unit + " + "  + factorLive +" * "+ psiWind + " * " + windValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive +" * " + psiLive + " * " + liveValue + unit + " + "  + factorLive +" * " + snowValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive +" * " + psiLive + " * " + liveValue + unit + " + "  + factorLive + " * " + windValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive +" * " + psiSnow + " * " + snowValue + unit + " + " + factorLive + " * " + windValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive +" * " + psiWind + " * " + windValue + unit + " + " + factorLive +" * " + snowValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive +" * " + psiLive + " * " + liveValue + unit + " + "  + factorLive +" * " + snowValue + unit + " + " + factorLive +" * " + psiWind + " * " + windValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive + " * " + liveValue + unit + " + "  + factorLive + " * " + psiSnow + " * " + snowValue + unit + " + " + factorLive +" * " + psiWind + " * " + windValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive +" * " + psiLive + " * " + liveValue + unit + " + "  + factorLive + " * " + psiSnow + " * " + snowValue + unit + " + " + factorLive + " * " + windValue + unit];
    let lcDeadLiveWindValue = [factorDead + " * " + deadValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive+" * " + liveValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive + " * " + windValue + unit, factorDeadLower + " * " + deadValue + unit + " + " + factorLive + " * " + windValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive+" * " + liveValue + unit + " + " + factorLive +" * "+ psiWind +" * " + windValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive +" * " + psiLive + " * " + liveValue + unit + " + " + factorLive +" * " + windValue + unit];
    let lcDeadSnowWindValue = [factorDead + " * " + deadValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive+ " * " + snowValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive + " * " + windValue + unit, factorDeadLower + " * " + deadValue + unit + " + " + factorLive + " * " + windValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive+" * " + snowValue + unit + " + " + factorLive +" * "+ psiWind + " * " + windValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive +" * " + psiSnow + " * " + snowValue + unit + " + " + factorLive +" * " + windValue + unit];
    let lcDeadWindValue = [factorDead + " * " + deadValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive + " * " + windValue + unit, factorDeadLower + " * " + deadValue + unit + " + " + factorLive + " * " + windValue + unit];
    let lcDeadSnowValue = [factorDead + " * " + deadValue + unit, factorDead + " * " + deadValue + unit + " + " + factorLive + " * " + snowValue + unit];



    //4th column
    let totalValues = [];
    let totalDead = [factorDead*deadValue];
    let totalDeadLive = [factorDead*deadValue,factorDead*deadValue+factorLive*liveValue];
    let totalDeadLiveSnow = [factorDead*deadValue,factorDead*deadValue+factorLive*liveValue,factorDead*deadValue+factorLive*snowValue,factorDead*deadValue+factorLive*liveValue+factorLive*psiSnow*snowValue,factorDead*deadValue+factorLive*psiLive*liveValue+factorLive*snowValue];
    let totalDeadLiveSnowWind = [factorDead*deadValue,factorDead*deadValue+factorLive*liveValue,factorDead*deadValue+factorLive*snowValue,factorDeadLower*deadValue+factorLive*windValue,factorDead*deadValue+factorLive*windValue,factorDead*deadValue+factorLive*liveValue+factorLive*psiSnow*snowValue,factorDead*deadValue+factorLive*liveValue+factorLive*psiWind*windValue,factorDead*deadValue+factorLive*psiLive*liveValue+factorLive*snowValue,factorDead*deadValue+factorLive*psiLive*liveValue+factorLive*windValue,factorDead*deadValue+factorLive*psiSnow*snowValue+factorLive*windValue,factorDead*deadValue+factorLive*psiWind*windValue+factorLive*snowValue,factorDead*deadValue+factorLive*psiLive*liveValue+factorLive*snowValue+factorLive*psiWind*windValue,factorDead*deadValue+factorLive*liveValue+factorLive*psiSnow*snowValue+factorLive*psiWind*windValue,factorDead*deadValue+factorLive*psiLive*liveValue+factorLive*psiSnow*snowValue+factorLive*windValue];
    let totalDeadLiveWind = [factorDead*deadValue,factorDead*deadValue+factorLive*liveValue,factorDead*deadValue+factorLive*windValue,factorDeadLower*deadValue+factorLive*windValue,factorDead*deadValue+factorLive*liveValue+factorLive*psiWind*windValue,factorDead*deadValue+factorLive*psiLive*liveValue+factorLive*windValue];
    let totalDeadSnowWind = [factorDead*deadValue,factorDead*deadValue+factorLive*snowValue,factorDead*deadValue+factorLive*windValue,factorDeadLower*deadValue+factorLive*windValue,factorDead*deadValue+factorLive*snowValue+factorLive*psiWind*windValue,factorDead*deadValue+factorLive*psiSnow*snowValue+factorLive*windValue];
    let totalDeadWind = [factorDead*deadValue,factorDead*deadValue+factorLive*windValue,factorDeadLower*deadValue+factorLive*windValue];
    let totalDeadSnow = [factorDead*deadValue,factorDead*deadValue+factorLive*snowValue];



    
    //console.log(checkboxes);
    
    if(checkSnow.checked == false  && checkWind.checked == false && checkDead.checked == true && checkLive.checked == true){
        console.log("Dead + Live load");
        loadCFinal = lcDeadLive;
        combValueFinal = lcDeadLiveValue;
        totalValues = totalDeadLive;
    }
    else if(checkSnow.checked == false  && checkWind.checked == false && checkDead.checked == true && checkLive.checked == false){
        console.log("Dead load");
        loadCFinal = lcDead;
        combValueFinal = lcDeadValue;
        totalValues = totalDead;
    }
    else if(checkSnow.checked == true  && checkWind.checked == false && checkDead.checked == true && checkLive.checked == true){
        console.log("Dead + live + snow load");
        loadCFinal = lcDeadLiveSnow;
        combValueFinal = lcDeadLiveSnowValue;
        totalValues = totalDeadLiveSnow;
    }
    else if(checkSnow.checked == true  && checkWind.checked == true && checkDead.checked == true && checkLive.checked == true){
        console.log("Dead + live + snow + wind load");
        loadCFinal = lcDeadLiveSnowWind;
        combValueFinal = lcDeadLiveSnowWindValue;
        totalValues = totalDeadLiveSnowWind;
    }
    else if(checkSnow.checked == false  && checkWind.checked == true && checkDead.checked == true && checkLive.checked == true){
        console.log("Dead + live + wind load");
        loadCFinal = lcDeadLiveWind;
        combValueFinal = lcDeadLiveWindValue;
        totalValues = totalDeadLiveWind;
    }
    else if(checkSnow.checked == true  && checkWind.checked == true && checkDead.checked == true && checkLive.checked == false){
        console.log("Dead + snow + wind load");
        loadCFinal = lcDeadSnowWind;
        combValueFinal = lcDeadSnowWindValue;
        totalValues = totalDeadSnowWind;
    }
    else if(checkSnow.checked == false  && checkWind.checked == true && checkDead.checked == true && checkLive.checked == false){
        console.log("Dead + wind load");
        loadCFinal = lcDeadWind;
        combValueFinal = lcDeadWindValue;
        totalValues = totalDeadWind;
    }
    else if(checkSnow.checked == true  && checkWind.checked == false && checkDead.checked == true && checkLive.checked == false){
        console.log("Dead + snow load");
        loadCFinal = lcDeadSnow;
        combValueFinal = lcDeadSnowValue;
        totalValues = totalDeadSnow;
    }

    // this is what i am working on rn.
    if(checkTotal.checked == true){
        totalValues = totalValues;
        headers1.push("total value");
    }
    else {
        totalValues = ["X"];
    }

    totalValues = totalValues.map(function(each_element){
        return Number(each_element.toFixed(2));
    });


    //Table
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers1.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    loadCFinal.forEach(lc => {
        let row = document.createElement('tr');
        let cell1 = document.createElement('td');
        let cell2 = document.createElement('td');
        let cell3 = document.createElement('td');


        let textNode1 = document.createTextNode("LC"+(loadCFinal.indexOf(lc)+1));
        let textNode2 = document.createTextNode(lc);
        let textNode3 = document.createTextNode(combValueFinal[loadCFinal.indexOf(lc)]);


        cell1.appendChild(textNode1);
        cell2.appendChild(textNode2);
        cell3.appendChild(textNode3);

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);

        if(checkTotal.checked == true){
            let cell4 = document.createElement('td');
            let textNode4 = document.createTextNode(totalValues[loadCFinal.indexOf(lc)] + unit);
            cell4.appendChild(textNode4);
            row.appendChild(cell4);
        }


        table.appendChild(row);
    });
    myTable.appendChild(table);
    
});
    
    














