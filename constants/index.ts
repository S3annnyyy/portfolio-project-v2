import { faLinkedin, faGithub, faMedium, faTiktok } from '@fortawesome/free-brands-svg-icons' 
import Foodpanda from '@/public/foodpanda.svg'

export const Socials = [
    {
        name: "Linkedin",
        icon: faLinkedin
    },
    {
        name: "Github",
        icon: faGithub
    },
    {
        name: "Medium",
        icon: faMedium
    },
];

export const workExperience = [
    {
        id: 1,
        title: 'Risk Insights Analyst Intern',
        company: "Tiktok, ByteDance",
        points: [
            "Led weekly risk assessments and performed in-depth analysis on auction ads across global markets, successfully identifying and addressing risk violations and emerging trends",
            "Kickstarted the launch of the SEA Accelerator Program, empowering agencies to effectively manage bad actors through the implementation of blocklisting and suspension mechanisms utilizing cutting-edge technologies like JEDI (GNNs) and Shark (RegEx)",
            "Spearheaded the development of visualization dashboards to enhance reporting efficiency, support cross-functional teams, and enable real-time monitoring of key risk metrics",
            "Conducted post-opening of Forex market assessment, combining a risk assessment matrix and detailed case deep-dives, to thoroughly evaluate the impact of the Forex market on SEA markets. Delivered valuable insights and recommendations regarding the safety and viability of Forex within these markets",
            "Created audio to text translator using OpenAI speech recognition model"
        ],
        contentStyle: { background: '#1d1836', color: '#fff' },
        contentArrowStyle: { borderRight: '7px solid  #232631' },
        date: "May 2023 - present",
        iconStyle: { background: '#1d1836', color: '#fff' },
        icon: faTiktok
    }, 
    {
        id: 2,
        title: 'Commercial Analyst Intern',
        company: "Foodpanda, DeliveryHero",
        points: [
            "Adviced the commercial team in category trends and distribution gaps; drove the creation of an interactive dashboard to help with insights and analysis for category market share, basket penetration, customer penetration and product distribution dashboard(ND, PCV, ACV, SPPD)",
            "Adviced the commercial team and pandamart suppliers in optimizing promotions via a Market Basket Analysis using Pyspark framework (FP-growth algorithm) to identify and provide key insights to customer buying patterns across all categories",
            "Analyzed monthly promotions and designed a forecasting framework to help the commercial team optimize promotion strategy and supplier funding",
            "Team leader for Foodpanda's hackathon challenge (Overall champion). Proposed algorithm that segments sales of goods into selling velocity to then be further segregated to maximise picker and prep time efficiency",
            "Led recurring consultative sessions to help address business issues via dashboards using Google Datastudio & BigQuery",
            "Performed analysis for campaigns/promotions/experiments to understand better on promotion mechanics and sales performance"
        ],
        contentStyle: { background: '#1d1836', color: '#fff' },
        contentArrowStyle: { borderRight: '7px solid  #232631' },
        date: "Jan 2022 - July 2022",
        iconStyle: { background: '#fff', color: '#D70F64' },
        icon: Foodpanda
    }
];

export const projectData = [
    {
        id: 1,
        title: '"ACT" Mobile Application',
        description:  'A productivity mobile app developed during Google Ignite Hackathon to solve UN Sustainable development Goal #12: Responsible Consumption. [2nd place]',        
        urlLink: "https://github.com/jeremychow99/google-ignite-project"
    }, 
    {
        id: 2,
        title: 'Mask Detection model',
        description:  'Computer Vision model that detects people wearing/not wearing masks. Trained with 853 images using YOLOv5',       
        urlLink: "https://towardsdatascience.com/mask-detection-using-yolov5-ae40979227a6"
    },
    {
        id: 3,
        title: 'Correlations between Reddit and Stocks',
        description:  'Finding correlations between Reddit posts on r/wallstreetbets with company share price',       
        urlLink: "https://medium.com/analytics-vidhya/finding-correlations-between-reddit-and-the-stock-market-using-statistics-4926a25a386e"
    },
    {
        id: 4,
        title: 'Text Classification & Sentiment Analysis on r/SGExams',
        description:  'Unearthing Singaporean students sentiments by education level, using SVM, VADER Lexicons and PushShift API.',        
        urlLink: "https://towardsdatascience.com/text-classification-sentiment-analysis-on-r-sgexams-4ea341134fba"
    }
]