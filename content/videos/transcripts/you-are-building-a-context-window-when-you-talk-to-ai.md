When you talk to an AI, you’re not chatting with a mind. You’re building a context window, the block of text the model uses to decide what to generate next.

Every prompt you write, and every response the model gives, gets packed into that window. All of it’s converted into tokens, fragments of words or symbols, and sent back in with each new request. That combined text is the full input the model can reference when it predicts the next tokens.

If something’s not in that context window, it doesn’t exist to the model. There’s no long term memory, no hidden look up, unless another system adds information into the window. For it, it’s like giving a teammate a single page of notes and asking for feedback. They can only respond to what’s on the page.

If key details are missing, they’ll fill the gaps with guesses. Iteration is how you correct that, by expanding and refining what’s inside the window until the model has enough context to stay accurate.

Ask summarize our marketing plan without including the plan, and the model will invent one. Include the actual plan or have a retrieval system insert it, and now it sits inside the context window. The output becomes specific and grounded instead of generic.

The context window defines what the model can work with. Manage that window deliberately, and you control both quality and reliability. In the next video, we’ll see how iteration strengthens that context window and why every round of refinement matters.
