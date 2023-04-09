export {};
declare global {
  interface Window {
    application: {
      screens: {
        [key: string]: () => void;
      };
      renderScreen: (screenName: string) => void;
      levels: String | [];
      timers: NodeJS.Timer[];
      stopInterval: () => void;
      time: string;
    };
  }
}
