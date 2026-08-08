# V3 Prompt Run: 02 Find Companies

Prompt: `prompts/v3/02-find-companies.md`  
Test case: `test-cases/01-experienced-professional.md`

## Prompt Input
Input artifact: reusable profile from `runs/V3/01-experienced-professional/01-capability-profile.md`.

## Prompt Output

### Prioritized Sourced Employer List
| Priority | Employer | Source status | Why this could be a match | Primary lane | Role search keywords | Role red flags | Hiring/access risk |
| --- | --- | --- | --- | --- | --- | --- | --- |
| High | ServiceNow | Sourced: [Q2 2026 results](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-Reports-Second-Quarter-2026-Financial-Results/default.aspx), [AI Control Tower roles](https://www.servicenow.com/docs/r/intelligent-experiences/ai-control-tower/roles-installed-with-ai-control-tower.html?contentId=sqFKtnQS80IgvJKBiiW9xA), [Action Fabric role](https://careers.servicenow.com/jobs/744000138900345/director-product-management-action-fabric/) | Enterprise AI governance, workflow, data, and adoption direction fit Maya's customer operations and knowledge governance evidence. | AI-ready customer operations / knowledge governance | customer outcomes, customer operations, product operations, knowledge, enablement, adoption, AI governance operations | AI engineer, solution architect, quota sales, platform implementation-only | Large employer; exact role path must be narrowed. |
| High | Zendesk | Sourced: [Zendesk AI overview](https://support.zendesk.com/hc/en-us/articles/10018448457498-Overview-of-Zendesk-AI-offerings) | Zendesk AI, triage, agent tooling, and knowledge workflows map to Maya's support operations and KB governance history. | AI support operations | support operations, knowledge operations, customer education, AI support quality | engineering, sales, pure content marketing | Role availability needs direct career scan. |
| Medium-high | Gainsight | Sourced: [Gainsight customer success AI](https://www.gainsight.com/customer-success/) | Customer health, risk detection, retention workflows, and CS automation overlap with Maya's renewal-risk and CS ops background. | Customer success operations | CS ops, customer health, retention operations, lifecycle operations | quota CSM, data scientist, solution consultant | Strong category fit; role may require Gainsight ecosystem depth. |
| Medium-high | Intercom | Sourced: [What is Fin?](https://www.intercom.com/help/en/articles/9515824-what-is-fin), [Fin AI Agent FAQs](https://www.intercom.com/help/en/articles/7837535-fin-ai-agent-faqs) | Fin depends on support content, workflows, customer operations quality, and AI answer reliability. | AI customer support operations | AI support, customer operations, knowledge, support quality, enablement | ML, sales, product marketing-only | Senior compensation and role availability unknown. |
| Medium | Atlassian | Sourced: [Rovo in Service Collection](https://www.atlassian.com/collections/service/ai) | Rovo service management uses knowledge, service workflows, and AI-native support; this overlaps with Maya's support/knowledge ops experience. | Enterprise service/knowledge operations | service management, knowledge operations, Rovo, customer education, product operations | engineering, technical PM, implementation architect | Competitive large employer; needs role-specific proof. |

### Top 5 Sourced Employers To Research Next
1. ServiceNow: strongest current AI/workflow governance evidence.
2. Zendesk: closest support operations and AI support match.
3. Gainsight: strongest customer-success operations match.
4. Intercom: strong AI support operations angle.
5. Atlassian: plausible service/knowledge operations fit.

### Do Not Pursue Yet
- Frontier AI labs unless a customer operations role is specifically sourced.
- ServiceNow/Zendesk/Salesforce implementation roles requiring deep technical platform certification.
- Any quota-carrying sales role.

### Closer But Less Glamorous Alternatives
- Customer operations roles at mature B2B SaaS companies with AI support initiatives.
- Customer education or knowledge operations roles at enterprise implementation partners. Source named employers before adding them to the target list.

### Targets To Source Before Considering
- Named ServiceNow implementation partners.
- Mid-market B2B SaaS companies with AI support pilots.

### Patterns
Maya should prioritize complex B2B software companies where AI adoption creates knowledge-quality, support workflow, and customer operations governance problems. She should keep the pitch operational, not technical AI.

## Challenger Review
Overall judgment: strong.

Requirement compliance: complete. All main-table employers are sourced. Unsourced ideas are separated into "Targets To Source Before Considering" and are not in the top 5.

Specific problems:
- Some sources are product/documentation sources rather than current career pages. That is acceptable for employer-fit discovery, but Prompt 3 still needs role validation.

Recommended prompt edits:
- No meaningful Prompt 2 change needed from this run.

## Evaluation
| Criterion | Score | Notes |
| --- | --- | --- |
| Grounding | 5 | Source requirement satisfied. |
| Specificity | 5 | Strong lanes and red flags. |
| Usefulness | 5 | Clean next research list. |
| Honesty | 5 | Unsourced categories are separated. |
| Continuity | 5 | Ready for Prompt 3. |
| Efficiency | 5 | No filler companies. |
| Judgment | 5 | Avoids famous-company drift. |

V3 result: Prompt 2 publication blocker fixed for this case.

