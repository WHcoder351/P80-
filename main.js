names = [];
function submit(){
var  stuname = [];
    for (var j = 1; j<=4; j++ ){
        var putname = document.getElementById("name_of_the_student_"+j).value;
        console.log(putname);
        names.push(putname);
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
    var  stuname2 = [];
        for (var j = 0; j<=8; j++ ){
            var putname = document.getElementById("name_of_the_student_"+l).value;
            console.log(putname);
            names.push(putname);
        }
        console.log(names);
        var lon= names.length;
        console.log(lon);
        for (var k=0; k<lon; k++){
            stuname2.push(names[k]);
            console.log (stuname2);
        }
        var removecom = stuname_sorting.join("");
        console.log(removecom);
        console.log (stuname2);
        document.getElementById("DisWTCom").innerHTML=stuname2;
     
    
    
    }
    var removecom = stuname_sorting.join("");
    console.log(removecom);

document.getElementById("DisWTCom").innerHTML=removecom;
