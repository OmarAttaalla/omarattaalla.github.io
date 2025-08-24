import NNImage from '../images/NN.png';
import ADRImage from '../images/ADR_Engineers.png';
import ArcyncImage from '../images/arcync_logo.jpg';
import DoDImage from '../images/DoD.png';
import UCIImage from '../images/uci_logo.jpg';
import LinkComponent from "../components/LinkComponent";

const experience = [
    {
        title: "U.S. Department of Defense",
        imageSrc: DoDImage,
        MainComponent: () => (
            <LinkComponent
                link={"https://www.defense.gov/"}
                title={"U.S. Department of Defense"}
                subtitle={"Discipline Engineer (January 2025 - Present)"}
                description={[

                ]}
            />
        ),
    },
    {
        title: "University of California, Irvine",
        imageSrc: UCIImage,
        MainComponent: () => (
            <LinkComponent
                link={"https://www.informatics.uci.edu/"}
                title={"University of California, Irvine"}
                subtitle={"Teaching Assistant (September 2024 - December 2025, April 2025 - June 2025)"}
                description={[
                    "Assisted in the development and delivery of course materials for an Introduction to Software Engineering course.",
                    "Provided support to students through office hours, tutoring sessions, and feedback on assignments.",
                ]}
            />
        ),
    },
    {
        title: "Arcync",
        imageSrc: ArcyncImage,
        MainComponent: () => (
            <LinkComponent
                link={"https://www.arcync.com/"}
                title={"Arcync"}
                subtitle={"Software Engineer (October 2024 - January 2025)"}
                description={[
                    "Contributed to the development of a cloud-based platform that aims to make ML models more accessible to an average user.",
                    "Utilized Python, Django, and React.js to build and enhance various features of the platform including distributed cloud based training and inference for standard and custom ML models.",
                    "Participated in the design and implementation of a scalable Google Cloud SQL database to efficiently manage user data and model metadata.",
                    "Utilized Docker and Kubernetes for scalable deployment of the platform.",
                ]}
            />
        ),
    },
    {
        title: "Software Engineering Intern",
        imageSrc: ADRImage,
        invertImage: true,
        MainComponent: () => (
            <LinkComponent
            link={"https://www.adrengineers.com/"}
            title={"ADR Engineers"}
            subtitle={"Software Engineering Intern (June 2023 - September 2023)"}
            description={[
                "Designed and developed multiple structural engineering analysis tools using C++, Python, and QT, allowing engineers to perform complex calculations efficiently.",
                "Collaborated with a team of engineers to gather requirements, design software architecture, and implement features that improved the overall functionality of the tools.",
                "Conducted thorough testing and debugging using gtest and the python unittest framework to ensure the reliability and accuracy of the software, resulting in zero calculation errors.",
            ]}
            />
        ),
    },
    {
        title: "University of California, Riverside",
        imageSrc: NNImage,
        invertImage: true,
        MainComponent: () => (
            <LinkComponent
            link={"https://github.com/OmarAttaalla/imageOCR"}
            title={"University of California, Riverside"}
            description={[
                "Participated in research projects focused on Optical Character Recognition (OCR), Neural Networks, and Quantum Dynamics.",
                "Worked under Dr. Bryan Wong's supervision at the University of California, Riverside.",
                "Helped researchers by creating software in a team for optical character recognition.",
                "Learned about Neural Networks by researching different character recognition techniques and implemented a Neural Network that recognized characters."
            ]}
            subtitle={"Undergraduate Research Assistant (February 2022 - November 2022)"}
            />
        ),
    },
]

export default experience;