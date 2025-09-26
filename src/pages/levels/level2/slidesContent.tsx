import regressionImg from "../../../assets/images/ui/linear regression.png"
import calculatorImg from "../../../assets/images/ui/calculator.png"

const defaultDetails = <>-</>

export const slidesContent = [
    {
        title: "Regresión y Predicción",
        description: "Modelo predictivo",
        contentImage: regressionImg,
        details: defaultDetails,
        slides: [
            {
                title: "¿Qué es la regresión lineal?",
                items: [
                    "Dibujar una línea que explique la relación entre dos variables.",
                    "Sirve para estimar un valor desconocido a partir de datos conocidos.",
                    "Es el ‘hola mundo’ del ML: simple, potente y fácil de interpretar."
                ],
                tag: "algebra",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Friedmans_mars_linear_model.png/640px-Friedmans_mars_linear_model.png",
                        alt: "Definición visual de regresión lineal"
                    }
                ]
            },
            {
                title: "Features (entradas) y Labels (salida)",
                items: [
                    "Features: variables que usamos como entrada para predecir (ej. tamaño, edad, tiempo).",
                    "Label: el valor que queremos estimar (ej. precio, puntaje, duración).",
                    "Cada fila de datos: un conjunto (features) → produce un resultado (label)."
                ],
                tag: "input output",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/2taula.png/640px-2taula.png",
                        alt: "tabla de datos"
                    }
                ]
            },
            {
                title: "La fórmula Predictiva",
                items: [
                    "Predicción ≈ Intercept + Slope × Feature",
                    "Intercept (b0): valor base cuando la feature vale 0.",
                    "Slope (b1): cuánto cambia la predicción si la feature sube en 1 unidad."
                ],
                tag: "formulas",
                images: [
                    {
                        src: "https://i0.wp.com/image.slidesharecdn.com/simplelinearregressionpelatihan-090829234643-phpapp02/95/simple-linier-regression-11-728.jpg",
                        alt: "fórmula"
                    }
                ]
            },
            {
                title: "¿Cómo encuentra la compu la mejor línea?",
                items: [
                    "Prueba muchas líneas y calcula el error (distancia de los puntos a la línea).",
                    "Minimiza el error cuadrático medio (MSE) para acercarse a todos los puntos.",
                    "Resultado: la línea con el menor error promedio."
                ],
                tag: "linear algebra",
                images: [
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Linear_least_squares_example2.svg/640px-Linear_least_squares_example2.svg.png",
                        alt: "Mínimos cuadrados ordinarios (OLS)"
                    }
                ]
            },
            {
                title: "¿Por qué importa? Buenas prácticas y límites",
                items: [
                    "Explica relaciones y permite predicciones rápidas y transparentes.",
                    "Base para modelos más avanzados"
                ],
                tag: "uso",
                images: []
            }
        ]
    },
    {
        title: "Herramientas a utilizar",
        description: "Links",
        contentImage: calculatorImg,
        details: defaultDetails,
        slides: [
            {
                title: "",
                items: [
                    "*** NOTEBOOKS ***",
                    "https://jupyter.org/try-jupyter/lab/",
                    "https://colab.research.google.com/",
                    "*** REPOSITORIO ***",
                    "https://github.com/henrycamposeco/ml-master-class",
                    "*** DOCKER (Gracias Alejandro) ***",
                    "https://gitea.p-lao.com/aleleba/vscode-henry",
                    "https://hub.docker.com/r/aleleba/vscode"
                ],
                tag: "tools",
                images: []
            },
        ]
    }
];