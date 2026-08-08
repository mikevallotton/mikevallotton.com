# Prompt 2: Find Companies Where I Could Be Valuable

## Purpose
Use the personal capability profile to identify companies, organizations, venues, or employers where this person may plausibly be useful. The goal is not to find every open job posting. The goal is to find employers whose work, direction, customers, technology, market, local context, or problems create a plausible need for what the person can do.

This v3 prompt uses a hard source rule: no current source link, no main-table recommendation.

## Required Inputs
- Personal Capability Profile from Prompt 1.
- Constraints: location, remote preference, industry exclusions, salary needs, schedule, travel, work authorization, company size preference, mission preference, or risk tolerance.
- Optional: target region, industries of interest, preferred employer type, current contacts, and companies already considered.

## Copy/Paste Prompt
```text
You are helping me find companies, organizations, venues, or employers where someone with my specific capabilities, experience, interests, and constraints might be valuable.

Do not start with job titles. Do not simply list famous companies. Do not list employers only because they have open roles that match my resume. Look for evidence that the employer's work, direction, customers, technology, market, community role, or current problems create a plausible need for what I can do.

Use current web research. Every employer in the main recommendation table must include at least one current source link. Prefer primary sources. Do not put any employer in the main table without a source link.

If an employer seems plausible but you cannot find a current source, put it only in a separate section called "Targets To Source Before Considering." Do not rank it. Do not include it in the top 5. Do not treat it as a recommendation.

Inputs:
1. My Personal Capability Profile:
[Paste the reusable artifact from Prompt 1 here.]

2. Constraints and preferences:
[Paste any constraints here.]

Build a prioritized list of sourced employers. Include obvious and non-obvious options. If a famous or aspirational company appears, include at least one closer but less glamorous alternative with a source link unless constraints make that impossible.

For each employer, provide:

1. Employer
- Name, type, location/operating region, size/stage if known, and website.

2. Source Status
- Sourced only.
- Include at least one current source link.
- If you do not have a source link, remove the employer from the main table and place it in "Targets To Source Before Considering."

3. What They Do
- One or two grounded sentences.

4. Why This Could Be a Match
- Explain the specific overlap between my profile and the employer's work, market, customers, operations, local role, or likely problems.
- Tie each reason to evidence from my profile and evidence about the employer.

5. Primary Lane
- Choose one lane: example categories include customer operations, content operations, compliance operations, curriculum QA, partner enablement, local retail/community operations, automation enablement, or another specific lane.
- Do not say "general fit."

6. Role Search Keywords
- Provide search terms and role-title patterns to investigate.

7. Role Red Flags
- List requirements, seniority levels, credentials, locations, or responsibilities that would indicate this is not a good fit right now.

8. Hiring Capacity or Access Risk
- For small, private, local, or opaque employers, explicitly assess whether hiring capacity is known, unknown, or unlikely.

9. Reasons This Might Not Be a Fit
- Be skeptical. Include constraints, weak evidence, company stage, geography, missing qualifications, or possible mismatch.

10. Priority
- High, Medium, Low, or Watchlist.
- Explain the priority in one sentence.

After the list, provide:
- The top 5 sourced employers to research next and why.
- A "Do Not Pursue Yet" list.
- A "Closer But Less Glamorous Alternatives" list when relevant. If you name a specific employer here, include a source link. If you do not have a source, describe the category instead of naming the employer.
- A "Targets To Source Before Considering" list for plausible but currently unsourced ideas. These are not recommendations yet.
- Any patterns you notice about where I may be useful.
```

## Required Output
A sourced, prioritized Markdown list of employers with evidence quality, lanes, role keywords, red flags, hiring capacity risk, and next research targets. Unsourced ideas must be separated from recommendations.

## Most Important Failure To Prevent
Unsourced company lists, famous-company bias, generic industries, and employers that merely have matching job titles.
