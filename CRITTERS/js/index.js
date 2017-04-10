$(function() {
  
    //make functions first

    function showSlide(n) {
        // unbind event listener to prevent retriggering
        $("body").unbind("mousewheel");
        currSlide += n;
        // make sure currslide does not go out of min or max boundaries
        currSlide = currSlide <= 0 ? 0 : currSlide >= $slide.length-1 ? $slide.length-1 : currSlide;
        
        // displacement is window width times current slide number
        var displacment = window.innerWidth*currSlide;
        // translate slides div across to appropriate slide
        $('.slides').css('transform', 'translateX(-'+displacment+'px)');
        // give small delay before rebinding event to prevent retriggering
        setTimeout(function() {
           $("body").bind('mousewheel', mouseEvent);
        }, 800);
        
        // change active class on link
        $('nav a.active').removeClass('active');
        $($('a')[currSlide]).addClass('active');
        
    }
  
    function mouseEvent(e, delta) {
        // On upwards scroll, show next slide (+1)
        // otherwise on downwards scroll show prev slide (-1)
        showSlide(delta >= 0 ? 1 : -1);
        e.preventDefault();
    }
    
    
 
 
    
    
    $('nav a').click(function(e) {
        // When link clicked, find slide it points to
        var newslide = parseInt($(this).attr('href')[1]);
        // find how far it is from current slide
        var diff = newslide - currSlide - 1;
        showSlide(diff); // show that slide
        e.preventDefault();
    });
  
    $(window).resize(function(){
      // Keep current slide to left of window on resize
      var displacment = window.innerWidth*currSlide;
      $('.slides').css('transform', 'translateX(-'+displacment+'px)');
    });
    
    //declare vars then make things happen
    
    var currSlide = 0; //Keeps track of slide
    var $slide = $('.slide'); //all slides
    // give active class to first link
    $($('nav a')[0]).addClass('active');
    //add event listener for mousescroll
    $("body").bind('mousewheel', mouseEvent);
    
})