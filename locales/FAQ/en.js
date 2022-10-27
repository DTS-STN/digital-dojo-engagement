import Link from 'next/link'
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  faq: `Frequently Asked Questions`,
  qaArray: [
    {
      id: 1,
      question: `Who can attend the Dojo?`,
      answer: `The service is currently only available to teams that work in Employment and Social Development Canada (ESDC), a department of the Government of Canada.`,
    },
    {
      id: 2,
      question: `Does this service cost anything?`,
      answer: `No. Our coaches , facilitators and Dojo staff salaries are all covered under our service's budget, as it helps the department meet its modernization goals. The only investment you need to consider is your team's time spent in the Dojo.`,
    },
    {
      id: 3,
      question: `I can't pause my ongoing work. Should I still be considering the Dojo?`,
      answer: `You will not need to completely pause your ongoing deliverables while in the Dojo. It's true that time will be spent on learning and readjusting how you work as a team, but you will come into the Dojo with work to complete as you practice new ways of working.

          Teams that feel they are too busy to include continuous improvement in their cycles are actually a good fit for the Dojo! It tells us that we could help with prioritizing, organizing work, reducing dependencies and achieving a sustainable work pace through focus.
          
          We have found that teams that invest some time to improve how they work are able to be more efficient moving forward. A good investment!`,
    },
    {
      id: 4,
      question: `What experts do you have in your team?`,
      answer: `Our team of coaches and Dojo staff are full time employees of the public service. Most of us have 10+ years in development and applying agile best practices in a government context.

          We are also very lucky to have a full time UI/UX resource on the team, a technical advisor very familiar with the IT processes in the department, and apprentices that bring new ideas to the table.
          
          We recognize that we are not experts in all subject matters and technologies, which is why our staffing strategy includes partnerships, micro-missions and seeking out experts in other branches/departments/government levels.
          
          We will be honest with you about what we feel comfortable coaching ourselves, and when we feel we need to bring in outside help.`,
    },
    {
      id: 5,
      question: `How do we know if we're the right fit?`,
      answer: (
        <p>
          Unsure if the Dojo is the place for you and your team? Visit our{' '}
          <Link href="/home">
            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              {' '}
              Learn more{' '}
            </a>
          </Link>{' '}
          page where you can view our Digital Dojo deck that outlines all you
          need to know before entering the Dojo. Or take a moment to watch our
          Digital Dojo Experience video which explains a team’s journey through
          all the stages of the Dojo. Want to get in touch and learn more on a
          personal level? Meet the team! Schedule a team meet with our Dojo crew
          by filling out the{' '}
          <Link href="">
            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              form
            </a>
          </Link>{' '}
          on our website. We look forward to meeting you!
        </p>
      ),
    },
    {
      id: 6,
      question: `How much time do we spend in the Dojo?`,
      answer: `The Dojo Experience is catered to each individual team and their goals and therefore time may vary. An average stay would be 4-6 weeks, but could be shorter if the scope of practice is reduced.`,
    },
    {
      id: 7,
      question: `Is there a part-time option?`,
      answer: (
        <p>
          Currently, there is no part-time option.{' '}
          <Link href="#3">
            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              See I can't pause my ongoing work. Should I still be considering
              the Dojo?
            </a>
          </Link>{' '}
          for more information.
        </p>
      ),
    },
    {
      id: 8,
      question: `Do we need to be trained in Agile to use this service?`,
      answer: `Because the Dojo is a place to practice rather than a classroom for traditional training, the ideal team will come into the Dojo with basic agile knowledge. We recommend that the different agile roles be understood and that a team discussion about who will play which role happen before you enter the Dojo.

          This will help us jump right into role-specific coaching and practice.`,
    },
    {
      id: 9,
      question: `Can we return to the Dojo more than once?`,
      answer: `Absolutely. As a matter of fact, we hope you do!

          Just like a martial arts Dojo, teams can be white belts or black belts in various DevOps/Agile areas. A team could be mature in their agile adoption but recognize they have some work to do in relation to automating tests, or continuous delivery.
          
          If your experience in the Dojo was valuable and you think there is an opportunity to go through it again with a different focus, we will work with you to make it happen.`,
    },
  ],
}
