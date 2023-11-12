document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var socialButton = document.getElementById("socialButton");
    var socialSubmenu = document.getElementById("socialSubmenu");

    socialButton.addEventListener("mouseover", function () {
        socialSubmenu.style.display = "flex";
        setTimeout(function () {
            socialSubmenu.style.display = "none";
        }, 3000); // Desaparecer después de 10 segundos

        socialSubmenu.addEventListener("mouseover", function () {
            // Cancelar el temporizador si se coloca el mouse sobre el submenú
            clearTimeout(timeoutId);
        });
    });

    var submenuItems = socialSubmenu.getElementsByTagName("a");

    for (var i = 0; i < submenuItems.length; i++) {
        submenuItems[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "#FFFF00"; // Cambiar color al pasar el mouse
        });

        submenuItems[i].addEventListener("mouseout", function () {
            this.style.backgroundColor = "#c90808"; // Restaurar color al retirar el mouse
        });
    }

    var timeoutId;
    socialSubmenu.addEventListener("mouseout", function () {
        // Iniciar temporizador para ocultar el submenú después de 10 segundos
        timeoutId = setTimeout(function () {
            socialSubmenu.style.display = "none";
        }, 3000);
    });
});
