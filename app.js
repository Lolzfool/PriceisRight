
            /* var list = [];
            // function getText() {
                // var str = document.getElementById("txt");
                // list.push(str.value);
                // str.value = "";
                //str.focus();
                //var area = document.getElementById("stuff").innerHTML = list;
                // area.value = "";
                // for (var i = 0; i < list.length; i++) {
                    // str += list[i] + "<br>";
                  }
                  document.getElementById("stuff").innerHTML = str;
              } */
    (function($){
    $('#myform').submit(function(e){
        var val = $(this).find('#in').val();
        $('ul.list').append('<li>' + val + '</li>');
        e.preventDefault();
    });
})(jQuery);