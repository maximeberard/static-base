<!DOCTYPE html>
<html lang="en" class="no-js" itemscope itemtype="http://schema.org/WebPage">
    <head>
        <title>StaticBase</title>
        <meta name="description" content="StaticBase" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="apple-touch-icon" sizes="128x128" href="/img/favicon-128x128.png">
        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/img/favicon-64x64.png" sizes="64x64">
        <link rel="icon" type="image/png" href="/img/favicon-128x128.png" sizes="128x128">
        <link rel="manifest" href="/img/manifest.json">
        <meta name="msapplication-TileColor" content="#000000">
        <meta name="theme-color" content="#000000">

        <!-- inject:css -->
        <link rel="stylesheet" href="css/style-6e3951feb3.css">
        <!-- endinject -->

        <script src="/vendor/modernizr-custom.js"></script>
    </head>
    <body>
        
        <div id="svg-sprite" style="display:none;">
            <?php include('svg/sprite.php'); ?>
        </div>
        
        <div id="main-container">
            <div id="page-container-home" class="page-container page-container-ajax" data-node-type="page" data-meta-title="Home page">
                <h1>Home page</h1>
                <p>Vivamus dolor massa, aliquet ut leo vel, sodales mattis tortor. Aenean at mauris et ex mollis fringilla. Sed volutpat viverra vehicula. Nullam maximus ligula ac nisl aliquam commodo. Donec sed vestibulum orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut porttitor lorem, sit amet aliquet dui. Nunc dictum, lorem vitae elementum pharetra, sapien orci dignissim ligula, aliquam interdum erat urna a nibh. Morbi quis tellus maximus, pellentesque erat ac, porttitor nulla. Curabitur rhoncus urna non magna mattis aliquet. Vestibulum non lobortis turpis. Nunc aliquet velit a magna dictum pulvinar vitae laoreet tortor. Duis auctor iaculis arcu ac rutrum. Suspendisse vel odio risus.</p>

                <p><a href="/page1.html">Link to page 1</a></p>
                <p><a href="/partial.html">Link to partial page</a></p>

                <div class="page-block" id="block-1" data-node-type="starting-blocks">
                    <p>Vivamus dolor massa, aliquet ut leo vel, sodales mattis tortor. Aenean at mauris et ex mollis fringilla. Sed volutpat viverra vehicula. Nullam maximus ligula ac nisl aliquam commodo. Donec sed vestibulum orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut porttitor lorem, sit amet aliquet dui. Nunc dictum, lorem vitae elementum pharetra, sapien orci dignissim ligula, aliquam interdum erat urna a nibh. Morbi quis tellus maximus, pellentesque erat ac, porttitor nulla. Curabitur rhoncus urna non magna mattis aliquet. Vestibulum non lobortis turpis. Nunc aliquet velit a magna dictum pulvinar vitae laoreet tortor. Duis auctor iaculis arcu ac rutrum. Suspendisse vel odio risus.</p>
                </div>
                <div class="page-block" id="block-2" data-node-type="starting-blocks">
                    <p>Vivamus dolor massa, aliquet ut leo vel, sodales mattis tortor. Aenean at mauris et ex mollis fringilla. Sed volutpat viverra vehicula. Nullam maximus ligula ac nisl aliquam commodo. Donec sed vestibulum orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut porttitor lorem, sit amet aliquet dui. Nunc dictum, lorem vitae elementum pharetra, sapien orci dignissim ligula, aliquam interdum erat urna a nibh. Morbi quis tellus maximus, pellentesque erat ac, porttitor nulla. Curabitur rhoncus urna non magna mattis aliquet. Vestibulum non lobortis turpis. Nunc aliquet velit a magna dictum pulvinar vitae laoreet tortor. Duis auctor iaculis arcu ac rutrum. Suspendisse vel odio risus.</p>
                </div>
            </div>
            <div id="ajax-container"></div>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.6/cookieconsent.min.js"></script>

        <script>
            var temp = {
                'baseUrl':window.location.href
            };
            // document.body.className = "";


            // Cookie consent
            window.addEventListener('load', function () {
                window.cookieconsent.initialise({
                    container: document.getElementById("cookiesconsent"),
                    // location: true,
                    // revokable: false,
                    // law: {
                    //     regionalLaw: false,
                    // },
                    content: {
                        message: "En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies à des fins de mesures d’audience.",
                        dismiss: "Fermer",
                        link: "En savoir plus",
                        href: "legals"
                    }
                })
            });

            // Browser update — www.browser-update.org/customize.html
            var $buoop = {
                vs: { i:9, f: 15, o: 12.1, s: 5.1, c: 2 },
                text:'Votre navigateur est périmé. Il contient des failles de sécurité et pourrait ne pas afficher certaines fonctionalités de ce site internet. <a href="http://browser-update.org/update-browser.html" target="_blank">Découvrez comment mettre votre navigateur à jour</a>'
            };

            function $buo_f(){
                var e = document.createElement("script");
                e.src = "https://browser-update.org/update.js";
                document.body.appendChild(e);
            }

            try {
                document.addEventListener("DOMContentLoaded", $buo_f,false)
            } catch (e){
                window.attachEvent("onload", $buo_f)
            }

            // Analytics
            // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            // })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            // ga('create', 'UA-XXX-X', 'auto');
            // ga('send', 'pageview');
        </script>

        <!-- inject:js -->
        <script data-main="build/app-fd5d76be15.min.js" src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.22/require.min.js"></script>
        <!-- endinject -->
    </body>
</html>