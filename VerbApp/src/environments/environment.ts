// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ttsConfig: {
    apiUrl: "https://unbq-sgile-text-to-speech.hf.space/gradio_api/queue/", // 👈 your TTS backend endpoint
    enableTTS: true, // 👈 set this to false if you want to disable your TTS in certain deployment environments. Note, if this is disabled, your EveryVoice components will not render and TTS will not be accessible from your application.
    developmentBearerToken: "", // 👈 OPTIONAL authentication token if required by your API. It will be treated as an Authorization Bearer token
    speakerID: "tina", // 👈 OPTIONAL speaker id.
    requiresAuth: false,
    diffusionSteps: 3, // 👈  OPTIONAL: number of diffusion steps
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
