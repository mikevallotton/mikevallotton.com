# V3 Prompt Run: 02 Find Companies

Prompt: `prompts/v3/02-find-companies.md`  
Test case: `test-cases/05-local-small-employer.md`

## Prompt Input
Input artifact: reusable profile from `runs/V3/05-local-small-employer/01-capability-profile.md`.

## Prompt Output

### Prioritized Sourced Employer / Organization List
| Priority | Employer | Source status | Why this could be a match | Primary lane | Role search keywords | Role red flags | Hiring/access risk |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Medium-high | Books in the City / We Are LIT | Sourced: [Books in the City](https://www.grandrapidsbookshop.com/), [We Are LIT](https://wearelitgr.com/) | Local independent bookstore with multicultural/community book focus; Marcus has retail, library, inventory, newsletter, and local author evidence. | Local bookstore/community operations | bookstore, retail, events, inventory, local author, community | unpaid help, every-weekend schedule, manager/buyer without proof | Hiring capacity unknown; small-business budget risk. |
| Medium-high | Schuler Books | Sourced: [Schuler event/promotions page](https://www.schulerbb.com/promo/), [Michigan.org listing](https://www.michigan.org/property/schuler-books-grand-rapids) | Larger regional bookstore with Grand Rapids presence, author/events infrastructure, and likely more staffing capacity than a small shop. | Bookstore retail/events | bookseller, events, inventory, receiving, merchandising | low hourly only if full-time income needed, manager requirements | Better capacity than small shop, but current openings need direct check. |
| Medium-high | Grand Rapids Public Library | Sourced: [GRPL jobs](https://www.grpl.org/jobs/), [Library Assistant II example](https://www.governmentjobs.com/careers/grandrapids/jobs/newprint/4538177) | Marcus has circulation and programming logistics experience; GRPL has formal jobs/volunteer systems and public-service alignment. | Library/community programming support | circulation assistant, patron services, programming assistant, library assistant | MLS librarian, civil-service requirements, schedule mismatch | Public process; current openings vary. |
| Medium | Literacy Center of West Michigan | Sourced: [official site/events](https://literacycenterwm.org/) | Literacy/community mission plus volunteer coordination and newsletter experience; public events show active volunteer/community programming. | Literacy/community operations | program assistant, volunteer coordinator, communications, events | unpaid-only path, grant-funded low pay, degree requirements | Paid role availability unknown; volunteer info is not a job. |
| Medium | Arts Marketplace / Studio Park ecosystem | Sourced: [Downtown Retail Incubator Program](https://downtowngr.org/announcements/2025/09/arts-marketplace-at-studio-park-and-ddri-launch-retail-incubator-program), [Holiday Market at Studio Park 2026](https://www.zapplication.org/event-info.php?ID=14608&ct=t%28Link+Tracking+-+TWA_COPY_01%29) | Studio Park/Arts Marketplace ecosystem overlaps with local retail, vendor, event, and community operations. | Local retail/event operations | event assistant, retail incubator, vendor coordinator, marketplace, operations | unpaid event labor, irregular schedule, no paid role | Employment structure unknown; treat as ecosystem path. |

### Top 5 Sourced Employers To Research Next
1. Books in the City / We Are LIT: strongest values/skills fit.
2. Schuler Books: likely stronger hiring capacity.
3. Grand Rapids Public Library: stable adjacent employer.
4. Literacy Center of West Michigan: mission-adjacent community/literacy path.
5. Arts Marketplace / Studio Park ecosystem: local retail/event ecosystem path.

### Do Not Pursue Yet
- Any unpaid labor framed as job-search experience.
- MLS-required librarian roles.
- Senior marketing roles.
- Roles requiring every weekend if that violates constraints.

### Closer But Less Glamorous Alternatives
- Larger bookstore retail/events roles, starting with [Schuler Books](https://www.schulerbb.com/promo/).
- Library assistant roles, starting with [GRPL jobs](https://www.grpl.org/jobs/).
- Paid literacy or community program roles, starting with [Literacy Center of West Michigan](https://literacycenterwm.org/).

### Targets To Source Before Considering
- Other Grand Rapids independent gift/book retailers.
- Local arts nonprofits with paid event coordinator roles.
- Neighborhood business associations hiring for operations or events.

### Patterns
Marcus should combine dream-fit small bookstores with more stable adjacent employers. For local searches, the target set should include bookstores, libraries, venues, literacy nonprofits, and community retail ecosystems.

## Challenger Review
Overall judgment: strong.

Requirement compliance: complete. The V3 local-source problem is fixed: Schuler, GRPL, Literacy Center, and Studio Park/Arts Marketplace now have source links.

Specific problems:
- Some sources demonstrate ecosystem fit rather than open jobs. That is acceptable for Prompt 2; Prompt 3 must verify current hiring before action.

Recommended prompt edits:
- No meaningful Prompt 2 change needed.

## Evaluation
| Criterion | Score | Notes |
| --- | --- | --- |
| Grounding | 5 | All main rows sourced. |
| Specificity | 5 | Strong local-employer framing. |
| Usefulness | 5 | Adjacent stable paths are clear. |
| Honesty | 5 | Hiring capacity risk remains visible. |
| Continuity | 5 | Ready for focused research. |
| Efficiency | 5 | No unsourced named employers. |
| Judgment | 5 | Strong paid-work boundary. |

V3 result: Prompt 2 publication blocker fixed for this case.

