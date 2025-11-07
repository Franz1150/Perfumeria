function cambiarColor(){
    //1.Seleccionar elemento div por su ID.
    let caja=document.getElementById('caja-colorida');

    //2.usar classList para verificar y manipular clases CSS.
    //Si la caja ya tiene la clase 'color-alternativo', la quita.
    //Si no la tiene, la añade.
    caja.classList.toggle('color-alternativo');
}
