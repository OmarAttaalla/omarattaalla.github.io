import ChessImage from "../images/Chess.png";
import SortImage from "../images/Sort.png";
import RoBooksImage from "../images/RoBooks.png";
import StructureInLogo from "../images/structure_in_logo.png";
import InvoiceImage from "../images/structurein.png";
import BallBlastImage from "../images/BallBlast.png";
import SafetyImage from "../images/Safety.png";
import SafetyPDF from "../images/First Responder's Smart Badge.pdf";
import ReceiptSimpleImage from "../images/receipt-simple.png";
import ReactPlayer from 'react-player';
import LinkComponent from "../components/LinkComponent";

const reactPlayerComponent = (videoUrl) => (
  <div className="VideoWrapper">
    <ReactPlayer url={videoUrl}/>
  </div>
);

const imageSubComponent = (imageSrc) => (
  <div className="ImageWrapper">
    <img src={imageSrc} alt="" className="ProjectImage" />
  </div>
);

const projects = [
  {
    title: "Structure In",
    imageSrc: StructureInLogo,
    MainComponent: () => (
      <LinkComponent 
        link={"https://structurein.com/"} 
        title={"Structure In"} 
        description={[
          "Structure is an application that allows users, particularly structural engineers, to manage projects and accounting with ease.",
          "Structure In provides an easy to use interface that stores information on employees, billing, projects, revenue, and expenses.",
          "Structure In uses the information provided to automatically generate invoices, agreements, and company summaries."
        ]}
      />
    ),
    SubComponent: () => imageSubComponent(InvoiceImage),
  },
  {
    title: "Receipt Simple",
    imageSrc: ReceiptSimpleImage,
    MainComponent: () => (
      <LinkComponent
        link={"https://receiptsimple.herokuapp.com/"}
        title={"Receipt Simple"} 
        description={[
          "Receipt Simple is a fullstack web application that allows users to track and analyze their receipts.",
          "This app was made using NodeJs, Express, React, JS/HTML/CSS and MongoDB. Users are first asked to login using Google oauth and a MongoDB connection is made using mongoose.",
          "This app includes calls to an OCR model that parses receipts for relevant information."
        ]}
      />
    ),
    SubComponent: () => reactPlayerComponent("https://youtu.be/7PPXZ2W9Ngo"),
  },
  {
    title: "Chess Game",
    imageSrc: ChessImage,
    MainComponent: () => (
      <LinkComponent
        link={"https://github.com/OmarAttaalla/Chess-Game"}
        title={"Chess Game"}
        description={[
          "This Chess Game was developed in C++ using QT Creator for the UI.",
          "This Project was made in a team of 4 where we implemented AGILE Scrum methodology. We had several sprints and scrums.",
          "Object Oriented, where we followed Design Patterns, such as the Strategy Design Pattern."
        ]}
      />
    ),
  },
  {
    title: "First Responder's Safety Badge",
    imageSrc: SafetyImage,
    MainComponent: () => (
      <LinkComponent
        link={SafetyPDF}
        title={"First Responder's Safety Badge"}
        description={[
          "First Responder's Safety Badge is an embedded IOT device that alerts its user of possible harmful materials in the air.",
          "The Badge records data and sends it to a Firebase database. From there, the data is presented in graphical form at a React.js based web application.",
          "The Badge utilizes I2C with multiple sensors to record the data.",
          "I was in charge of designing and writing all Embedded software, Database design, and web application software."
        ]}
      />
    ),
  },
  {
    title: "AI Learns Ball Blast",
    imageSrc: require("../images/BallBlast.png"),
    MainComponent: () => (
      <LinkComponent
        link={"https://github.com/OmarAttaalla/AI-Learns-Ball-Blast"}
        title={"AI Learns Ball Blast"}
        description={[
          "AI Learns Ball Blast is a multi-step project which includes a game (Ball Blast) as well as an AI that uses Deep Reinforcement learning to improve its ability to play the game.",
          "This app was made using Python, PyGame, and TensorFlow."
        ]}
      />
    ),
  },
  {
    title: "Visual Sorting Algorithms",
    imageSrc: require("../images/Sort.png"),
    MainComponent: () => (
      <LinkComponent
        link={"./Sorting.html"}
        title={"Visual Sorting Algorithms"}
        description={[
          "This Project includes visual representations of the most popular sorting algorithms (Selection Sort, Insertion Sort, Merge Sort, Quicksort).",
          "The visuals are created using vanilla Javascript with HTML/CSS."
        ]}
      />
    ),
  },
  {
    title: "RoBooks",
    imageSrc: require("../images/RoBooks.png"),
    MainComponent: () => (
      <LinkComponent
        link={"https://learnrobooks.github.io/RoBooks/"}
        title={"RoBooks"}
        description={[
          "Static site that teaches users how to program using LUA and how to use the Roblox Game Engine.",
          "Made in Vanilla HTML/CSS and Javascript."
        ]}
      />
    ),
  }
];


export default projects;