names = [];
function submit(){
var  stuname = [];
    for (var j = 1; j<=4; j++ ){
        stuname.push(document.getElementById("name_of_the_student_"+j).value);
        document.getElementById("DisWCom").innerHTML = stuname.join(". ");
    }
    console.log(names);
    var lon= names.length;
    console.log(lon);
    for (var k=0; k<lon; k++){
        stuname.push(names[k]);
        console.log (stuname);
    }
    var removecom = stuname_sorting.join("");
    console.log(removecom);
    console.log (stuname);
    document.getElementById("DisWCom").innerHTML=stuname;
 


}


function submit2(){
    var  stuname = [];
        for (var j = 4; j<=8; j++ ){
            stuname.push(document.getElementById("name_of_the_student_"+j).value);
            document.getElementById("DisWTCom").innerHTML = stuname.join(". ");
    
        }
        console.log(names);
        var lon= names.length;
        console.log(lon);
        for (var k=0; k<lon; k++){
            stuname.push(names[k]);
            console.log (stuname);
        }
        var removecom = stuname_sorting.join("");
        console.log(removecom);
        console.log (stuname);
        document.getElementById("DisWCom").innerHTML=stuname;
     
    
    
    }

    var removecom = stuname_sorting.join("");
    console.log(removecom);

document.getElementById("DisWTCom").innerHTML=removecom;
