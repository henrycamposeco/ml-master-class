import professorImg from "../images/ui/professor.png"
import legosImg from "../images/ui/legos.png"
import robotitos from "../images/ui/robotitos.png"
import star from "../images/ui/star.png"

const defaultDetails = <>-</>

export const content = [
    {
        title: "Intro",
        description: "Bienvenidos!!",
        contentImage: professorImg,
        details: defaultDetails,
        slides: [
            {title: "Entendiendo Machine Learning vs. ChatGPT", items: ["Más allá de la moda de los LLMs"]},
            {
                title: "Agenda",
                items: [
                    "Qué es Machine Learning",
                    "Qué estudia",
                    "Aspectos clave a tomar en cuenta",
                    "Tipos de aprendizaje: Supervised, Unsupervised, Reinforcement",
                    "ChatGPT y LLMs: cómo encajan",
                    "Reflexión final"
                ]
            },
            {
                title: "¿Qué es Machine Learning?",
                items: [
                    "Subcampo de la Inteligencia Artificial",
                    "Algoritmos que aprenden de datos",
                    "Ejemplo: Netflix recomendando series",
                ]
            },
            {
                title: "ML en contexto",
                items: [
                    "IA > ML > Deep Learning > LLMs",
                    "ChatGPT es una aplicación de ML, no todo ML"
                ]
            },
            {
                title: "¿Qué estudia ML?",
                items: [
                    "Datos: cómo recolectarlos y procesarlos",
                    "Modelos: algoritmos que aprenden de los datos",
                    "Evaluación: métricas de desempeño",
                    "Despliegue: llevar el modelo a producción"
                ]
            },
            {
                title: "Aspectos clave en ML",
                items: [
                    "Calidad y cantidad de datos",
                    "Overfitting vs. generalización",
                    "Sesgos y ética",
                    "Interpretabilidad del modelo"
                ]
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
                ]
            },
            {
                title: "Unsupervised Learning",
                items: [
                    "Datos sin etiquetas",
                    "Ejemplo: segmentación de clientes"
                ]
            },
            {
                title: "Reinforcement Learning",
                items: [
                    "Aprender con recompensas y penalizaciones",
                    "Ejemplo: un agente que aprende a jugar Mario Bros"
                ]
            }


        ]
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
                ]
            },
            {
                title: "ChatGPT y LLMs",
                items: [
                    "Basados en Deep Learning",
                    "Supervised Learning + RLHF",
                    "Entrenados con datos masivos"
                ]
            },
            {
                title: "Diferencias ML vs LLM",
                items: [
                    "ML clásico: datasets pequeños, tareas específicas",
                    "LLM: billones de parámetros, datos masivos"
                ]
            }
        ]
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
                ]
            },
            {
                title: "¿Qué está por venir?",
                items: [
                    "STAGE-2: Crea un Modelo de predicción con regresión lineal",
                    "STAGE-3: entrenando una nave espacial para que logre aterrizar",
                    "STAGE-4: un robot bipedo aprendiendo a caminar",
                    "STAGE-5: Clasificación de imágenes con transfer learning",
                    "Final Boss: Detección de fraude con ML"
                ]
            },
            {
                title: "Preguntas",
                items: [
                    "¿Qué creen que impactará más su industria: ML clásico o LLMs?"
                ]
            }
        ]
    }
];