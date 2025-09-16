import professorImg from "../../../assets/images/ui/professor.png"
import legosImg from "../../../assets/images/ui/legos.png"
import robotitos from "../../../assets/images/ui/robotitos.png"
import star from "../../../assets/images/ui/star.png"

const defaultDetails = <>-</>

export const slidesContent = [
    {
        title: "Intro",
        description: "Bienvenidos!!",
        contentImage: professorImg,
        details: defaultDetails,
        slides: [
            {
                title: "Machine Learning VS. ChatGPT",
                items: ["Más allá de la moda de los LLMs"],
                tag: "epic fight"
            },
            {
                title: "Agenda",
                items: [
                    "Qué es Machine Learning",
                    "Qué estudia",
                    "Aspectos clave a tomar en cuenta",
                    "Tipos de aprendizaje: Supervised, Unsupervised, Reinforcement",
                    "ChatGPT y LLMs: cómo encajan",
                    "Reflexión final"
                ],
                tag: "marathon"
            },
            {
                title: "¿Qué es Machine Learning?",
                items: [
                    "Subcampo de la Inteligencia Artificial",
                    "Algoritmos que aprenden de datos",
                    "Ejemplo: Netflix recomendando series",
                ],
                tag: "cyberpunk robot"
            },
            {
                title: "ML en contexto",
                items: [
                    "IA > ML > Deep Learning > LLMs",
                    "ChatGPT es una aplicación de ML, no todo ML"
                ],
                tag: "matrioshka doll"
            },
            {
                title: "¿Qué estudia ML?",
                items: [
                    "Datos: cómo recolectarlos y procesarlos",
                    "Modelos: algoritmos que aprenden de los datos",
                    "Evaluación: métricas de desempeño",
                    "Despliegue: llevar el modelo a producción"
                ],
                tag: "Math"
            },
            {
                title: "Aspectos clave en ML",
                items: [
                    "Calidad y cantidad de datos",
                    "Overfitting vs. generalización",
                    "Sesgos y ética",
                    "Interpretabilidad del modelo"
                ],
                tag: "math graphic"
            }
        ]
    },
    {
        title: "Tipos de ML",
        description: "y sus aplicaciones",
        contentImage: legosImg,
        details: defaultDetails,
        slides: [
            {
                title: "Supervised Learning",
                items: [
                    "Datos con etiquetas",
                    "Ejemplo: clasificar correos en spam vs no spam"
                ],
                tag: "studying"
            },
            {
                title: "Unsupervised Learning",
                items: [
                    "Datos sin etiquetas",
                    "Ejemplo: segmentación de clientes"
                ],
                tag: "crowd"
            },
            {
                title: "Reinforcement Learning",
                items: [
                    "Aprender con recompensas y penalizaciones",
                    "Ejemplo: un agente que aprende a jugar Mario Bros"
                ],
                tag: "mario bros gaming"
            }


        ],

    },
    {
        title: "Deep Learning",
        description: "Neuronas y capas",
        contentImage: robotitos,
        details: defaultDetails,
        slides: [
            {
                title: "¿Dónde entra Deep Learning?",
                items: [
                    "Usa redes neuronales profundas",
                    "Ideal para texto, imágenes, audio",
                    "Ejemplo: detectar gatos en fotos"
                ],
                tag: "neuronal network"
            },
            {
                title: "ChatGPT y LLMs",
                items: [
                    "Basados en Deep Learning",
                    "Supervised Learning + RLHF",
                    "Entrenados con datos masivos"
                ],
                tag: "google gemini"
            },
            {
                title: "Diferencias ML vs LLM",
                items: [
                    "ML clásico: datasets pequeños, tareas específicas",
                    "LLM: billones de parámetros, datos masivos"
                ],
                tag: "spot the difference"
            }
        ],
    },
    {
        title: "Nivel 1, completo",
        description: "1 UP",
        contentImage: star,
        details: defaultDetails,
        slides: [
            {
                title: "Reflexión final",
                items: [
                    "ML es la base de la IA moderna",
                    "ChatGPT es impresionante, pero no lo es todo",
                    "Aprender ML abre la puerta a crear soluciones propias"
                ],
                tag: "thinking"
            },
            {
                title: "¿Qué está por venir?",
                items: [
                    "LVL-2: Crea un Modelo de predicción con regresión lineal",
                    "LVL-3: entrenando una nave espacial para que logre aterrizar",
                    "LVL-4: un robot bipedo aprendiendo a caminar",
                    "LVL-5: Clasificación de imágenes con transfer learning",
                    "Jefe Final: Detección de fraude con ML"
                ],
                tag: "boston dynamics"

            },
            {
                title: "Preguntas",
                items: [
                    "¿Qué creen que impactará más su industria: ML clásico o LLMs?"
                ],
                tag: "questions"
            }
        ]
    }
];