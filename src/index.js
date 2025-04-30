const NOTION_URL = "https://daffy-tarsier-75a.notion.site/1de723f7d2c180b7979ef9b150714085?pvs=4";

export default {
  async fetch(request) {
    return Response.redirect(NOTION_URL, 302);
  },
};
