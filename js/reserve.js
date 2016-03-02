/**
 * Created by Cubero on 01/03/2016.
 */
(function(){
    $(document).ready(function(){
        $('#nombre').val($.cookie('nombre'));
        $('#apellidos').val($.cookie('apellidos'));
        $('#correo').val($.cookie('correo'));
        $('#from').val($.cookie('entrada'));
        $('#to').val($.cookie('salida'));
        $('#telefono').val($.cookie('telefono'));
        $('#npersonas').val($.cookie('npersonas'));
        $(function() {
            $( "#from" ).datepicker({
                numberOfMonths: 2,
                defaultDate: "+1w",
                prevText: '<Ant',
                nextText: 'Sig>',
                currentText: 'Hoy',
                monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
                dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
                weekHeader: 'Sm',
                dateFormat: 'dd/mm/yy',
                firstDay: 1,
                isRTL: false,
                minDate: 0,
                showMonthAfterYear: false,
                yearSuffix: '',
                onClose: function(selectedDate) {
                    $("#salida").datepicker("option", "minDate", selectedDate);
                }
            });
            $( "#to" ).datepicker({
                numberOfMonths: 2,
                defaultDate: "+1w",
                prevText: '<Ant',
                nextText: 'Sig>',
                currentText: 'Hoy',
                monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
                dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
                weekHeader: 'Sm',
                dateFormat: 'dd/mm/yy',
                firstDay: 1,
                isRTL: false,
                minDate: 0,
                showMonthAfterYear: false,
                yearSuffix: '',
                onClose: function(selectedDate) {
                    $("#entrada").datepicker("option", "maxDate", selectedDate);
                }
            });
        });


        $('#reservar').click(function(){
            var comprobarForm = $('#form').validate({
               rules:{
                   nombre:{
                       required:true,
                       minlength:3,

                   },
                   apellidos:{
                       required:true,
                       minlength:3,

                   },
                   email:{
                       required:true,
                       email:true
                   },
                   telefono:{
                       required:true,
                       number:true,
                       minlength:9,
                       maxlength:9
                   },
                   entrada:{
                       required:true,
                       date:true
                   },
                   salida:{
                       required:true,
                       date:true
                   },
                   personas: {
                       required: true,
                       number: true
                   },
                   check:{
                       required:true
                   },
                   npersonas:{
                       required:true,
                       number:true
                   }

               },
               messages:{
                   nombre:{
                       required:"Introduce tu nombre",
                       minlength:"El nombre debe tener mas de 3 letras"
                   },
                   apellidos:{
                       required:'Introduce tu apellido',
                       minlength:'El apellido debe tener mas de 3 letras'
                   },
                   email:{
                       required:'Introduce tu correo',
                       email:'Escriba su email correctamente'
                   },
                   telefono:{
                       required:'Introduce tu telefono',
                       minlength:'El telefono debe tener mas de 9 cifras',
                       maxlength:'El telefono debe tener menos de 9 cifras',
                       number:'introduce numeros'
                   },
                   entrada:{
                       required:'escriba la fecha',
                       date:'escriba en formato de fecha'
                   },
                   salida:{
                       required:'escriba la fecha',
                       date:'escriba en formato de fecha'
                   },
                   check:{
                       required:'olvidó aceptar las condiciones'
                   },
                   npersonas:{
                       required:'Indique el numero de personas',
                       number:'Escriba solo cifras',
                   }





               }
           });
            if(comprobarForm.form()){
                $.cookie('nombre',$('#nombre').val());
                $.cookie('apellidos',$('#apellidos').val());
                $.cookie('correo',$('#correo').val());
                $.cookie('entrada',$('#from').val());
                $.cookie('salida',$('#to').val());
                $.cookie('telefono',$('#telefono').val());
                $.cookie('npersonas',$('#npersonas').val());
            }
        });

    });
})()