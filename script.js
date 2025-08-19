// FUNCION PARA CALCULAR EDAD
function calcularEdad() {
    // OBTENER LA FECHA INGRESADA DESDE EL INPUT
    const input = document.getElementById("").value;
    const resultado = document.getElementById("resultado");

    // VALIDAR SI SE INGRESO FECHA O NO
    if (!input) {
        resultado.textContent = "Error, ingresa una fecha";
        return;
    }

    // CONVERTIR STRING A DATE
    const fechaNacimiento = new Date(input);
    const hoy = new Date();

    // VALIDAR QUE LA FECHA NO SEA FUTURO
    if (fechaNacimiento > hoy) {
        resultado.textContent = "La fecha ingresada es futura";
        return;
    }

    // CALCULAR LA EDAD
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    // VERIFICAR SI YA PASO SU CUMPLEAÑOS
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();

    // SI SU CUMPLEAÑOS NO HA PASADO RESTAMOS 1
    if (
        mesActual < mesNacimiento || 
        (mesActual === mesNacimiento && diaActual < diaNacimiento)
    ) {
        edad--;
    }

    // MOSTRAR RESULTADO
    resultado.textContent = `Tienes ${edad} años.`;
}
