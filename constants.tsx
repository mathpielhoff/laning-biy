
import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Users, 
  Settings2, 
  Eye, 
  Globe, 
  Shield,
  Zap,
  Layers
} from 'lucide-react';

export const CONNECTOR_DETAILS = [
  {
    name: "Google Drive",
    category: "Stockage",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
    tools: [
      { id: "drive_files_list", label: "Lister fichiers", desc: "Recherche et inventaire" },
      { id: "drive_permissions_list", label: "Gérer permissions", desc: "Audit de partage" },
      { id: "drive_files_upload", label: "Upload auto", desc: "Envoi de documents" }
    ],
    color: "bg-blue-500"
  },
  {
    name: "Stripe",
    category: "Finance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    tools: [
      { id: "stripe_charges_list", label: "Historique paiements", desc: "Suivi flux financier" },
      { id: "stripe_refunds_create", label: "Créer remboursement", desc: "Action sensible" },
      { id: "stripe_customers_list", label: "Analyse clients", desc: "CRM financier" }
    ],
    color: "bg-indigo-600"
  },
  {
    name: "Airtable",
    category: "Base de données",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg",
    tools: [
      { id: "airtable_records_list", label: "Lecture records", desc: "Extraction data" },
      { id: "airtable_record_create", label: "Créer record", desc: "Mise à jour base" },
      { id: "airtable_bases_list", label: "Inventaire bases", desc: "Gouvernance" }
    ],
    color: "bg-old-rose"
  },
  {
    name: "Slack",
    category: "Communication",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    tools: [
      { id: "slack_messages_send", label: "Envoyer message", desc: "Notifications équipe" },
      { id: "slack_channels_list", label: "Lister canaux", desc: "Exploration workspace" },
      { id: "slack_users_info", label: "Profils membres", desc: "Contextualisation" }
    ],
    color: "bg-muted-teal"
  },
  {
    name: "GitHub",
    category: "Développement",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    tools: [
      { id: "github_issues_list", label: "Suivi d'issues", desc: "Lecture backlog" },
      { id: "github_pulls_list", label: "Review de PR", desc: "Analyse de code" },
      { id: "github_repos_list", label: "Exploration dépôts", desc: "Cartographie" }
    ],
    color: "bg-gray-800"
  },
  {
    name: "Notion",
    category: "Knowledge",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    tools: [
      { id: "notion_pages_search", label: "Recherche pages", desc: "Accès base de savoir" },
      { id: "notion_database_query", label: "Requête DB", desc: "Extraction structurée" },
      { id: "notion_blocks_append", label: "Ajout contenu", desc: "Prise de notes auto" }
    ],
    color: "bg-black"
  }
];

export const CONNECTORS = [
  "Microsoft Outlook", "Stripe", "OpenAI", "Airtable", "Jira & Confluence",
  "Figma", "Trello", "Anthropic", "GitHub", "Google Calendar",
  "Zapier", "Box", "HubSpot", "Discord", "Google Docs",
  "Notion", "Google Drive", "Microsoft Teams", "Gmail", "Webflow",
  "Slack", "Google Sheets", "Zoom", "Asana", "Monday.com",
  "SendGrid", "ClickUp", "Linear", "Calendly", "Twilio"
];

export const PROVIDERS = [
  { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Claude", logo: "https://cdn.worldvectorlogo.com/logos/claude-ai-1.svg" },
  { name: "Mistral", logo: "https://mistral.ai/images/logo.svg" },
  { name: "Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/2560px-Google_Gemini_logo.svg.png" }
];

export const MAIN_FEATURES = [
  {
    title: "Connecteurs Granulaires",
    description: "Vos agents accèdent précisément aux outils dont ils ont besoin : lecture seule sur Drive, mais écriture sur Slack.",
    icon: <Layers className="w-8 h-8" />,
    color: "bg-muted-teal"
  },
  {
    title: "Intelligence Multi-Modèle",
    description: "Basculez entre GPT-4o, Claude 3.5 ou Gemini selon la complexité et le coût de la tâche.",
    icon: <Cpu className="w-8 h-8" />,
    color: "bg-old-rose"
  },
  {
    title: "Isolation Entreprise",
    description: "Chaque département (Sales, RH, IT) dispose de ses propres agents et de ses secrets chiffrés.",
    icon: <Shield className="w-8 h-8" />,
    color: "bg-soft-periwinkle"
  }
];
