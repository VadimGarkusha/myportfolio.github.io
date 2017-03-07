function ActiveName(i) {
    //var name = document.getElementsByClassName("Myform")[0];
    var labelF = document.getElementsByClassName("label-form")[i];
    var input = document.getElementsByClassName("Myform")[i];

    labelF.style.color = "#66cc99";
    input.setAttribute("style", "width: 100%; border: none!important; border-bottom: 2px solid #66cc99!important; border-radius: 0px!important; padding-left: 10px; padding-bottom: 5px; margin-top: 5px;");
}

function NonActiveName(i) {
    var input = document.getElementsByClassName("Myform")[i];
    if (input.value == "") {
        document.getElementsByClassName("label-form")[i].style.color = "white";
    } else {
        document.getElementsByClassName("label-form")[i].style.color = "#3d3e42";
    }
    input.setAttribute("style", "width: 100%; border: none!important; border-bottom: 2px solid #3d3e42!important; border-radius: 0px!important; padding-left: 10px; padding-bottom: 5px; margin-top: 5px;");
}