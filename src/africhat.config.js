
 

export const afriChatConfig = {
  version: 1,
  site: {
    name: "Synnova",
    defaultLanguage: "fr",
    supportedLanguages: ["fr", "en"],
  },
  branding: {
    name: "Assistant Synnova",
    welcomeMessage: "Bonjour ! Comment puis-je vous aider ?",
    accentColor: "#5B4BFF",
    launcherLabel: "Discuter",
    iconPreset: "afri-classic",
    iconSize: "medium",
  },
  assistant: {
    voice: "alloy",
    audioEnabled: true,
  },
  integration: {
    mode: "fullscreen",
    position: "bottom-right",
    zIndex: 999999,
  },
  api: {
    chatEndpoint: "https://ptvvdtwdxophgwrascpf.supabase.co/functions/v1/widget-chat",
    ttsEndpoint: "https://ptvvdtwdxophgwrascpf.supabase.co/functions/v1/widget-tts",
    realtimeTokenEndpoint: "https://ptvvdtwdxophgwrascpf.supabase.co/functions/v1/widget-realtime-token",
    siteKey: import.meta.env.VITE_AFRICHAT_SITE_KEY,
  },
};