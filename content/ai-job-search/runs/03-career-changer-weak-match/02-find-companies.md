# V3 Prompt Run: 02 Find Companies

Prompt: `prompts/v3/02-find-companies.md`  
Test case: `test-cases/03-career-changer-weak-match.md`

## Prompt Input
Input artifact: reusable profile from `runs/V3/03-career-changer-weak-match/01-capability-profile.md`.

## Prompt Output

### Prioritized Sourced Employer List
| Priority | Employer | Source status | Why this could be a match | Primary lane | Role search keywords | Role red flags | Hiring/access risk |
| --- | --- | --- | --- | --- | --- | --- | --- |
| High | Newsela | Sourced: [careers](https://newsela.com/careers), [content guidelines](https://help.newsela.com/en/articles/13656207-newsela-s-content-guidelines), [Learning Suite](https://help.newsela.com/en/articles/13944229-newsela-learning-suite) | Newsela's K-12 content, teacher support, and content quality context is closer to Sofia's classroom/curriculum evidence than Duolingo's senior product/research roles. | K-12 content/curriculum operations | content, curriculum, teacher success, implementation, learning design | engineering, product analytics, senior research | Current role availability still needs direct scan. |
| Medium-high | Curriculum Associates | Sourced: [careers](https://www.curriculumassociates.com/about/careers) | K-8 curriculum, educator support, research-backed products, and early-career/remote/hybrid language suggest more possible educator-adjacent paths. | Curriculum/customer education | curriculum specialist, professional learning, content, teacher success | PhD research, sales quota, software engineering | Location/role type must be checked. |
| Medium | Duolingo | Sourced: [strategy overview](https://duolingo.gcs-web.com/company-strategy-overview-0), [Learning + Curriculum careers](https://careers.duolingo.com/?department=Learning+%2B+Curriculum), [Pittsburgh roles](https://careers.duolingo.com/?location=Pittsburgh%2C+PA) | Mission/location/language learning are attractive, but current visible roles are senior/research/product-heavy. | Spanish curriculum QA if role exists | Learning + Curriculum, Spanish content, curriculum QA, content review, scaling operations | senior PM, AI/ML, data scientist, Head of Efficacy Research | High risk: role evidence is weak for Sofia's transition level. |
| Medium | Outschool | Sourced: [careers](https://outschool.com/careers), [educator requirements](https://support.outschool.com/en/articles/1638033-becoming-an-educator-on-outschool) | Teacher/community marketplace may create bridge paths through educator work or learner/community support. | Teacher/community education | educator support, learning operations, community, contract teacher | engineering/data leadership, low-paid teaching-only if salary target matters | Compensation fit uncertain; educator path may not meet salary needs. |
| Medium | Outschool.org | Sourced: [careers](https://outschool.org/careers) | Nonprofit education access work may value teacher-facing experience and program support. | Education program operations | program support, family support, education funding, community partnerships | low salary, grant-funded short term, roles outside remote/Pittsburgh constraints | Current openings must be checked. |

### Top 5 Sourced Employers To Research Next
1. Newsela: strongest classroom/content fit.
2. Curriculum Associates: stable curriculum and teacher-support fit.
3. Duolingo: keep as narrow aspirational Pittsburgh target.
4. Outschool: possible bridge path.
5. Outschool.org: mission-adjacent nonprofit path.

### Do Not Pursue Yet
- Duolingo product manager, data science, AI/ML, or senior learning science roles.
- Any role requiring relocation.
- Unpaid or underpaid content-review labor that cannot meet Sofia's economic needs.

### Closer But Less Glamorous Alternatives
- Paid K-12 content quality roles.
- Teacher success/customer education roles.
- Curriculum operations at education publishers.
- Paid Spanish content review with clear scope and compensation.

### Targets To Source Before Considering
- Named Pittsburgh education nonprofits.
- Local curriculum vendors or tutoring/learning organizations with paid program roles.

### Patterns
Sofia should not anchor on Duolingo. Her higher-probability path is with employers whose public materials explicitly value K-12 content quality, teacher support, curriculum operations, or education access.

## Challenger Review
Overall judgment: strong.

Requirement compliance: complete. The previous unsourced local category is separated, and all main-table employers have source links.

Specific problems:
- Outschool educator work may be a bridge, not employment. It is correctly treated with compensation caution.

Recommended prompt edits:
- No meaningful Prompt 2 change needed.

## Evaluation
| Criterion | Score | Notes |
| --- | --- | --- |
| Grounding | 5 | All recommendations sourced. |
| Specificity | 5 | Correctly ranks Newsela above Duolingo. |
| Usefulness | 5 | Clear action order. |
| Honesty | 5 | Duolingo risk remains visible. |
| Continuity | 5 | Strong next research targets. |
| Efficiency | 5 | Avoids dream-company overinvestment. |
| Judgment | 5 | Good career-change realism. |

V3 result: Prompt 2 publication blocker fixed for this case.

