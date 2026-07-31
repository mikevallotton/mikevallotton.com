export const operatingPrinciples = {
  "clarity-before-tools": {
    title: "Clarity Before Tools",
    description:
      "A practical method for defining the goal, audience, constraints, context, and standard of success before deciding how AI should help.",
    lead:
      "Better AI work starts before the first prompt. It starts by deciding what you are actually trying to accomplish.",
    introduction:
      "Tools make it easy to begin generating before the work is understood. A short pause to name the outcome, audience, constraints, available information, and kind of help you need creates a clearer frame for both you and the model. The point is not to produce a longer prompt. It is to begin with a more precise intention.",
    topicKey: "fundamentals",
    sections: [
      {
        id: "name-the-outcome",
        eyebrow: "Begin with intent",
        title: "Name the outcome before the task",
        paragraphs: [
          "A request such as “write an email” identifies an activity, but it does not explain what the email needs to accomplish. Is the goal to inform, persuade, resolve a misunderstanding, document a decision, or prompt action? Those outcomes call for different choices even when the deliverable looks the same.",
          "Before involving AI, state the change you want the work to create. Then identify who will use it, what they already know, and what they should understand or do next. This makes the task easier to evaluate because success is tied to an outcome rather than the mere existence of an output.",
        ],
        links: [
          {
            href: "/ai-fundamentals#context-is-everything",
            label: "Context Is Everything",
          },
        ],
      },
      {
        id: "build-a-clear-brief",
        eyebrow: "A practical frame",
        title: "Give the work a clear brief",
        paragraphs: [
          "A useful brief does not need to be elaborate. For most work, five elements are enough: the goal, the audience, the relevant context, the constraints, and the standard a good result must meet.",
          "The context should include information that changes the answer, not everything you happen to know. Constraints might include time, policy, tone, budget, format, sources, or decisions that have already been made. The quality standard might emphasize accuracy, completeness, usefulness, originality, safety, or maintainability depending on the work.",
        ],
        checklist: [
          "What am I trying to accomplish?",
          "Who is this for, and what do they need?",
          "What information materially changes the answer?",
          "Which constraints and tradeoffs matter?",
          "How will I recognize a useful result?",
        ],
        evidence: ["fundamentalsContext"],
      },
      {
        id: "choose-help-after-problem",
        eyebrow: "Then choose the help",
        title: "Decide what role AI should play",
        paragraphs: [
          "Once the work is clear, choose the kind of assistance that fits it. AI might help you explore options, organize information, challenge assumptions, draft a first version, compare alternatives, or automate a well-understood step. Those are different roles and should not be collapsed into a generic request to “help.”",
          "Sometimes clarity reveals that AI is not the limiting factor. The work may need a decision from a person, access to missing information, agreement about requirements, or a conventional software rule that is more predictable than generation. Starting with the problem keeps the tool subordinate to the outcome.",
        ],
        links: [
          {
            href: "/bottlenecks-over-use-cases",
            label: "Bottlenecks over use cases",
          },
        ],
      },
      {
        id: "clarity-through-iteration",
        eyebrow: "Refine the frame",
        title: "Let clarity improve through iteration",
        paragraphs: [
          "You will not always understand the work completely at the beginning. The first response may expose an assumption, missing fact, or unresolved choice. Treat that discovery as useful information. Correct what is wrong, add what is missing, and explain why the response did not meet the goal.",
          "Each round should sharpen the brief rather than merely ask the model to try again. Deliberate iteration turns a vague conversation into an evolving working context. It also makes your own thinking more explicit, which remains useful even if the final work is completed without AI.",
        ],
        links: [
          {
            href: "/quality-over-speed",
            label: "Quality over speed",
          },
          {
            href: "/ai-fundamentals#learning-to-work-with-ai",
            label: "Learning to Work with AI",
          },
        ],
      },
    ],
    videos: [
      {
        title: "The Simplest AI Habit That Changes Everything",
        published: "2025-12-12",
        url: "https://youtube.com/shorts/0o28SCCbRx8?feature=share",
        videoId: "0o28SCCbRx8",
        description:
          "Clarifying intent before prompting improves the frame for every AI interaction. Name what you are trying to accomplish before asking the model to produce anything.",
      },
    ],
    faqs: [
      {
        question: "How do I know whether AI is the right tool for a task?",
        answer:
          "Start by identifying what is preventing a useful outcome. AI may help when the work involves generating, organizing, comparing, retrieving, classifying, or transforming information. It may not be the right tool when the real constraint is an unresolved decision, missing access, unclear ownership, unavailable source information, or a predictable rule that conventional software can execute more reliably. Choose the approach after understanding the need.",
      },
      {
        question: "What should I do when I cannot define the outcome clearly?",
        answer:
          "Treat clarification as the first task. Describe what is known, what remains uncertain, who is affected, and which decision the work should support. AI can help surface assumptions, compare possible problem statements, or identify missing questions, but it should not silently decide the objective. Before moving into execution, a person responsible for the work should confirm what outcome is worth pursuing.",
      },
    ],
    sourceNotes: ["fundamentalsContext"],
  },
  "judgment-over-generation": {
    title: "Judgment Over Generation",
    description:
      "How to use AI to expand options and accelerate execution while keeping people responsible for context, tradeoffs, and consequences.",
    lead:
      "AI can produce options quickly. People still have to decide which option fits the situation and whether the work should be done at all.",
    introduction:
      "Generation and judgment are different capabilities. A model can draft, compare, summarize, and recommend within the context it receives. Judgment requires deciding what matters when goals conflict, information is incomplete, and the consequences belong to real people. AI can strengthen the material behind a decision, but responsibility for the decision remains human.",
    topicKey: "thinking",
    sections: [
      {
        id: "generation-is-not-judgment",
        eyebrow: "A necessary distinction",
        title: "Producing an answer is not choosing a path",
        paragraphs: [
          "Generation turns context into possible language, plans, designs, or actions. Judgment evaluates those possibilities against a situation the model does not fully inhabit: the history of a team, the commitments already made, the people affected, the acceptable risks, and the consequences of being wrong.",
          "This distinction matters most when the output is polished. Fluency can make an option feel resolved before its assumptions and tradeoffs have been examined. A useful response gives you material to evaluate; it does not remove the need to evaluate it.",
        ],
        evidence: ["thinkingConfidence"],
        links: [
          {
            href: "/ai-and-thinking#judgment",
            label: "Judgment",
          },
        ],
      },
      {
        id: "where-judgment-enters",
        eyebrow: "Throughout the work",
        title: "Judgment begins before the final decision",
        paragraphs: [
          "Judgment determines which problem deserves attention, whose perspective is missing, which constraints are legitimate, what evidence is sufficient, and which tradeoffs are acceptable. It also determines when a task is safe to delegate and when a person needs to stay close to the work.",
          "AI can support each of these moments. Ask it to surface alternatives, identify assumptions, explain uncertainty, model consequences, or present the strongest case against the current direction. The goal is to enlarge the decision surface without quietly transferring the decision itself.",
        ],
        checklist: [
          "What decision is actually being made?",
          "Who experiences the consequences?",
          "Which assumptions would change the choice?",
          "What evidence would increase or reduce confidence?",
          "Who is accountable for the result?",
        ],
      },
      {
        id: "judgment-becomes-more-valuable",
        eyebrow: "When output becomes abundant",
        title: "Faster generation increases the need to filter",
        paragraphs: [
          "When drafts, analyses, designs, and code become easier to produce, the scarce capability shifts toward attention and choice. Someone must decide which work is relevant, what deserves review, what fits the larger strategy, and what should be discarded.",
          "More output can improve exploration, but it can also create noise and false confidence. The value comes from combining machine breadth and speed with human context, restraint, and responsibility.",
        ],
        links: [
          {
            href: "/ai-and-work#more-valuable",
            label: "What Becomes More Valuable",
          },
          {
            href: "/bottlenecks-over-use-cases",
            label: "Bottlenecks over use cases",
          },
        ],
      },
      {
        id: "train-judgment",
        eyebrow: "Preserve the practice",
        title: "Judgment has to be exercised",
        paragraphs: [
          "Judgment develops through experience, feedback, reflection, and seeing how decisions play out. If AI removes every opportunity to form an initial view, test an assumption, or work through uncertainty, people may become better at accepting answers without becoming better at evaluating them.",
          "Use AI in ways that preserve practice. Form a position before requesting a critique. Predict the likely failure modes before asking the model. Compare its recommendation with your reasoning. After the outcome is known, examine which assumptions held up. AI should make these learning loops richer, not eliminate them.",
        ],
        evidence: ["thinkingAutomation", "thinkingOffloading"],
        links: [
          {
            href: "/articles/news-investigator",
            label: "News Investigator Agent",
          },
          {
            href: "/ai-and-thinking#human-cognition",
            label: "Human Cognition",
          },
        ],
      },
    ],
    videos: [
      {
        title: "The One Skill AI Cannot Replace: Good Judgment",
        published: "2025-12-10",
        url: "https://youtube.com/shorts/t8Et8YnHiGY?feature=share",
        videoId: "t8Et8YnHiGY",
        description:
          "As AI accelerates execution, judgment becomes more valuable. People still have to choose what matters for a particular situation, team, and moment.",
      },
    ],
    faqs: [
      {
        question: "When should a person remain directly involved in an AI task?",
        answer:
          'Keep a person directly involved when the work contains unresolved tradeoffs or when an error could materially affect safety, security, money, employment, rights, reputation, confidential information, or public trust. Human involvement should correspond to a specific review or decision point. A general promise that someone is "in the loop" is not enough unless that person has the context, authority, and time to intervene.',
      },
      {
        question: "Can frequent AI use weaken judgment or professional skills?",
        answer:
          "It may if AI consistently replaces the effort required to form an initial view, work through uncertainty, or evaluate consequences. A stronger pattern is to make a preliminary assessment, use AI to challenge or expand it, compare the reasoning, and reflect on the result. Used this way, AI can contribute to the learning process without removing the practice through which judgment develops.",
      },
    ],
    sourceNotes: [
      "thinkingConfidence",
      "thinkingAutomation",
      "thinkingOffloading",
    ],
  },
  "bottlenecks-over-use-cases": {
    title: "Bottlenecks Over Use Cases",
    description:
      "A practical approach to finding where AI can create leverage by starting with delays, confusion, handoffs, and repeated rework.",
    lead:
      "Do not begin by asking where AI can be added. Begin by finding where useful work is constrained.",
    introduction:
      "A search for AI use cases starts with the capability and looks for somewhere to apply it. A search for bottlenecks starts with real work: where it waits, gets lost, creates confusion, or repeatedly returns for correction. That shift produces better priorities because it connects the technology to a constraint that already matters.",
    topicKey: "work",
    sections: [
      {
        id: "find-the-constraint",
        eyebrow: "Start with the work",
        title: "Look for the constraint, not the novelty",
        paragraphs: [
          "Bottlenecks often appear as long queues, repeated handoffs, missing information, inconsistent decisions, slow approvals, duplicated effort, or work that routinely has to be redone. They may be visible in a process map, but they are often easier to find by asking the people doing the work where momentum repeatedly disappears.",
          "The important question is not which step looks inefficient in isolation. It is which constraint limits the outcome of the larger workflow. Improving a step that is not constraining the system may create more activity without improving the result.",
        ],
        links: [
          {
            href: "/ai-and-work#organizations",
            label: "How Organizations Are Responding",
          },
        ],
      },
      {
        id: "diagnose-before-automating",
        eyebrow: "Understand the cause",
        title: "Diagnose the bottleneck before automating it",
        paragraphs: [
          "A delay may come from slow production, but it may also come from unclear ownership, conflicting requirements, unavailable data, a policy decision, or a review that exists because mistakes are consequential. AI is useful only when it addresses the cause rather than making the visible activity move faster.",
          "Trace one real example from beginning to end. Identify what entered the process, where it waited, who made decisions, which information was missing, what returned for rework, and how success was measured. That gives you a grounded basis for deciding whether generation, retrieval, classification, automation, or a non-AI process change is appropriate.",
        ],
        checklist: [
          "Where does work wait or repeatedly return?",
          "What information or decision is missing at that point?",
          "Does this constraint limit the whole workflow?",
          "Can success and failure be observed?",
          "Would faster output create more work downstream?",
        ],
      },
      {
        id: "avoid-moving-the-bottleneck",
        eyebrow: "Watch downstream",
        title: "AI often moves the bottleneck",
        paragraphs: [
          "Faster drafting can produce more material than a team can review. Faster coding can increase the burden on testing, integration, security, and maintenance. Faster analysis can create more options than leaders can evaluate. The original constraint may disappear while a more expensive one emerges downstream.",
          "Evaluate the complete flow, including review, approval, correction, deployment, and maintenance. A local speed improvement creates value only when the surrounding system can absorb it.",
        ],
        evidence: ["workProductivity"],
        links: [
          {
            href: "/software-development-and-ai#development-workflow",
            label: "The Development Workflow",
          },
          {
            href: "/quality-over-speed",
            label: "Quality over speed",
          },
        ],
      },
      {
        id: "run-a-bounded-experiment",
        eyebrow: "Test the intervention",
        title: "Improve one meaningful constraint at a time",
        paragraphs: [
          "Choose a bounded workflow with an owner, a baseline, and a result you can observe. Define what will change, what must not degrade, how errors will be handled, and when the experiment will be reviewed. Start with enough scope to matter but not so much that the source of the result becomes impossible to understand.",
          "If the experiment works, examine why before expanding it. The value may come from the model, but it may also come from clearer instructions, better information, standardized work, or newly explicit ownership. Those surrounding improvements are part of the result and should be preserved.",
        ],
        evidence: ["workAdoption"],
        links: [
          {
            href: "/ai-agents#agents-at-work",
            label: "Agents at Work",
          },
          {
            href: "/systems-that-hold-up",
            label: "Systems that hold up",
          },
        ],
      },
    ],
    videos: [
      {
        title: "Stop Looking for Use Cases. Start Looking for Bottlenecks",
        published: "2025-12-19",
        url: "https://youtube.com/shorts/NX6e532FUmI?feature=share",
        videoId: "NX6e532FUmI",
        description:
          "AI creates leverage when it removes friction from work that already matters. Find where work waits, gets lost, or requires repeated correction.",
      },
    ],
    faqs: [
      {
        question: "How do we know whether AI removed a bottleneck or only moved it?",
        answer:
          "Measure the complete workflow, not just the assisted step. Compare queues, review effort, rework, errors, approvals, delivery time, and maintenance before and after the change. Faster drafting, analysis, or coding may simply create more work for a later stage. An improvement is meaningful when the final outcome gets better without creating a larger or more expensive constraint elsewhere.",
      },
      {
        question: "What baseline should we capture before testing AI in a workflow?",
        answer:
          "Record enough information to compare the workflow before and after the experiment. Useful measures may include total elapsed time, time spent waiting, review effort, correction cycles, error rates, incomplete cases, and the quality of the final result. The right baseline depends on the outcome being improved. Avoid relying only on how quickly the AI-assisted step runs.",
      },
    ],
    sourceNotes: ["workProductivity", "workAdoption"],
  },
  "quality-over-speed": {
    title: "Quality Over Speed",
    description:
      "How to pair AI acceleration with clear standards, deliberate iteration, verification, and review proportional to the consequences.",
    lead:
      "AI can make work move faster, but speed is useful only when the work remains accurate, appropriate, and fit for its purpose.",
    introduction:
      "The first response is a starting point, not a finished result. AI compresses the time required to draft, explore, and revise, which gives people more opportunities to improve the work. It can also multiply weak assumptions and plausible mistakes. Quality comes from the standards and feedback around generation, not from generation alone.",
    topicKey: "software",
    sections: [
      {
        id: "define-quality",
        eyebrow: "Before generating",
        title: "Define what good means for this task",
        paragraphs: [
          "Quality is not one universal property. A brainstorming list needs range and relevance. A factual explanation needs accuracy and traceable support. Software needs to satisfy requirements, remain understandable, and behave safely. A leadership recommendation needs to account for people, timing, tradeoffs, and consequences.",
          "State the criteria before reviewing the output. Otherwise, fluency and speed can become accidental substitutes for usefulness. A clear standard also helps the model produce a stronger first attempt because the task includes the qualities the answer must demonstrate.",
        ],
        links: [
          {
            href: "/clarity-before-tools",
            label: "Clarity before tools",
          },
        ],
      },
      {
        id: "treat-the-first-response-as-a-draft",
        eyebrow: "Inspect the work",
        title: "Treat the first response as a draft",
        paragraphs: [
          "Review the response against the goal and criteria rather than reacting to it as a whole. Identify what is correct, what is missing, what is unsupported, what does not fit the audience, and which assumptions should be challenged.",
          "Then make the feedback specific. Add the missing information, explain the mismatch, provide a useful example, or narrow the decision. Asking the model to “make it better” supplies little new signal. Deliberate correction improves both the context and your ability to evaluate the next result.",
        ],
        evidence: ["fundamentalsContext"],
        links: [
          {
            href: "/ai-fundamentals#learning-to-work-with-ai",
            label: "Learning to Work with AI",
          },
        ],
      },
      {
        id: "verify-outside-the-model",
        eyebrow: "Match review to risk",
        title: "Verify important work outside the model",
        paragraphs: [
          "A model can help critique its own response, but that is not independent verification. Consequential facts should be checked against reliable sources. Code should be tested and reviewed. Calculations should be recalculated. Policies and requirements should be compared with the controlling documents.",
          "The amount of review should reflect the consequences of an error, how reversible the action is, and whether a mistake will be visible. Low-risk ideation may need a quick judgment call. Work involving safety, security, money, rights, or public trust needs stronger evidence and clearer accountability.",
        ],
        evidence: ["thinkingConfidence", "softwareSecurity"],
        links: [
          {
            href: "/software-development-and-ai#engineering-leadership",
            label: "Engineering Leadership",
          },
          {
            href: "/judgment-over-generation",
            label: "Judgment over generation",
          },
        ],
      },
      {
        id: "design-a-quality-loop",
        eyebrow: "Make it repeatable",
        title: "Build feedback into the workflow",
        paragraphs: [
          "Reliable quality should not depend on one person remembering to be careful. Use checklists, acceptance criteria, tests, source requirements, peer review, approval thresholds, and monitoring where they fit the work. Catch mistakes as close as possible to where they are introduced.",
          "This is how speed becomes an advantage rather than a source of hidden debt. AI shortens the execution loop; a well-designed quality loop uses that saved time to test assumptions, compare alternatives, and correct problems before they spread.",
        ],
        links: [
          {
            href: "/systems-that-hold-up",
            label: "Systems that hold up",
          },
        ],
      },
    ],
    videos: [],
    faqs: [
      {
        question: "How much human review does AI-generated work need?",
        answer:
          "Review should increase with the consequences of an error, the difficulty of reversing the action, and the chance that a mistake will go unnoticed. Low-risk brainstorming may require only a quick judgment call. Work involving security, money, employment, rights, safety, or public communication needs stronger evidence, appropriate expertise, explicit approval, and a clearly accountable person.",
      },
      {
        question: "Does asking the model to check its own work count as verification?",
        answer:
          "No. Self-critique can help identify omissions, inconsistencies, or alternative interpretations, but it is not independent verification. Important claims should be checked against reliable sources, calculations should be recalculated, code should be tested, and policies should be compared with controlling documents. The verification method should match the type of work and the consequences of being wrong.",
      },
    ],
    sourceNotes: [
      "fundamentalsContext",
      "thinkingConfidence",
      "softwareSecurity",
    ],
  },
  "systems-that-hold-up": {
    title: "Systems That Hold Up",
    description:
      "How to design reliable AI workflows around sound information, clear ownership, constrained authority, evaluation, and feedback.",
    lead:
      "Reliable AI is a property of the surrounding system, not the model alone.",
    introduction:
      "A polished demonstration can hide the conditions required for dependable work. Real organizations have incomplete information, changing processes, uneven adoption, legacy systems, sensitive data, and decisions with consequences. AI has to operate inside those conditions. The surrounding workflow determines whether capability becomes durable value or recurring risk.",
    topicKey: "agents",
    sections: [
      {
        id: "the-model-is-one-component",
        eyebrow: "See the whole system",
        title: "Treat the model as one component",
        paragraphs: [
          "An AI workflow includes the information supplied to the model, the instructions that frame the work, the tools and systems it can reach, the permissions attached to those connections, the people responsible for review, and the feedback used to improve performance.",
          "A stronger model may improve part of this chain without fixing missing data, contradictory policies, unreliable integrations, unclear ownership, or an approval process that cannot absorb the output. Reliability comes from designing the complete path from intention to consequence.",
        ],
        evidence: ["agentsReliability"],
        links: [
          {
            href: "/ai-agents#reliable-agents",
            label: "Building Reliable Agents",
          },
        ],
      },
      {
        id: "information-and-process",
        eyebrow: "Build on solid ground",
        title: "Improve the information and process first",
        paragraphs: [
          "AI can organize and transform available context, but it cannot make fragmented organizational knowledge authoritative. Teams need to know which sources are current, how conflicts are resolved, what information is sensitive, and who owns important updates.",
          "The process needs similar clarity. Define the inputs, expected outputs, decision points, exceptions, and handoffs. Automating an inconsistent process usually reproduces its ambiguity at greater speed. Making the workflow explicit often creates value before any AI is deployed.",
        ],
        evidence: ["fundamentalsContext", "workAdoption"],
        links: [
          {
            href: "/ai-and-work#organizations",
            label: "How Organizations Are Responding",
          },
          {
            href: "/ai-search-and-geo#knowledge-bases",
            label: "Websites Become Knowledge Bases",
          },
        ],
      },
      {
        id: "ownership-and-authority",
        eyebrow: "Constrain the action",
        title: "Make ownership and authority explicit",
        paragraphs: [
          "Every operational AI system needs an accountable owner. That person or team defines acceptable behavior, reviews performance, resolves exceptions, and decides when the system should change or stop. A vague promise that a human remains involved is not enough; the review point and decision authority have to be part of the workflow.",
          "Give the system only the information and actions required for the task. Separate reading from writing, drafts from publication, recommendations from approvals, and reversible actions from consequential ones. Constrained authority reduces the damage a mistake or malicious instruction can cause.",
        ],
        evidence: ["agentsAuthority", "agentsSecurity"],
        links: [
          {
            href: "/ai-agents#what-agents-are",
            label: "What AI Agents Are",
          },
        ],
      },
      {
        id: "evaluation-and-feedback",
        eyebrow: "Operate, observe, improve",
        title: "Design evaluation and feedback into operation",
        paragraphs: [
          "Test expected cases, difficult edge cases, missing information, conflicting instructions, tool failures, and escalation paths before relying on the system. Evaluation should measure whether the workflow accomplishes its purpose, not merely whether the output sounds good.",
          "Once deployed, monitor errors, overrides, unexpected behavior, changing source information, and the time people spend reviewing the work. Feed those observations back into the process, instructions, permissions, and tests. Reliability is maintained through operation; it is not established once at launch.",
        ],
        evidence: ["workGovernance"],
        checklist: [
          "Is the goal and success measure explicit?",
          "Are the information sources current and owned?",
          "Are permissions limited to what the work requires?",
          "Does a named person own exceptions and consequences?",
          "Are evaluation, monitoring, escalation, and rollback defined?",
        ],
        links: [
          {
            href: "/software-development-and-ai#engineering-leadership",
            label: "Engineering Leadership",
          },
          {
            href: "/quality-over-speed",
            label: "Quality over speed",
          },
        ],
      },
    ],
    videos: [],
    faqs: [
      {
        question: "What permissions should an AI agent receive?",
        answer:
          "Give an agent only the information and actions required for its specific task. Separate reading from writing, drafting from publishing, recommendations from approvals, and reversible actions from consequential ones. Limited authority cannot prevent every failure, but it reduces potential harm when the system misunderstands instructions, encounters malicious content, or behaves unexpectedly.",
      },
      {
        question: "Who should own an AI workflow after it is launched?",
        answer:
          "A named person or team should own its acceptable behavior, information sources, evaluation, exceptions, approvals, and performance review. That owner should also have the authority to change, pause, or stop the workflow. Ownership must continue after launch because the underlying information, processes, tools, and risks will change over time.",
      },
    ],
    sourceNotes: [
      "agentsReliability",
      "fundamentalsContext",
      "workAdoption",
      "agentsAuthority",
      "agentsSecurity",
      "workGovernance",
    ],
  },
};
