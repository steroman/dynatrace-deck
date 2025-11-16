---
theme: ./theme
layout: cover
transition: fade
title: A holistic approach to the learning journey
subtitle: Turning Dynatrace's content into a strategic asset
---

<template #logo>
  <img
    src="./assets/logo/Dynatrace_Logo_color_negative_vertical.svg"
    class="w-20"
  >
</template>

<!-- notes:
Hello everyone — for Task 1, I want to walk you through how we can elevate documentation 
from a supporting function into a strategic asset that drives activation, adoption, 
and long-term value for our customers.

This first part introduces a holistic approach to content strategy — one that aligns all the 
different teams producing user-facing information, and ensures customers receive a coherent, 
predictable, and behavior-shaping learning experience. -->
---
theme: ./theme
layout: default
---

<Quote author="A Dynatrace customer">
  It's like the folks at Dynatrace can read my mind.  
  They know what information I need, when I need it,  
  and the best way to provide it to me.
</Quote>

<!-- notes:
This quote captures the vision we’re aiming for: a learning experience that feels effortless, 
anticipatory, and deeply aligned with the user’s needs and mindset at every step.

Most companies deliver information in disconnected pieces. 
But from a user’s point of view, all information — docs, marketing, UI text, support — 
is part of one single experience. When the pieces connect smoothly, the user feels guided. 
When they don’t, the user feels lost.

So the question is: what stands between us and being this kind of company every day?
-->
---
theme: ./theme
layout: default
title: Due diligence
subtitle: Assumptions and "gotchas"
transition: fade
---

<DTChecklist :items="[
  { title: 'Strategy + ops + change management' },
  { title: 'Part 1 and 2 overlap' },
  { title: 'Mindset shift: collective ownership' },
  { title: 'Organizational openness and support' },
  { title: 'Evidence-based decisions' },
  { title: 'Iterative change from experimentation' }
]" />

<!-- notes:
Before we jump in, a bit of housekeeping. I want to make my assumptions explicit so the rest 
of the presentation has the right framing. These aren’t constraints — they’re simply the 
conditions that make this kind of work meaningful and sustainable. This is probably the longest slide, but it's important that we set a solid ground for the rest of the presentation.

The first assumption is that the ideas in this presentation are a mix of strategy, operations, and change 
management. These three are intertwined, and they're all equally important to turn a vision into a reality.

Because of that, the two parts of the presentation naturally overlap. You’ll see some concepts 
show up in both sections, approached from different angles, because strategic shifts and 
operational improvements reinforce each other.

A big goal — and honestly, a hope — is a mindset shift toward collective ownership of 
knowledge. Documentation becomes significantly stronger when everyone who touches the 
product understands their role in shaping the learning journey.

That’s also why organizational openness and support matter. This includes space to influence 
adjacent processes, leadership buy-in to create the space for change to happen, and 
cross-functional willingness to adopt shared ways of working. Without that foundation, 
we’d be swimming upstream.

And because change of this kind never happens overnight, the ideas build towards a culture of evidence-
based decision making. That means having the mechanisms to observe real behavior change 
and use that insight to guide where we focus next.

To get there, we rely on iterative change — experiments, feedback loops, and build-measure-
learn cycles that help us adapt quickly and move forward with confidence.

Finally, it’s worth saying that none of these ideas are meant to be prescriptive. I’m applying 
the same mindset I’m advocating for: using the best evidence I have: past 
experience, industry best practices, and even a user interview — while staying open to refining everything as we learn 
more together.
-->

---
theme: ./theme
layout: twocols
title: Current state
leftTitle: User perspective
rightTitle: Org perspective
---

<template #left>
  <ul>
    <li>🔍 Hard to discover the right information</li>
    <li>🤝 Unclear or inconsistent content</li>
    <li>📉 Reliance on support to complete tasks</li>
  </ul>
</template>

<template #right>
  <ul>
    <li>🛢️ No narrative continuity across team</li>
    <li>⚙️ Content and business goals misaligned</li>
    <li>📊 More cases or drop-off</li>
    <li>⬇️ Low feature discovery</li>
  </ul>
</template>

<!-- notes:
Users often struggle to find what they need, or they find information that doesn’t fully match 
how the product behaves today. That forces them into support channels and slows down their journey.

Internally, the issue is fragmentation. Marketing tells one story, docs tell another, 
and support often ends up creating ad-hoc material to fill gaps.  
Everyone produces content, but no one is orchestrating it.

This dual perspective — user pain and organizational misalignment — creates the perfect storm 
for friction, support escalations, and inconsistent learning experiences.
-->
---
theme: ./theme
layout: twocols
transition: fade
title: Possible futures
leftTitle: No action
rightTitle: Action
---

  <template #left>
    <!-- <h3 class="text-2xl font-semibold mb-4">If we don't act</h3> -->
    <v-clicks>
      <ul class="space-y-2">
        <li>🧱 Growing content debt</li>
        <li>💔 Declining user trust</li>
        <li>💸 Rising support costs</li>
      </ul>
    </v-clicks>
  </template>

  <template #right>
    <v-clicks>
      <ul class="space-y-2">
        <li>🚀 Knowledge accelerates product growth</li>
        <li>🤝 Users self-serve confidently</li>
        <li>💡 Documentation amplifies adoption</li>
      </ul>
    </v-clicks>
  </template>

<!-- notes:
This slide creates the tension and the opportunity.

If we don’t act, content debt keeps growing.  
Writers spend more time patching than improving.  
Users lose confidence in the information.  
Support costs go up, and product adoption slows down.

If we do act, documentation becomes a growth engine. 
It reduces friction, accelerates adoption, and improves time-to-value. 
It also empowers users to self-serve more confidently — which is essential for a complex platform like Dynatrace.

The contrast between these two futures shows why a new approach is worth investing in.
-->
---
theme: ./theme
layout: cover
transition: fade
title: Mission
subtitle: Serve users with relevant, trustworthy, behavior-shaping content, fully aligned with business goals, treated as a first-class product asset, and supported by evidence-based decisions and cross-functional influence.
---

<!-- notes:
Our mission is to serve users with content that actually guides their behavior and helps them succeed.

This requires a shift: documentation can’t be treated as a final deliverable on a checklist.  
It needs to be treated as a product asset — something that evolves, has standards, and is measured by outcomes, 
not volume.

Achieving this means aligning content with business goals, grounding decisions in evidence, 
and influencing the people, processes, and technology involved in shaping the user experience.
-->
---
theme: ./theme
layout: default
transition: fade
title: Solution overview
---

<DTTimeline :items="[
  'Cross-functional team',
  'Map user journeys',
  'Measure what matters',
  'Define process',
  'Shift knowledge left'
]" />

<!-- notes:
These five pillars form the backbone of a holistic documentation strategy.
They’re presented linearly here, but in reality, they depend on each other and are not executed in this order.
A cross-functional team gives us shared ownership.
Mapping user journeys clarifies what content is needed and when.
Measurement helps us focus on what drives behavior.
Process ensures consistency and scalability.
And shifting knowledge left ensures content work starts early and is never an afterthought.
-->
---
theme: ./theme
layout: step
title: Build a cross-functional team
transition: fade
---

<template #step-nav>
  <DTWizardNav :count="5" :active="1" />
</template>

<DTCardGrid :items="[
  { icon: '🤝', title: 'Shared storytelling', size: 'md' },
  { icon: '🏛️', title: 'Content council', size: 'md' },
  { icon: '🧩', title: 'Role clarity', size: 'md' },
  { icon: '🔄', title: 'Continuous feedback', size: 'md' }
]" />

<!-- notes:
Today, every team produces content — marketing, PMM, docs, support, sales, engineering — 
but no one orchestrates the full experience.  
Users feel that fragmentation immediately.

So the first step is to build a cross-functional group responsible for shaping a unified narrative.  
Not a “committee for the sake of meetings,” but a working team aligned around user journeys.

This group defines what content must exist for each stage, who owns it, and how it connects.  
They share signals from their areas, test improvements together, 
and help detect content needs by being the voice of the user in their respective area/stage.

This structure creates shared ownership and prevents misalignment long before it reaches users.
-->
---
theme: ./theme
layout: step
transition: fade
title: Map content to the user journeys
---

<template #step-nav>
  <DTWizardNav :count="5" :active="2" />
</template>

<DTCardGrid :items="[
  { icon: '🗺️', title: 'Map workflows' },
  { icon: '📦', title: 'Define deliverables' },
  { icon: '🤝', title: 'Test in context' },
  { icon: '🔄', title: 'Assess increments' }
]" />


<!-- notes:
Mapping user journeys helps us understand what users are trying to accomplish and what information 
they need at each step. We partner with UX, design, and product to chart key workflows like 
Observe, Ingest, Secure, and Deliver.

Once we understand the journey, we identify the content required at each stage — 
and which deliverables are mandatory for each release tier.

We then validate the content in real context, not as standalone pieces. 
Finally, each new increment is assessed as a delta to the journey map. 
This ensures content evolves in sync with the product and always supports behavior.
-->

---
theme: ./theme
layout: step
transition: fade
title: Measure what matters
---

<template #step-nav>
  <DTWizardNav :count="5" :active="3" />
</template>

<DTCardGrid :items="[
  {
    title: 'Customer outcomes',
    body: [
      '⚡ Faster time-to-value',
      '🚀 Higher task completion',
      '🧭 Less friction'
    ]
  },
  {
    title: 'Business impact',
    body: [
      '📈 Feature adoption uplift',
      '💬 Case deflection',
      '🔧 More self-serve troubleshooting',
      '🤖 Efficiency gains'
    ]
  },
  {
    title: 'Operational efficiency',
    body: [
      '📉 Lower SME dependency',
      '⏱️ Faster idea-to-doc cycle',
      '🤝 Standards adherence'
    ]
  }
]" />

<!-- notes:
To know whether content is working, we focus on outcomes, not engagement.
We want to understand whether content helps users complete tasks faster, 
resolve issues on their own, and adopt key features.

From a business perspective, good documentation should reduce support load, 
increase activation, and support adoption of high-value workflows.

Operationally, we measure how efficiently we can produce and maintain content: 
how often writers depend on SMEs, how long it takes to go from roadmap change to published docs, 
and how consistently we follow standards.

These metrics create feedback loops that guide improvement.
-->

---
theme: ./theme
layout: step
transition: fade
title: Define a process
---

<template #step-nav>
  <DTWizardNav :count="5" :active="4" />
</template>

<DTCardGrid :items="[
  { icon: '🧱', title: 'Tiering & ownership' },
  { icon: '⚙️', title: 'Automation & triggers' },
  { icon: '🔄', title: 'Lifecycle governance' },
  { icon: '🚀', title: 'Pilot → Learn → Scale' }
]" />

<!-- notes:
Defining process doesn’t mean adding bureaucracy — it means creating predictability.

Tiering tells us what content must be produced for each release level 
and who is accountable. Automation ensures that roadmap changes trigger content work early, 
so writers get what they need without chasing information.

Governance keeps content fresh by treating every product change as a content delta. 
This reduces staleness dramatically.

And because every organization is different, we start with a small pilot, 
test the process in one product area, and refine before scaling.
-->


---
theme: ./theme
layout: default
transition: fade
title: Shift content left
---

<template #step-nav>
  <DTWizardNav :count="5" :active="5" />
</template>

<DTCardGrid :items="[
  { icon: '⏱️', title: 'Start earlier' },
  { icon: '📚', title: 'Shared responsibility' },
  { icon: '⚙️', title: 'Standards + tooling' },
  { icon: '🌱', title: 'Culture change', size: 'lg' }
]" />

<!-- notes:
Shifting content left means surfacing information needs earlier in the development cycle.
When writers are involved early, they stop acting as information hunters and become strategic partners.

This also builds shared responsibility: everyone contributes 
— PMs, engineers, designers, support — because content becomes part of the product itself.

Standards and tooling make contribution easy and reduce friction. 
Over time, this creates a cultural shift: knowledge becomes embedded in how the product is built, 
not something added afterward.
-->

---
theme: ./theme
layout: default
transition: fade
title: Next steps
---

<DTChecklist :items="[
  { title: 'Define success' },
  { title: 'Enable contributors' },
  { title: 'Pilot a workflow' },
  { title: 'Improve visibility' },
  { title: 'Learn → refine → scale' }
]" />

<!-- notes:
To bring this to life, we start simple.

First, define success clearly so every team knows what “good” looks like.
Second, enable contributors through training and lightweight standards.
Then run a small pilot to validate journey mapping, tiering, and governance.
Build visibility with dashboards so teams see the impact early.
And finally, refine and scale the approach once we’ve proven it works.

This sets the foundation for Task 2 — where we look at how to modernize the operational lifecycle 
that makes this strategy sustainable.
-->


---
theme: ./theme
layout: cover
transition: fade
title: Part 2
subtitle: Modernizing the content lifecycle
---

<!-- notes:
In Task 1, we focused on rethinking documentation strategically. 
Here, we look at the operational backbone that makes that strategy actually work.
The reality today is that writers struggle to keep up with product velocity, and content becomes stale quickly.
That creates risk for users, support, and even LLM accuracy.
So in this section, I’ll walk you through a practical path for evaluating the current lifecycle, 
understanding where friction lives, and transitioning to a system that scales with the product.
-->
---
theme: ./theme
layout: cover
transition: fade
title: Mission
subtitle: Create a content system that focuses our effort where it matters, guided by clear priorities, shared standards, and scalable workflows, so that documentation keeps pace with the business and amplifies its impact.
---

<!-- notes:
The mission behind modernizing the lifecycle is straightforward: 
we want to deliver velocity and quality at the same time, without burning out the team.
That means reducing friction so writers can spend most of their time actually writing, 
and ensuring that PMs and engineers know exactly what inputs the docs team needs and when.
A modern lifecycle gives us predictable flow, strong quality standards, 
and content that keeps up with the pace of change.
-->

---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# Our operating assumptions

**Velocity =** less friction · better tooling · solid processes  
**Quality =** clarity · relevance · strong inputs  
**Scalability =** standards · automation · shared ownership  
**Sustainability =** balanced workloads · clear roles

<!-- notes:
These assumptions guide every decision in this lifecycle.
Velocity comes from removing friction and giving teams clear processes and tools.
Quality depends on clear inputs—writers can only deliver great content when they get the right context early.
Scalability comes from standardization and automation, not from heroics.
And sustainability is essential: if workloads or expectations aren’t balanced, the system collapses.
These assumptions shape the whole approach.
-->
---
theme: ./theme
layout: default
transition: fade
---

<Quote author="CPO">
Documentation is aligned with business outcomes and drives product adoption, reduces support workload, and makes users happy.</Quote>

<Quote author="Information Developer">
I spend most of my time on things that matter and I feel a sense of ownership and purpose.
</Quote>

<Quote author="Product Manager">
I see documentation as a core product pillar and I know exactly what my role is in taking it there.
</Quote>

<!-- notes:
Success looks different for different people.
For leadership, it’s predictability and alignment with business goals.
For writers, it’s being able to focus on writing instead of chasing inputs or dealing with noise.
For PMs, it’s clarity: knowing exactly what’s expected and how to provide the right inputs.
These perspectives reflect the cultural and operational shift we want to create.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# The path forward

**1. Evaluate the system**  
**2. Audit scope**  
**3. Prioritize what matters**  
**4. Allocate time deliberately**  
**5. Strengthen operations**  
**6. Measure performance**  
**7. Start small**

<!-- notes:
These are the seven steps I’ll walk through.
They form a practical, realistic path toward a modern lifecycle—from evaluation, 
to clarity, to operational strength, to measurement, and finally to a safe, small-scale rollout.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# Step 1  
## Evaluate the system

<!-- notes:
Evaluating the system means understanding how work actually flows today.
I start with people: where writers lose time, what interrupts their focus, 
and how often they have to chase context instead of writing.
Then process: what the end-to-end workflow really looks like, 
how many workstreams compete for attention, and where handoffs break.
Then technology: where metadata, templates, or automation are missing and causing manual rework.
A key part of this step is centralizing all incoming work into a single board so we can see and prioritize it consistently.
Evaluating the system reveals where friction lives and where improvements will have the highest impact.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# Step 2  
## Audit the scope

<!-- notes:
Auditing the scope means identifying what we actually produce and why.
We list content types, formats, and variants, and evaluate each one based on user value and business value.
Many organizations accumulate content that no longer serves a purpose or is duplicated in multiple places.
The audit helps us declutter, identify high-impact content areas, 
and ensure that what we maintain aligns with user needs and with the workflows defined in Task 1.
This step sets the stage for meaningful prioritization.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# Step 3  
## Prioritize what matters

<!-- notes:
To focus the team’s efforts, I use a dual-track prioritization model.
For strategic improvements—revamps, experiments, new content types—I use evidence-based tools like 
North Star, OKRs, GIST, confidence scoring, and ICE. This ensures we invest time in ideas that have real impact.
For operational work—especially feature documentation—we rely on the tiering model from Task 1.
Tier 0 always gets delivered, Tier 1 usually does, and Tier 2 only if capacity allows.
This creates clarity for writers and PMs and helps everyone understand why some work moves forward and some doesn’t.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# Step 4  
## Allocate time deliberately

<!-- notes:
Balancing feature documentation, revamps, and experimentation requires intentional planning.
Writers benefit from learning to estimate work realistically, and retros help improve those estimates over time.
We protect experimentation time by defining quotas so that innovation doesn’t get pushed aside by day-to-day delivery.
Leadership alignment is key—PMs and engineers should understand that experimentation isn’t optional; it’s what improves the system long-term.
Training contributors on workflows and templates also reduces friction and speeds up delivery.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# Step 5  
## Strengthen operations

<!-- notes:
Operational rigor is what makes a lifecycle scalable.
We start with clear guidelines and templates so writers don’t have to reinvent structure or terminology.
We expand content reuse where it makes sense, reducing maintenance effort.
We invest in tooling: automated linting, scripts, standardized naming, and snippet libraries that speed up writing.
Contribution guidelines help PMs and engineers provide inputs that are complete and consistent.
Governance ties everything together: routine QA, adherence checks, and roadmap-driven deprecation to prevent staleness.
Strengthening operations reduces rework and creates a healthier, more predictable content system.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# Step 6  
## Measure performance

<!-- notes:
A modern lifecycle relies on evidence, not guesswork.
We look at users: task completion, onboarding friction, and how well content helps them move through workflows.
We look at business outcomes like case deflection and feature adoption.
And we look at operations: writer focus time, review cycles, and overall throughput.
Measuring across these three lenses helps us decide what to improve, what to retire, 
and where to invest next so the system keeps evolving in the right direction.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# Step 7  
## Start small

<!-- notes:
We introduce change safely by starting small.
We pick a low-effort, high-impact part of the product and apply the new intake, prioritization, and operational foundations to it.
We measure results, gather feedback, and refine the model before expanding it.
A good pilot creates pull rather than push—teams see the improvement and want the same clarity and consistency.
This approach builds trust and minimizes risk during the transition.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# Ideas worth exploring  
### *Examples, not prescriptions*

<!-- notes:
I want to close with a set of ideas worth exploring once the foundations are in place.
These are not prescriptions, because solutions only work when they fit the organization.
But here are areas that often unlock value:
improved templates and guidelines, automation through linting or scripts,
better contribution workflows, stronger governance loops, case deflection mechanisms, 
content reuse strategies, and RAG-based authoring assistance to improve consistency.
These ideas can spark future conversations after the lifecycle evaluation begins.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# Wait — what about AI?

<!-- notes:
AI plays a role across every part of the lifecycle, but it can’t replace the foundations.
AI can accelerate formatting, improve suggestions, detect inconsistencies, 
and power internal tools or chatbots.
But if processes are unclear, inputs weak, or governance missing, 
AI will simply amplify the chaos rather than solve it.
That’s why we focus on building strong processes first.
Once those are in place, AI becomes a powerful multiplier that makes teams faster and more accurate.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# Thank you  
### Resources & references  
*(QR code placeholder)*

<!-- notes:
Thank you for the time and attention.
Here I’ll add a QR code linking to my LinkedIn.
Some of the influences behind this approach include evidence-based prioritization frameworks, 
modern documentation tooling, and collaborative models for treating docs as a product.
Happy to share any of these references afterward.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
---

# Q&A

<!-- notes:
I’m happy to go deeper into prioritization, governance, tooling, 
or how to roll this out in a realistic and incremental way.
-->