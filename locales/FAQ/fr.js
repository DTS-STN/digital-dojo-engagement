import Link from 'next/link'
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  faq: 'Foire aux questions (FAQ) du Dojo Numérique',
  qaArray: [
    {
      id: 1,
      question: `Qui peut fréquenter le Dojo ?`,
      answer: `Le service est actuellement disponible qu'aux équipes qui travaillent à Emploi et Développement social Canada (EDSC), un ministère du gouvernement du Canada.`,
    },
    {
      id: 2,
      question: `Est-ce qu'il y a un coût ?`,
      answer: `Non. Les salaires de nos entraîneurs, facilitateurs et du personnel du Dojo sont tous couverts par le budget de notre service, puisque ce dernier aide le département à atteindre ses objectifs de modernisation. Le seul investissement que vous devez considérer est le temps que votre équipe passe dans le Dojo.`,
    },
    {
      id: 3,
      question: `Je ne peux pas mettre en pause mon travail en cours. Le Dojo est-il fait pour moi ?
      `,
      answer: `Vous n'aurez pas besoin de suspendre complètement vos livrables en cours pendant que vous êtes dans le Dojo. Il est vrai que du temps sera consacré à l'apprentissage et au réajustement de votre façon de travailler en équipe, mais vous arriverez au Dojo avec du travail à terminer au fur et à mesure que vous pratiquerez de nouvelles façons de travailler.

      Les équipes qui se sentent trop occupées pour inclure l'amélioration continue dans leurs cycles sont en fait un bon choix pour le Dojo ! Cela nous dit que nous pourrions aider à hiérarchiser, organiser le travail, réduire les dépendances et atteindre un rythme de travail durable grâce à la concentration.
      
      Nous avons constaté que les équipes qui investissent du temps pour améliorer leur façon de travailler sont capables d'être plus efficaces à l'avenir. Un bon investissement!`,
    },
    {
      id: 4,
      question: `Quels experts avez-vous dans votre équipe ?
      `,
      answer: `Notre équipe d'entraîneurs et le personnel du Dojo sont des employés à temps plein de la fonction publique. La plupart d'entre nous avons plus de 10 ans d'expérience dans le domaine de développement d'application et à travailler de facon agile dans un contexte gouvernemental.

      Nous sommes également très chanceux d'avoir une ressource UI/UX à temps plein dans l'équipe, un conseiller technique très familier avec les processus informatiques du département et des apprentis qui contribuent des nouvelles idées et connaissances.
      
      Nous reconnaissons que nous ne sommes pas des experts dans tous les domaines et technologies, c'est pourquoi notre stratégie de recruitement comprend des partenariats, des micro-missions et la recherche d'experts dans d'autres directions/départements/niveaux de gouvernement.
      
      Nous serons honnêtes avec vous à propos de ce que nous nous sentons à l'aise d'entraîner nous-mêmes et quand nous pensons avoir besoin de faire appel à une aide extérieure.`,
    },
    {
      id: 5,
      question: `Comment savoir si nous sommes faits pour vous ?
      `,
      answer: (
        <p>
          Vous ne savez pas si le Dojo est l'endroit idéal pour vous et votre
          équipe ? Visitez notre page{' '}
          <Link href="/home">
            <a>En savoir plus</a>
          </Link>{' '}
          où vous pourrez voir notre présentation du Dojo Numérique qui décrit
          tout ce que vous devez savoir avant d'entrer dans le Dojo. Ou prenez
          un moment pour regarder notre vidéo L'expérience du Dojo Numérique qui
          explique le parcours d'une équipe à travers toutes les étapes du Dojo.
          Vous souhaitez entrer en contact et en savoir plus sur un plan
          personnel ? Rencontrez l'équipe ! Organisez une rencontre avec
          l'équipe du Dojo en remplissant le{' '}
          <Link href="">
            <a>formulaire</a>
          </Link>{' '}
          on our website. sur notre site Web. Nous sommes impatients de vous
          rencontrer !
        </p>
      ),
    },
    {
      id: 6,
      question: `Combien de temps passons-nous dans le Dojo ?
      `,
      answer: `L'expérience du Dojo est adaptée à chaque équipe et à ses objectifs, c'est pourquoi la durée peut varier. Un séjour moyen est de 4 à 6 semaines, mais il peut être plus court si le champ d'action est réduit.`,
    },
    {
      id: 7,
      question: `Existe-t-il une option à temps partiel ?
      `,
      answer: (
        <p>
          Actuellement, il n'y a pas d'option à temps partiel.Voir{' '}
          <Link href="#3">
            <a>
              Je ne peux pas interrompre mon travail en cours. Devrais-je quand
              même envisager le Dojo ?
            </a>
          </Link>{' '}
          pour plus d'informations.
        </p>
      ),
    },
    {
      id: 8,
      question: `Faut-il être formé à la méthode Agile pour utiliser ce service ?
      `,
      answer: `Parce que le Dojo est un lieu de pratique plutôt qu'une salle de classe pour une formation traditionnelle, l'équipe idéale arrivera au Dojo avec des connaissances agiles de base. Nous recommandons que les différents rôles agiles soient compris et qu'une discussion d'équipe sur qui jouera quel rôle ait lieu avant que vous n'entriez dans le Dojo.

      Cela nous aidera à aborder directement le coaching et la pratique spécifiques aux rôles.`,
    },
    {
      id: 9,
      question: `Peut-on revenir au Dojo plus d'une fois ?
      `,
      answer: `Absolument. En fait, nous espérons que vous le ferez !

      Tout comme un Dojo d'arts martiaux, les équipes peuvent être ceintures blanches ou noires dans divers domaines DevOps/Agile. Une équipe peut être mature dans son adoption d'Agile mais reconnaître qu'elle a encore du travail à faire en ce qui concerne l'automatisation des tests ou la livraison continue.
      
      Si votre expérience dans le Dojo a été précieuse et que vous pensez qu'il est possible de la renouveler avec un objectif différent, nous travaillerons avec vous pour que cela se produise.`,
    },
  ],
}
