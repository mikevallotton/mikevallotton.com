import { getAiJobSearchPromptPack } from "../../../content/aiJobSearch";

export const dynamic = "force-static";

export function GET() {
  return new Response(getAiJobSearchPromptPack(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="ai-job-search-prompts.txt"',
    },
  });
}
