import {
  RiGithubFill,
  RiIdCardFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";

export const footerList = [
  {
    id: 1,
    title: "Quick Links",
    links: ["Home", "About Us", "Contact Me"],
  },
  {
    id: 2,
    title: "Customer Care",
    links: ["FAQs", "Privacy Policy", "Terms & Conditions"],
  },
];

export const socialIcons = [
  {
    icon: RiLinkedinBoxFill,
    navigationlink:
      "https://www.linkedin.com/in/abhishek-yadav-888648329/",
  },
  {
    icon: RiGithubFill,
    navigationlink: "https://github.com/thex1abhi",
  },
  {
    icon: RiIdCardFill,
    navigationlink: "https://portfolio-blue-three-70.vercel.app/",
  },
]; 

 export  const features = [
    {
      title: "24/7 Customer Support",
      description:
        "Provide instant responses to customer queries anytime without human intervention."
    },
    {
      title: "Customizable Responses",
      description:
        "Train and customize the chatbot to match your brand voice and business needs."
    },
    {
      title: "Secure & Private",
      description:
        "Ensures data protection with secure conversations and privacy compliance."
    }
  ]