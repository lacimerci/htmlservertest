var tombchecked = [];
var tombunchecked = [];
var index = 0;

function letrehozas(){
    let htmlTag = "<input type='text' id='szoveg/" + index + "'> <input type='checkbox' onclick='check()'><br><br>";
    index++;
    document.getElementById("szovegmezo").innerHTML += htmlTag;
    for(let i = 0; i < index; i++){
    tombunchecked.push(document.getElementById("szoveg/" + i).value);
    }
}

function lefele(){
    let htmlTag = tombchecked.values() + "<br><br>";
    document.getElementById("szovegmezo").innerHTML += htmlTag;
}


function check(){
    tombunchecked.splice();
    lefele();
    tombchecked = [];
    for(let i = 0; i < index;i++){
    tombchecked.push(document.getElementById("szoveg/" + i).value);
    }
}