import InfoBlock from "../components/InfoBlock";
import NNImage from '../images/NN.png';
import ListBlock from "../components/ListBlock";
import LinkComponent from "../components/LinkComponent";

const experience = [
    {
        title: "Undergraduate Research Assistant",
        imageSrc: NNImage,
        MainComponent: () => (
            <LinkComponent
            link={"https://github.com/OmarAttaalla/imageOCR"}
            title={"Undergraduate Research Assistant (February 2022 - November 2022)"}
            description={[
                "Participated in research projects focused on Optical Character Recognition (OCR), Neural Networks, and Quantum Dynamics.",
                "Worked under Dr. Bryan Wong's supervision at the University of California, Riverside.",
                "Helped researchers by creating software in a team for optical character recognition.",
                "Learned about Neural Networks by researching different character recognition techniques and implemented a Neural Network that recognized characters."
            ]}
            />
        ),
    },
]

export default experience;