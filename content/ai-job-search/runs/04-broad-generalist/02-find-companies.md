# V3 Prompt Run: 02 Find Companies

Prompt: `prompts/v3/02-find-companies.md`  
Test case: `test-cases/04-broad-generalist.md`

## Prompt Input
Input artifact: reusable profile from `runs/V3/04-broad-generalist/01-capability-profile.md`.

## Prompt Output

### Prioritized Sourced Employer List
| Priority | Employer | Source status | Why this could be a match | Primary lane | Role search keywords | Role red flags | Hiring/access risk |
| --- | --- | --- | --- | --- | --- | --- | --- |
| High | Zapier | Sourced: [press](https://zapier.com/press), [jobs](https://zapier.com/jobs), [events](https://zapier.com/resources/events), [Partner Hub](https://partnerhub.zapier.com/aspx/home), [Copilot docs](https://help.zapier.com/hc/en-us/articles/38215656607757-What-is-Zapier-Copilot) | Direct automation ecosystem, remote culture, partner enablement, events/webinars, and AI workflow education overlap with Priya's strongest evidence. | Customer education operations | customer education, lifecycle education, content operations, partner enablement, automation education | engineering/API, senior channel strategy, pure product marketing | Strong domain fit; exact role availability unknown. |
| Medium-high | Notion | Sourced: [careers](https://www.notion.com/careers?gh_jid=6337687003) | Notion has knowledge/workspace systems and current roles including CX Knowledge Architect, Technical Enablement Manager, Community Operations, and Product Operations. Priya's SOP/workflow background is relevant, but location may be a blocker. | Knowledge/customer experience operations | knowledge architect, technical enablement, community operations, product operations | in-person-only constraints, technical support manager, security engineering | Notion is in-person; remote-first preference may block fit. |
| Medium-high | HubSpot | Sourced: [Education Partner Program](https://academy.hubspot.com/education-partner-program), [Partner Enablement Kit](https://offers.hubspot.com/spring-2026-partner-enablement-kit), [EPP jobs portal](https://academy.hubspot.com/education-partner-program/jobs-portal) | HubSpot has academy/education and partner enablement ecosystems that map to Priya's webinar, CRM, partner tracking, and operations experience. | Partner/customer education operations | academy operations, partner enablement, customer education, lifecycle education | quota sales, senior partner strategy, marketing owner without ops scope | Large company may require more specialization. |
| Medium | Airtable | Sourced: [templates](https://www.airtable.com/templates), [community](https://community.airtable.com/), [jobs board](https://community.airtable.com/jobs-board-16) | Priya has direct Airtable systems evidence; Airtable templates/community show operational and builder ecosystem relevance. | Template/community operations | templates, community operations, customer education, solutions operations | developer/API roles, enterprise sales, basic builder roles below salary | Need direct Airtable careers scan before action. |
| Medium | Webflow | Sourced: [careers](https://webflow.com/company/careers), [open roles](https://webflow.com/company/careers/roles), [Foundations partner program](https://help.webflow.com/hc/en-us/articles/50470039091219-Join-Webflow-Foundations) | Creator/builder ecosystem and partner/customer education themes may fit Priya's events/community/partner ops background. | Creator/customer education operations | customer education, community operations, partner enablement, events | engineering, design, corporate sales | Current open roles appear mostly not her lane; watchlist. |

### Top 5 Sourced Employers To Research Next
1. Zapier: strongest direct fit.
2. Notion: good knowledge/CX ops signals but location risk.
3. HubSpot: academy and partner enablement fit.
4. Airtable: strong tool/workflow fit; direct careers scan needed.
5. Webflow: creator/customer education ecosystem watchlist.

### Do Not Pursue Yet
- Generic operations roles with undefined scope.
- Engineering/API roles.
- Senior channel partnership strategy roles requiring revenue ownership.
- Product marketing roles without operations scope.

### Closer But Less Glamorous Alternatives
- Customer education operations at mid-sized SaaS companies.
- Partner enablement operations at app ecosystem companies.
- Internal automation enablement roles at remote-first SaaS companies.

### Targets To Source Before Considering
- Named mid-sized automation tooling companies.
- RevOps tooling companies with customer education operations roles.

### Patterns
Priya should lead with customer education operations for automation/workflow products. Partner enablement is a secondary lane. Product familiarity alone is not a qualification; she needs proof of business impact.

## Challenger Review
Overall judgment: strong.

Requirement compliance: complete. The V3 problem is fixed: Airtable, HubSpot, Notion, and Webflow now have source links, and unsourced ideas are separated.

Specific problems:
- Some sources are ecosystem/product/community sources rather than exact current roles. That is acceptable for Prompt 2 discovery; Prompt 3 should validate roles.

Recommended prompt edits:
- No meaningful Prompt 2 change needed.

## Evaluation
| Criterion | Score | Notes |
| --- | --- | --- |
| Grounding | 5 | All main rows sourced. |
| Specificity | 5 | Strong primary lane. |
| Usefulness | 5 | Role red flags are concrete. |
| Honesty | 5 | Location/role risks called out. |
| Continuity | 5 | Strong research order. |
| Efficiency | 5 | No unsourced named employers. |
| Judgment | 5 | Avoids generalist sprawl. |

V3 result: Prompt 2 publication blocker fixed for this case.

