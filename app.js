<head>
       
<title>Test</title>
        
    </head>
    <body>
    <script>
        
            var list = [];
            function getText() {
                var str = document.getElementById("txt");
                list.push(str.value);
                str.value = "";
                str.focus();
                var area = document.getElementById("stuff").innerHTML = list;
                area.value = "";
                if var i = 0; i < list.length; i++) {
                    area.value += list[i] + "\n";
                 
            }
        </script>
        
    </body>
    </html>