---
theme: ./theme
layout: cover
transition: fade
title: Welcome
---

<template #logo>
  <img
    src="./assets/logo/Dynatrace_Logo_color_negative_vertical.svg"
    class="w-20"
  >
</template>

---
theme: ./theme
layout: default
title: Table of contents
transition: fade
---

<DTChecklist :items="[
  { title: 'Part 1 — A holistic approach to the learning journey' },
  { title: 'Part 1 — Q&A' },
  { title: 'Part 2 — Modernizing the content lifecycle' },
  { title: 'Part 2 — Q&A' }
  ]" />

<!-- notes:
A quick overview of what we'll cover today.

Part 1 focuses on the strategic layer — aligning all the contributors to user-facing content 
and reframing documentation as a cohesive, behavior-shaping learning journey.

Part 2 takes a more operational perspective — investigating how to modernize the content 
lifecycle so writers can work efficiently, content stays fresh, and quality scales without 
burnout.

We'll have Q&A sessions at the end of each part to unpack the presentation and reasoning.
-->

---
theme: ./theme
layout: default
title: Housekeeping 🧹
subtitle: Assumptions and clarifications
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
title: Testimonial
---

<div class="flex justify-center mt-10">
  <Quote author="A Dynatrace customer">
    It's like the folks at Dynatrace can read my mind.  
    They know what information I need, when I need it,  
    and the best way to provide it to me.
  </Quote>
</div>

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
layout: twocols
title: Current state
leftTitle: User perspective
rightTitle: Org perspective
---

<template #left>
  <DTCard size="md">
    <ul class="space-y-2 text-left">
      <li>🔍 Hard to discover the right information</li>
      <li>🤔 Unclear or inconsistent content</li>
      <li>🎟️ Reliance on support to complete tasks</li>
      <li>🤬 Frustration</li>
    </ul>
  </DTCard>
</template>

<template #right>
  <DTCard size="md">
    <ul class="space-y-2 text-left">
      <li>🛢️ No narrative continuity across journey</li>
      <li>⚙️ Business goals misalignment</li>
      <li>💸 Lack of self serve (support, drop-offs, hand-holding)</li>
      <li>⬇️ Low feature discovery</li>
      <li>💨 Churning</li>
    </ul>
  </DTCard>
</template>

<!-- notes:
Users often struggle to find what they need, or they find information that doesn’t fully match 
how the product behaves today. That forces them into support channels and slows down their journey, which ultimately causes frustration, 

Internally, the issue is fragmentation. Marketing tells one story, docs tell another, 
and support often ends up creating ad-hoc material to fill gaps.  
Everyone produces content, but no one is orchestrating it.

This dual perspective — user pain and organizational misalignment — creates the perfect storm 
for friction, support escalations, and inconsistent learning experiences.
-->

---
theme: ./theme
layout: default
transition: fade
title: Possible futures
subtitle: If we take no action
---

<DTChecklist :items="[
  { title: 'Growing content debt' },
  { title: 'Declining user trust' },
  { title: 'Rising support costs' },
  { title: 'Low morale' }
]" />

<!--  notes:
We've already touched on some of these, but it’s worth pausing to look at the full picture of what happens if we don’t act strategically on our content.

Content debt keeps piling up faster than we can manage.
Writers spend more time patching issues than improving the experience.
As inconsistencies grow, users lose trust and start relying more on support to get through basic tasks.
And as support volume rises, the product becomes harder to adopt and harder to scale.

This is the trajectory that we may be seeing if we stay reactive.
-->
---
theme: ./theme
layout: default
transition: fade
title: Possible futures
subtitle: If we act
class: text-center
---

<DTChecklist :items="[
  { title: 'Knowledge accelerates product growth' },
  { title: 'Users self-serve confidently' },
  { title: 'Documentation amplifies adoption' },
  { title: 'Positive bottom line' }
]" />

<!-- notes:

But when we take a strategic, operational approach, the picture changes completely.

Documentation becomes a growth lever instead of a bottleneck.
Clear, reliable content reduces friction across the whole journey and helps users self-serve with confidence.
And when users can move faster, product adoption increases, onboarding becomes smoother, and the cost-to-serve goes down.

This is the opportunity: by strengthening how we operate, we turn documentation into a multiplier for the entire product ecosystem.

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
title: Solution strategy
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
  { icon: '🕸️', title: 'Visible relationships' },
  { icon: '🔄', title: 'Increments are deltas' }
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
layout: image-pane
title: Workflow visualization
image: ./assets/top-performer-comms-journey-mapping.png
# imageWidth: max-w-3xl
imageHeight: max-h-[28vh]
# credit: "Source: Stefano Romanelli"
# creditUrl: "https://example.com"
---

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
  { icon: '🚀', title: 'Optimize all workstreams' }
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
  { icon: '🌱', title: 'Culture change'}
]" />

<!-- notes:
Shifting content left means surfacing information needs earlier in the development cycle.
When writers are involved early, they stop acting as information hunters and become strategic partners.

This also builds shared responsibility: everyone contributes 
— PMs, engineers, designers, support — because content becomes part of the product itself.

Standards and tooling make contribution easy and reduce friction. 
Over time, this creates a cultural shift: knowledge becomes embedded in how the product is built, 
not something added afterward. But we also develop a culture of lean experimentation and of becoming evidence-driven.
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
  { title: 'Robust analytics' },
  { title: 'Feedback loops (build > measure > learn)' },
  { title: 'Pilot a workflow' }
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
layout: image-checklist
transition: fade
title: Next steps
image: ./assets/mindset-shift.jpg
imageWidth: max-w-xl
imageHeight: max-h-[45vh]
credit: "Stephan Delbos"
# creditUrl: "https://example.com"
---

<DTChecklist :items="[
  { title: 'Define success' },
  { title: 'Enable contributors' },
  { title: 'Robust analytics' },
  { title: 'Feedback loops (build > measure > learn)' },
  { title: 'Lean experimentation' }
]" />

---
theme: ./theme
layout: cover
transition: fade
class: text-center
title: Q&A
---

---
theme: ./theme
layout: cover
transition: fade
title: Modernizing the content lifecycle
subtitle: Building the foundation for sustainable content operations at scale
---

<template #logo>
  <img
    src="./assets/logo/Dynatrace_Logo_color_negative_vertical.svg"
    class="w-20"
  >
</template>

<!-- notes:
For Task 2, we're going to shift from strategy to operations — 
specifically, how we modernize the content lifecycle so writers 
can focus on high-value work, content stays fresh, and end-user 
experiences continuously improve.

This part outlines how we evaluate the current system, identify 
bottlenecks, and introduce a scalable, data-informed, and 
developer-friendly lifecycle model. -->

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
layout: twocols
title: Guiding principles
transition: fade
---

<template #left>
<div class="flex flex-col gap-6">

  <DTCard title="Velocity" size="sm">
    <ul class="space-y-1 text-sm text-left text-dt-text-muted">
      <li>• Less friction</li>
      <li>• Better tooling</li>
      <li>• Solid processes</li>
    </ul>
  </DTCard>

  <DTCard title="Quality" size="sm">
    <ul class="space-y-1 text-sm text-left text-dt-text-muted">
      <li>• Clarity</li>
      <li>• Relevance</li>
      <li>• Strong inputs</li>
    </ul>
  </DTCard>

</div>
</template>

<template #right>
<div class="flex flex-col gap-6">

  <DTCard title="Scalability" size="sm">
    <ul class="space-y-1 text-sm text-left text-dt-text-muted">
      <li>• Standards</li>
      <li>• Automation</li>
      <li>• Shared ownership</li>
    </ul>
  </DTCard>

  <DTCard title="Sustainability" size="sm">
    <ul class="space-y-1 text-sm text-left text-dt-text-muted">
      <li>• Balanced workloads</li>
      <li>• Clear roles</li>
      <li>• Expectation hygiene</li>
    </ul>
  </DTCard>

</div>
</template>

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
title: What they'll say about us
---

<div class="flex flex-col gap-3 items-center">

  <Quote author="CPO" variant="compact" v-click>
    Documentation is aligned with business outcomes and drives product adoption,
    reduces support workload, and makes users happy.
  </Quote>

  <Quote author="Information Developer" variant="compact" v-click>
    I spend most of my time on things that matter and I feel a sense of ownership and purpose.
  </Quote>

  <Quote author="Product Manager" variant="compact" v-click>
    I see documentation as a core product pillar and I know exactly what my role is in taking it there.
  </Quote>

</div>


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

<DTTimeline :items="[
  'Analyze the system',
  'Audit scope',
  'Prioritize with evidence',
  'Allocate time deliberately',
  'Strengthen operations',
  'Measure performance',
  'Start small'
]" />

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
title: Analyze the system
---

<template #step-nav>
  <DTWizardNav :count="7" :active="1" />
</template>

<!-- Visible content derived from the speaker notes -->
<DTCardGrid :items="[
  { icon: '👥', title: 'People', body: ['Collaboration', 'Skills', 'Capacity'], size: 'sm' },
  { icon: '🔁', title: 'Process', body: ['Workstreams', 'Dependencies', 'Standards'], size: 'sm' },
  { icon: '🛠️', title: 'Technology', body: ['Reliability', 'Automation', 'Manual work'], size: 'sm' },
]" />

<!-- notes:
Evaluating the system means observing how work happens.

I start with people: how they collaborate day to day, where they lose time or context, and whether they have the skills and clarity they need to work at their best, and whether their capacity is optimal.

Then I look at process: the real end-to-end workflow, the workstreams competing for attention, where handoffs break, and especially the dependencies between steps. These are the structural dependencies that slow work down — when one part of the system can’t progress because another process, approval, or team isn’t ready. This is where most bottlenecks tend to appear.

Then I look at technology: whether the tooling is reliable, whether automation exists where it should, and where it could be improved to increase efficiency.

The goal of this step is simple: reveal where friction lives, understand what slows the system down, and identify where improvements will have the highest impact.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
title: Analyze the scope
---

<template #step-nav>
  <DTWizardNav :count="7" :active="2" />
</template>

<DTCardGrid :items="[
  { icon: '🗂️', title: 'See what exists', size: 'sm' },
  { icon: '🎯', title: 'Understand why', size: 'sm' },
  { icon: '📏', title: 'Define value', size: 'sm' }
]" />

<!-- notes:
Analyzing the scope means getting a clear picture of what we actually produce today and whether it still matters.

I start by mapping all the content types and variants across the product. Not to create a catalog, but to understand our real footprint: where our time goes, what we maintain, and what still exists simply because “we’ve always done it that way.”

Then I look at value — and here I bring back what we defined in Task 1. We said that value isn’t engagement. People don’t read documentation for fun. Value is tied to behavior: does this content help users complete a task, move through a workflow, or adopt something meaningful? If it doesn’t, it’s noise.

With that definition in place, we can assess content consistently. And to do that, we need a simple evaluation system, otherwise teams fall back into habits and low-value work keeps draining energy. A clear scope map gives us the evidence we need to experiment, make trade-offs, and focus effort where it actually changes user behavior.

The goal of this step is to see the difference between what’s essential and what’s habitual, so we can declutter, refocus, and move toward a more intentional, evidence-based content practice.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
title: Prioritize with evidence
---

<template #step-nav>
  <DTWizardNav :count="7" :active="3" />
</template>


<DTCardGrid :items="[
  {
    icon: '🧭',
    title: 'Strategic track',
    body: [
      'North Star → OKRs → GIST',
      'Confidence scoring & RICE',
      'Experimentation guided by evidence'
    ],
    size: 'sm'
  },
  {
    icon: '⚙️',
    title: 'Operational track',
    body: [
      'Tiering model (Task 1)',
      'Defined deliverables per tier',
      'Clarity on what ships and what doesn’t'
    ],
    size: 'sm'
  }
]" />

<!-- notes:
By this point, we’ve defined what “value” actually means, and that becomes the anchor for prioritization. 
Once value is clear, we can finally create a framework that helps us focus on what matters and say no to what doesn’t.

I use two prioritization lanes because the team works on two types of work.

The first lane is evidence-based prioritization for strategic improvements: revamps, experiments, and new content concepts.
Here I like a structured flow—starting from the North Star, down to OKRs, then to GIST, confidence scoring, and RICE.
This gives us a simple, logical path from vision to ideas to steps, and it helps us choose experiments based on impact, not instinct.

The second lane is operational work, especially feature documentation. 
For this, we rely on the tiering model from Task 1, where each tier has a defined set of documentation expectations.
Tier 0 always gets delivered; Tier 1 usually does; Tier 2 only if capacity allows.
This removes ambiguity, gives writers predictable guardrails, and creates transparency for PMs.

What matters is that both lanes use clear scoring standards. 
They align everyone on what’s important, on what moves the needle, and—equally important—on what we intentionally deprioritize.
Prioritization is not only about choosing what to do, but about having shared principles to guide what we say no to when things get ambiguous.
-->

---
theme: ./theme
layout: image-pane
transition: fade
title: Value lens for prioritization
image: ./assets/adjusted-user-vs-business-impact-matrix.jpg
credit: "Source: Itamar Gilad"
imageHeight: max-h-[20vh]
---

<!-- notes:
The exact prioritization framework we use matters far less than the alignment behind it.
What really matters is having a shared understanding of what “good” looks like.

This matrix is an example, but I do believe that it gives visual clarity around where efforts should be spent: in prioritizing the work that creates the highest value for both the user and the business.

Recognizing the work that doesn't add value is just as important, because its all work that adds noise. So yeah, it's also about saying no.
-->

---
theme: ./theme
layout: default
transition: fade
class: text-center
title: Allocate time deliberately
---

<template #step-nav>
  <DTWizardNav :count="7" :active="4" />
</template>

<DTCardGrid :items="[
  {
    icon: '🛡️',
    title: 'Protect capacity',
    body: ['Allocate upfront', 'Safeguard experimentation', 'Avoid ad-hoc drift'],
    size: 'sm'
  },
  {
    icon: '🔄',
    title: 'Stay flexible',
    body: ['Rebalacing', 'Flexible quotas', 'Responsive to demand'],
    size: 'sm'
  },
  {
    icon: '🧮',
    title: 'Estimate confidently',
    body: ['Start conservative', 'Track', 'Refine'],
    size: 'sm'
  }
]" />

<!-- notes:
Allocating time is a system-level choice. It’s not about personal productivity—it’s about how we shape the team’s capacity to deliver and to improve.

The first part is protecting capacity. We decide upfront how much time goes to feature work and how much we deliberately safeguard for experimentation or improvements. Without that protection, day-to-day work always expands to fill all available time.

The second part is staying flexible. We treat our allocation like an experiment: we try a split, we observe how it behaves, and we rebalance as needed. Some cycles will allow more experimentation, some less—the point is that the adjustment is intentional, not reactive.

The third part is estimating confidently. Writers start with conservative estimates, track actual effort, and refine over time. As estimation accuracy improves, our capacity planning becomes more trustworthy and predictable, which makes the whole system easier to manage.

When we design our capacity deliberately—and revisit it regularly—we protect the space for innovation while still delivering reliably on the work that keeps the product moving forward.
-->
---
theme: ./theme
layout: default
transition: fade
class: text-center
title: Strengthen operations
---

<template #step-nav>
  <DTWizardNav :count="7" :active="5" />
</template>

<DTCardGrid :items="[
  {
    icon: '📐',
    title: 'Standards',
    body: ['Guidelines', 'Templates', 'Contribution', 'Process & SLAs'],
    size: 'sm'
  },
  {
    icon: '⚙️',
    title: 'Tooling',
    body: ['Automate quality', 'AI-assisted workflows', 'Reusable libraries'],
    size: 'sm'
  },
  {
    icon: '🔍',
    title: 'Governance',
    body: ['Routine QA', 'Standards adherence', 'Roadmap-driven deprecation'],
    size: 'sm'
  }
]" />

<!-- notes:
This is the most important slide for me. So important that this could even be the only slide of the presentation.
Strengthening operations is what makes the entire lifecycle scalable. Rigor isn’t bureaucracy here—it’s the foundation that allows us to move fast without breaking things.

We start with standards. Clear guidelines, templates, contribution expectations, and defined processes mean writers don’t waste time reinventing structure or chasing missing inputs. Standards reduce ambiguity, and they create shared expectations across teams. SLAs also help everyone understand how work flows and what timelines are realistic.

Then we look at tooling. Anything that can be automated should be. Linting, scripts, naming conventions, snippet libraries, and AI-assisted workflows don’t replace writers—they remove the repetitive work so writers can focus on clarity and correctness. Strong tooling raises the baseline quality and keeps the system predictable as we scale.

Finally, governance ties everything together. Routine QA, adherence checks, and roadmap-driven deprecation prevent staleness and keep the content aligned with how users actually move through the product. Governance also ensures we don’t accumulate content simply because it already exists—everything stays tied to value.

What matters here is that strong operations make experimentation safe. When standards, tooling, and governance are solid, we can measure more reliably, adjust faster, and take calculated risks without destabilizing the system.

This is why operations are the backbone of a modern lifecycle. Without operational rigor, prioritization doesn’t stick, time allocation isn’t trustworthy, and improvements won’t scale.
-->

<!-- notes:
This is the most important slide for me. So important that this could even be the only slide of the presentation. Tight operations are the backbone of a modern lifecycle. Rigor is what makes a lifecycle scalable.

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
title: Measure performance
---

<template #step-nav>
  <DTWizardNav :count="7" :active="6" />
</template>

<DTCardGrid :items="[
  {
    icon: '📊',
    title: 'Content performance',
    body: ['Behavior-based metrics', 'Task completion', 'Workflow progression'],
    size: 'sm'
  },
  {
    icon: '🏗️',
    title: 'Operational performance',
    body: ['Throughput', 'Focus time', 'Review cycles'],
    size: 'sm'
  },
  {
    icon: '🧩',
    title: 'Technology performance',
    body: ['Tool reliability', 'Automation impact', 'Friction tracking'],
    size: 'sm'
  }
]" />

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
title: Start small
---

<template #step-nav>
  <DTWizardNav :count="7" :active="7" />
</template>

<DTCardGrid :items="[
  {
    icon: '🪴',
    title: 'Choose a small pilot',
    body: ['Low effort', 'High impact', 'Clear boundaries'],
    size: 'sm'
  },
  {
    icon: '🔬',
    title: 'Experiment safely',
    body: ['Apply the model', 'Gather evidence', 'Learn fast'],
    size: 'sm'
  },
  {
    icon: '📈',
    title: 'Expand intentionally',
    body: ['Refine first', 'Scale gradually', 'Create pull, not push'],
    size: 'sm'
  }
]" />

<!-- notes:
Starting small is how we introduce change safely and build confidence in the new lifecycle.

We choose a low-effort, high-impact area of the product—something meaningful but contained—and apply the new intake, prioritization, and operational foundations to it. This gives us a clear testing ground without overwhelming the team or increasing risk.

The goal here is to promote a culture of experimentation. We make a small bet, we gather evidence, we validate or challenge our assumptions, and we adjust. The point isn’t to get everything perfect on the first attempt—it’s to learn quickly and safely.

Once we see how the model behaves in practice, we refine it and scale it. A good pilot creates pull rather than push: when teams see clarity, predictability, and faster cycles, they naturally want the same structure for their areas.

It's also important to consider the team where experiments are run. A newly-formed team is a good choice because their ways of working are not well established yet, so they'll be more open to experimentation and feedback.

This step keeps the transition lean, incremental, and data-informed—so we reduce risk while building a strong base of trust and evidence before expanding the new lifecycle more broadly.
-->
---
theme: ./theme
layout: cover
transition: fade
class: text-center
title: Wait—What about AI?
---

<!-- notes:
I see AI as an enhancer. It can potentially be in every part of this lifecycle, but it can’t replace the foundations.
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
title: Real-life ideas
---

<StickyWall>
  <StickyNote>Content guidelines</StickyNote>
  <StickyNote>Object-oriented knowledge</StickyNote>
  <StickyNote>Templates + Content reuse</StickyNote>
  <StickyNote>Template adherence engine</StickyNote>
  <StickyNote>Contribution guidelines</StickyNote>
  <StickyNote>Automated linting (vale/remark)</StickyNote>
  <StickyNote>Fix-all scripts for lint rules</StickyNote>
  <StickyNote>Company-wide docs onboarding</StickyNote>
  <StickyNote>Automated screenshot naming</StickyNote>
  <StickyNote>Docs approval process & SLAs</StickyNote>
  <StickyNote>Engineering time to support writers</StickyNote>
  <StickyNote>Content staleness workflow</StickyNote>
  <StickyNote>Slack automations (bots + notifications)</StickyNote>
  <StickyNote>Documentation writing kit (CLI, snippets)</StickyNote>
  <StickyNote>RAG-based authoring assistance</StickyNote>
  <StickyNote>Table formatter</StickyNote>
  <StickyNote>Deprecations in roadmap</StickyNote>
  <StickyNote>Checklists</StickyNote>
  <StickyNote>Writer KTLO</StickyNote>
  <StickyNote>Open-source docs contributions</StickyNote>
  <StickyNote>Docs analytics</StickyNote>
  <StickyNote>Random QA</StickyNote>
  <StickyNote>Strong reporting</StickyNote>
  <StickyNote>Experimentation platform</StickyNote>
  <StickyNote>Support triaging</StickyNote>
</StickyWall>

<!-- notes:
I know the presentation has indulged a lot in the theoretical space, so I want to close by showing that I have many ideas ready to explore.

I left this slide at the end in case there was time to explore some of these together or, if there wasn't, leave them here for you to explore async. I'm sure some of them you've already implemented, some fully, some partially, some didn't work out for you. Some are about process, some about tech, some about influencing.

As mentioned, these aren’t prescriptions—but rather starting points, as my confidence about your organizational reality is low.

The goal here is to spark curiosity and show the kind of hands-on improvements that can unlock value.

Think of this like an IDEAs bucket in GIST, where you can score them and prioritize them based on evidence and value.

-->

---
layout: thankyou
title: Thank you!
contactQR: /assets/linkedin-qr.png
repoUrl: https://github.com/steroman/dynatrace-deck
resources:
  - label: "Automating documentation maintenance workflow (Dimple Poojary, WTD)"
    url: "https://www.youtube.com/watch?v=156egDk_u38"

  - label: "Activating product knowledge (Stephan Delbos, WTD)"
    url: "https://www.youtube.com/watch?v=gTwKhcKxvRA"

  - label: "Better Onboarding (Book)"
    url: "https://www.kryshiggins.com/create-a-user-onboarding-compass/"

  - label: "Itamar Gilad's blog"
  - url: "https://itamargilad.com/resources/"
---

<!-- notes:
Thank you for the time and attention.
Here I’ll add a QR code linking to my LinkedIn.
Some of the influences behind this approach include evidence-based prioritization frameworks, 
modern documentation tooling, and collaborative models for treating docs as a product.
Happy to share any of these references afterward.
-->
---
theme: ./theme
layout: cover
transition: fade
class: text-center
title: Q&A
---

<!-- notes:
I’m happy to go deeper into prioritization, governance, tooling, 
or how to roll this out in a realistic and incremental way.
-->