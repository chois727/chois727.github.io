 $(document).ready(function () {
            $('section').waypoint(function (direction) {
                if (direction == 'down') {
                    $('header').css("height", "10px");
                    $('.logo').css("width", "6vh");
                    $('.logo').css("height", "2vh"); 
                    $('.logo').css("background", "#078374");
                    $('.logo').css("margin", "1%");
                    $('subscribe').css("opacity", "1");
                    $('.hidebutton').css("opacity", "1");
                    $('.nav-wo').css("font-size", "0%");   
                    $('.nav-wo').css("background", "orange");
                    $('.nav-wo').css("width", "10px");
                    $('.nav-wo').css("height", "10px");
                    $('.nav-wo').css("margin-left", "21%");
                    $('.nav').css("margin-top", "1%");
                    $('section').css("height", "95vh");
                    $('container').css("top", "5vh");
                }
                if (direction == 'up') {
                    $('header').removeAttr("style");
                    $('.logo').css("height", "10vh");
                    $('.logo').css("width", "10vh");
                    $('.logo').css("margin-top", "0%");
                    $('.logo').removeAttr("style");
                    $('.nav-wo').removeAttr("style");       
                    $('.nav').removeAttr("style");
                    $('.hidebutton').css("opacity", "0");       
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
                        $("html, body").animate({ scrollTop: 0 }, 200);

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
         
          $("#ajaxrequestbanner1").click(function(){
            requestFile("Section1.html");
            }
        ) 

          $("#ajaxrequestMV1").click(function(){
            requestFile("Section4.html");
            }
        ) 

          
          $("#ajaxrequestMV2").click(function(){
            requestFile("Section5.html");
            }
        ) 
           
           $("#ajaxrequestF").click(function(){
            requestFile("Section1.html");
            }
        ) 
           $("#ajaxrequestR").click(function(){
            requestFile("Section2.html");
            }
        ) 
           $("#ajaxrequestA").click(function(){
            requestFile("Section3.html");
            }
        ) 
          


     $(function(){
            $('.hidebutton').click(function(){
                $('header.hidden').toggleClass('shrunk');
                $('nav.hidden').toggleClass('shrunk');
                $('.hidebutton.hidden').toggleClass('shrunk');
            })
        
        });

           $(function(){
            $('.Mlogo').not("a[href='#']").click(function(e){
                $('.OMNAV').toggleClass('sidenav');
                e.stopPropagation();

            })
        
        });
          

          
$(document).scroll(function() {

  var y = $(this).scrollTop();
    
    
  if ( y < 200 ) {
    $('.INTb2text').css("opacity","0");

  }
  if ( y > 100 ) {
    $('.INTb2').fadeIn();
  }    
  if( y > 200) {
        $('#RD').css("opacity", "1");
        $('#RD1').text("is an online magazine that prides its essence in the verbal, visual, contextual redefinitions of the arts.");
          $('.INTb2text').css("position","fixed");
    }
  if ( y > 600) {
    $('.INTb2text').css("opacity","1");
  }
  if ( y > 1000) {
    $('#RD1').text("is an understatement on the arcane");
  }
  if ( y > 1400) {
    $('#RD1').text("plays down on secrets, a level below the Façade");
  }
  if ( y > 1800) {
    $('#RD1').text("hover to explore beneath the surface");
  }
  if ( 2400> y > 2200) {
    $('.INTb2text').css("position","relative");
    $('.INTb2').fadeOut();
    }
});

          
/*----scroll disappear----*/          
         $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
            $('.HPscroll').stop().animate(
            {opacity: (( 180-scroll )/100)+3},
            "slow"
            );
            $('.FPscroll').stop().animate(
            {opacity: (( 180-scroll )/100)+0.1},
            "slow"
            );
        })
         
         
         

/*----scroll disappear end----*/
         
/*----JSON----*/ 

         $(function() {
        
        function requestFile(url){
            $.ajax(
                {
                    url: url,
                    cache: false,
                    dataType: "json",
                    success: function(data){
                        $("#success").html( data.SUBSUC );
                    }
                }
            );
                
        }
        $("#SUBJS").click(function(){
            requestFile("data.json");
            }
        )
})
     
       
       
/*----JSON end----*/
        
        
                $('.pop-up').hide();

        
            $(document).delegate('.subscribe', 'click', function(){
                $('.pop-up').fadeIn(500);
                $('#overlay').removeClass('blur-out');
                $('#overlay').addClass('blur-in');

                $('.close-button').click(function (e) { 
                    $('.pop-up').fadeOut(200);
                    $('#overlay').removeClass('blur-in');
                    $('#overlay').addClass('blur-out');
                    e.stopPropagation();
                });
            });
            

});
         






/*--hide nav in mobile ver--*/

    
