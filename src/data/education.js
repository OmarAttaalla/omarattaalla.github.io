import InfoBlock from "../components/InfoBlock";
import PdfContainer from "../components/PdfContainer";
import UCIImage from '../assets/uci_logo.jpg';
import UCRImage from '../assets/UCR.png';
import AStar from '../assets/Parallel_AStar.pdf';
import AStarImage from '../assets/Parallel_AStar-1.png';
import TransactionChainsImage from '../assets/Transaction Chains-1.png';
import TransactionChains from '../assets/Transaction Chains.pdf';
import TSPImage from '../assets/Traveling Salesman-02.png';
import TSP from '../assets/Traveling Salesman.pdf';
import EmotionDetection from '../assets/Emotion_Detection_CNN-ViT.pdf';
import EmotionDetectionImage from '../assets/Emotion_Detection_CNN-ViT-1.png';
import DistributedML from '../assets/Distributed ML.pdf';
import DistributedMLImage from '../assets/Distributed ML-2.png';
import Locks from '../assets/Locks.pdf';
import LocksImage from '../assets/Locks-1.png';
import RFlow from '../assets/Rectified Flow.pdf';
import RFlowImage from '../assets/RFlow.png';


const papers = [
    {
        title: "Beyond Euler: ODE Samplers for Rectified Flow Generative Models",
        abstract: "Rectified flow (RF) models learn an ordinary differential equation (ODE) that transports Gaussian noise to data along nearly straight trajectories, and can therefore generate samples with far fewer function evaluations (NFEs) than traditional diffusion models. Once an RF vector field is trained, however, the choice of numerical ODE solver remains largely unexplored. In this work we fix a conditional rectified flow model trained on the EuroSAT remote-sensing dataset and study the sampling problem in isolation. We compare six explicit ODE solvers under a common experimental setting, measuring Fréchet Inception Distance (FID), effective NFEs, wall-clock time, and geometric properties of the trajectories. Results show that Euler is the cheapest but performs worst, AB2 and Midpoint clearly improve FID at comparable or moderately higher cost, and adaptive RK23 attains the best FID with an intermediate evaluation budget, outperforming even high-cost RK4. Our results suggest that simple Euler sampling is suboptimal for rectified flows and that multi-step or adaptive solvers provide a better trade-off.",
        pdfUrl: RFlow,
        previewImage: RFlowImage,
    },
    {
        title: "Multiple Parallel Solutions to A* Search",
        abstract: "The A* search algorithm is a widely used method for pathfinding and graph traversal in robotics, autonomous systems, and optimization problems. However, its computational cost on large, uninformed graphs makes it a candidate for parallelization. In this paper, we explore two approaches to parallelizing A*: a centralized variant (SPA*) that employs a shared priority queue protected by locks, and a decentralized variant that distributes work across threads by assigning ownership of nodes through hashing. We present implementations of both algorithms, compare them against a standard single-threaded A* baseline, and evaluate performance under varying grid sizes and thread counts. Our experiments demonstrate that while both parallel implementations achieve significant speedups, the decentralized algorithm scales more effectively, achieving over 35× improvement compared to standard A* and roughly 2× improvement over the centralized approach. We also examine the effect of lock choice on performance, finding that CLH locks reduce contention in the centralized algorithm while spin locks perform best in the decentralized setting.",
        pdfUrl: AStar,
        previewImage: AStarImage,
    },
    {
        title: "Transaction Chains",
        abstract: "In this paper we discuss an implementation of Transaction Chains to a bookings application. In geo-distributed systems, it is difficult to achieve serializability while still having low latency. Transaction Chains solves this issue through a mechanism of splitting transactions into hops leading to more serializable transactions. This is particularly useful in a bookings application because low latency is essential to the user’s experience of the platform. We will also describe an implementation of transaction chains for this application as well as a solution to serializing dynamic transactions.",
        pdfUrl: TransactionChains,
        previewImage: TransactionChainsImage,
    },
    {
        title: "Solutions to the Traveling Salesman Problem",
        abstract: "The Traveling Salesman Problem (TSP) is a famous Computer Science problem that has been researched for decades. This problem is particularly difficult to solve in polynomial time and belongs to the set NP-Hard (That is, a reduction exists from the TSP to a problem in NP Hard). No complete and optimal solution that executes in polynomial time has ever been discovered. The problem goes as follows: Given a set of cities, where there is a path between every city, and the distances between every pair of cities, find the shortest path that visits every city once and returns to the origin city. In this paper, we will discuss two different solutions to the Traveling Salesman problem. One solution is complete and optimal and uses a branch and bound method with a distance based heuristic. The other solution is not complete/optimal but runs much quicker than the latter. The second solution computes a path that is close to the optimal shortest path.",
        pdfUrl: TSP,
        previewImage: TSPImage,
    },
    {
        title: "Emotion Detection with CNN / ViT: What Model Presents Better Efficiency for Classification",
        abstract: "This report presents the application of Convolutional Neural Networks (CNNs) and Vision Transformer (ViT) models to the emotion detection task. The CNN model was implemented using the TensorFlow library with Keras, while the ViT models, including DeiT variants, were trained using PyTorch. The dataset was preprocessed to align with the input requirements of both architectures, with images resized to appropriate dimensions for each model. The results suggest that CNN significantly outperforms ViT for this task, achieving an accuracy of 98%, compared to the maximum accuracy of 53.97% attained by the ViT models. This performance gap highlights the reliability of CNNs for traditional image classification tasks like emotion detection. However, the study also reveals limitations in ViT’s ability to generalize on smaller datasets and suggests potential overfitting issues. Future work will focus on optimizing ViT models, exploring domain-specific pretraining, and leveraging multi-modal approaches to improve their applicability in emotion detection tasks.",
        pdfUrl: EmotionDetection,
        previewImage: EmotionDetectionImage,
    },
    {
        title: "Distributed Machine Learning Inference",
        abstract: "In this paper, we present a distributed architecture for machine learning inference that leverages multiple servers to handle client requests at scale. Our system introduces a load balancer capable of utilizing different scheduling algorithms to reroute incoming requests to master nodes, which coordinate distributed inference using worker nodes. We evaluate two load balancing approaches—Round Robin and Least Load First—and analyze their trade-offs in terms of overhead and performance under varying workloads. Using a YOLOv9 object detection model and Apache Spark for distributed processing, we compare the efficiency of our architecture against a single-node baseline across multiple scenarios, including single and concurrent requests as well as varied request sizes. Our results show that while distributed inference introduces messaging overhead in small-scale settings, it significantly improves performance under heavy load and large-scale requests, demonstrating the scalability and adaptability of the proposed system.",
        pdfUrl: DistributedML,
        previewImage: DistributedMLImage,
    },
    {
        title: "An Implementation of Spin, MCS, and CLH Locks",
        abstract: "Race conditions have been a significant problem in Computing resulting in decades of research and multiple solutions. The problem revolves around ensuring a method’s critical section is atomic. That is, it runs entirely or not at all. C++ supports atomic operations. However, this does not entirely solve the problem when multiple threads can access the same memory. In this scenario, a method that only allows one thread to execute important instructions (critical section) is needed. This problem has led to the creation of Locks which allow threads to acquire an exclusive resource that is required to execute their critical section. In particular, this paper will focus on the implementation of three popular locking mechanisms: Test and Test and Set (TTAS) Spin Locks, MCS Locks, and CLH Locks. This implementation is written in C++ using the atomic standard library",
        pdfUrl: Locks,
        previewImage: LocksImage,
    }
]

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
            <div className="EducationDetails">
                <div className="CourseworkSection">
                    <h4 className="DetailsTitle">Relevant Coursework</h4>
                    <p className="CourseworkList">
                        Deep Generative Models, Advanced Algorithms, Advanced Data Structures, Principles of Scientific Computing, 
                        Machine Learning, Artificial Intelligence, Transaction Processing & Distributed Data Management, 
                        Distributed Systems, Computer Networks, Parallel Computing
                    </p>
                </div>

                <div className="PapersSection">
                    <h4 className="DetailsTitle">Papers</h4>
                    <div className="pdfs-container">
                        {papers.map(({ title, abstract, pdfUrl, previewImage }) => (
                            <PdfContainer
                                key={title}
                                title={title}
                                abstract={abstract}
                                pdfUrl={pdfUrl}
                                previewImage={previewImage}
                            />
                        ))}
                    </div>
                </div>
            </div>
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