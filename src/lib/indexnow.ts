/**
 * IndexNow — instant URL notification for Bing, Yandex, Seznam, Naver.
 * Key file must stay at: https://privateturkeytour.com/{key}.txt
 */
export const indexNowConfig = {
  key: "0b6acc093d60bbd0651c7784e6c6b240",
  host: "privateturkeytour.com",
  get keyLocation() {
    return `https://${this.host}/${this.key}.txt`;
  },
  endpoints: [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
  ],
} as const;
