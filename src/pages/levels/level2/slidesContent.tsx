import professorImg from "../../../assets/images/ui/professor.png"

const defaultDetails = <>-</>

export const slidesContent = [
    {
        title: "Modelos de prediccion",
        description: "Conceptos importantes",
        contentImage: professorImg,
        details: defaultDetails,
        slides: [
            {
                title: "Herramientas de ML",
                items: ["Python", "numpy", "pandas", "matplotlib"],
                tag: "Math"
            },
        ]
    },
];