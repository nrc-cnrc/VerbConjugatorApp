export const environment = {
  production: true,
  ttsConfig: {
    apiUrl: "https://unbq-sgile-text-to-speech.hf.space/gradio_api/queue/", // 👈 your TTS backend endpoint
    enableTTS: true, // 👈 set this to false if you want to disable your TTS in certain deployment environments. Note, if this is disabled, your EveryVoice components will not render and TTS will not be accessible from your application.
    developmentBearerToken: "", // 👈 OPTIONAL authentication token if required by your API. It will be treated as an Authorization Bearer token
    speakerID: "tina", // 👈 OPTIONAL speaker id.
    requiresAuth: false,
    diffusionSteps: 3, // 👈  OPTIONAL: number of diffusion steps
  },
};
