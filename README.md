
<h2 style="font-size: 1.5em;">Piedra, Papel o Tijera</h2>

<h3 style="font-size: 1.2em;">🔶 HTML</h3>
<p style="font-size: 0.9em;">El juego contiene tres botones principales, los cuales tienen las tres imágenes (piedra, papel y tijera). Estos botones los presiona el jugador eligiendo entre piedra, papel o tijera.</p>

<p style="font-size: 0.9em;">Debajo, se definen tres párrafos vacíos que se utilizarán posteriormente:</p>
<ul style="font-size: 0.9em;">
  <li><strong>Primer párrafo:</strong> Contendrá la cadena de texto que indicará si el jugador ganó, empató o perdió el juego.</li>
  <li><strong>Segundo párrafo:</strong> Contendrá una cadena que mostrará una imagen de lo que el jugador ha elegido y otra que es la que ha elegido la computadora de manera aleatoria.</li>
  <li><strong>Tercer párrafo:</strong> Mostrará la puntuación indicando cuántas victorias, empates y pérdidas lleva el jugador.</li>
</ul>

<p style="font-size: 0.9em;">Por debajo de estos párrafos, habrá un botón llamado "Resetear", que al presionarlo hará volver las puntuaciones a cero.</p>

<h3 style="font-size: 1.2em;">🔷 CSS</h3>
<p style="font-size: 0.9em;">Se le dan los estilos al cuerpo, a los botones y las imágenes; modificando su color y tamaño.</p>

<h3 style="font-size: 1.2em;">🟨 JAVASCRIPT</h3>
<p style="font-size: 0.9em;">Se llama a la API localStorage, para obtener la puntuación (victorias, empates y derrotas), la cual contendrá esos valores en el caso de que el jugador haya jugado antes. En el caso de que no haya jugado, se crean esas puntuaciones a cero.</p>
<p style="font-size: 0.9em;">Luego se crea una función que recibirá como argumento el valor de las tres opciones del juego que haya elegido el participante. Dentro de la función, se llama a otra función, la cual generará un valor aleatorio y se asigna como piedra, papel o tijera, este servirá para la opción de la computadora, y se guarda en una constante.</p>
<p style="font-size: 0.9em;">A través de condiciones se compara según lo que haya elegido el jugador y la computadora, y el resultado del juego se guarda en una variable. Además, según este resultado, se suma un punto a la puntuación (por ej: si jugador -> Piedra - Tijera <- computadora, se suma victoria++). Luego se guarda el resultado en el localStorage, utilizando la conversión a cadena JSON.</p>
<p style="font-size: 0.9em;">Luego se muestra en pantalla el resultado, qué eligió cada uno (el jugador y la computadora) y la puntuación.</p>
<p style="font-size: 0.9em;">Por último, se define una función "reseteo", la cual da funcionalidad al botón "Resetear", la cual reestablece las puntuaciones a cero, y guarda este valor en el localStorage.</p>

https://nazarenomoreno.github.io/Piedra-Papel-Tijera/
