// scripts/demo.js
import fs from "fs/promises";
import xml2js from "xml2js";
import { google } from "googleapis";

const demo = async () => {
  try {
    console.log("Executing demo function...");

    const apiKey = "AIzaSyD_DKsgKZyPmAZRRLjOwdk1LUI_cvcCNR4";
    const spreadsheetId = "18wF0rBMe_hOEsMVSF7TxeySSo3MlMX0Q9w8cvQccOTo";
    const sheets = google.sheets({ version: "v4", auth: apiKey });
    const range = "flure";

    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range,
      headers: {
        referer: "http://localhost:4321/",
      },
    });

    const values = res.data.values;
    const xml = new xml2js.Builder({
      xmldec: { version: "1.0", encoding: "UTF-8" },
    }).buildObject({
      urlset: {
        $: {
          xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
        },
        url: values.map((url) => ({ loc: url })),
      },
    });

    const dir = "./dist";
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(`${dir}/sitemap.xml`, xml, "utf8");

    console.log("Demo function executed successfully!");
  } catch (err) {
    console.error("There was an error:", err.message);
  }
};

demo();
