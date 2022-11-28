export default {
  'Agile': {
    'Continuous Planning': {
      practices: [
        'Work Visualization / Kanban boards',
        'Backlog creation and management',
        'Release Planning / Roadmaps',
        'Work/Sprint planning',
        'Goal setting',
        'Estimation and velocity',
        'Prioritization',
        'Limiting Work in Progress (WIP)',
        'Technical Debt Management',
        'Definition of Ready',
      ],
      belts: {
        white: [
          'Our team does not have a clear backlog of work, or know what a backlog is',
          "We don't use a work tracking system",
          "We don't start working on something until we understand everything",
        ],
        yellow: [
          'We have regular meetings to plan/review/refine work',
          'Tasks are tracked in a tool and not a document',
          'We can visualize our work in progress (Kanban)',
        ],
        green: [
          'We have a backlog that is prioritized/maintained.  We plans our work in short cycles',
          'We use goals to guide our work',
          'We understand when tasks are ready to be worked on, and when they can be marked as done',
          'We are good at limiting our work in process (WIP)',
        ],
        black: [
          'We have a roadmap for our service/product',
          'We continually update our plan based on what we have learned and from feedback received',
          'We are able to forecast how long it would take us to do large features',
          'We work at a sustainable pace',
        ],
      },
    },
    'Continuous Collaboration': {
      practices: [
        'Self-managed teams',
        'Agile events, roles, artifacts, culture',
        'Daily standups',
        'Swarming',
        'Review sessions /Sprint Reviews',
        'Participation in guilds, communities',
      ],
      belts: {
        white: [
          "We don't always know who is working on what, and if they are struggling",
          'Work is assigned',
          "The team isn't cross functional",
        ],
        yellow: [
          'We have daily standups',
          'Our work is visible to other teams and stakeholders',
          'We participate in communities of practice relevant to our domain',
        ],
        green: [
          'We have documented our ways of working as a team, and we have agreed on our use of tools for collaboration purposes',
          'Our team works out in the open',
        ],
        black: [
          'We self-organize and self-manage through self-assigning tasks',
          'We feel safe speaking up, and feel there are opportunities for us to do so',
          'We share our knowledge in communities of practices',
        ],
      },
    },
    'Continuous Improvement': {
      practices: [
        'Retrospectives',
        'Team Health Check',
        'DevOps Kaizen',
        'Value Stream Mapping',
      ],
      belts: {
        white: [
          "Our team doesn't have a mechanism to discuss pain points and suggest ways to improve how we work",
        ],
        yellow: [
          'Our team meets on regular basis (retrospectives) to discuss how we work (people, process, tools)',
          'We hold regular meetings to improve our product/service',
        ],
        green: [
          'Action items coming from our retrospectives make their way into our backlog',
          'We run regular team health checks',
        ],
        black: [
          'Our retrospectives are useful, our team participates well, and they lead to positive change',
          'Our team relentlessly inspects, adapts and automates our processes to deliver value to users faster',
          'Our team embodies the agile values and principles',
        ],
      },
    },
    'Continuous Quality': {
      practices: [
        'Definition of Done',
        'Peer reviews',
        'Test Automation',
        'Integration into build pipeline',
        'TDD',
        'Shift left / right testing',
        'Incident post mortems',
        'Analyzing monitoring metrics',
      ],
      belts: {
        white: [
          'We are not proud, or confident in the quality of our code',
          'We rarely conduct code reviews',
          'Most of our tests are manual',
        ],
        yellow: [
          'We engage with IT Security and Accessibility experts to review our code/product',
          'We conduct code reviews',
          'Some tests are automated',
        ],
        green: [
          'Testers work alongside developers throughout the software development and delivery process',
          'We have a way to measure test coverage',
          'We code our tests and maintain test data',
        ],
        black: [
          'Our pipeline includes code reviews and multiple layers of testing. We have dashboards that show code coverage and pass/fail information',
          'When the automated tests pass, we are confident the software is releasable',
          'We continuously review our test suite to better find defects',
        ],
      },
    },
  },

  'DevOps': {
    'Continuous Integration': {
      practices: [
        'Version control strategies',
        'Trunk based development',
        'Test automation',
        'Push/Pull requests',
        'Git',
      ],
      belts: {
        white: ['Our code base is in source control'],
        yellow: [
          'Code commits result in an automated build of the software',
          'We have a version control strategy that works well for us',
        ],
        green: [
          'Code commits result in a series of automated tests being run',
          'All commits are tied to tasks',
        ],
        black: [
          'Our software is in a deployable state throughout its lifecycle',
          "Dependencies are stable and rarely break team's code",
        ],
      },
    },
    'Continuous Delivery': {
      practices: [
        'Automated build and deployment pipelines',
        'Feature flags',
        'Infrastructure as code',
      ],
      belts: {
        white: [
          'Only designated team members perform the release. It is risky, painful, has lots of manual steps and takes a long time',
        ],
        yellow: [
          'Builds / deployments are repeatable and auditable and can be done by anyone on the team',
          'Releases to production are complex and require manual intervention or approvals',
        ],
        green: [
          'Builds / deployments are triggered automatically, automated testing part of the pipeline',
          'Our features are sliced in a way that lend themselves to frequent releases',
        ],
        black: [
          'Anyone can deploy our product to production, or to end users, at any time, on demand',
          'Releasing is simple, safe, painless and mostly automated',
        ],
      },
    },
    'Continuous Operation': {
      practices: [
        'Site Reliability Engineering',
        'Incident management',
        'Monitoring metrics',
        'Cloud Infrastructure Management',
        'Dynamic scaling',
        'Administration task automation',
      ],
      belts: {
        white: [
          'We have very limited access to production logs and metrics',
          'Creating new environments is a manual effort',
        ],
        yellow: [
          'Procedures are in place to inform us of incidents',
          'We have access to log files in production',
        ],
        green: [
          'We can create and manage instances',
          'We have dynamic dashboards to visualize server status',
        ],
        black: [
          'We can monitor and dynamically increase or decrease cloud/server resources available for the service or product that we support based on demand',
          'There are automated processes in place to quickly respond to incidents',
        ],
      },
    },
    'Continuous Security': {
      practices: [
        'Secure Architecture',
        'Automated security tests',
        'Identity Management',
        'Vulnerability/ dependency/ patch scanning and monitoring',
        'White hat hackers',
      ],
      belts: {
        white: ['We put very little emphasis on security testing'],
        yellow: [
          'We engage with IT Security to review our code/product. We code with security in mind',
          'Code and environments reside in a secure store',
        ],
        green: [
          'Security requirements are included in the automated testing process',
          'We run some tests in production to ensure there are no security risks',
        ],
        black: [
          'Security reviews do not slow down the development cycle',
          'Code is scanned for security issues',
          'There are automated processes in place to quickly respond to security or privacy breaches',
        ],
      },
    },
    'Continuous Quality': {
      practices: [
        'Definition of Done',
        'Peer reviews',
        'Test Automation',
        'Integration into build pipeline',
        'TDD',
        'Shift left / right testing',
        'Incident post mortems',
        'Analyzing monitoring metrics',
      ],
      belts: {
        white: [
          'We are not proud, or confident in the quality of our code',
          'We rarely conduct code reviews',
          'Most of our tests are manual',
        ],
        yellow: [
          'We engage with IT Security and Accessibility experts to review our code/product',
          'We conduct code reviews',
          'Some tests are automated',
        ],
        green: [
          'Testers work alongside developers throughout the software development and delivery process',
          'We have a way to measure test coverage',
          'We code our tests and maintain test data',
        ],
        black: [
          'Our pipeline includes code reviews and multiple layers of testing. We have dashboards that show code coverage and pass/fail information',
          'When the automated tests pass, we are confident the software is releasable',
          'We continuously review our test suite to better find defects',
        ],
      },
    },
  },

  'Design Thinking': {
    'Continuous User Feedback': {
      practices: [
        'Personas',
        'Journey Mapping',
        'Prototyping',
        'User Research',
        'Usability Testing',
        'Accessibility',
        'Minimum Viable / Valuable Product (MVP)',
        'Lean Thinking',
      ],
      belts: {
        white: ['Our code base is in source control'],
        yellow: [
          'Code commits result in an automated build of the software',
          'We have a version control strategy that works well for us',
        ],
        green: [
          'Code commits result in a series of automated tests being run',
          'All commits are tied to tasks',
        ],
        black: [
          'Our software is in a deployable state throughout its lifecycle',
          "Dependencies are stable and rarely break team's code",
        ],
      },
    },
  },
}
