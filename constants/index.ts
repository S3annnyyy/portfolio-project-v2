import { faLinkedin, faGithub, faMedium, faTiktok, faMeta } from '@fortawesome/free-brands-svg-icons' 
import ACTProject from '@/public/assets/actProject.png'
import SAProject from '@/public/assets/SentimentAnalysis.png'
import StockProject from '@/public/assets/StockProject.png'
import MaskProject from '@/public/assets/mask.gif'
import RecipeDaddy from '@/public/assets/recipedaddy2.png'

export const Socials = [
    {
        name: "Linkedin",
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/seanyckang/"
    },
    {
        name: "Github",
        icon: faGithub,
        link: "https://github.com/S3annnyyy"
    },
    {
        name: "Medium",
        icon: faMedium,
        link: "https://seanyckang.medium.com/"
    },
];

export const workExperience = [
    {
        id: 1,
        title: 'Risk Analyst Intern',
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
        title: 'Data Analyst Intern',
        company: "Foodpanda, DeliveryHero",
        points: [
            "Adviced the commercial team in category trends and distribution gaps; drove the creation of an interactive dashboard to help with insights and analysis for category market share, basket penetration, customer penetration and product distribution dashboard(ND, PCV, ACV, SPPD)",
            "Adviced the commercial team and pandamart suppliers in optimizing promotions via a Market Basket Analysis using Pyspark framework (FP-growth algorithm) to identify and provide key insights to customer buying patterns across all categories",
            "Analyzed monthly promotions and designed a forecasting framework to help the commercial team optimize promotion strategy and supplier funding",
            "Team leader for Foodpanda's hackathon challenge (Overall champion). Proposed algorithm that segments sales of goods into selling velocity to then be further segregated to maximise picker and prep time efficiency",
            "Led recurring consultative sessions to help address business issues via dashboards using Google Datastudio & BigQuery",
            "Performed in-depth quantitative analysis for campaigns/promotions/experiments to understand better on promotion mechanics and sales performance"
        ],
        contentStyle: { background: '#1d1836', color: '#fff' },
        contentArrowStyle: { borderRight: '7px solid  #232631' },
        date: "Jan 2022 - July 2022",
        iconStyle: { background: '#fff', color: '#0668E1'},
        icon: faMeta
    }
];

export const projectData = [
    {
        id: 1,
        title: 'RecipeDaddy Full stack VueJs Web Application',
        description:  'A website that uses OpenAI GPT-4 model to generate recipes & help Singaporeans meal prep as part of UN Sustainable development Goal #12: Responsible Consumption',        
        urlLink: "https://github.com/S3annnyyy/IS216-RecipeDaddy",
        image: RecipeDaddy,
        platform: "web"
    }, 
    {
        id: 2,
        title: '"ACT" Flutter Mobile Application',
        description:  'A productivity mobile app developed during Google Ignite Hackathon to solve UN Sustainable development Goal #12: Responsible Consumption. [2nd place]',        
        urlLink: "https://github.com/jeremychow99/google-ignite-project",
        image: ACTProject,
        platform: "mobile"
    }, 
    {
        id: 3,
        title: 'Mask Detection model',
        description:  'Computer Vision model that detects people wearing/not wearing masks. Trained with 853 images using YOLOv5',       
        urlLink: "https://towardsdatascience.com/mask-detection-using-yolov5-ae40979227a6",
        image: MaskProject,
        platform: "web"
    },
    {
        id: 4,
        title: 'Correlations between Reddit and Stocks',
        description:  'Finding correlations between Reddit posts on r/wallstreetbets with company share price',       
        urlLink: "https://medium.com/analytics-vidhya/finding-correlations-between-reddit-and-the-stock-market-using-statistics-4926a25a386e",
        image: StockProject,
        platform: "web"
    },
    {
        id: 5,
        title: 'Text Classification & Sentiment Analysis on r/SGExams',
        description:  'Unearthing Singaporean students sentiments by education level, using SVM, VADER Lexicons and PushShift API.',        
        urlLink: "https://towardsdatascience.com/text-classification-sentiment-analysis-on-r-sgexams-4ea341134fba",
        image: SAProject,
        platform: "web"
    }
]