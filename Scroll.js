     $(function () {
        var outer = $('.holder');

        $('.left-button').click(function () {
           var leftPos = outer.scrollLeft();
           outer.animate({ scrollLeft: leftPos - 400 }, 1000);
        });

        $('.right-button').click(function () {
           var leftPos = outer.scrollLeft();
           outer.animate({ scrollLeft: leftPos + 400 }, 1000);
        });
     });