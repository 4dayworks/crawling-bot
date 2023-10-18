import { getRandomString } from "./getRandomString";

export const getHeaders = () => {
  return {
    Accept: "*/*",
    "Accept-Encoding": "deflate, br",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
    Cookie: getRandomString(64),
    //  "Postman-Token": "2360597e-8d8b-45a2-aa5a-c76ea406ef7d",
    Host: "www.coupang.com",
    Connection: "keep-alive",
  };
};
