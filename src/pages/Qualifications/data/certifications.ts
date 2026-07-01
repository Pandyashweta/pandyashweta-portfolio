import certCcnaNetworking from "../../../assets/images/cert_ccna_networking.webp";
import certCProgramming from "../../../assets/images/cert_c_programming.webp";
import certAwsCloud from "../../../assets/images/cert_aws_cloud.webp";
import certCyberSecurity from "../../../assets/images/cert_cyber_security.webp";
import certGenerativeAi from "../../../assets/images/cert_generative_ai.webp";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  issueNumber?: string;
  link?: string;
  image: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    id: "ccna-networking",
    title: "CCNA Networking Essentials: A Comprehensive Cisco Course",
    issuer: "Udemy",
    year: "Nov 2024",
    link: "https://www.udemy.com/",
    image: certCcnaNetworking,
    description: "Completed a comprehensive course covering networking fundamentals, including network protocols, IP addressing, routing, switching, and network security concepts."
  },
  {
    id: "c-programming",
    title: "C Programming Certification",
    issuer: "All India Institute of Computer Education (AIICE)",
    year: "Sep 2024",
    issueNumber: "Grade A+",
    link: "http://www.aiice.org/",
    image: certCProgramming,
    description: "Successfully completed a certified C Programming course with an A+ grade, building a strong foundation in programming concepts, data types, control structures, and problem-solving."
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Computing Workshop",
    issuer: "Indian Institute of Technology Bombay",
    year: "Dec 2024",
    link: "https://www.iitb.ac.in/",
    image: certAwsCloud,
    description: "Completed the CloudVerse 2.0 Cloud Computing Workshop at IIT Bombay, gaining foundational knowledge of cloud technologies, infrastructure, and real-world cloud computing applications."
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    issuer: "NASSCOM",
    year: "Dec 2024",
    link: "https://nasscom.in/",
    image: certCyberSecurity,
    description: "Participated in a certified Cyber Security course recognized by NASSCOM, developing foundational knowledge of cybersecurity principles, digital safety, and information security practices."
  },
  {
    id: "generative-ai",
    title: "Unlocking Generative AI",
    issuer: "The Maharaja Sayajirao University of Baroda",
    year: "Mar 2025",
    link: "https://www.msubaroda.ac.in/",
    image: certGenerativeAi,
    description: "Participated in a workshop on Generative AI organized by the Department of Computer Applications, exploring emerging AI technologies, applications, and industry trends."
  }
];
