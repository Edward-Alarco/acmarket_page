


    //Propiedades del Slider
    var propSlider = {

        slider: document.getElementById('slider'),
        primerSlide: null

    }

    //Metodos del Slider
    var metSlider = {

        inicio: function () {
            //Intervalo Principal de Tiempo en repetirse la funcion moverSlide
            setInterval(metSlider.moverSlide, 3000);
        },

        moverSlide: function () {
            // Al elemento con el ID 'Slider' se le aplican los sgtes estilos
            propSlider.slider.style.transition = 'all 1s ease';
            //-100% para pasar a la sgte imagen
            propSlider.slider.style.marginLeft = '-100%';

            //Funcion para mover la 1ra imagen, como ultima, y asi consecutivamente...
            setTimeout(function () {
                //PrimerSlide igual al 1er elemento hijo del Slider
                propSlider.primerSlide = propSlider.slider.firstElementChild;
                //Se le asigna el appendChild del PrimerSlide al Slider
                propSlider.slider.appendChild(propSlider.primerSlide);
                //Se le cambian los estilos al 1er slider, para que se repita nuevamente sin errores el mismo proceso
                propSlider.slider.style.transition = 'unset';
                propSlider.slider.style.marginLeft = 0;

            }, 1000);
        }

    }
    //Ejecuta la funcion
    metSlider.inicio();