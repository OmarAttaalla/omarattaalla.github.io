import InfoBlock from "../components/InfoBlock";
import UCIImage from '../images/uci_logo.jpg';
import UCRImage from '../images/UCR.png';

const education = [
    {
        title: "University of California, Irvine",
        imageSrc: UCIImage,
        MainComponent: () => (
            <InfoBlock
                title={"University of California, Irvine (2024 - 2025)"}
                subtitle={" - M.S. Computer Science"}
            />
        ),
        SubComponent: () => (
            <InfoBlock
                title={"Relevant Coursework"}
                subtitle={" - Advanced Algorithms, Machine Learning, Data Mining, Software Engineering, Web Development"}
            />
        ),
    },
    {
        title: "University of California, Irvine",
        imageSrc: UCIImage,
        MainComponent: () => (
            <InfoBlock
                title={"University of California, Irvine (2022 - 2024)"}
                subtitle={" - B.S. Computer Science & Engineering"}
            />
        ),
        SubComponent: () => (
            <InfoBlock
                title={"Relevant Coursework"}
                subtitle={" - Data Structures, Algorithms, Computer Architecture, Operating Systems, Database Systems, Software Engineering, Web Development, Machine Learning"}
            />
        ),
    },
    {
        title: "University of California, Riverside",
        imageSrc: UCRImage,
        MainComponent: () => (
            <InfoBlock
                title={"University of California, Riverside (2020 - 2022)"}
                subtitle={" - B.S. Computer Engineering"}
            />
        ),
    },
]

export default education;