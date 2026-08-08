# V3 Prompt Run: 02 Find Companies

Prompt: `prompts/v3/02-find-companies.md`  
Test case: `test-cases/02-early-career.md`

## Prompt Input
Input artifact: reusable profile from `runs/V3/02-early-career/01-capability-profile.md`.

## Prompt Output

### Prioritized Sourced Employer List
| Priority | Employer | Source status | Why this could be a match | Primary lane | Role search keywords | Role red flags | Hiring/access risk |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Medium-high | Drata | Sourced: [careers](https://drata.com/about/careers), [questionnaire automation](https://drata.com/products/assurance/security-questionnaire-automation), [compliance automation](https://drata.com/products/compliance-automation) | Compliance automation and questionnaire workflows fit Jordan's audit cleanup, documentation, and support interests. Careers page showed associate technical support signals in some regions. | Technical support in compliance SaaS | associate technical support, customer support, implementation support, compliance support | manager, senior GRC, sales-only, security engineer | Region/location may block some roles. |
| Medium-high | Vanta | Sourced: [careers](https://www.vanta.com/company/careers), [2025 review](https://www.vanta.com/resources/vanta-2025-year-in-review), [product updates](https://help.vanta.com/en/articles/11345422-product-updates), [Questionnaire Automation](https://www.vanta.com/products/questionnaire-automation) | Strong product-domain fit for trust/compliance, but visible careers evidence did not show a clear junior trust/support role. | Junior support / trust operations | technical support, customer support, compliance operations, customer trust, implementation associate | senior GRC, CSM, solutions engineer, security engineer | Aspirational unless junior role appears. |
| Medium | Secureframe | Sourced: [careers](https://secureframe.com/careers) | Compliance automation company with open customer education/content and implementation-type signals; could fit after stronger proof. | Compliance SaaS support/content | implementation specialist, customer education, support, content | federal compliance manager, solutions engineer, product manager | Roles appear mostly not entry-level. |
| Medium | OneTrust | Sourced: [platform](https://www.onetrust.com/platform/), [careers](https://www.onetrust.com/careers/), [Senior Support Analyst example](https://www.onetrust.com/careers/senior-support-analyst-consent-preference-7942653/) | Larger trust/privacy/governance platform may offer support or customer experience paths; current example support role is senior, so Jordan should watch for junior versions. | Customer support in trust/governance SaaS | support analyst, implementation support, customer experience, trust operations | senior support, solutions engineer, privacy counsel, enterprise AE | Larger company may provide structure, but visible roles may be too senior. |
| Watchlist | Healthcare SaaS employers with compliance workflows | Sourced category via Jordan's background, but no named employer yet | Jordan's healthcare startup audit support may be more valuable in healthcare SaaS than in pure GRC vendors. | IT/security support | IT support, security operations associate, access review, compliance coordinator | HIPAA privacy officer, security engineer, senior GRC | Must identify named sourced employers before action. |

### Top 5 Sourced Employers To Research Next
1. Drata: best immediate signal for associate support-style paths.
2. Vanta: strong product fit, but watchlist until junior role appears.
3. Secureframe: possible support/customer education path after proof.
4. OneTrust: larger structured employer; monitor junior support roles.
5. Healthcare SaaS category: source named employers before treating as target.

### Do Not Pursue Yet
- Senior GRC analyst roles.
- Solutions engineer roles.
- Security engineering roles.
- Customer success roles requiring independent account ownership.

### Closer But Less Glamorous Alternatives
- Technical support roles at compliance automation vendors.
- IT support roles at healthcare SaaS companies.
- Access review or compliance operations coordinator roles.

### Targets To Source Before Considering
- Named healthcare SaaS employers in New York or remote.
- Local/regional companies with junior access review or compliance coordinator roles.

### Patterns
Jordan should use trust/compliance software companies as a direction, but his immediate path is support-adjacent. Drata-style technical support is more realistic than senior GRC or customer trust advisory work.

## Challenger Review
Overall judgment: strong.

Requirement compliance: complete. Main-table employers are sourced, and the previously vague OneTrust/healthcare entries are now either sourced or treated as category targets.

Specific problems:
- The healthcare SaaS category is still not a named sourced employer, so keeping it as watchlist/category rather than recommendation is appropriate.

Recommended prompt edits:
- No meaningful Prompt 2 change needed.

## Evaluation
| Criterion | Score | Notes |
| --- | --- | --- |
| Grounding | 5 | Source rule satisfied. |
| Specificity | 5 | Level-appropriate. |
| Usefulness | 5 | Prioritizes Drata over aspirational Vanta. |
| Honesty | 5 | Senior-role risks visible. |
| Continuity | 5 | Ready for next research step. |
| Efficiency | 5 | No unsourced named employers. |
| Judgment | 5 | Strong early-career restraint. |

V3 result: Prompt 2 publication blocker fixed for this case.

