# Jazzero

**Cuaderno de práctica para guitarra de jazz.** Una banda de acompañamiento en el navegador (guitarra o piano, contrabajo y batería) que toca progresiones de jazz mientras el mástil te muestra qué tocar, acorde a acorde.

**Pruébalo aquí:** https://benitico69.github.io/Jazzero/

Funciona en el navegador y, si quieres, se instala como una app: en Chrome o Edge aparece el botón **Instalar** arriba a la derecha; en iPhone o iPad, toca **Compartir → Añadir a pantalla de inicio**. Una vez instalada, también funciona sin conexión.

---

## Qué hace

- **Banda que acompaña.** Contrabajo caminando, batería con ride en swing y comping de guitarra o piano. Cada instrumento se puede sacar del grupo o traer de vuelta en cualquier momento; por ejemplo, quita la guitarra y toca tú los acordes.
- **Voicings reales.** Solo usa formas de manual (drop 2, drop 3 y shells de tres notas), nunca con más de tres trastes de apertura. De todas las posibles, elige la que menos mueve la mano desde el acorde anterior.
- **El mástil en vivo.** Muestra la digitación de cada acorde, la siguiente en punteado y una flecha cuando la 7ª cae en la 3ª del acorde siguiente. Tiene cuatro modos: comping, notas guía, arpegios y escalas.
- **Mapa de notas guía.** Las 3ªs y 7ªs de toda la progresión, con los semitonos marcados.
- **Varios compases.** 4/4, vals de jazz en 3/4, 2/4, 5/4 al estilo de «Take Five», 7/4, 6/8, 9/8, 12/8 de blues lento, 5/8 y 7/8. También hay uno a medida: eliges los tiempos, la figura (negra o corchea) y la agrupación, por ejemplo `11/8 = 3+3+3+2`. La banda cambia de manera de tocar según el compás: swing en x/4, tresillos en 6/8, 9/8 y 12/8, y corcheas iguales en los compases irregulares.
- **Todos los tonos.** Al terminar cada vuelta puede quedarse en el tono, subir una cuarta, subir un semitono o saltar a un tono al azar.
- **Entrenamiento.** Entrenador de velocidad (sube el tempo cada vuelta), modo oído (acordes tapados hasta que suenan), bucle de uno o varios compases (con el dedo: toca un número de compás, otro para ampliarlo y uno del bucle para soltarlo), tap tempo (botón «tap» o tecla `T`) y cuenta previa.
- **Estilos de la banda.** Swing, bossa nova, balada con escobillas, jazz-funk y jazz fusión.
- **Solista.** Improvisa en cada vuelta, o se turna contigo en pregunta y respuesta y en cambios de cuatro; sus notas se ven en el mástil y en la tablatura.
- **Diario de práctica.** Tiempo por día, racha, calendario, tus tempos más altos, metas y medallas.
- **Modo oscuro.** Para practicar de noche; sigue el ajuste del sistema.
- **En español y en inglés.** Botón con el globo terráqueo arriba a la derecha.
- **Un gato.** Gira al ritmo de la música y maúlla al terminar cada vuelta. Se puede silenciar.

## Progresiones incluidas

| Grupo | Progresiones |
|---|---|
| Fundamentos | ii–V–I mayor · ii–V–i menor · I–vi–ii–V · ii–♭II7–I · iv–♭VII7–I · turnaround de Lady Bird · ciclo de dominantes · ii–V que bajan por semitonos |
| Formas | blues de jazz · blues menor · al estilo de «Autumn Leaves» · rhythm changes (A) |
| Desafíos | Giant Steps (Coltrane) · Swallow (Casiopea) · Spain (Chick Corea) |
| Tuya | escribe tus acordes, por ejemplo `Dm9 G13 \| Cmaj9 \| A7alt` (entiende maj9, m9, 9, 13, m11, 6/9, maj7#11, 7b13, 7alt…) |

## Cómo usarlo

1. Elige una progresión, un tono y un compás.
2. Dale a play (o pulsa la barra espaciadora).
3. Toca encima: sigue el mástil o las notas guía.

| Tecla | Acción |
|---|---|
| `Espacio` | play / stop |
| `↑` `↓` | tempo ±2 |
| `T` | marcar el tempo con toques |
| `1`–`4` | modo del mástil |

Los ajustes, el tempo y el tiempo de práctica del día se guardan en tu navegador.

## Sonido

Jazzero suena con **muestras grabadas** de instrumentos reales, que se descargan al abrir la página y quedan guardadas en el navegador para usarlas después sin conexión. Si un sonido nunca llegó a descargarse (por ejemplo, el piano si nunca lo elegiste) y no hay internet, ese instrumento pasa a un **motor sintetizado** (cuerda física Karplus–Strong), así que siempre suena algo. También puedes elegir el sintetizado a mano en *La banda → sonido*.

## Versiones

**1.9**
- Bucle de varios compases: toca el número de un compás para repetirlo, toca otro para ampliar el bucle hasta ahí y toca uno del bucle para soltarlo. Se ve como un solo bloque, también cuando cruza de fila.
- Tap tempo: un botón «tap» junto al tempo y la tecla `T` (promedia los últimos cuatro toques; con más de dos segundos sin tocar, empieza de nuevo).
- Voicings con tensiones reales: maj9, m9, 9, m11, 6/9, maj7♯11 y 7♭13 ya no suenan como maj7, m7, 13, 6, maj7 y 7alt. Son voicings de cuatro notas, casi siempre sin fundamental (la pone el bajo). Funcionan también en «Escribe la tuya».
- Mástil para zurdos (Ajustes → Voicings): el mástil se espeja entero, con las etiquetas legibles, el solista y la vista de cerca del móvil.
- Gráfica de tempo en el diario: «Tu tempo, semana a semana», por progresión, con las metas de tempo como línea.

**1.8.2**
- Nueva guitarra opcional: «eléctrica realista» (en Ajustes → Banda, en el selector de guitarra). Muestras de una Fender grabada directa (FreePats, CC0) con dos capas de fuerza, cuatro tomas por nota que no se repiten y la cuerda de la que sale cada muestra.
- Articulaciones: el golpe hacia arriba suena más suave, las notas cortas salen apagadas como con la palma y al soltar la cuerda se oye un leve roce de dedo. El solista de sonido limpio usa el mismo banco, con su bend y su vibrato.
- Se descarga al elegirla (unos 5 MB), queda guardada y funciona sin conexión. Si no carga, suena la eléctrica de siempre. Las demás guitarras no cambian.

**1.8.1**
- Arreglo en el móvil: con el solista activo, el mástil de cerca podía dejar fuera notas del acorde para mostrar la zona del solo. Ahora el acorde siempre se ve entero y la ventana se acerca a la zona del solo todo lo que permite.

**1.8**
- Interfaz rediseñada de arriba abajo, sin tocar la música: más aire, menos ruido y todo en su sitio.
- Cabecera compacta: el gato junto al logo, botones de icono (afinador, diario, ajustes, tema, idioma) y un chip con el tiempo de hoy que abre el diario.
- Lo principal primero: elegir progresión y tono, ver el cifrado y darle al play. El compás, el estilo, el final de cada vuelta y el arreglo están en «Opciones del tema»; la descripción, tras el botón ⓘ.
- Una sola zona de estudio con pestañas: mástil, tablatura y notas guía. El modo oído también tapa la tablatura y las notas guía.
- Cifrados largos: la tarjeta tiene una altura máxima y se desplaza sola siguiendo el compás que suena, así que Swallow (54 compases) ya no empuja el resto de la página.
- Los ajustes viven en un diálogo con pestañas (Banda, Voicings, Entrenamiento y Solos) y la banda sigue sonando mientras se ajusta.
- Consola de reproducción en grupos: play, tempo, swing, pulso, acorde actual y siguiente, y estado.
- Los atajos de teclado y los créditos pasan a «Acerca de», que también se abre con la tecla «?». El pie queda en una línea.
- Nuevo sistema de diseño: tipografía Source Sans 3 (más legible en pantalla) con Cormorant Garamond para el logo y los acordes, naranja de relleno más oscuro, contraste AA en claro y oscuro y objetivos táctiles de 44 px en móvil.

**1.7**
- Swallow, mucho más fiel a Casiopea: la canción entera en Re (intro con su corte, tema de 20 compases, la sección de solos en Do menor y el puente), con la armonía sacada del bajo y el piano eléctrico del tab de Songsterr. Suena con su instrumentación: guitarra limpia, bajo eléctrico con los dedos, piano eléctrico tipo Rhodes, un solista que alterna sintetizador de onda cuadrada y guitarra, y hits de toda la banda. Las partes son recursos del estilo, no copias de la grabación; se puede tocar con el arreglo o sin él.
- Giant Steps con arreglo: la banda suena como el cuarteto de Coltrane, con piano acompañando, contrabajo caminando y un saxo tenor de solista; las dos primeras vueltas se marcan como tema y después como solos.
- Nueva: Spain, de Chick Corea, sobre su forma de 12 compases (tema dos veces, con el corte de la banda, y los solos), con piano eléctrico, bajo en negras, batería con aire de samba y flauta de solista.
- Al salir de una canción con estilo propio (Swallow, Spain), la banda vuelve al estilo que tenía.
- Acordes nuevos: 7sus4 y 7♯5, con sus voicings.
- Guardar un solo: el botón «guardar este solo» lo guarda con sus ajustes. Al fijarlo, Jazzero carga esos ajustes y lo repite en cada vuelta para practicarlo en bucle; también se baja como tablatura de texto.

**1.6.2**
- Al parar a mitad de una vuelta, el solo que sonaba se queda: se sigue viendo y vuelve a sonar igual al darle al play. Cambia por uno nuevo al completar la vuelta o al cambiar alguna opción que lo afecte.

**1.6.1**
- Nueva opción «se ve en» para el solista: en el mástil y la tablatura, solo en la tablatura (el mástil queda para tus acordes) o solo en el mástil.

**1.6**
- Solista: una guitarra que improvisa una frase nueva en cada vuelta, en la zona del mástil elegida. Busca las notas guía en cada cambio de acorde, camina por la escala, se aproxima por semitono y respira entre frases. Tres niveles: fácil (notas del acorde), medio (escalas y aproximaciones) y bebop (corcheas, rodeos y cromatismos).
- Suena según el estilo: limpia en swing y balada, de nylon en bossa, saturada y con delay en funk y fusión, con vibrato y algún bend.
- Modos para practicar: solo en cada vuelta, pregunta y respuesta (2 + 2 compases) y cambios de cuatro (4 + 4). La consola dice de quién es el turno.
- Sus notas se ven en el mástil (punto granate con el grado) y en una línea de solo sobre la tablatura de los acordes.

**1.5.1**
- Tablatura: bajo el mástil, los voicings de toda la progresión escritos como TAB, con barras de compás y el nombre de cada acorde. El que suena se resalta; tocando una columna se salta a ese acorde. Se oculta con la casilla «tablatura».

**1.5**
- Estilos de la banda: además del swing, bossa nova, balada con escobillas, jazz-funk y jazz fusión. Cada estilo tiene su batería, su bajo y su acompañamiento; en funk y fusión suena un bajo eléctrico. Si el tempo queda muy lejos del estilo, se lleva a uno típico. Swallow se toca en fusión.
- Metas: minutos al día, días por semana y metas de tempo («Giant Steps a 200»). Al cumplirlas sale un aviso y el gato maúlla.
- Veinte medallas en el diario, de «Primera vuelta» a «Un mes de jazz», pasando por «Doce tonos», «Golondrina» o «Noctámbulo».

**1.4**
- Modo oscuro: el mismo cuaderno, de noche. Sigue el ajuste del sistema y se cambia con el botón de la luna (o el sol), arriba a la derecha.
- Diario de práctica: cada día guarda el tiempo con la banda sonando, las vueltas y qué progresiones tocaste y a qué tempo. Muestra un calendario de las últimas semanas, la racha de días seguidos, los últimos días y tus tempos más altos por progresión. Se abre con el botón **Diario** o tocando el tiempo de hoy.

**1.3**
- Pensada para el móvil. El mástil se ve de cerca, solo la zona del acorde, y se desliza al cambiar de acorde. Con un botón se ve entero.
- La consola de abajo muestra el acorde de ahora y el siguiente. Los botones − y + son más grandes y, si se mantienen pulsados, el tempo sigue cambiando.
- En el móvil, los ajustes (la banda, voicings, entrenamiento) van plegados; se abren con un toque.
- En iPhone y iPad, Jazzero suena aunque el interruptor de silencio esté puesto.
- Mientras suena la banda, la pantalla no se apaga.

**1.2.1**
- Afinador: botón en la cabecera. Escucha la guitarra con el micrófono (el sonido se analiza en el propio dispositivo) y muestra la nota, los cents y una aguja. Detecta la cuerda sola o se elige a mano.
- Nota de referencia de cada cuerda con la guitarra grabada, para afinar de oído.
- Un gatito maúlla bajito cuando una cuerda queda afinada (otro gato, distinto del de las vueltas). Se puede desactivar.
- Afinaciones: estándar, medio tono abajo, Drop D, DADGAD, Sol abierta y Re abierta. La de referencia ajustable de 430 a 450 Hz.

**1.2**
- Jazzero se puede instalar como app en el ordenador, en Android y en iPhone, con su propio icono: el gato en la estrella naranja.
- Funciona sin conexión: la primera vez que se abre con internet guarda la página, las tipografías y los sonidos, incluidas las muestras grabadas.
- Botón **Instalar** en la cabecera cuando el navegador lo permite; en iPhone y iPad explica cómo añadirla a la pantalla de inicio.

**1.1.1**
- Versión en inglés. Se cambia con el botón del globo, arriba a la derecha, y la elección queda guardada. La primera vez, Jazzero usa el idioma del navegador.
- Corregido: el recuadro del compás a medida aparecía aunque no estuviera elegido.

**1.1**
- Compases además del 4/4: diez predefinidos y uno a medida, con agrupación libre.
- La banda adapta el ride, el hi-hat, el comping y los arpegios a cada compás.
- La cuenta previa dura un compás del compás elegido, y el gato da una vuelta por compás sea cual sea.
- La versión aparece al final de la página.

**1.0**
- Primera versión publicada.

## Publicarlo tú mismo

1. Crea un repositorio público y sube `index.html`, `manifest.webmanifest`, `sw.js` y la carpeta `icons`.
2. En **Settings → Pages**, elige *Deploy from a branch*, rama `main`, carpeta `/ (root)`.
3. En uno o dos minutos estará en `https://tu-usuario.github.io/nombre-del-repo/`.

## Créditos

Las muestras de sonido son de otras personas, compartidas con licencias abiertas. Jazzero las descarga de sus sitios originales y no las modifica ni las redistribuye, salvo la guitarra eléctrica realista, que aloja él mismo en `audio/real/` (convertida a AAC y recortada).

| Qué | Fuente | Licencia |
|---|---|---|
| Guitarra eléctrica realista | [FreePats · Electric Guitar FSBS (jazz)](https://freepats.zenvoid.org/ElectricGuitar/clean-electric-guitar.html), una Fender grabada directa | CC0 |
| Guitarras | [tonejs-instruments](https://github.com/nbrosowsky/tonejs-instruments), de Nicholaus Brosowsky | CC BY 3.0 |
| Guitarra de jazz, bajo eléctrico, piano eléctrico, saxo tenor y flauta | MusyngKite, de [midi-js-soundfonts](https://github.com/gleitz/midi-js-soundfonts) | CC BY-SA 3.0 |
| Contrabajo | [Dan Smolken](https://github.com/sfzinstruments/dsmolken.double-bass), vía [smpldsnds](https://github.com/smpldsnds) | CC0 |
| Piano | [Splendid Grand Piano](https://github.com/sfzinstruments/SplendidGrandPiano), muestras de Akai | dominio público |
| Batería | kit de [Hydrogen](https://github.com/hydrogen-music/hydrogen), vía [hydrogen-drum-samples](https://github.com/smpldsnds/hydrogen-drum-samples) | GPL v2 o posterior |
| Maullido | «[Maullido de gata hembra joven](https://commons.wikimedia.org/wiki/File:Maullido_de_gata_hembra_joven.ogg)», de George Miquilena | CC0 |
| Maullido del afinador | «[Νιάου](https://commons.wikimedia.org/wiki/File:2015-11-24.%CE%BD%CE%B9%CE%B1%CE%BF%CF%8D%CF%81%CE%B9%CF%83%CE%BC%CE%B1.%CE%9D%CE%B9%CE%AC%CE%BF%CF%85.noise_reduced.flac)», de Tsester | CC0 |
| Reproducción | [smplr](https://github.com/danigb/smplr), de danigb | MIT |
| Tipografías | Cormorant Garamond y Source Sans 3, en [Google Fonts](https://fonts.google.com) | SIL OFL |

---

Creado por **Benitico** usando [Claude Code](https://claude.com/claude-code).
