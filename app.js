const boton = document.getElementById('btn');
//en onclick solo va en el html//
// evento de javascript un escuchador//
boton.addEventListener('click',() => {
 let comments = document.getElementById('comment').value;// rescatar el valor del txarea//
 document.getElementById('comment').value = '';// para borrar lo que esta scrito en textarea para poder escribir el txto//
const cont = document.getElementById('cont');
const newComments = document.createElement('div');
const contenedorElemento= document.createElement('p');// primer paso para crear un parrafo
let texNewComment= document.createTextNode(comments);// asignarle el valor de texto al comentario
cont.appendChild(newComments);
newComments.appendChild(contenedorElemento);
contenedorElemento.appendChild(texNewComment);//


let conteodetexto= 140 + document.getElementById(("conteo").value.length - 1);
})
