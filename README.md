
<h2>Piedra, Papel o Tijera</h2>

<h3>🔶 HTML</h3>
<p>El juego contiene tres botones principales, los cuales tienen las tres imágenes (piedra, papel y tijera). Estos botones los presiona el jugador eligiendo entre piedra, papel o tijera.</p>

<p>Debajo, se definen tres párrafos vacíos que se utilizarán posteriormente:</p>
<ul>
  <li><strong>Primer párrafo:</strong> Contendrá la cadena de texto que indicará si el jugador ganó, empató o perdió el juego.</li>
  <li><strong>Segundo párrafo:</strong> Contendrá una cadena que mostrará una imagen de lo que el jugador ha elegido y otra que es la que ha elegido la computadora de manera aleatoria.</li>
  <li><strong>Tercer párrafo:</strong> Mostrará la puntuación indicando cuántas victorias, empates y pérdidas lleva el jugador.</li>
</ul>

<p>Por debajo de estos párrafos, habrá un botón llamado "Resetear", que al presionarlo hará volver las puntuaciones a cero.</p>

<h3>🔷 CSS</h3>
<p>Se le dan los estilos al cuerpo, a los botones y las imágenes; modificando su color y tamaño.</p>

<h3>🟨 JAVASCRIPT</h3>
<p>Se llama a la API localStorage la puntuación (victorias, empates y derrotas), la cual contendrá esos valores en el caso de que el jugador haya jugado antes</p>
<p>En el caso de que no haya jugado, se crean esas puntuaciones a cero.</p>
<p>Luego se crea una funcion que recibirá como argumento el valor de las tres opciones del juego que haya elegido el participante</p>
<p></p>

