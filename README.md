#firstTest
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brazilian or Foreign?</title>
    <style>
        body{
            background-color: black;
            color: white;
            font: normal 18pt arial;

        }
    </style>
</head>
<body>
    <h1>Are you Brazilian or Foreign?</h1>
    Nationality: <input type="text" name="txtna" id="txtna">
    <input type="button" value="verify" onclick="generate()">
    <div id="res">

    </div>

    <script>
        function generate() {
            let txtna = window.document.querySelector('input#txtna')
            let res = window.document.querySelector('div#res')
            let nationality = txtna.value
            res.innerHTML = `<p>You are <strong>${nationality}</strong>!</p>`
            if (nationality != "Brazilian") {
                res.innerHTML += `<p>You are a foreign!</p>`
                res.innerHTML += `<p>Welcome to our coutry!</p>`
            } if (nationality == "Brazilian") {
                res.innerHTML += `<p>You are brazuca!</p>`
                res.innerHTML += `<p>Seja bem vindo de volta irmao!</p>`
            }


        }
    </script>
</body>
</html>
