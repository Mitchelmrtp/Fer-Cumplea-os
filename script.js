// --- INICIALIZACIÓN Y DEBUG ---
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DEBUG INICIO ===');
    console.log('Challenge 1 input:', document.getElementById('input-memory1'));
    console.log('Challenge 1 button:', document.querySelector('#challenge-1 button'));
    console.log('Challenge 2 hearts:', document.querySelectorAll('.fake-heart'));
    console.log('Challenge 2 title:', document.getElementById('secret-title'));
    
    // Asegurar que el desafío 1 esté desbloqueado
    const challenge1 = document.getElementById('challenge-1');
    if (challenge1) {
        challenge1.classList.remove('locked');
        console.log('Challenge 1 unlocked');
    }
    
    // Verificar que los elementos del desafío 2 existan
    const heartsContainer = document.querySelector('.hearts-container');
    const fakeHearts = document.querySelectorAll('.fake-heart');
    console.log('Hearts container:', heartsContainer);
    console.log('Fake hearts found:', fakeHearts.length);
    
    // FUNCIÓN DE TEST RÁPIDO - eliminar después
    window.testChallenge1 = function() {
        console.log('Testing challenge 1...');
        document.getElementById('input-memory1').value = 'marzo';
        checkFirstMemory();
    };
    
    window.testChallenge2 = function() {
        console.log('Testing challenge 2...');
        // Simular 8 clicks para mostrar la pista
        for(let i = 1; i <= 8; i++) {
            trollClick(i);
        }
    };
    
    window.testTitleClick = function() {
        console.log('Testing title click directly...');
        heartsClicked = 8; // Simular que ya se clickearon 8 corazones
        
        // Hacer visible la pista final
        const finalHint = document.getElementById('final-hint');
        if (finalHint) {
            finalHint.style.display = 'block';
            console.log('Final hint shown');
        }
        
        const resolveChallenge = function(e) {
            console.log('TEST: Element clicked!');
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            solveChallenge2();
        };
        
        // Hacer el título clickeable
        const title = document.getElementById('secret-title');
        if (title) {
            console.log('Title element found, making it clickable...');
            title.classList.add('clickable-title');
            title.style.animation = 'title-pulse 2s infinite';
            
            title.addEventListener('click', resolveChallenge, { passive: false });
            title.addEventListener('touchstart', resolveChallenge, { passive: false });
            title.addEventListener('touchend', resolveChallenge, { passive: false });
            title.onclick = resolveChallenge;
            
            console.log('Title is now clickable.');
        }
        
        // Hacer el ícono del corazón clickeable también
        const heartIcon = document.getElementById('troll-heart');
        if (heartIcon) {
            console.log('Heart icon found, making it clickable...');
            heartIcon.style.color = '#FFD700';
            heartIcon.style.cursor = 'pointer';
            heartIcon.style.textShadow = '0 0 15px #FFD700';
            heartIcon.style.fontSize = '3rem';
            heartIcon.style.animation = 'title-pulse 2s infinite';
            
            heartIcon.addEventListener('click', resolveChallenge, { passive: false });
            heartIcon.addEventListener('touchstart', resolveChallenge, { passive: false });
            heartIcon.addEventListener('touchend', resolveChallenge, { passive: false });
            heartIcon.onclick = resolveChallenge;
            
            console.log('Heart icon is now clickable too.');
        }
        
        console.log('Both title and heart icon are now clickable!');
    };
    
    // Test completo del desafío 2
    window.fullDebugChallenge2 = function() {
        console.log('=== FULL DEBUG CHALLENGE 2 ===');
        
        // 1. Verificar elementos
        console.log('1. Checking elements...');
        const title = document.getElementById('secret-title');
        const heartIcon = document.getElementById('troll-heart');
        const finalHint = document.getElementById('final-hint');
        const challenge2 = document.getElementById('challenge-2');
        const challenge3 = document.getElementById('challenge-3');
        const feedback = document.getElementById('feedback-2');
        
        console.log('Elements found:');
        console.log('- title:', title ? 'YES' : 'NO');
        console.log('- heartIcon:', heartIcon ? 'YES' : 'NO');
        console.log('- finalHint:', finalHint ? 'YES' : 'NO');
        console.log('- challenge2:', challenge2 ? 'YES' : 'NO');
        console.log('- challenge3:', challenge3 ? 'YES' : 'NO');
        console.log('- feedback:', feedback ? 'YES' : 'NO');
        
        // 2. Verificar estado actual
        console.log('2. Current state:');
        console.log('- heartsClicked:', heartsClicked);
        console.log('- challenge2Solved:', challenge2Solved);
        console.log('- estadoAmor.desafiosCompletados:', estadoAmor.desafiosCompletados);
        
        // 3. Simular 8 clicks
        console.log('3. Simulating 8 clicks...');
        heartsClicked = 8;
        challenge2Solved = false;
        
        // 4. Activar elementos clickeables
        console.log('4. Making elements clickable...');
        if (finalHint) {
            finalHint.style.display = 'block';
        }
        
        const resolveChallenge = function(e) {
            console.log('DEBUG: Element clicked, calling solveChallenge2()');
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            solveChallenge2();
        };
        
        if (title) {
            title.classList.add('clickable-title');
            title.style.animation = 'title-pulse 2s infinite';
            title.onclick = resolveChallenge;
            title.addEventListener('click', resolveChallenge);
            console.log('Title made clickable');
        }
        
        if (heartIcon) {
            heartIcon.style.color = '#FFD700';
            heartIcon.style.cursor = 'pointer';
            heartIcon.style.textShadow = '0 0 15px #FFD700';
            heartIcon.onclick = resolveChallenge;
            heartIcon.addEventListener('click', resolveChallenge);
            console.log('Heart icon made clickable');
        }
        
        console.log('5. Ready for testing - click title or heart icon');
        console.log('=== END FULL DEBUG ===');
    };
    
    // Test directo para resolver challenge 2
    window.solveChallenge2Direct = function() {
        console.log('Resolving challenge 2 directly...');
        solveChallenge2();
    };
    
    // Test para mostrar/ocultar la bóveda
    window.toggleVault = function() {
        const vault = document.getElementById('unlock-section');
        if (vault.classList.contains('hidden')) {
            vault.classList.remove('hidden');
            vault.scrollIntoView({ behavior: 'smooth' });
            console.log('Vault shown for testing');
        } else {
            vault.classList.add('hidden');
            console.log('Vault hidden');
        }
    };
    
    // Test para mostrar la bóveda directamente
    window.showVault = function() {
        document.getElementById('unlock-section').classList.remove('hidden');
        document.getElementById('unlock-section').scrollIntoView({ behavior: 'smooth' });
        console.log('Vault shown for testing');
    };
    
    console.log('Use testChallenge1(), testChallenge2(), testTitleClick(), fullDebugChallenge2(), solveChallenge2Direct(), toggleVault(), or showVault() in console to test');
    console.log('=== FIN DEBUG ===');
});

// --- CONFIGURACIÓN ROMÁNTICA ---
const AMOR_CONFIG = {
    // Personaliza estas respuestas según tu relación 💕
    mesCorreto: "marzo", // ¿En qué mes fue su primera cita?
    regaloPrimerMes: "peluche", // Regalo del primer mes (flores, peluche, carta, chocolate)
    petalosFlor: 6, // Pétalos de su flor favorita
    mesesJuntos: 4, // Meses que llevan juntos
    
    // Palabras mágicas para la declaración
    palabrasMagicas: ["eternamente", "corazón", "felicidad"],
    
    // Claves que da cada desafío - pistas para descifrar la fecha 220525
    claves: [
        "VEINTIDOS",    // Desafío 1: Primera Chispa (día 22)
        "FLORECE",      // Desafío 2: Secretos del Corazón (mayo florece = mes 05)
        "QUINTO",       // Desafío 3: Álbum de Memorias (quinto lustro = 25)
        "PIDIÓ",        // Desafío 4: Adivinanza del Alma (cuando pidió ser enamorados)
        "ETERNOS"       // Desafío 5: Declaración Eterna (amor eterno)
    ],
    
    // Preguntas del juego de memoria basadas en momentos románticos específicos 💕
    preguntasMemoria: [
        {
            pregunta: "¿Qué situación especial mencioné sobre cómo me enamoré de ti?",
            opciones: ["Me enamoré cuando te vi por primera vez", "Me enamoré sin haberte visto ni escuchado tu voz", "Me enamoré en nuestra primera llamada", "Me enamoré leyendo tus mensajes"],
            respuesta: "Me enamoré sin haberte visto ni escuchado tu voz"
        },
        {
            pregunta: "¿Qué tipo de fondo de pantalla puse en mi celular después de conocerte?",
            opciones: ["Tu foto completa", "Un paisaje romántico", "Tus hermosos ojos", "Nuestras iniciales"],
            respuesta: "Tus hermosos ojos"
        },
        {
            pregunta: "¿Cómo me gusta llamarte cariñosamente en nuestros mensajes?",
            opciones: ["Mi amor", "Mi vida", "Mi princesita hermosa", "Todas las anteriores"],
            respuesta: "Todas las anteriores"
        }
    ]
};

// Contraseña final - Fecha especial: 22 de mayo 2025 💕
const CLAVE_MAESTRA = "220525"; // Fecha en que ella pidió ser enamorados

// --- ESTADO DEL JUEGO ---
let estadoAmor = {
    desafiosCompletados: 0,
    preguntaActual: 0,
    clavesReveladas: [],
    preguntasMezcladas: [] // Array para preguntas en orden aleatorio
};

// --- FUNCIONES DE UTILIDAD ---
function actualizarProgreso() {
    const progreso = (estadoAmor.desafiosCompletados / 5) * 100;
    document.getElementById('heart-progress').style.width = progreso + '%';
    document.querySelector('.progress-text').textContent = 
        `${estadoAmor.desafiosCompletados}/5 Corazones Conquistados`;
}

function completarDesafio(numeroDesafio) {
    console.log(`=== completarDesafio(${numeroDesafio}) called ===`);
    
    console.log('Current estadoAmor.desafiosCompletados:', estadoAmor.desafiosCompletados);
    estadoAmor.desafiosCompletados++;
    console.log('Updated estadoAmor.desafiosCompletados:', estadoAmor.desafiosCompletados);
    
    // Marcar como completado
    const desafio = document.getElementById(`challenge-${numeroDesafio}`);
    if (desafio) {
        desafio.classList.add('completed');
        console.log(`Challenge ${numeroDesafio} marked as completed`);
    } else {
        console.error(`Challenge element not found: challenge-${numeroDesafio}`);
    }
    
    // Revelar la clave
    console.log(`Revealing key for challenge ${numeroDesafio}...`);
    try {
        revelarClave(numeroDesafio);
        console.log(`Key revealed successfully for challenge ${numeroDesafio}`);
    } catch (error) {
        console.error(`Error revealing key for challenge ${numeroDesafio}:`, error);
    }
    
    // Desbloquear siguiente desafío
    const siguiente = document.getElementById(`challenge-${numeroDesafio + 1}`);
    if (siguiente) {
        siguiente.classList.remove('locked');
        habilitarInputs(siguiente);
        console.log(`Challenge ${numeroDesafio + 1} unlocked`);
    } else {
        console.log(`No next challenge found (challenge-${numeroDesafio + 1})`);
    }
    
    console.log('Updating progress...');
    actualizarProgreso();
    
    // Si completamos todos, mostrar bóveda
    if (estadoAmor.desafiosCompletados === 5) {
        console.log('All challenges completed! Showing vault...');
        mostrarBoveda();
    }
    
    console.log(`=== completarDesafio(${numeroDesafio}) completed ===`);
}

function revelarClave(numeroDesafio) {
    const clave = AMOR_CONFIG.claves[numeroDesafio - 1];
    const keyElement = document.getElementById(`key-${numeroDesafio}`);
    const keySlot = keyElement.parentElement;
    
    keyElement.textContent = clave;
    keySlot.classList.add('revealed');
    estadoAmor.clavesReveladas.push(clave);
    
    // Animación de revelación
    keyElement.style.transform = 'scale(1.3)';
    setTimeout(() => {
        keyElement.style.transform = 'scale(1)';
    }, 500);
}

function habilitarInputs(challenge) {
    const inputs = challenge.querySelectorAll('input, button, textarea');
    inputs.forEach(input => input.disabled = false);
}

function mostrarFeedback(numeroDesafio, mensaje, esExito = false) {
    console.log(`Showing feedback for challenge ${numeroDesafio}:`, mensaje);
    
    const feedback = document.getElementById(`feedback-${numeroDesafio}`);
    
    if (!feedback) {
        console.error(`Feedback element not found: feedback-${numeroDesafio}`);
        return;
    }
    
    feedback.textContent = mensaje;
    feedback.className = `feedback-msg ${esExito ? 'success' : 'error'}`;
    
    // Scroll into view
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function mostrarBoveda() {
    document.getElementById('unlock-section').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('unlock-section').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 500);
}

// --- DESAFÍO 1: PRIMERA CHISPA DEL AMOR ---
function checkFirstMemory() {
    console.log('checkFirstMemory called');
    
    const input = document.getElementById('input-memory1');
    const feedback = document.getElementById('feedback-1');
    
    if (!input) {
        console.error('Input not found');
        return;
    }
    
    const respuesta = input.value.trim().toLowerCase();
    console.log('User answer:', respuesta);
    console.log('Correct answer:', AMOR_CONFIG.mesCorreto);
    
    if (respuesta === AMOR_CONFIG.mesCorreto) {
        console.log('CORRECT ANSWER!');
        mostrarFeedback(1, "💕 ¡Perfecto! Ese mes nuestros corazones se encontraron por primera vez...", true);
        input.disabled = true;
        
        const button = document.querySelector('#challenge-1 button');
        if (button) button.disabled = true;
        
        setTimeout(() => {
            completarDesafio(1);
        }, 1500);
    } else {
        console.log('Wrong answer');
        mostrarFeedback(1, "💭 Mmm, no creo que sea ese mes... ¿Recuerdas cuando empezó todo?");
    }
}

// --- DESAFÍO 2: SIMPLE TROLL QUE FUNCIONA ---
let challenge2Solved = false;
let heartsClicked = 0;

// Función para manejar clicks en corazones falsos
function trollClick(heartNumber) {
    console.log('trollClick called with heartNumber:', heartNumber);
    
    if (challenge2Solved) {
        console.log('Challenge already solved, ignoring click');
        return;
    }
    
    heartsClicked++;
    console.log('Hearts clicked so far:', heartsClicked);
    
    // Actualizar contador
    const countElement = document.getElementById('count');
    if (countElement) {
        countElement.textContent = heartsClicked;
    }
    
    // Mensajes troll
    const messages = [
        "🙅‍♀️ ¡Nop! Ese no era...",
        "😅 ¡Tampoco! Sigue intentando...",
        "🤔 ¡Hmm! ¿Dónde estará el verdadero?",
        "😏 ¡Interesante! Pero no es ese...",
        "🙄 Ya van 5... ¿Será el siguiente?",
        "😅 ¡Tampoco! ¿En serio crees que es tan fácil?",
        "🤭 Ya casi terminas... ¿pero dónde está?",
        "😱 ¡Solo queda uno! ¿Será este?",
        "😜 ¡Último! Pero... ¿y si no está aquí? 🤔"
    ];
    
    // Mostrar mensaje correspondiente
    if (heartNumber <= messages.length) {
        mostrarFeedback(2, messages[heartNumber - 1]);
    }
    
    // Hacer que el corazón se desvanezca (usando window.event para compatibilidad)
    const heartElement = window.event ? window.event.target : document.querySelector(`.fake-heart:nth-child(${heartNumber})`);
    if (heartElement) {
        heartElement.style.opacity = '0.3';
        heartElement.style.transform = 'scale(0.8)';
        heartElement.style.pointerEvents = 'none';
    }
    
    // Mostrar primera pista después de 5 corazones
    if (heartsClicked >= 5) {
        const trollHint = document.getElementById('troll-hint');
        if (trollHint) {
            trollHint.style.display = 'block';
        }
    }
    
    // Mostrar pista final después de 8 corazones
    if (heartsClicked >= 8) {
        console.log('Showing final hint and making title clickable');
        
        const finalHint = document.getElementById('final-hint');
        if (finalHint) {
            finalHint.style.display = 'block';
            console.log('Final hint displayed');
        }
        
        // Función para resolver el desafío
        const resolveChallenge = function(e) {
            console.log('Title/Heart interaction detected - solving challenge!');
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            solveChallenge2();
        };
        
        // Hacer que el título sea clickeable
        const title = document.getElementById('secret-title');
        if (title) {
            console.log('Making title clickable with enhanced method');
            
            // Aplicar estilos con clase CSS
            title.classList.add('clickable-title');
            title.style.animation = 'title-pulse 2s infinite';
            
            // Remover todos los event listeners anteriores
            title.onclick = null;
            title.removeEventListener('click', resolveChallenge);
            title.removeEventListener('touchstart', resolveChallenge);
            title.removeEventListener('touchend', resolveChallenge);
            
            // Agregar múltiples tipos de eventos para máxima compatibilidad
            title.addEventListener('click', resolveChallenge, { passive: false });
            title.addEventListener('touchstart', resolveChallenge, { passive: false });
            title.addEventListener('touchend', resolveChallenge, { passive: false });
            
            // También agregar onclick directo como backup
            title.onclick = resolveChallenge;
            
            console.log('Title is now clickable with multiple event types');
        }
        
        // TAMBIÉN hacer que el ícono del corazón sea clickeable
        const heartIcon = document.getElementById('troll-heart');
        if (heartIcon) {
            console.log('Making heart icon clickable too');
            
            // Aplicar estilos al corazón
            heartIcon.style.color = '#FFD700';
            heartIcon.style.cursor = 'pointer';
            heartIcon.style.textShadow = '0 0 15px #FFD700';
            heartIcon.style.fontSize = '3rem';
            heartIcon.style.animation = 'title-pulse 2s infinite';
            heartIcon.style.zIndex = '1000';
            
            // Remover eventos anteriores
            heartIcon.onclick = null;
            heartIcon.removeEventListener('click', resolveChallenge);
            heartIcon.removeEventListener('touchstart', resolveChallenge);
            heartIcon.removeEventListener('touchend', resolveChallenge);
            
            // Agregar eventos al corazón
            heartIcon.addEventListener('click', resolveChallenge, { passive: false });
            heartIcon.addEventListener('touchstart', resolveChallenge, { passive: false });
            heartIcon.addEventListener('touchend', resolveChallenge, { passive: false });
            heartIcon.onclick = resolveChallenge;
            
            console.log('Heart icon is now clickable too');
        }
        
        // Mostrar mensaje adicional más claro
        setTimeout(() => {
            mostrarFeedback(2, "✨ ¡El corazón y el título están brillando! Toca cualquiera de los dos para revelar el secreto... ✨");
        }, 1000);
    }
}

// Función para resolver el desafío
function solveChallenge2() {
    console.log('=== solveChallenge2 called ===');
    
    if (challenge2Solved) {
        console.log('Challenge already solved, exiting');
        return;
    }
    
    challenge2Solved = true;
    console.log('Challenge 2 marked as solved');
    
    console.log('Showing feedback...');
    mostrarFeedback(2, "🎉 ¡INCREIBLE! ¡Encontraste el secreto! El corazón verdadero estaba escondido en el título 💕✨", true);
    
    // Resetear el título y corazón
    console.log('Resetting title and heart...');
    const title = document.getElementById('secret-title');
    if (title) {
        title.classList.remove('clickable-title');
        title.style.color = '';
        title.style.cursor = '';
        title.style.textShadow = '';
        title.style.animation = '';
        title.onclick = null;
        console.log('Title reset successfully');
    } else {
        console.error('Title element not found for reset');
    }
    
    const heartIcon = document.getElementById('troll-heart');
    if (heartIcon) {
        heartIcon.style.color = '';
        heartIcon.style.cursor = '';
        heartIcon.style.textShadow = '';
        heartIcon.style.fontSize = '';
        heartIcon.style.animation = '';
        heartIcon.onclick = null;
        console.log('Heart icon reset successfully');
    }
    
    console.log('Waiting 2 seconds before transition...');
    setTimeout(() => {
        console.log('Starting transition...');
        
        // Transición manual para challenge 2 a 3
        const challenge2 = document.getElementById('challenge-2');
        const challenge3 = document.getElementById('challenge-3');
        
        if (challenge2) {
            challenge2.style.display = 'none';
            console.log('Challenge 2 hidden successfully');
        } else {
            console.error('Challenge 2 element not found for hiding');
        }
        
        if (challenge3) {
            challenge3.style.display = 'block';
            challenge3.scrollIntoView({ behavior: 'smooth' });
            console.log('Challenge 3 shown successfully');
        } else {
            console.error('Challenge 3 element not found for showing');
        }
        
        console.log('Calling completarDesafio(2)...');
        try {
            completarDesafio(2);
            console.log('completarDesafio(2) completed successfully');
        } catch (error) {
            console.error('Error in completarDesafio(2):', error);
        }
        
        console.log('=== solveChallenge2 completed ===');
    }, 2000);
}

// --- DESAFÍO 3: ÁLBUM DE MEMORIAS ---
function checkMemoryAnswer(respuesta) {
    const preguntaActual = estadoAmor.preguntasMezcladas[estadoAmor.preguntaActual];
    
    if (respuesta === preguntaActual.respuesta) {
        mostrarFeedback(3, `✨ ¡Correcto! Ese recuerdo está grabado en mi corazón...`, true);
        estadoAmor.preguntaActual++;
        
        setTimeout(() => {
            if (estadoAmor.preguntaActual >= estadoAmor.preguntasMezcladas.length) {
                // Completado todas las preguntas
                mostrarFeedback(3, "🏆 ¡Increíble! Recordaste todos nuestros momentos especiales. Tu memoria del corazón es perfecta 💕", true);
                deshabilitarBotonesMemoria();
                
                setTimeout(() => {
                    completarDesafio(3);
                }, 2000);
            } else {
                // Siguiente pregunta
                cargarSiguientePregunta();
            }
        }, 2000);
    } else {
        mostrarFeedback(3, "💭 No era esa la respuesta... ¡Intentemos con otra pregunta!");
        // Cargar una pregunta completamente nueva y aleatoria
        setTimeout(() => {
            cargarPreguntaAleatoria();
        }, 1500);
    }
}

function cargarSiguientePregunta(reordenar = false) {
    const pregunta = estadoAmor.preguntasMezcladas[estadoAmor.preguntaActual];
    document.getElementById('memory-question').textContent = pregunta.pregunta;
    document.getElementById('question-number').textContent = estadoAmor.preguntaActual + 1;
    
    // Crear copia de opciones para reordenar
    let opciones = [...pregunta.opciones];
    
    // Si se requiere reordenar (después de respuesta incorrecta), mezclar opciones
    // pero manteniendo "Todas las anteriores" siempre al final
    if (reordenar) {
        opciones = mezclarOpcionesConExcepcion(opciones);
    }
    
    // Actualizar opciones
    const botonesOpciones = document.querySelectorAll('.memory-option');
    opciones.forEach((opcion, index) => {
        if (botonesOpciones[index]) {
            botonesOpciones[index].textContent = getOpcionTexto(opcion);
            botonesOpciones[index].onclick = () => checkMemoryAnswer(opcion);
        }
    });
}

// Función para mezclar array aleatoriamente
function mezclarArray(array) {
    const arrayMezclado = [...array];
    for (let i = arrayMezclado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayMezclado[i], arrayMezclado[j]] = [arrayMezclado[j], arrayMezclado[i]];
    }
    return arrayMezclado;
}

// Función para mezclar opciones manteniendo "Todas las anteriores" siempre al final
function mezclarOpcionesConExcepcion(opciones) {
    // Identificar si existe "Todas las anteriores"
    const todasIndex = opciones.findIndex(opcion => opcion === "Todas las anteriores");
    
    if (todasIndex === -1) {
        // No hay "Todas las anteriores", mezclar normalmente
        return mezclarArray(opciones);
    }
    
    // Separar "Todas las anteriores" del resto
    const todasLasAnteriores = opciones[todasIndex];
    const otrasOpciones = opciones.filter((_, index) => index !== todasIndex);
    
    // Mezclar solo las otras opciones
    const otrasOpcionesMezcladas = mezclarArray(otrasOpciones);
    
    // Devolver array con "Todas las anteriores" siempre al final
    return [...otrasOpcionesMezcladas, todasLasAnteriores];
}

// Función para inicializar preguntas en orden aleatorio
function inicializarPreguntasAleatorias() {
    estadoAmor.preguntasMezcladas = mezclarArray(AMOR_CONFIG.preguntasMemoria);
}

// Función para cargar una pregunta completamente aleatoria cuando falla
function cargarPreguntaAleatoria() {
    // Seleccionar una pregunta aleatoria de todas las disponibles
    const preguntaAleatoria = AMOR_CONFIG.preguntasMemoria[Math.floor(Math.random() * AMOR_CONFIG.preguntasMemoria.length)];
    
    document.getElementById('memory-question').textContent = preguntaAleatoria.pregunta;
    
    // Mezclar las opciones de esta nueva pregunta manteniendo "Todas las anteriores" al final
    const opcionesMezcladas = mezclarOpcionesConExcepcion([...preguntaAleatoria.opciones]);
    
    // Actualizar opciones
    const botonesOpciones = document.querySelectorAll('.memory-option');
    opcionesMezcladas.forEach((opcion, index) => {
        if (botonesOpciones[index]) {
            botonesOpciones[index].textContent = getOpcionTexto(opcion);
            botonesOpciones[index].onclick = () => checkMemoryAnswer(opcion);
        }
    });
}

function getOpcionTexto(opcion) {
    const textos = {
        // Opciones para cómo me enamoré
        'Me enamoré cuando te vi por primera vez': 'Me enamoré cuando te vi por primera vez 😍',
        'Me enamoré sin haberte visto ni escuchado tu voz': 'Me enamoré sin haberte visto ni escuchado tu voz 💕',
        'Me enamoré en nuestra primera llamada': 'Me enamoré en nuestra primera llamada 📞',
        'Me enamoré leyendo tus mensajes': 'Me enamoré leyendo tus mensajes 💌',
        
        // Opciones para el fondo de pantalla
        'Tu foto completa': 'Tu foto completa 📷',
        'Un paisaje romántico': 'Un paisaje romántico 🌅',
        'Tus hermosos ojos': 'Tus hermosos ojos 👀💕',
        'Nuestras iniciales': 'Nuestras iniciales 💖',
        
        // Opciones para los apodos cariñosos
        'Mi amor': 'Mi amor 💖',
        'Mi vida': 'Mi vida 💫',
        'Mi princesita hermosa': 'Mi princesita hermosa 👸✨',
        'Todas las anteriores': 'Todas las anteriores 🥰'
    };
    return textos[opcion] || opcion;
}

function deshabilitarBotonesMemoria() {
    document.querySelectorAll('.memory-option').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
    });
}

// --- DESAFÍO 4: DESCIFRADOR DE AMOR ---
function checkDecodedMessage() {
    const input = document.getElementById('decoder-input');
    const respuesta = input.value.trim().toLowerCase();
    
    // El mensaje secreto es: "TE AMO FER" en código morse
    // - . = TE, .- -- --- = AMO, ..-. . .-. = FER
    const respuestasValidas = [
        "te amo fer",
        "te amo fer❤️",
        "te amo fer ❤️"
    ];
    
    if (respuestasValidas.includes(respuesta)) {
        mostrarFeedback(4, "😍 ¡EXACTO! Descifraste el código morse perfectamente... TE AMO FER, mi amor hermoso 💕📻", true);
        input.disabled = true;
        document.querySelector('#challenge-4 button').disabled = true;
        
        setTimeout(() => {
            completarDesafio(4);
        }, 2000);
    } else {
        const pistas = [
            "� Recuerda: . = punto, - = raya... ¡Sigue intentando!",
            "📻 Pista extra: La primera letra es una sola raya (-)",
            "👀 La última palabra termina con su nombre... 💕"
        ];
        const pistaAleatoria = pistas[Math.floor(Math.random() * pistas.length)];
        mostrarFeedback(4, pistaAleatoria);
        
        // Efecto visual en el código
        const secretMessage = document.querySelector('.secret-message');
        secretMessage.style.animation = 'glow 1s ease-in-out';
        setTimeout(() => {
            secretMessage.style.animation = '';
        }, 1000);
    }
}

// --- DESAFÍO 5: CONTADOR DEL CORAZÓN ---
function checkHeartCount() {
    const input = document.getElementById('heart-count-input');
    const respuesta = parseInt(input.value);
    
    // Sistema de puntuación secreto: cada tipo de corazón tiene un valor diferente
    // La respuesta correcta es 14 puntos en total
    const respuestaCorrecta = 14;
    
    if (respuesta === respuestaCorrecta) {
        mostrarFeedback(5, "🎆 ¡PERFECTO! Contaste exactamente 14 puntos. Tu atención al detalle es increíble 👩‍🔬💕", true);
        input.disabled = true;
        document.querySelector('#challenge-5 button').disabled = true;
        
        // Efecto visual: marcar y hacer brillar todos los corazones rojos y rosados al acertar
        const loveText = document.querySelector('.love-text');
        loveText.innerHTML = loveText.innerHTML
            .replace(/❤️/g, '<span class="highlight-heart">❤️</span>')
            .replace(/💕/g, '<span class="highlight-heart">💕</span>');
        
        // También marcar los corazones en las instrucciones
        const titleElement = document.querySelector('.difficulty.very-hard');
        if (titleElement) {
            titleElement.innerHTML = titleElement.innerHTML.replace(/💕/g, '<span class="highlight-heart">💕</span>');
        }
        
        const hintElement = document.querySelector('.counter-hint');
        if (hintElement) {
            hintElement.innerHTML = hintElement.innerHTML
                .replace(/❤️/g, '<span class="highlight-heart">❤️</span>')
                .replace(/💕/g, '<span class="highlight-heart">💕</span>');
        }
        
        setTimeout(() => {
            completarDesafio(5);
        }, 2000);
    } else if (respuesta < respuestaCorrecta) {
        mostrarFeedback(5, `🔍 Muy poco... Cada corazón tiene un valor diferente. ¡Revisa bien! 👀`);
        // Resaltar temporalmente los corazones rojos y rosados
        highlightRedHearts();
    } else {
        mostrarFeedback(5, `😅 Demasiados... Piensa bien en el valor de cada corazón. Total debe ser 14`);
        // Mostrar efecto de "error" en los otros corazones
        highlightWrongHearts();
    }
}

function highlightRedHearts() {
    const loveText = document.querySelector('.love-text');
    const originalHTML = loveText.innerHTML;
    
    // Resaltar temporalmente los corazones rojos y rosados
    loveText.innerHTML = loveText.innerHTML
        .replace(/❤️/g, '<span style="background: yellow; padding: 2px 4px; border-radius: 3px;">❤️</span>')
        .replace(/💕/g, '<span style="background: yellow; padding: 2px 4px; border-radius: 3px;">💕</span>');
    
    setTimeout(() => {
        loveText.innerHTML = originalHTML;
    }, 3000);
}

function highlightWrongHearts() {
    const loveText = document.querySelector('.love-text');
    const originalHTML = loveText.innerHTML;
    
    // Resaltar temporalmente los corazones que NO son rojos
    loveText.innerHTML = loveText.innerHTML
        .replace(/💖/g, '<span style="opacity: 0.3;">💖</span>')
        .replace(/💔/g, '<span style="opacity: 0.3;">💔</span>')
        .replace(/💕/g, '<span style="opacity: 0.3;">💕</span>')
        .replace(/💙/g, '<span style="opacity: 0.3;">💙</span>')
        .replace(/💛/g, '<span style="opacity: 0.3;">💛</span>');
    
    setTimeout(() => {
        loveText.innerHTML = originalHTML;
    }, 3000);
}

// --- BÓVEDA FINAL ---
document.addEventListener('DOMContentLoaded', function() {
    const btnFinal = document.getElementById('btn-unlock-final');
    if (btnFinal) {
        btnFinal.addEventListener('click', function() {
            // Para pruebas: comentar la validación de desafíos completados
            /*
            if (estadoAmor.desafiosCompletados < 5) {
                document.getElementById('final-feedback').textContent = 
                    "💪 Completa todos los desafíos del amor primero...";
                document.getElementById('final-feedback').className = "feedback-msg error";
                return;
            }
            */
            
            const inputFinal = document.getElementById('final-password-input');
            const claveFinal = inputFinal.value.replace(/\s/g, '').toLowerCase();
            
            if (claveFinal === CLAVE_MAESTRA) {
                celebrarAmor();
            } else {
                document.getElementById('final-feedback').textContent = 
                    "💝 Contraseña incorrecta. Las palabras clave son pistas... ¡Convierte todo a números! (formato: DDMMAA)";
                document.getElementById('final-feedback').className = "feedback-msg error";
            }
        });
    }
});

function celebrarAmor() {
    // Ocultar todo lo anterior
    document.getElementById('intro-section').classList.add('hidden');
    document.getElementById('challenges-section').classList.add('hidden');
    document.getElementById('unlock-section').classList.add('hidden');
    document.querySelectorAll('hr').forEach(hr => hr.classList.add('hidden'));
    
    // Mostrar la recompensa
    const rewardSection = document.getElementById('reward-section');
    rewardSection.classList.remove('hidden');
    
    // Reproducir video
    const video = document.getElementById('main-video');
    video.play().catch(e => console.log('Autoplay bloqueado'));
    
    // Escuchar cuando termine el video para mostrar la opción de continuar
    video.addEventListener('ended', function() {
        console.log('Video terminado, mostrando opción de continuar');
        setTimeout(() => {
            const continuePrompt = document.getElementById('continue-prompt');
            continuePrompt.classList.remove('hidden');
            continuePrompt.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    });
    
    // Agregar event listeners para los botones de continuar
    document.getElementById('btn-continue').addEventListener('click', function() {
        console.log('Usuario eligió continuar');
        // Aquí puedes agregar lo que pase cuando continúe
        alert('🌟 ¡Preparándose para algo muy especial! 🌟');
        window.location.href = 'secreto.html'; // O lo que quieras que pase
    });
    
    document.getElementById('btn-stay').addEventListener('click', function() {
        console.log('Usuario eligió quedarse');
        const continuePrompt = document.getElementById('continue-prompt');
        continuePrompt.classList.add('hidden');
        // Mensaje romántico
        alert('💖 ¡Perfecto! Quédate aquí conmigo para siempre 💖');
    });
    
    // Actualizar botón
    const btn = document.getElementById('btn-unlock-final');
    btn.textContent = "💕 ¡AMOR ETERNO DESBLOQUEADO! 💕";
    btn.style.background = "linear-gradient(45deg, #00b894, #00cec9)";
    
    // Mensajes especiales en consola
    console.log("%c💕 ¡FELIZ CUMPLEAÑOS MI AMOR! 💕", "color: #ff6b9d; font-size: 28px; font-weight: bold;");
    console.log("%cHas completado la aventura del corazón... Eres increíble! 🌟", "color: #00b894; font-size: 16px;");
    console.log("%cLa clave del amor era: " + CLAVE_MAESTRA + " (22 de mayo 2025 - fecha especial)", "color: #ffd93d; font-size: 14px; font-weight: bold;");
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', function() {
    actualizarProgreso();
    
    // Solo el primer desafío desbloqueado
    for (let i = 2; i <= 5; i++) {
        const challenge = document.getElementById(`challenge-${i}`);
        if (challenge) {
            challenge.classList.add('locked');
            const inputs = challenge.querySelectorAll('input, button, textarea');
            inputs.forEach(input => input.disabled = true);
        }
    }
    
    // Inicializar preguntas en orden aleatorio
    if (AMOR_CONFIG.preguntasMemoria.length > 0) {
        inicializarPreguntasAleatorias();
        cargarSiguientePregunta();
    }
});