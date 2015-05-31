     $(function () {
        var outer = $('.holder2');

        $('.left-button2').click(function () {
           var leftPos = outer.scrollLeft();
           outer.animate({ scrollLeft: leftPos - 400 }, 1000);
        });

        $('.right-button2').click(function () {
           var leftPos = outer.scrollLeft();
           outer.animate({ scrollLeft: leftPos + 400 }, 1000);
        });
     });