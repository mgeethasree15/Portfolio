export const profile = {
  name: 'Geethasree Manikonda',
  roleHeadlines: {
  data: 'Data Analyst',
  business: 'Business Analyst',
  analytics: 'Analytics Engineer',
  developer: 'BI Developer',
  admin: 'Power BI Admin',
},
  location: 'USA',
  summary:
    "Results-driven Data Analyst with 4+ years of experience in financial services, technology, and manufacturing — building scalable data pipelines, delivering actionable insights, and turning complex data into decisions that move the business forward.",
  photo: import.meta.env.BASE_URL + 'IMG_6245.JPG',
  funLine: "If life gives you lemons, what are you gonna do with it?",
}

export const skills = [
  { label: 'SQL', icon: '🗄️' },
  { label: 'Python', icon: '🐍' },
  { label: 'Tableau', icon: '📊' },
  { label: 'Power BI', icon: '📈' },
  { label: 'Databricks', icon: '⚡' },
  { label: 'Snowflake', icon: '❄️' },
  { label: 'Azure', icon: '☁️' },
  { label: 'dbt', icon: '⚙️' },
  { label: 'Pandas', icon: '🐼' },
  { label: 'Scikit-learn', icon: '🤖' },
  { label: 'BigQuery', icon: '🔍' },
  { label: 'Spark', icon: '🔥' },
]

export const skillCategories = [
  {
    id: 'cat-1',
    category: 'Programming & Analytics',
    items: [
      { label: 'Python', icon: '🐍' },
      { label: 'SQL', icon: '🗄️' },
      { label: 'R', icon: '📐' },
      { label: 'Pandas', icon: '🐼' },
      { label: 'NumPy', icon: '🔢' },
      { label: 'Scikit-learn', icon: '🤖' },
    ],
  },
  {
    id: 'cat-2',
    category: 'Data Engineering & Pipelines',
    items: [
      { label: 'Databricks', icon: '⚡' },
      { label: 'Azure Data Factory', icon: '🏭' },
      { label: 'dbt', icon: '⚙️' },
      { label: 'Apache Spark', icon: '🔥' },
      { label: 'ETL Pipelines', icon: '🔄' },
      { label: 'Delta Lake', icon: '🏞️' },
    ],
  },
  {
    id: 'cat-3',
    category: 'Cloud & Warehouses',
    items: [
      { label: 'Snowflake', icon: '❄️' },
      { label: 'Microsoft Azure', icon: '☁️' },
      { label: 'BigQuery', icon: '🔍' },
      { label: 'AWS', icon: '🪣' },
      { label: 'PostgreSQL', icon: '🐘' },
      { label: 'Oracle', icon: '🔶' },
    ],
  },
  {
    id: 'cat-4',
    category: 'Visualisation & BI',
    items: [
      { label: 'Power BI', icon: '📈' },
      { label: 'Tableau', icon: '📊' },
      { label: 'Looker', icon: '👁️' },
      { label: 'Streamlit', icon: '🎈' },
      { label: 'Excel', icon: '📋' },
      { label: 'QuickSight', icon: '🎯' },
    ],
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const roleFilters = [
  { id: 'data', label: 'Data' },
  { id: 'business', label: 'Business' },
  { id: 'analytics', label: 'Analytics Engineer' },
  { id: 'developer', label: 'BI Developer' },
  { id: 'admin', label: 'Power BI Admin' },
]

export const education = [
  {
    id: 'edu-1',
    school: 'University of Alabama at Birmingham',
    credential: 'M.S. in Computer Science',
    period: 'Aug 2023 — May 2025',
    detail: 'Focused on data engineering, machine learning, and scalable data systems.',
  },
  {
    id: 'edu-2',
    school: 'Aditya University',
    credential: 'B.Tech. in Electronics & Communication Engineering',
    period: 'Jun 2018 — Jun 2022',
    detail: 'Foundation in engineering principles, signal processing, and computational systems.',
  },
]

export const certifications = [
  { id: 'cert-1', name: 'HackerRank SQL Gold Badge', year: '2026' },
  { id: 'cert-2', name: 'Microsoft Power BI Data Analyst PL-300', year: '2026' },
  { id: 'cert-3', name: 'Google Data Analytics', year: '2026' },
  { id: 'cert-4', name: 'Microsoft Azure Fundamentals AZ-900', year: '2026' },
  { id: 'cert-5', name: 'Python with Data Science — IBM', year: '2025' },
]

export const experience = [
  {
    id: 'exp-1',
    status: 'current',
    role: 'Data Analyst',
    org: 'Honeywell',
    period: 'Jun 2025 — Present',
    bullets: [
      'Designed cloud-native analytics models using Azure Synapse Analytics for supply chain disruption forecasting across 10+ global manufacturing plants.',
      'Built and maintained ETL pipelines and Databricks workflows ingesting data from IoT telemetry, SAP batch feeds, and MES — reducing data processing time by 30%.',
      'Reduced reporting latency by 45% by optimizing data refresh cycles across high-volume manufacturing datasets exceeding 1M+ records.',
      'Built 5+ dynamic Power BI dashboards visualizing plant efficiency, inventory turnover, and KPIs for 200+ operations and executive stakeholders.',
      'Managed code deployment via Git and monitored production pipeline health across dev, QA, and production environments.',
    ],
  },
  {
    id: 'exp-2',
    status: 'past',
    role: 'Data Analyst Intern',
    org: 'JPMorgan Chase & Co.',
    period: 'Nov 2024 — Apr 2025',
    bullets: [
      'Automated regulatory report production using SQL and Snowflake, improving pipeline efficiency by 40% and ensuring audit readiness.',
      'Designed Tableau dashboards for Risk-Weighted Assets (RWA), enabling compliance officers to visualize capital requirements by asset class and region.',
      'Reduced manual reporting effort by 40% by migrating legacy Excel processes to scalable SQL queries and dynamic visualizations.',
      'Defined and implemented data quality validation rules for critical compliance datasets across 5+ business units.',
      'Applied R for regression-based backtesting of forecasted capital ratios for the model risk validation team.',
    ],
  },
  {
    id: 'exp-3',
    status: 'past',
    role: 'Data Analyst',
    org: 'Dell Technologies',
    period: 'jan 2021 — Jul 2023',
    bullets: [
      'Redesigned global Power BI dashboards integrating KPIs across 5 business regions — revenue gap, customer churn, and quota attainment.',
      'Optimized complex SQL queries on Oracle and MySQL, reducing report refresh time by 60%; built Python predictive models improving sales planning accuracy by 22%.',
      'Conducted EDA on 3+ years of historical sales data to identify underperforming geographies, informing a company-wide strategy realignment.',
      'Delivered insights during quarterly business reviews contributing to a 15% increase in targeted upsell campaigns; trained 30+ regional sales managers on dashboard usage.',
    ],
  },
]

const gh = 'https://raw.githubusercontent.com/mgeethasree15'

export const projects = [
  {
    id: 'proj-1',
    title: 'Sales Dashboard Project',
    tags: ['Python', 'Power BI', 'SQL', 'Data Visualization'],
    githubUrl: 'https://github.com/mgeethasree15/Sales_Dashboard_Project',
    summary: 'End-to-end sales analytics dashboard revealing revenue trends, regional performance, and top sales reps across 6 key metrics.',
    problem: 'The sales team had no unified view of performance across regions and channels — reporting was fragmented across spreadsheets with no real-time visibility.',
    approach: 'Generated and cleaned synthetic sales data using Python, then designed a multi-chart dashboard covering revenue trends, profit by category, quarterly targets, and channel breakdown.',
    solution: 'Built 6 interactive visualizations: monthly revenue trend, revenue by region, profit by category, quarterly vs target, top sales reps, and revenue by channel.',
    result: 'Delivered a complete sales intelligence dashboard enabling leadership to identify top-performing regions, channels, and reps at a glance.',
    resultImage: `${gh}/Sales_Dashboard_Project/main/06_revenue_by_channel.png`,
    images: [
      `${gh}/Sales_Dashboard_Project/main/01_monthly_revenue_trend.png`,
      `${gh}/Sales_Dashboard_Project/main/02_revenue_by_region.png`,
      `${gh}/Sales_Dashboard_Project/main/03_revenue_profit_by_category.png`,
      `${gh}/Sales_Dashboard_Project/main/04_quarterly_revenue_vs_target.png`,
      `${gh}/Sales_Dashboard_Project/main/05_top_sales_reps.png`,
    ],
  },
  {
    id: 'proj-2',
    title: 'EDA — E-Commerce Customer Analysis',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/mgeethasree15/EDA-Commerence-Analysis-Project',
    linkedinUrl: 'https://www.linkedin.com/in/geethamanikonda',
    summary: 'EDA on 500 e-commerce customers uncovering spending patterns by age, income, and gender.',
    problem: 'The e-commerce team lacked visibility into which customer segments were driving spend.',
    approach: 'Cleaned 500-row customer dataset, handled missing values, then performed univariate, bivariate, and correlation analysis with segmentation by age group and income quartile.',
    solution: 'Produced 6 chart exports covering distribution, gender analysis, bivariate scatter, correlation heatmap, age group spending, and income quartile spending.',
    result: 'Found that young customers (18-25) spend the most despite lower incomes, directly informing targeting strategy.',
    resultImage: `${gh}/EDA-Commerence-Analysis-Project/main/06_income_quartile_spending.png`,
    images: [
      `${gh}/EDA-Commerence-Analysis-Project/main/01_univariate_distribution.png`,
      `${gh}/EDA-Commerence-Analysis-Project/main/02_gender_analysis.png`,
      `${gh}/EDA-Commerence-Analysis-Project/main/03_bivariate_analysis.png`,
      `${gh}/EDA-Commerence-Analysis-Project/main/04_correlation_heatmap.png`,
      `${gh}/EDA-Commerence-Analysis-Project/main/05_age_group_spending.png`,
    ],
  },
  {
    id: 'proj-3',
    title: 'Credit Risk Scorecard',
    tags: ['Python', 'Logistic Regression', 'SMOTE', 'Power BI'],
    githubUrl: 'https://github.com/mgeethasree15/Credit_Risk_ScoreCard',
    linkedinUrl: 'https://www.linkedin.com/in/geethamanikonda',
    summary: 'ML-based credit scoring model predicting default probability with ROC-AUC of 0.84.',
    problem: 'Manual credit assessment was slow, inconsistent, and unable to scale.',
    approach: 'Preprocessed loan data with feature engineering, applied SMOTE for class imbalance, then built a logistic regression pipeline.',
    solution: 'Converted model coefficients to an interpretable credit scorecard segmenting applicants into 5 risk grades (A-E).',
    result: 'Achieved ROC-AUC of 0.84, Precision of 0.72, and Recall of 0.76 on default class.',
    resultImage: `${gh}/Credit_Risk_ScoreCard/main/credit_risk_results.png`,
    images: [],
  },
  {
    id: 'proj-4',
    title: 'Retail Demand Forecasting',
    tags: ['R', 'ARIMA', 'Facebook Prophet', 'ggplot2'],
    githubUrl: 'https://github.com/mgeethasree15/Retail_Demand_Forecasting',
    linkedinUrl: 'https://www.linkedin.com/in/geethamanikonda',
    summary: 'ARIMA vs Prophet forecasting models for weekly retail demand across 4 categories.',
    problem: 'Retail buyers had no reliable demand signal, leading to stockouts and over-ordering.',
    approach: 'Developed and compared ARIMA and Facebook Prophet models in R with 12-week walk-forward cross-validation.',
    solution: 'Built ggplot2 visualizations for forecast accuracy and seasonal decomposition.',
    result: 'Prophet outperformed ARIMA across all categories, producing robust production-ready forecasts.',
    resultImage: null,
    images: [],
  },
  {
    id: 'proj-5',
    title: 'SQL Data Warehouse',
    tags: ['SQL', 'PostgreSQL', 'ETL', 'Star Schema'],
    githubUrl: 'https://github.com/mgeethasree15/sql_datawarehouse',
    linkedinUrl: 'https://www.linkedin.com/in/geethamanikonda',
    summary: 'End-to-end data warehouse using Bronze to Silver to Gold Medallion Architecture.',
    problem: 'Raw data from CRM, ERP, and HR systems lived in silos causing inconsistent metrics.',
    approach: 'Architected Medallion Architecture with modular ETL stored procedures across all 3 layers.',
    solution: 'Designed a star schema with 5 dimension tables and 5 analytics views.',
    result: 'Delivered unified metrics across all teams, ready for Power BI or Tableau.',
    resultImage: null,
    images: [],
  },
  {
    id: 'proj-6',
    title: 'Customer Churn Prediction',
    tags: ['Python', 'XGBoost', 'Scikit-learn', 'Streamlit'],
    githubUrl: 'https://github.com/mgeethasree15/customer-churn-prediction',
    linkedinUrl: 'https://www.linkedin.com/in/geethamanikonda',
    summary: 'XGBoost churn prediction model deployed as an interactive Streamlit dashboard.',
    problem: 'The retention team had no way to prioritize outreach by actual churn risk.',
    approach: 'Engineered behavioral and transactional features, evaluated XGBoost vs logistic regression.',
    solution: 'Deployed interactive Streamlit dashboard showing real-time churn probability by segment.',
    result: 'Model surfaces high-risk segments with strong AUC performance for weekly retention planning.',
    resultImage: null,
    images: [],
  },
]

export const contact = {
  github: 'https://github.com/mgeethasree15',
  linkedin: 'https://www.linkedin.com/in/geethamanikonda',
  email: 'Mgeethasree0815@gmail.com',
  phone: '+1 (802) 352-0517',
}