Writers ought to write, remove any friction

1. The process starts with analyzing the process from the feature planning to publishing and see where frictions can be removed. Where are the inefficiencies? How can writers be shielded from noise? Should there be a first-line of assessment and then redirect to writers? Can such first-line be automated by asking to provide info with rich metadata? E.g. Create a Slack handle (@docrequests) when this doc requests is tagged, they ask for additional metadata, so that they do the first level of information collection, then reroute to the relevant writer.

1a. Analyze the technology
1b. Analyze the people
1c. Part of the process analysis focuses on analyzing workstreams, and understanding where work comes from and centralize everything in a single board so that it can be tracked.
1d. Analyze the performance (linked to part 1: what is the flow we'd like learners to go through and where is it breaking? When it's not breaking, is it triggering the behavior change we want?)

2. The second step is to audit scope.

3. Define a prioritization framework: it's just as important to know what goes first as it is to know what to say "no" to. This criteria must be socialized and have the stakeholder's buy-in, because they need to adopt them to favor decision making.

Evidence based

North Star > OKRs > GIST > (Filter by confidence) >  ICE > Prioritization

GIST framework

Goal > Ideas > Steps

It's also important to build the infrastructure to be evidence-based. Ability to set up experiments, ability to serve different content to different cohorts. Ability to track certain metrics and indicators.

Balancing the experimentation with producing feature rollout documentation is key. So a quota must be established and make sure we can experiment while delivering others. We have already seen in Task 1 how to prioritize delivery of content based on the behavioral change it can trigger. We've also seen in task 1 how to create a process that establishes a default set of content based on release tier. Defining standard types and generating tools and processes to produce them more efficiently will free up time for experimentation.

4. Define time allottment: how much time each individual must focus on feature vs revamp? Here it's important to Teach writers how to estimate: start conservatively, do retros (is there any question you had to ask that could be added to the standard set of questions to be answered beforehand?), and estimation gets better over time. The key part of doing good estimation is the ability to foresee blockers or bottlenecks and try to prevent them.

It's important to discuss this with leadership and create the right environment for experimentation to happen. PMs dedicated to a product must know that a part of the efforts MUST be dedicated to experimentation. Training training training collaborators is a key part.

5. Small, evidence-based iterations. Start small: take a project with big impact but low effort to use as the pilot. Assess outcome and adjust. Make stakeholders say "we want more of this, what do we need to do to have it? A culture of experimentation can be built by showing the benefits of a rigorous approach and creating a safe space for experimentation.

6. The third step is analyzing the performance. Data must be collected to cross check performance against business goals and take informed decisions and pivot/iterate accordingly. At the same time, data must be collected about the operational side of things.

7. Strengthening the operational side of everything is key. Some solutions are below.

Iron triangle: scope, resources, time.

Information foraging -> Improve quality of input

STRENGTHEN THE OPERATIONAL SIDE OF THE TEAM -> This is all Operational rigour.

Solutions:

- Content guidelines
- Template creation
- Content reusage in general (do we need it, can we do it, what business aspects create variants for us?)
- Template adherence engine
- Contribution guidelines
  - Make it very clear how you expect people to contribute and make it effortless for them.
- Scripting: e.g. implement a vale/remark lint rule and create a script to fix them all
- Training to everyone in the company, when they join, docs = product, what does it mean to support docs in your role (PM, Dev, Designer, etc). Becomes part of company-wide onboarding.
  - Docs are not a chore, they're a product asset
- Automated checks: linting, vale MCP server, remark
- Automated screenshot naming
- Clear docs approval process and SLAs (tasks can't sit in review with PMs for 1 week)
  - Incentive system (e.g. PMs performance is also evaluated to their adherence to the SLAs)
  - Engineering sprint planning allots X% to supporting writers
- Writing case deflection too: when someone submits a request, we give them articles to check before escalating to a real human?
- Automated Slack notifications
- CLI/VSCode tooling like snippets or DWK (Documentation Writing Kit)
  - RAG that can autocomplete based on code and/or docs repo (Like Windsurf). Among its benefits is that definitions exist only once.
  - Tool to standardize the format of value in a table. E.g. backticks with associated vale rule that can detect values based on casing (snakecase or camelcase not wrapped.)
- Strong governance (expand on this, what does it mean?)
- Reason in workflows
  - Reasoning in workflows also allows to assess divergence from them: errors, different paths, shortcuts, limitations, business logic, etc
  - KTLO?
- Checklists
- Writer KTLO (solves docs bugs for a week, then rotates)
- Open-source docs with contribution (tells us a lot about whether people actually read and understand. Grafana does it, Datadog does it)

## Governance

- Deprecation also enters the roadmap to prevent staleness
- Periodic QA random (e.g. look at 3 articles per flow and assess quality)
- Periodic flow-adherence QA (every 6 months evaluate whether the content still follows the main flows and covers them)
- Assess content performance and decide action plan for lowest-performing content types
- Automated content staleness notifications: Every 6 months that an article hasn't been updated, a notification is sent to the author. This didn't work for us in fast-paced environments because the approach gave more importance to response time than to thorough assessment, so I'd rather prevent staleness at the source and deprioritize the retroactive assessment. However, a staleness checklist (for example, don't only check the content, but also the performance, the relevance within how the workflow evolved). Or automate this with docs as tests.
- Periodic cost analysis: is our process still optimal? Do any processes need to be reevaluated, are we generating costs that we could avoid (e.g. stale content?)
- Strong reporting (dashboards, periodic assessments of metrics)

## Analysis

THE GOAL ISN'T FOR PEOPLE TO SPEND MORE TIME ON DOCS

- performance (visits, time spent (it's not equal for each content type. e.g. how-tos need more time, reference needs less), bounce rates)
- Usability
  - Readability score (?)
  - Chunking detector
  - Comprehension tests
- User feedback (do customers find it useful)
- AI Chatbots:
   - To evaluate self-serve ability/case deflection, see containment rate (how many chats started as self-serve had to end up in a support ticket?)
   - Wrong answers
   - Term usage to evaluate taxonomies

- User behavior metrics
  - Feature adoption
  - Task completion
  - Time to value
  - Task errors

## Work streams

- Talk to support and get feedback about what questions are they answering the most. Work with them to define a tagging system that allows you to be self-sufficient in 
checking reporting, but also maintain a relationship with them with consistent check-ins. Make them feel empowered to contribute.
  - What to check with support:
    - how-to questions not tackled in the docs
    - misleading information in docs (wrong or outdated instructions, leading to errors, etc)
    - reference material not tackled in the docs
    - difficulty in onboarding
    - recurring troubleshooting issues

- Feedback channels:
  - Internal issue reporting mechanism: Slack workflows that generate tickets, Bots that can read the conversations and automatically generate a ticket
  - Community (Is someone complaining in a forum?) (This require ownership and training: e.g. community managers to report back periodically)

## Resources

- Better onboarding book
- Itamar Gilad's material
- https://idratherbewriting.com/blog/collaborative-thought-partner-not-autonomous
- YT talk at WTD by Muse's director