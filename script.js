const wordSet = ["Elefante", "Guitarra", "Playa", "Computadora", "Montaña", "Chocolate","Universo", "Libro", "Estrella", "Fresa", "Camino", "Perro","Aventura", "Canción", "Bosque", "Cielo", "Amor", "Piano",
    "Viaje", "Helado", "Océano", "Luna", "Sol", "Arcoiris",
    "Casa", "Flor", "Abeja", "Mariposa", "Aurora", "Nube",
    "Relámpago", "Héroe", "Sonrisa", "Bailarín", "Viento", "Catarata",
    "Girasol", "Desierto", "Reloj", "Mar", "Arena", "Coral",
    "Sirena", "Nave", "Olas", "Sueño", "Despertar", "Ocaso",
    "Horizonte", "Tranquilidad", "Reflejo", "Colina", "Neblina", "Silencio","Meditación", "Árbol", "Río", "Pájaro", "Hojas", "Cascada",
    "Escalera", "Barco", "Isla", "Nieve", "Copo", "Diamante",
    "Perla", "Brisa", "Murmullo", "Estanque", "Atardecer", "Montura",
    "Estrella fugaz", "Caballo", "Niebla", "Fuego", "Trueno","Relajación","Descanso", "Paseo", "Huella", "Paraíso", "Amistad","Corazón","Recuerdo", "Música", "Inspiración", "Creación","Nacimiento", "Juventud","Niñez", "Libertad", "Refugio", "Jardín","Orquídea", "Espejo","Caverna", "Templo", "Faro", "Armonía", "Esperanza", "Cascabel", "Lágrima", "Destello", "Alba",
    "Colores", "Luz", "Cristal", "Arco", "Río", "Bosquejo", "Marea", "Constelación", "Cúpula", "Tierra", "Relato",
    "Sonido", "Travesía", "Cabaña", "Fragancia", "Nube", "Trigal",
    "Cosecha", "Bruma", "Ondas", "Espuma", "Arena", "Lluvia",
    "Alondra", "Rocío", "Eco", "Ceniza", "Raíz", "Madera",
    "Barro", "Molino", "Mirada", "Silencio", "Susurro", "Gaviota",
    "Tallo", "Floración", "Ritmo", "Sombra", "Camino", "Mirador",
    "Vigía", "Montículo", "Estalactita", "Velero", "Náufrago", "Corriente",
    "Tótem", "Huerto", "Nebulosa", "Brillante", "Estrella polar", "Constancia",
    "Serenidad", "Compás", "Rayo", "Observatorio", "Torre", "Puente",
    "Atalaya", "Caverna","Césped", "Prado", "Madera",
    "Esplendor", "Firmamento", "Golondrina", "Melodía", "Sinfonía", "Calma",
    "Bravura", "Bravura", "Viento", "Corriente", "Canoa", "Sendero", "Espejismo", "Bosquecillo", "Sierra", "Solsticio", "Equinoccio", "Viento", "Brisa", "Huracán", "Tormenta", "Lluvia", "Neblina",
    "Vapor", "Niebla", "Cielo", "Noche", "Luz", "Amanecer",
    "Sol", "Luna", "Estrella", "Cometa", "Nube", "Rayo",
    "Relámpago", "Trueno", "Río", "Corriente", "Cascada", "Lago",
    "Laguna", "Charca", "Mar", "Océano", "Marea", "Arena",
    "Duna", "Desierto", "Tierra", "Valle", "Colina", "Montaña",
    "Cumbre", "Glaciar", "Sierra", "Bosque", "Selva", "Pradera",
    "Campo", "Jardín", "Cueva", "Gruta", "Acantilado", "Risco",
    "Volcán", "Cráter", "Fumarola", "Géiser", "Pantano", "Roca",
    "Arroyo", "Sendero", "Camino", "Carretera", "Calle", "Plaza",
    "Ciudad", "Pueblo", "Aldea", "Cabaña", "Mansión", "Palacio",
    "Castillo", "Fortaleza", "Muralla", "Puente", "Túnel", "Callejón",
    "Avenida", "Mercado", "Granero", "Establo", "Viñedo", "Huerto",
    "Prado", "Pinar", "Bahía", "Costa", "Playa", "Horizonte",
    "Nieve", "Nevada", "Viento", "Frío", "Cima", "Colina",
    "Árbol", "Pino", "Cedro", "Roble", "Sauce", "Abeto",
    "Almendro", "Cerezo", "Naranjo", "Olivo", "Higuera", "Ciprés",
    "Hiedra", "Enredadera", "Rosa", "Tulipán", "Orquídea", "Girasol",
    "Dalia", "Clavel", "Violeta", "Azucena", "Jazmín", "Lirio",
    "Magnolia", "Camelia", "Hortensia", "Geranio", "Petunia", "Verbena",
    "Amapola", "Diente", "Margarita", "Caléndula", "Zinnia", "Ruda",
    "Salvia", "Romero", "Tomillo", "Albahaca", "Lavanda", "Menta",
    "Hierbabuena", "Manzanilla", "Melisa", "Poleo", "Cúrcuma", "Jengibre",
    "Canela", "Nuez", "Clavo", "Pimienta", "Café", "Cacao",
    "Vainilla", "Azúcar", "Miel", "Caramelo", "Chocolate", "Pastel",
    "Tarta", "Galleta", "Bizcocho", "Flan", "Natilla", "Crema",
    "Merengue", "Helado", "Sorbet", "Granizado", "Yogur", "Queso",
    "Pan", "Baguette", "Croissant", "Sándwich", "Ensalada", "Verduras",
    "Sopa", "Guiso", "Paella", "Arroz", "Curry", "Sushi",
    "Tempura", "Pizza", "Pasta", "Espaguetis", "Risotto", "Pollo",
    "Filete", "Estofado", "Cordero", "Pescado", "Mariscos", "Langosta",
    "Calamares", "Camarones", "Mejillones", "Ostras", "Cangrejo", "Pulpo",
    "Sardinas", "Atún", "Salmón", "Trucha", "Merluza", "Bacalao",
    "Lenguado", "Boquerones", "Cocido", "Fabada", "Tortilla", "Gazpacho",
    "Salmorejo", "Caldo", "Churros", "Crema", "Turrón", "Polvorones",
    "Mantecados", "Empanada", "Pisto", "Escalivada", "Rabo", "Jamón",
    "Chorizo", "Morcilla", "Lomo", "Queso", "Tortas", "Pan",
    "Aceitunas", "Aceite", "Vino", "Cava", "Sidra", "Sangría",
    "Horchata", "Agua", "Zumo", "Limonada", "Café", "Té",
    "Infusión", "Cerveza", "Whisky", "Ron", "Vodka", "Gin",
    "Cóctel", "Margarita", "Piña", "Mojito", "Caipirinha", "Martini",
    "Bloody", "Daiquiri", "Negroni", "Manhattan", "Old", "Mai",
    "Sazerac", "Tequila", "Brandy", "Licor", "Baileys", "Jägermeister",
    "Absenta", "Champán", "Tormenta", "Aurora", "Rayo", "Mariposa",
    "Héroe", "Sonrisa", "Bailarín", "Piano", "Beso", "Cascada",
    "Viaje", "Amor", "Caricia", "Sonido", "Viento", "Canto",
    "Sombra", "Mirada", "Calor", "Templo", "Luz", "Silencio",
    "Aroma", "Risa", "Rueda", "Canción", "Ritmo", "Poema",
    "Corazón", "Llama", "Magia", "Cielo", "Melodía", "Reflejo",
    "Palabra", "Cuento", "Pasión", "Joya", "Paz", "Estrella",
    "Ceniza", "Velo", "Espejo", "Sabor", "Plenitud", "Lago",
    "Aventura", "Desafío", "Sueño", "Escudo", "Rayo", "Salto",
    "Fuerza", "Grito", "Libertad", "Sendero", "Poesía", "Explosión",
    "Caída", "Luz", "Golpe", "Destello", "Gema", "Susurro",
    "Destino", "Pasado", "Presente", "Futuro", "Guía", "Brillo",
    "Eco", "Sombras", "Tierra", "Lejanía", "Encuentro", "Voz",
    "Llamada", "Escalera", "Amanecer", "Horizonte", "Épica", "Roca",
    "Conquista", "Colores", "Esfera", "Orilla", "Cristal", "Tejido",
    "Brisa", "Niebla", "Amanecer", "Cascada", "Palacio", "Bailarina",
    "Fábula", "Fortaleza", "Nostalgia", "Fortuna", "Rayo", "Poeta",
    "Alba", "Neblina", "Labio", "Piel", "Luz", "Olvido",
    "Sombras", "Llama", "Tierra", "Pasión", "Eco", "Viaje",
    "Silencio", "Tiempo", "Destino", "Guía", "Cuento", "Amistad",
    "Sol", "Lluvia", "Viento", "Trueno", "Frío", "Despertar",
    "Vuelo", "Recuerdo", "Leyenda", "Destello", "Aventura", "Oscuridad",
    "Fuego", "Infinito", "Relámpago", "Espejo", "Río", "Susurro"];
let speed, interval, lastWord;
let correctCounter = 0, wrongCounter = 0;
let gameDuration = 180; // 3 minutos en segundos
let selectedWords = [];
let timerInterval;

// Mezcla las palabras y selecciona 6 para las opciones
function shuffleWords() {
    let shuffled = [...wordSet].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
}

// Mezcla aleatoria de índices para cambiar el recorrido de las palabras en cada ronda
function shuffleGridIndexes() {
    let indexes = Array.from({ length: 12 }, (_, i) => i);
    return indexes.sort(() => 0.5 - Math.random());
}

function startGame() {
    document.getElementById("wordGrid").classList.remove("hidden");
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("p1").classList.remove("hidden");
    document.getElementById("p2").classList.remove("hidden");
    document.getElementById("p3").classList.add("hidden");
    document.getElementById("p4").classList.add("hidden");
    document.getElementById("velocidadYBoton").classList.add("hidden");

    // Obtener velocidad seleccionada en milisegundos
    speed = parseInt(document.getElementById('speed').value);

    // Inicializar contadores
    correctCounter = 0;
    wrongCounter = 0;
    document.getElementById('correctCounter').textContent = correctCounter;
    document.getElementById('wrongCounter').textContent = wrongCounter;

    // Generar palabras y mostrar grid
    selectedWords = shuffleWords();
    createWordOptions(selectedWords);
    startWordSequence();

    // Iniciar temporizador de 3 minutos
    startTimer(gameDuration);
}

function createWordOptions(words) {
    const wordOptions = document.getElementById('wordOptions');
    wordOptions.innerHTML = ''; // Limpiar opciones anteriores
    words.forEach(word => {
        const button = document.createElement('button');
        button.textContent = word;
        button.onclick = () => checkAnswer(word);
        wordOptions.appendChild(button);
    });
}

function startWordSequence() {
    let index = 0;
    let gridOrder = shuffleGridIndexes(); // Barajar índices para el grid

    interval = setInterval(() => {
        // Limpiar la cuadrícula
        const wordGrid = document.getElementById('wordGrid');
        wordGrid.querySelectorAll('.cell').forEach(cell => cell.textContent = '');

        if (index < selectedWords.length) {
            // Seleccionar palabra aleatoria de las opciones
            let randomWordIndex = Math.floor(Math.random() * selectedWords.length);
            lastWord = selectedWords[randomWordIndex]; // Actualizar la última palabra
            let gridPos = gridOrder[index % gridOrder.length]; // Obtener posición aleatoria
            wordGrid.children[gridPos].textContent = lastWord; // Mostrar la palabra en la cuadrícula
            index++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                // Limpiar todas las celdas después de 4 segundos
                wordGrid.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
            }, 4000);
        }
    }, speed);
}

function checkAnswer(selectedWord) {
    clearInterval(interval);
    if (selectedWord === lastWord) {
        correctCounter++;
    } else {
        wrongCounter++;
    }
    document.getElementById('correctCounter').textContent = correctCounter;
    document.getElementById('wrongCounter').textContent = wrongCounter;

    // Barajar palabras y reiniciar el ciclo
    selectedWords = shuffleWords(); // Barajar palabras para la siguiente ronda
    createWordOptions(selectedWords); // Crear nuevas opciones
    startWordSequence(); // Reiniciar la secuencia de palabras
}

function startTimer(duration) {
    let timerDisplay = document.getElementById('timer');
    let timeLeft = duration;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            clearInterval(interval);
            alert("Tiempo agotado!");
        }
    }, 1000);
}


