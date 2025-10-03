import regressionImg from "../../../assets/images/ui/learning.png"
import neuralNetworkImg from "../../../assets/images/ui/neuraln.png"
import droneImg from "../../../assets/images/ui/drone.png"
const defaultDetails = <>-</>

export const slidesContent = [
    {
        "title": "Aprendizaje por refuerzo (RL)",
        "description": "El Agente que Aprende a Decidir",
        "contentImage": regressionImg,
        "details": defaultDetails,
        "slides": [
            {
                "title": "1. Introducción: RL y Deep Q-Learning",
                "items": [
                    "Agentes que aprenden a tomar decisiones.",
                    "Entornos que generan recompensas para el agente.",
                    "RL: Aprender a maximizar la recompensa a través de la interacción.",
                ],
                "tag": "Robots",
                "images": []
            },
            {
                "title": "2. Ciclo de RL: Reinforcement Learning",
                "items": [
                    "Agente es consciente de su estado",
                    "Agente puede tomar decisiones basadas en su estado",
                    "Entorno genera recompensas para el agente",
                    "Agente puede ajustar su politica de aprendizaje para maximizar la recompensa.",
                ],
                "tag": "neural networks",
                "images": [
                    {
                        "src": "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/s-migr/ul/g/8f/5e/reinforcement-learning-figure-1.png",
                        "alt": "Diagrama del ciclo de Reinforcement Learning"
                    }
                ]
            },
        ]
    },
    {
        "title": "Q-Learning",
        "description": "El Abuelito del Asunto",
        "contentImage": neuralNetworkImg,
        "details": defaultDetails,
        "slides": [
            {
                "title": "3. Q-Learning",
                "items": [
                    "Q-Table: gigantezca tabla de datos",
                    "Guarda un registro para cada combinación posible estado/acción",
                ],
                "tag": "pixel art environment",
                "images": []
            },
            {
                "title": "4. Ecuación de Bellman",
                "items": [
                    "Q(s, a) = r(s, a) + gamma * max(Q(s', a'))",
                    "valor de la jugada = recompensa actual + gamma * valor de la jugada siguiente",
                    "gamma es un factor de descuento que controla la importancia de la recompensa futura.",
                ],
                "tag": "bellman equation",
                "images": []
            }
        ]
    },
    {
        "title": "Deep Q-Learning",
        "description": "La Revolución",
        "contentImage": droneImg,
        "details": defaultDetails,
        "slides": [
            {
                "title": "5. Deep Q-Learning",
                "items": [
                    "Avance Histórico: DeepMind (2015)",
                    "Se reemplazan las tablas de datos por Redes Neuronales",
                ],
                "tag": "starship",
                "images": []
            },
            {
                "title": "6. As bajo la manga",
                "items": [
                    "Experience Replay: Revisar el historial de experiencias para mejorar la eficiencia.",
                    "Target Network: Actualizar la red neuronal de destino con los datos de la experiencia actual.",
                    "49 juegos de Atari superados"
                ],
                "tag": "poker ace",
                "images": []
            }
        ]
    },
];