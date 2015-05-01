 $(document).ready(function () {
            $('.flag').waypoint(function (direction) {
                if (direction == 'down') {
                    $('header').css("height", "5vh");
                    $('header').css("font-size", "100%");
                    $('section').css("height", "95vh");
                    $('container').css("top", "5vh");
                }
                if (direction == 'up') {
                    $('header').css("height", "15vh");
                    $('header').css("font-size", "200%");
                    $('section').css("height", "85vh");
                    $('container').css("top", "15vh");
                }
            }, {
                offset: '99%'
            });
     
      function requestFile(url){
            $.ajax(
                {
                    url: url,
                    cache: false,
                    success: function(data){
                        $("#ajaxcontainer").html(data);
                    }
                }
            );
                
        }
     
        $("#ajaxrequest1").click(function(){
            requestFile("Section1.html");
            }
        )
        
         $("#ajaxrequest2").click(function(){
            requestFile("Section2.html");
            }
        ) 
         
         $("#ajaxrequest3").click(function(){
            requestFile("Section3.html");
            }
        ) 


});





/*--hide nav in mobile ver--*/

    
