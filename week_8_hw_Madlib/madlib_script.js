
$(function(){

    function MAD(){
        var Vword1 = $("#word1").val();
        var Vword2 = $("#word2").val();
        var Vword3 = $("#word3").val();
        var Vword4 = $("#word4").val();
        var Vword5 = $("#word5").val();
        var Vword6 = $("#word6").val();
        var Vword7 = $("#word7").val();
        var Vword8 = $("#word8").val();
        
        $("#sentence").fadeIn();
        $("#sentence .WORD1").html(Vword1);
        $("#sentence .WORD2").html(Vword2); 
        $("#sentence .WORD3").html(Vword3);
        $("#sentence .WORD4").html(Vword4);
        $("#sentence .WORD5").html(Vword5); 
        $("#sentence .WORD6").html(Vword6);
        $("#sentence .WORD7").html(Vword7); 
        $("#sentence .WORD8").html(Vword8);
        
    }
        $("#sentence").hide();
        $("#MadCTA").click(MAD);
    
})