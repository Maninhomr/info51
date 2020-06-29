
        /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {

            document.getElementById("myDropdown").classList.toggle("show");
            document.getElementById("sobreposicao").classList.toggle("overlay");

        }

        // Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');

                    }
                }
            }
            if (!event.target.matches('.dropbtn')) {
                var overlay = document.getElementsByClassName("overlay");
                var i;
                for (i = 0; i < overlay.length; i++) {
                    var check = overlay[i];
                    if (check.classList.contains('overlay')) {
                        check.classList.remove('overlay');

                    }
                }
            }

        }

    