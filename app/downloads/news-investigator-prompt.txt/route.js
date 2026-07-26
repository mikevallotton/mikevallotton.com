import { newsInvestigatorPrompt } from "../../../content/newsInvestigatorPrompt";

export const dynamic = "force-static";

export function GET() {
  return new Response(newsInvestigatorPrompt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="news-investigator-prompt.txt"',
    },
  });
}
