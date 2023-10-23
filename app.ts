import axios from "axios";
import express, { Request, Response } from "express";
import https from "https";
import { l } from "./console";
import { getHeaders } from "./getHeaders";

// HTTPS 인증서 검증을 무시하는 axios 인스턴스 생성
const axiosInstance = axios.create({ httpsAgent: new https.Agent({ rejectUnauthorized: false }) });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3001;

app.post("/", async (req: Request, res: Response) => {
  const { url, body, header, method } = req.body as { url: string; body?: object; header?: object; method: string };

  if (!url) return res.status(400).send("url is required");
  if (!method) return res.status(400).send("method is required");

  try {
    const response = await axiosInstance({ method, url, headers: header || getHeaders(), data: body });
    res.status(response.status).send(response.data);
    l("Success", "green", url);
  } catch (error: any) {
    res.status(400).send("Error occurred during proxy," + url + " ," + error.message);
    l("Fail", "red", url + " " + error.message);
  }
});
app.listen(PORT, () => l("INFO", "blue", `Proxy server is running on http://localhost:${PORT}`));
