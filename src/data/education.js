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
                subtitle={" - Advanced Algorithms, Advanced Data Structures, Principles of Scientific Computing, Machine Learning, Artificial Intelligence, Transaction Processing & Distributed Data Management, Distributed Systems, Computer Networks, Parallel Computing, "}
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