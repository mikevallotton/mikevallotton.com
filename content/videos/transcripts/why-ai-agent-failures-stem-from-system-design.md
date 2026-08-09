Most agent failures aren’t really AI problems, they’re system design problems. When agents fail, it’s usually because something around the model got something wrong, not the model itself, because the system wasn’t built carefully enough.

As a real version of this, let’s say we’re gonna build an agent to generate a weekly status report. So it will go to Jira for ticket status, and it will go to GitHub for code changes, and it will go to Teams for chats and updates.

And this seems straightforward, but in Jira, if you’ve got some tickets that are marked as done while others are marked as closed, or you’ve got tickets that just haven’t been updated properly, or in GitHub your commit messages don’t map cleanly to tickets in Jira, and in Teams, half the actual decisions are happening in threads that never get captured or monitored.

So in that case, what does our agent do? It’s still going to pull everything together, and it’s going to give you a very clean, well-written, completely misleading report because LLMs match tokens; they don’t make judgments.

The model did exactly what the system allowed it to do. The system wasn’t designed well enough.

And then in addition to that, there’s the permissions problem. If that same agent has write access, it’s not just reporting. It could update tickets, or trigger workflows, or send communications based on bad assumptions.

So you give it too much access, and it can do the wrong thing, and too little access, and it misses what matters.

And that’s why security teams are increasingly focusing on agent-specific risks—not just bad outputs, but bad actions. The model’s not usually where it breaks down; it is the system design.
