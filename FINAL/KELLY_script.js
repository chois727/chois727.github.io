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
        });