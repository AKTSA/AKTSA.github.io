     $(function () {
        var outer = $('.holder');

        $('.left-button').click(function () {
           var leftPos = outer.scrollLeft();
           outer.animate({ scrollLeft: leftPos - 400 }, 800);
        });

        $('.right-button').click(function () {
           var leftPos = outer.scrollLeft();
           outer.animate({ scrollLeft: leftPos + 400 }, 800);
        });
     });