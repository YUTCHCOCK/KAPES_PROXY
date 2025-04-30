const NOTION_SITE = "daffy-tarsier-75a.notion.site";
const NOTION_PAGE_ID = "1de723f7d2c180b7979ef9b150714085";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const notionUrl = `https://${NOTION_SITE}/${NOTION_PAGE_ID}${url.pathname}${url.search}`;

    const response = await fetch(notionUrl, {
      method: request.method,
      headers: {
        "user-agent": request.headers.get("user-agent") || "",
        "accept": request.headers.get("accept") || "*/*",
        "accept-language": request.headers.get("accept-language") || "en-US,en;q=0.9",
      },
    });

    return new Response(response.body, {
      status: response.status,
      headers: {
        "content-type": response.headers.get("content-type") || "text/html",
      },
    });
  }
};
