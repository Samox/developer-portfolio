import ayla from "@assets/image/ayla.jpg";
import crefin from "@assets/image/crefin.jpg";
import realEstate from "@assets/image/real-estate.jpg";
import travel from "@assets/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Open Webhook",
    description:
      "Developer tool for receiving webhooks from third-party services, without ngrok or a domain. Use any url *.webhook.store to receive and debug webhooks. Domains are public like yopmail. For logged in github users, private subdomain are available.",
    tools: [
      "NestJs",
      "Heroku",
      "Postgres",
      "Cloudflare",
      "npx",
      "React",
      "Github Pages",
    ],
    role: "Creator",
    code: "https://github.com/OpenWebhook/webhook-store",
    demo: "https://www.openwebhook.io/",
    image: crefin,
  },
  {
    id: 2,
    name: "DataDrift",
    description:
      "Add testing to detect historical data movement in your warehouse. Instantly find root cause of data drifts. Explore and compare your data between 2 dates. Get charts and metrics in Notion to understand your data quality.",
    tools: ["Python", "BigQuery", "dbt", "Mypy", "Golang", "Git", "Heroku"],
    role: "Creator",
    code: "https://github.com/data-drift/data-drift",
    demo: "www.data-drift.io/",
    image: realEstate,
  },
  {
    id: 3,
    name: "Kolet",
    description:
      "Telecom services specialised in travel and tourism. Kolet is an app that allows users to buy data and consume them seemlessly, through a unique esim.",
    tools: [
      "React",
      "NestJs",
      "React Native",
      "Motor Admin",
      "Postgresql",
      "GCP",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: travel,
  },
  {
    id: 4,
    name: "Libeo",
    description:
      "Handling millions of € transactions per day. Managing 40+ developers.",
    tools: [
      "Micro Services",
      "NestJs",
      "Kubernetes",
      "GCP",
      "React",
      "PostgreSQL",
    ],
    code: "",
    demo: "",
    image: ayla,
    role: "Head of Engineering",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
