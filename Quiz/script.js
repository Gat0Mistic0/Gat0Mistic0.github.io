const questions = [
    {
        type: "choice",
        q: "¿Cuántos años tienes? 🫠",
        options: ["18", "19", "20", "21"],
        guess: "19",
        failMsg: "¡Ouch! Quedé 🤡",
        successMsg: "¡Exacto! 😎 (Esta fue una pregunta amañada)"
    },
    {
        type: "text",
        q: "Si pudieras elegir cualquier plan para salir el próximo fin de semana, ¿cuál sería? 🗺️",
        guess: "Ir por un café y caminar",
        failMsg: "Suena increíble, un día hay que hacerlo. ¡Anotado! ☕",
        successMsg: "¡Siiii! Justo en eso estaba pensando. Ya nos vi. 👑"
    },
    {
        type: "choice",
        q: "¿Cuál es tu color favorito? 🎨",
        options: ["Rojo", "Azul", "Negro", "Blanco", "Lila/Morado", "Rosa", "Amarillo"],
        guess: "Lila/Morado",
        failMsg: "Súper, lo anotaré para que no se me olvide. 😜",
        successMsg: "¡¡¡Igual el mío!!! Confiaba en tu buen gusto. 😎"
    },
    {
        type: "text",
        q: "¿Cuál es tu canción favorita para cantar a todo pulmón en el carro o cuando nadie te ve? 🎤",
        guess: "Alguna de pop viejito o rock en español",
        failMsg: "¡Jaja, rolón! Me la debes cantar luego. 🎵",
        successMsg: "En la vida le voy a atinar, pero esto es un huevo de pascua para decirte que estás bien bonita <3"
    },
    {
        type: "choice",
        q: "Si mañana nos ganamos un viaje con todo pagado, ¿qué tipo de destino elegirías sin dudarlo? ✈️",
        options: ["Cabaña con bosque y frío", "Playa escondida y calorcito", "Ciudad enorme para turistear", "Pueblito mágico colonial"],
        guess: "Cabaña con bosque y frío",
        failMsg: "Oye, ¡ese plan suena increíble!. 🗺️",
        successMsg: "¡Siiii! Hay que armarlo. 🪵"
    },
    {
        type: "text",
        q: "Si pudieras cenar un solo platillo por el resto de tu vida sin engordar ni enfermarte, ¿cuál sería? 🍕",
        guess: "Tacos o Sushi",
        failMsg: "¡Uff, gran elección! Pensé otra cosa, pero me das ideas de a dónde podemos ir en nuestras salidas. 🤤",
        successMsg: "¡Es que no hay pierde! La mejor comida del mundo. 👑"
    },
    {
        type: "text",
        q: "¿Cuándo es tu cumple? 🎂",
        guess: "4 de Septiembre",
        failMsg: "Anotado 🤭",
        successMsg: "Le atiné... ¿Le atiné? :0"
    },
    {
        type: "text",
        q: "¿Cuál es tu mayor 'placer culposo'? (Esa película mala, serie o hábito raro que te encanta) 🙈",
        guess: "Ver TikToks de chismes",
        failMsg: "¡Jajaja, no me lo esperaba! Está genial. Prometo no juzgarte... *La funa*",
        successMsg: "Tu secreto está a salvo conmigo en esta página. 🤝"
    },
    {
        type: "choice",
        q: "Si pudieras tener un superpoder que no sirva para salvar al mundo, ¿cuál elegirías? 🦸‍♀️",
        options: ["Que nunca se me acabe la batería del cel", "Saber qué pedir de comer en 1 segundo", "Dormir 5 min y despertar como nueva", "Que el café nunca se enfríe"],
        guess: "Dormir 5 min y despertar como nueva",
        failMsg: "¡Oye, súper útil! Pero yo pensé que elegirías mi suposición por lo de Vallarta. 😴",
        successMsg: "¡Best choice ever! ⚡"
    },
    {
        type: "choice",
        q: "¿Cuál es tu 'vibe' favorita para un domingo perfecto? ☁️",
        options: ["Nublado con lluvia y una peli", "Soleado para salir a caminar", "Atardecer rosado con música", "Noche estrellada y plática"],
        guess: "Atardecer rosado con música",
        failMsg: "Anotado, hay que hacerlo un día. ☕",
        successMsg: "¡Sabía que eras de las mías! Nada le gana a un buen atardecer con buena música. 💖"
    },
    {
        type: "text",
        q: "Completa la frase: 'Un día perfecto para mí obligatoriamente tiene que incluir...' ⏳",
        guess: "Un café, cine y música",
        failMsg: "Suena como un día increíble. Me anoto ese detalle para armar un día así pronto. ✨",
        successMsg: "¡Exacto! El combo perfecto. 🥰"
    },
    {
        type: "choice",
        q: "Estamos en el cine... ¿Qué pides sin pensarlo dos veces? 🍿",
        options: ["Palomitas de mantequilla (Clásicas)", "Palomitas de caramelo (Dulces)", "Nachos con mucho queso", "Hot dog y dulces"],
        guess: "Palomitas de mantequilla (Clásicas)",
        failMsg: "¡Interesante! Yo soy más del team clásico, pero siempre está la opción de mitad y mitad. 😋",
        successMsg: "Las clásicas nunca fallan. Ya tenemos el combo para la próxima peli. 🎬"
    }
];

let currentIdx = 0;
const respuestasParaEnviar = []; 

const body = document.getElementById('body-bg');
const openContainer = document.getElementById('open-answer-container');
const optionsContainer = document.getElementById('options-container');

document.getElementById('start-btn').onclick = () => {
    document.getElementById('intro-section').classList.add('hide');
    document.getElementById('quiz-section').classList.remove('hide');
    loadQuestion();
};

function loadQuestion() {
    body.style.background = '#ffe5ec'; // Mantiene el fondo rosa original
    document.getElementById('quiz-section').classList.remove('hide');
    document.getElementById('feedback-section').classList.add('hide');
    
    const currentQ = questions[currentIdx];
    document.getElementById('question-text').innerText = currentQ.q;

    if (currentQ.type === "text") {
        openContainer.classList.remove('hide');
        optionsContainer.classList.add('hide');
        document.getElementById('user-answer').value = '';
    } else if (currentQ.type === "choice") {
        openContainer.classList.add('hide');
        optionsContainer.classList.remove('hide');
        
        optionsContainer.innerHTML = '';
        currentQ.options.forEach(option => {
            const btn = document.createElement('button');
            btn.innerText = option; // Volvemos a leer texto plano directamente
            btn.classList.add('option-btn');
            
            btn.onclick = () => {
                verificarRespuesta(option);
            };
            optionsContainer.appendChild(btn);
        });
    }
}

document.getElementById('check-btn').onclick = () => {
    const userResp = document.getElementById('user-answer').value;
    if(userResp.trim() === "") return alert("¡Escribe algo antes de continuar! 😉");
    verificarRespuesta(userResp);
};

function verificarRespuesta(respuestaUsuario) {
    const currentQ = questions[currentIdx];
    
    respuestasParaEnviar.push({
        pregunta: currentQ.q,
        respuesta: respuestaUsuario
    });

    document.getElementById('quiz-section').classList.add('hide');
    document.getElementById('feedback-section').classList.remove('hide');
    document.getElementById('guessed-answer').innerText = currentQ.guess;

    const coincidencia = respuestaUsuario.toLowerCase().includes(currentQ.guess.toLowerCase());

    if (coincidencia) {
        document.getElementById('feedback-message').innerText = currentQ.successMsg;
        document.getElementById('result-icon').innerText = "✅";
    } else {
        document.getElementById('feedback-message').innerText = currentQ.failMsg;
        document.getElementById('result-icon').innerText = "❌";
        if (currentQ.type === "text") body.style.background = "#f8d7da"; // Alerta visual de fallo
    }
}

document.getElementById('next-btn').onclick = () => {
    currentIdx++;
    if (currentIdx < questions.length) {
        loadQuestion();
    } else {
        enviarResultadosYFinalizar();
    }
};

function enviarResultadosYFinalizar() {
    const feedbackSection = document.getElementById('feedback-section');
    feedbackSection.innerHTML = `<div class="final-message"><h2>Guardando tus respuestas... ✨</h2></div>`;
    body.style.background = '#ffe5ec';

    const datosFormulario = {};
    respuestasParaEnviar.forEach((item, idx) => {
        datosFormulario[`Pregunta_${idx + 1}`] = item.pregunta;
        datosFormulario[`Respuesta_${idx + 1}`] = item.respuesta;
    });

    // Remmplaza aquí abajo tu link de Formspree
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xykvrkqe'; 

    fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosFormulario)
    })
    .then(() => {
        document.getElementById('feedback-section').classList.add('hide');
        document.getElementById('final-section').classList.remove('hide');
    })
    .catch(err => {
        console.error(err);
        document.getElementById('feedback-section').classList.add('hide');
        document.getElementById('final-section').classList.remove('hide');
    });
}