export default {
  "Critères d'acceptation": (
    <details className="space-y-2">
      <summary>Critères d'acceptation</summary>
      <div className="space-y-2">
        <p>
          Les critères d’acceptation renferment un ensemble de conditions que la
          solution doit respecter pour satisfaire le client. Le responsable du
          produit ou le représentant du client rédige des déclarations du point
          de vue du client qui expliquent comment un récit ou une fonctionnalité
          d’utilisateur devrait fonctionner. Pour que la fonctionnalité ou le
          récit soit accepté, ils doivent satisfaire aux critères d’acceptation,
          car sinon ils seront rejetés.
        </p>

        <p>
          <span className="font-bold">Dans la pratique : </span> Les critères
          d’acceptation doivent être rédigés dans un langage clair et être
          faciles à comprendre. Par exemple : « Lorsque je suis connecté, quand
          je clique sur le bouton “Acheter”, le nombre total d’articles dans mon
          panier devrait augmenter d’une unité. »
        </p>

        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Confirme quand le récit d’utilisateur est terminé.</li>
          <li>Aide l’équipe à comprendre le récit ou la fonctionnalité.</li>
          <li>Élimine l’ambiguïté dans les exigences.</li>
        </ul>
      </div>
    </details>
  ),
  'Essai d’acceptation': (
    <details className="space-y-2">
      <summary>Essai d’acceptation</summary>
      <div className="space-y-2">
        <p>
          Un essai d’acceptation se fait par rapport aux critères d’acceptation
          et sert à vérifier si la fonctionnalité est réellement fonctionnelle.
          Le test n’a que deux résultats : réussite ou échec. Souvent, les tests
          d’acceptation sont automatisés afin qu’ils puissent être effectués
          pour toutes les versions du logiciel. Les critères d’acceptation
          prévoient habituellement un ou plusieurs tests d’acceptation.
        </p>
        <p>
          <span className="font-bold">Aussi appelé : </span> test fonctionnel,
          test client, test de récit
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Les essais
          d’acceptation permettent de s’assurer que le logiciel répond aux
          exigences de l’entreprise et du client. Les essais d’acceptation sont
          rédigés par le responsable du produit et sont de brefs énoncés
          expliquant le comportement et le résultat attendus. Par exemple, «
          L’utilisateur clique sur ce bouton et le texte devient rouge ». Ce
          test se solde par une réussite ou un échec.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Augmente la satisfaction du client en veillant à ce que ses
            exigences soient satisfaites.
          </li>
          <li>
            Cerne rapidement les problèmes de fonctionnalité et de convivialité.
          </li>
          <li>
            Favorise la collaboration entre les développeurs et l’utilisateur
            final.
          </li>
        </ul>
      </div>
    </details>
  ),
  'Manifeste Agile': (
    <details className="space-y-2">
      <summary>Manifeste Agile</summary>
      <div className="space-y-2">
        <p>
          Le Manifeste agile comprend les quatre valeurs et 12 principes d’un
          processus itératif de développement de logiciels. En février 2001, 17
          développeurs de logiciels se sont rencontrés dans l’État d’Utah pour
          discuter de méthodes de développement « légères ». Ils ont publié le
          Manifeste pour le développement agile de logiciels, qui décrit comment
          ils ont trouvé « de meilleures façons de développer des logiciels en
          le faisant et en aidant les autres à le faire ».
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Les
          gestionnaires de projet consultent le Manifeste agile lorsqu’ils
          gèrent tout processus qui s’aligne sur ses concepts fondamentaux,
          comme la méthodologie agile.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Essais fréquents et livraison continue de logiciels précieux.</li>
          <li>
            Permet de bien s’ajuster aux changements apportés aux exigences.
          </li>
          <li>Favorise la collaboration interfonctionnelle.</li>
        </ul>
      </div>
    </details>
  ),
  'Gestion du cycle de vie des applications (GCVA)': (
    <details className="space-y-2">
      <summary>Gestion du cycle de vie des applications (GCVA)</summary>
      <div className="space-y-2">
        <p>
          La gestion du cycle de vie des applications (GAP) est un processus
          continu de gestion d’une application logicielle depuis sa
          planification initiale jusqu’à sa mise hors service.
        </p>
        <p>
          <span className="font-bold">Dans la pratique : </span> La GCVA est
          utilisée tout au long du projet et comprend l’utilisation de divers
          outils pour faciliter la gestion des exigences, l’architecture, le
          codage, la mise à l’essai, le suivi et la diffusion.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Réduit les risques en permettant de surveiller constamment l’état du
            projet.
          </li>
          <li>Réduit le temps de cycle et les coûts de développement.</li>
          <li>Réduit au minimum les temps d’arrêt.</li>
        </ul>
      </div>
    </details>
  ),
  'Carnet de commandes': (
    <details className="space-y-2">
      <summary>Carnet de commandes</summary>
      <div className="space-y-2">
        <p>
          Un carnet de commandes est une liste changeante des exigences
          relatives aux produits qui correspond aux besoins du client. Il ne
          s’agit pas d’une liste de choses à faire; il s’agit plutôt d’une liste
          de toutes les fonctionnalités souhaitées pour le produit. L’équipe
          agile consulte le carnet pour établir l’ordre de priorité des
          fonctionnalités et pour savoir lesquelles sont à mettre en œuvre en
          premier.
        </p>
        <p>
          <span className="font-bold">Dans la pratique : </span> L’équipe de
          développement se base sur le carnet de commandes pour déterminer les
          tâches à accomplir durant la mise au point de chaque itération. Ce
          carnet peut changer tout au long du processus de développement à
          mesure que l’équipe en apprend davantage sur les exigences du client.
        </p>
        <p>
          <span className="font-bold">Aussi appelé : </span> carnet de produit
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Communication claire des priorités.</li>
          <li>Permet la planification à long terme.</li>
          <li>Veille à ce que les besoins du client soient entendus.</li>
        </ul>
      </div>
    </details>
  ),
  'Peaufinage du carnet de commandes': (
    <details className="space-y-2">
      <summary>Peaufinage du carnet de commandes</summary>
      <div className="space-y-2">
        <p>
          Le peaufinage du carnet de commandes se fait à la fin d’un sprint,
          lorsque l’équipe se réunit pour s’assurer que le carnet est prêt pour
          le prochain sprint. L’équipe peut supprimer les récits d’utilisateur
          qui ne sont pas pertinents, créer de nouveaux récits, réévaluer la
          priorité ou diviser les récits d’utilisateur en tâches plus petites.
          Le peaufinage du carnet est à la fois un processus continu et le nom
          de la réunion où cette action a lieu (réunion de peaufinage du carnet
          de commandes).
        </p>
        <p>
          <span className="font-bold">Aussi appelé : </span> Ajustement du
          carnet de commandes
        </p>
        <p>
          <span className="font-bold"> Dans la pratique : </span> Une fois que
          l’équipe a terminé le sprint, elle fixe une réunion de peaufinage du
          carnet de commandes. Le peaufinage du carnet de commandes vise à
          s’assurer qu’il ne contient que des éléments qui sont pertinents et
          qui répondent aux objectifs.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Permet de s’assurer que toutes les fonctions répondent aux objectifs
            du projet.
          </li>
          <li>
            Aide l’équipe de développement à comprendre les priorités et à
            rester sur la bonne voie.
          </li>
          <li>
            Facilite la communication quant aux fonctions qui sont et ne sont
            pas importantes et pourquoi.
          </li>
        </ul>
      </div>
    </details>
  ),
  'Capacité': (
    <details className="space-y-2">
      <summary>Capacité</summary>
      <div className="space-y-2">
        <p>
          La capacité représente la quantité de travail qui peut être accomplie
          dans un certain délai et est basée sur le nombre d’heures durant
          lesquelles une personne ou une équipe sera disponible pour effectuer
          le travail.
        </p>
        <p>
          <span className="font-bold">Dans la pratique : </span> Le responsable
          du produit et l’équipe agile déterminent la capacité ou la charge de
          travail qu’ils peuvent assumer pour un sprint à venir. On décide de la
          capacité lors de la réunion de planification du sprint.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Améliore la gestion des ressources.</li>
          <li>Permet d’estimer la date d’achèvement d’un projet.</li>
        </ul>
      </div>
    </details>
  ),
  'Amélioration continue': (
    <details className="space-y-2">
      <summary>Amélioration continue</summary>
      <div className="space-y-2">
        <p>
          L’amélioration continue est un processus visant à améliorer la qualité
          et l’efficacité en apportant de petits changements graduels au fil du
          temps. Dans le contexte de la méthode de gestion Kanban,
          l’amélioration continue désigne tout particulièrement le processus
          d’optimisation du flux de travail et de réduction du temps de cycle,
          ce qui se traduit par une productivité accrue.
        </p>
        <p>
          <span className="font-bold">Aussi appelé :</span> Kaizen
        </p>
        <p>
          <span className="font-bold">
            L’amélioration continue est utilisée pour améliorer progressivement
            le processus de travail et est composée des étapes suivantes :
          </span>
        </p>
        <ol className="list-disc list-inside">
          <li> Identifier </li>
          <li> Planifier </li>
          <li> Exécuter </li>
          <li> Passer en revue.</li>
        </ol>
        <p>
          Plus précisément dans le cas de Kanban, aucune date d’échéance n’est
          fixée; l’équipe se concentre donc sur les travaux en cours. À mesure
          que les membres de l’équipe collaborent pour résoudre les problèmes et
          tiennent des séances de remue-méninges pour trouver de nouvelles
          idées, le processus devient plus efficace et plus rationnel, les temps
          de cycle diminuent et le flux de travail est optimisé. Les équipes
          n’ont pas besoin d’être interfonctionnelles lorsqu’elles suivent la
          méthode Kanban.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Améliore la productivité et la livraison.</li>
          <li>
            Accroît l’exactitude des prévisions des travaux et de la livraison
            futurs.
          </li>
          <li>Simplifie le travail et réduit le gaspillage.</li>
          <li>Permet d’apporter des améliorations progressivement.</li>
          <li>
            Augmente le sentiment de fierté et d’accomplissement chez les
            membres de l’équipe.
          </li>
        </ul>
      </div>
    </details>
  ),
  'Intégration continue (IC)': (
    <details className="space-y-2">
      <summary>Intégration continue (IC)</summary>
      <div className="space-y-2">
        <p>
          L’intégration continue est une pratique de génie logiciel qui comprend
          l’intégration continue du nouveau code de développement dans la base
          de codes existante.{' '}
        </p>
        <p>
          <span className="font-bold">Aussi appelée : </span>livraison continue,
          déploiement continu
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Une fois que le
          développement de la fonctionnalité est terminé, les développeurs la
          mettent à l’essai pour déceler les défaillances, puis l’intègrent à la
          base de codes existante. Cela permet de s’assurer que le dépôt de
          codes contient toujours la version la plus récente qui fonctionne du
          logiciel en voie de développement. Dans la pratique, ce processus est
          automatisé dans une large mesure par l’utilisation d’outils de
          contrôle des versions, de politiques et de conventions de l’équipe et
          d’outils de configuration précis.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Permet d’obtenir une rétroaction rapidement, afin que les
            défaillances puissent être repérées et corrigées rapidement.
          </li>
          <li>
            Réduit le temps et les efforts nécessaires pour réaliser chaque
            intégration.
          </li>
          <li>Fournit un processus automatisé de création et de diffusion.</li>
          <li>Permet aux logiciels d’être livrables à tout moment.</li>
        </ul>
      </div>
    </details>
  ),
  'Réunion quotidienne debout': (
    <details className="space-y-2">
      <summary>Réunion quotidienne debout</summary>
      <div className="space-y-2">
        <p>
          La réunion quotidienne debout est un élément clé des méthodologies
          agiles et sert de tribune quotidienne où les équipes agiles peuvent
          faire connaître les progrès, signaler les obstacles et prendre des
          engagements pour l’itération ou le sprint en cours. Cette brève
          rencontre de 15 minutes se tient habituellement tous les matins à la
          même heure et au même endroit. La réunion devrait être suffisamment
          brève pour permettre aux participants de se tenir debout. Le fait de
          rester debout favorise la concision et fait en sorte que la réunion ne
          se prolonge pas au-delà du délai imparti.
        </p>
        <p>
          <span className="font-bold">Aussi appelée : </span> Scrum quotidien,
          mêlée quotidienne, réunion debout, réunion quotidienne, caucus
          quotidien.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Les réunions
          quotidiennes se tiennent généralement autour du tableau de mêlée ou
          Kanban des tâches (pour les équipes sur place). Les équipes répondent
          à trois questions sur l’état de leur travail :
        </p>
        <ol className="list-disc list-inside">
          <li> Qu'ai-je accompli hier ?</li>
          <li> 2Qu’est-ce que je vais m’engager à faire aujourd’hui?</li>
          <li> Quels obstacles m’empêchent de respecter mes engagements?</li>
        </ol>
        <p>
          Toute discussion au cours de la réunion debout quotidienne doit viser
          à répondre à ces trois questions. Toute discussion supplémentaire
          découlant de ces questions doit avoir lieu en dehors de la réunion
          debout quotidienne.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Assure le bon déroulement du travail.</li>
          <li>
            Assure la brièveté de la réunion (parce qu’elle se déroule debout).
          </li>
          <li>Aide à cerner les problèmes le plus tôt possible.</li>
          <li>
            Accroît la responsabilisation, la communication et la collaboration
            de l’équipe.
          </li>
          <li>
            Stimule l’auto-organisation et la planification personnelle au sein
            de l’équipe.
          </li>
          <li>
            Aide les membres de l’équipe à résoudre les problèmes et à apporter
            de petites corrections au besoin.
          </li>
          <li>Assure une interaction face à face (si sur place).</li>
        </ul>
      </div>
    </details>
  ),
  'Définition de « Terminé »': (
    <details className="space-y-2">
      <summary>Définition de « Terminé »</summary>
      <div className="space-y-2">
        <p>
          La définition de « terminé » renvoie à un ensemble de critères
          prédéterminés auxquels un produit doit satisfaire pour être considéré
          comme terminé. L’équipe en arrive à un consensus sur ce qui définit
          une tâche comme étant accomplie, puis affiche une liste de
          vérification des étapes à franchir avant que le produit puisse être
          considéré comme pouvant être livré. L’équipe affiche cette liste sous
          la forme d’un grand tableau visuel bien en vue dans la zone de
          l’équipe.
        </p>
        <p>
          <span className="font-bold">Aussi connu comme :</span> entièrement
          achevé, fini, fini-fini-fini, liste terminée, liste de vérification
          close, produit sashimi, définition des tâches achevées, liste de
          travaux à compléter.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> L’équipe
          s’entend sur une liste de critères qui doivent être satisfaits avant
          que l’on puisse conclure qu’un stade de développement du produit est
          terminé, c’est-à-dire que tous les travaux de conception, de codage,
          de mise à l’essai et de documentation ont été achevés et que le code a
          été entièrement intégré au système. Si une tâche ne répond pas aux
          critères de définition du concept « terminé », elle ne peut pas être
          considérée comme contribuant à la rapidité de l’équipe.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Améliore la probabilité de livrer un logiciel fonctionnel.</li>
          <li>
            Limite le coût des reprises de travaux une fois qu’une
            fonctionnalité a été acceptée comme étant terminée.
          </li>
          <li>
            Réduit le risque d’incompréhension et de conflit entre l’équipe de
            développement et le client ou le responsable du produit.
          </li>
        </ul>
      </div>
    </details>
  ),
  'Récits épiques': (
    <details className="space-y-2">
      <summary>Récits épiques</summary>
      <div className="space-y-2">
        <p>
          Les épopées ou récits épiques sont définis comme de grands récits
          d’utilisateur dont l’ampleur est difficile à estimer dans leur état
          actuel ou qui sont difficiles à accomplir en une seule itération. Les
          récits épiques sont généralement moins prioritaires et attendent
          d’être répartis en composantes plus petites.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Les récits
          épiques sont souvent utilisés comme espaces réservés pour les
          nouvelles idées qui n’ont pas été entièrement développées. Tandis que
          les récits épiques sont monnaie courante au moment de l’établissement
          du carnet des commandes inital du produit, ils devraient être
          subdivisés en récits d’utilisateurs plus faciles à gérer où les
          exigences du récit sont définies de façon plus étroite.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li> Utile comme espace réservé pour les grandes exigences.</li>
          <li>Utile pour avoir une vue d’ensemble des récits d’utilisateur.</li>
        </ul>
      </div>
    </details>
  ),
  'Échec rapide': (
    <details className="space-y-2">
      <summary>Échec rapide</summary>
      <div className="space-y-2">
        <p>
          Le processus d’échec rapide consiste à commencer à travailler sur une
          tâche ou un projet, à obtenir une rétroaction immédiate et à
          déterminer s’il faut continuer à travailler sur cette tâche ou adopter
          une approche différente, c’est-à-dire s’adapter. Si un projet ne
          marche pas, il est préférable d’arriver à cette conclusion tôt dans le
          processus plutôt que d’attendre que trop d’argent et de temps ait été
          investi.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Une équipe lance
          un nouveau projet ou une nouvelle tâche, obtient de la rétroaction dès
          le début, puis effectue une analyse pour déterminer si le projet sera
          fonctionnel ou fructueux. Si une tâche ou un projet se dirige dans la
          mauvaise direction, les membres de l’équipe sont encouragés à cesser
          d’y travailler dès que possible.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Permet de cerner rapidement les problèmes.</li>
          <li>Crée une culture de transparence.</li>
          <li>Réduit le gaspillage de temps et d’efforts et le coût.</li>
          <li>Améliore l’efficience du développement de logiciels.</li>
        </ul>
      </div>
    </details>
  ),
  'Glissement des fonctionnalités': (
    <details className="space-y-2">
      <summary>Glissement des fonctionnalités</summary>
      <div className="space-y-2">
        <p>
          Par glissement des fonctionnalités, on entend la tendance à ajouter
          des exigences ou des caractéristiques supplémentaires à un projet une
          fois le développement entamé. Le glissement des fonctionnalités peut
          se produire au niveau du projet ou du sprint.
        </p>
        <p>
          <span className="font-bold">Aussi appelé :</span> Glissement des
          exigences, glissement de la portée.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> On peut
          s’attendre à des changements et des exigences supplémentaires lors
          d’un projet. Tout changement demandé après le début d’un projet ou
          d’un sprint doit être ajouté au carnet des commandes et il faut en
          déterminer la priorité en examinant sa valeur. Ainsi, le glissement
          des fonctionnalités n’aura pas d’incidence négative sur le calendrier
          ou le coût du projet.
        </p>
        <p className="underline">
          Préoccupations liées à la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Risques liés au calendrier, à la qualité et au coût du projet.
          </li>
          <li>Réduit la productivité.</li>
          <li>Empêche les équipes d’atteindre les objectifs de l’itération.</li>
          <li>Diminue la valeur du produit ou du produit livrable.</li>
        </ul>
      </div>
    </details>
  ),
  'Inhibiteur / entrave': (
    <details className="space-y-2">
      <summary>Inhibiteur / entrave</summary>
      <div className="space-y-2">
        <p>
          Un inhibiteur ou une entrave est un obstacle qui empêche une personne
          ou une équipe d’accomplir une tâche ou un projet. Des réunions non
          prévues, des problèmes techniques, un manque de connaissances ou
          d’expertise, un milieu de travail comportant des sources de
          distraction et des conflits au bureau sont autant d’exemples
          d’inhibiteurs.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> L’équipe voudra
          peut-être créer une liste d’inhibiteurs appelée liste d’obstacles et
          l’afficher bien en vue dans la zone où elle se réunit pour les mêlées
          quotidiennes. Les inhibiteurs doivent être énumérés selon leur
          gravité, c’est-à-dire dans l’ordre dans lequel ils nuisent à la
          productivité de l’équipe. Si les inhibiteurs sont à l’échelle de
          l’entreprise, il incombe au chef de la mêlée de les éliminer. S’ils
          surviennent au niveau de l’équipe, il incombe à l’équipe de les
          résoudre ou de les enlever.
        </p>
        <p className="underline">
          Préoccupations liées à la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Réduit la productivité de l’équipe.</li>
          <li>
            Ont une Incidence négative sur le calendrier et le coût du projet.
          </li>
          <li>Il faut s’en occuper dès que possible.</li>
        </ul>
      </div>
    </details>
  ),
  'Itération': (
    <details className="space-y-2">
      <summary>Itération</summary>
      <div className="space-y-2">
        <p>
          Une itération est une période fixe ou programmée dans le temps, qui
          s’étend généralement sur deux à quatre semaines, au cours de laquelle
          une équipe agile élabore un produit livrable pouvant éventuellement
          être remis à son destinataire. Un projet agile typique comprend une
          série d’itérations, ainsi qu’une réunion de planification avant le
          développement de l’itération et une réunion rétrospective à la fin de
          l’itération. Les itérations sont appelées des sprints dans le contexte
          de la méthodologie mêlée.
        </p>
        <p>
          <span className="font-bold">Aussi appelée :</span> Sprint, Bloc de
          temps.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Au début d’une
          itération ou d’un sprint, le responsable du produit et l’équipe
          décident des exigences à remplir pendant l’itération. La durée d’une
          itération peut varier d’un projet à l’autre.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Permet aux équipes de travailler efficacement avec les clients.
          </li>
          <li>Encourage la rétroaction tout au long de l’itération.</li>
          <li>Aide à prévenir le glissement des fonctionnalités.</li>
          <li>Réduit le risque de retards par rapport aux délais.</li>
        </ul>
      </div>
    </details>
  ),
  'Poker de planification': (
    <details className="space-y-2">
      <summary>Poker de planification</summary>
      <div className="space-y-2">
        <p>
          Le Poker de planification est un exercice ou un jeu de renforcement de
          l’esprit d’équipe qui permet au groupe d’en arriver à un consensus en
          ce qui concerne l’estimation de la charge de travail.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Les joueurs
          utilisent des cartes imprimées avec des chiffres de la séquence
          Fibonacci pour attribuer des points aux récits des utilisateurs afin
          d’estimer la charge de travail. L’équipe doit parvenir à un consensus
          sur le temps qu’il faudra pour réaliser les récits ou remplir les
          exigences des utilisateurs. Les équipes peuvent aussi utiliser
          d’autres formes d’estimation relative, comme la taille de t-shirts.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Met à profit l’expérience et les connaissances collectives de
            l’équipe.
          </li>
          <li>Encourage le remue-méninges et la proposition d’idées.</li>
          <li>Favorise la résolution de problèmes.</li>
          <li>Stimule la collaboration en équipe.</li>
          <li>Fournit des estimations plus exactes.</li>
        </ul>
      </div>
    </details>
  ),
  'Responsable du produit': (
    <details className="space-y-2">
      <summary>Responsable du produit</summary>
      <div className="space-y-2">
        <p>
          En tant que membre de l’équipe agile, le responsable du produit
          représente le client et transmet ses exigences et sa vision à
          l’équipe. Le responsable du produit rédige les critères d’acceptation
          et établit l’ordre de priorité du carnet des commandes du produit et
          en assure la tenue à jour. Les responsables du produit devraient être
          en mesure de bien communiquer dans les deux sens : à la fois en
          transmettant les préoccupations de l’équipe au client et aux
          intervenants et en s’assurant que l’équipe reste sur la bonne voie
          pour se conformer à la vision du client à l’égard du produit.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Dans un
          environnement de mêlée, le responsable du produit compile et classe
          par ordre de priorité les récits des utilisateurs à accomplir lors
          d’un sprint. Pendant le sprint, le responsable du produit garde le
          silence; il ne peut pas apporter de changements ni donner de la
          rétroaction. Une fois le sprint terminé, le responsable du produit
          rencontre les membres de l’équipe et les intervenants pour leur faire
          part de commentaires et discuter des pistes d’amélioration. Le
          responsable du produit accepte ou rejette le produit à la fin du
          sprint, selon les critères d’acceptation décidés lors de la rencontre
          de planification du printemps.
        </p>
        <p>
          Dans un environnement de Kanban, le responsable du produit compile un
          carnet de commandes et classe par ordre de priorité les tâches à
          accomplir. Le responsable du produit a la souplesse nécessaire pour
          modifier les travaux et en changer l’ordre de priorité n’importe quand
          sans que cela ait une incidence sur les travaux déjà en cours.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Meilleure compréhension au sein de l’équipe de la vision du client
            et du produit final.
          </li>
          <li>
            Communication et confiance accrues entre les clients, l’équipe et
            les intervenants.
          </li>
          <li>Soutien accru à l’équipe venant de parties externes.</li>
        </ul>
      </div>
    </details>
  ),
  'Version': (
    <details className="space-y-2">
      <summary>Version</summary>
      <div className="space-y-2">
        <p>
          Une version agile désigne la livraison finale d’un progiciel après
          plusieurs itérations ou sprints. Une version peut être soit la version
          initiale d’une application, soit l’ajout d’une ou de plusieurs
          fonctionnalités à une application existante. La mise au point d’une
          version ne devrait pas prendre plus d’un an et, dans certains cas, ne
          prendra peut-être que trois mois.
        </p>
        <p>
          <span className="font-bold"> Dans la pratique :</span> Les équipes
          agiles prennent le temps prévu pour le développement d’une version
          logicielle divisé par la vitesse des itérations pour déterminer le
          nombre d’itérations nécessaires pour développer le logiciel nécessaire
          pour la version.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Fournit un objectif concret.</li>
          <li>Clarifie les exigences et la vision du client.</li>
          <li>
            Permet la diffusion préliminaire des versions alpha ou bêta après
            plusieurs itérations.
          </li>
        </ul>
      </div>
    </details>
  ),
  'Scrumban': (
    <details className="space-y-2">
      <summary>Scrumban</summary>
      <div className="space-y-2">
        <p>
          Scrumban est un hybride des méthodologies mêlée (Scrum) et Kanban
          utilisé pour accomplir des tâches et produire des livrables.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Scrumban est
          utilisé lorsqu’une équipe de mêlée souhaite appliquer une méthodologie
          de Kanban à son processus en se concentrant sur les travaux en cours
          et l’amélioration continue. Ou encore, une équipe de Kanban pourrait
          vouloir appliquer une certaine structure de mêlée à son processus,
          comme des réunions debout chaque jour ou certains rôles.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Combine les meilleures pratiques des deux méthodes pour améliorer le
            processus que suit l’équipe.
          </li>
          <li>
            Permet aux équipes d’adapter leur processus de la manière qui leur
            convient le mieux.
          </li>
          <li>Équilibre la capacité de l’équipe par rapport à la demande.</li>
          <li>Améliore la visualisation pour une équipe de mêlée.</li>
          <li>
            Dirige les équipes vers une évolution à long terme de l’amélioration
            continue.
          </li>
        </ul>
      </div>
    </details>
  ),
  'Tâche': (
    <details className="space-y-2">
      <summary>Tâche</summary>
      <div className="space-y-2">
        <p>
          Une tâche est une seule unité de travail provenant d’un récit
          d’utilisateur décomposé. Une tâche est habituellement accomplie par
          une seule personne.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> La tâche est
          utilisée dans la méthodologie mêlée pour désigner une petite
          augmentation du travail à effectuer par un membre de l’équipe pendant
          un sprint. L’équipe désigne visuellement une tâche à accomplir en
          affichant une carte ou une note autocollante à son tableau de travail.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Décompose les récits d’utilisateur en unités gérables.</li>
          <li>
            Permet aux membres de l’équipe d’accomplir une tâche sans se sentir
            submergés.
          </li>
          <li>Facile à indiquer sur les tableaux de travail agile.</li>
        </ul>
      </div>
    </details>
  ),
  'Dette technique': (
    <details className="space-y-2">
      <summary>Dette technique</summary>
      <div className="space-y-2">
        <p>
          La dette technique désigne l’obligation qui crée une équipe de
          développement lorsqu’elle utilise une approche rapide et à court terme
          pour développer un progiciel sans tenir compte des conséquences à long
          terme. La dette technique augmente le coût et la complexité du projet
          en raison des inefficacités, des inexactitudes et d’autres problèmes
          introduits dans le progiciel. Une mauvaise gestion, de l’incompétence,
          la pression exercée par les délais ou des erreurs involontaires
          peuvent toutes contribuer à la dette technique.
        </p>
        <p>
          <span className="font-bold"> Dans la pratique :</span> La dette
          technique sert à motiver l’équipe à se concentrer sur la qualité et la
          valeur ajoutée pendant le développement. Cela peut se traduire par le
          réusinage et l’examen du code avec diligence et de façon continue,
          l’exécution de tests unitaires automatisés et l’intégration du code de
          façon cohérente. Les programmes de jumelage sont souvent utiles pour
          se protéger contre la dette technique. La création d’un environnement
          dans lequel les membres de l’équipe sont encouragés à étendre leurs
          connaissances et leur expérience pertinentes aide également à prévenir
          la dette technique.
        </p>
        <p className="underline">
          Préoccupations liées à la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Réduit la qualité des produits.</li>
          <li>Entraîne des taux élevés de défectuosités.</li>
          <li>Réduit la productivité.</li>
          <li>Réduit la vitesse du flux de travail.</li>
          <li>Réduit la qualité de la tenue à jour du code.</li>
          <li>Entraîne des modifications et des mises en œuvre coûteuses.</li>
        </ul>
      </div>
    </details>
  ),
  'Bloc de temps': (
    <details className="space-y-2">
      <summary>Bloc de temps</summary>
      <div className="space-y-2">
        <p>
          Un bloc de temps désigne une période donnée pendant laquelle une
          personne ou une équipe travaille à l’atteinte d’un objectif établi.
          L’équipe arrête le travail à la fin de la période, plutôt qu’à la fin
          des travaux. L’équipe évalue ensuite la quantité de travail accompli
          pour atteindre l’objectif fixé.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Des blocs de
          temps sont instaurés dans le cadre du développement logiciel agile
          afin d’accroître la qualité et la valeur d’un produit livrable. Plus
          particulièrement, des blocs de temps sont appliqués durant les sprints
          selon la méthodologie de la mêlée, ainsi que dans les pointes, où des
          longueurs fixes sont assignées aux tâches. Tout travail non exécuté à
          l’intérieur de la limite du bloc de temps soit est réaffecté à une
          autre itération, soit reçoit une nouvelle priorité.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Met davantage l’accent sur les tâches ou les problèmes qui ajoutent
            le plus de valeur.
          </li>
          <li>
            Permet de s’assurer que les besoins des clients sont satisfaits.
          </li>
          <li>Réduit le glissement des fonctionnalités.</li>
          <li>Offre une courte boucle de rétroaction.</li>
          <li>
            Permet de s’assurer que les fonctionnalités les plus importantes
            sont incluses au progiciel.
          </li>
        </ul>
      </div>
    </details>
  ),
  'Récit d’utilisateur': (
    <details className="space-y-2">
      <summary>Récit d’utilisateur</summary>
      <div className="space-y-2">
        <p>
          Un récit d’utilisateur est une brève description non technique d’une
          exigence rédigée du point de vue du client ou de l’utilisateur final.{' '}
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Le responsable
          du produit répartit les tâches dans le carnet de commandes en récits
          d’utilisateur. Pour évaluer l’effort que représente la charge de
          travail nécessaire pour mener à bien le récit, des points sont
          attribués aux récits d’utilisateur. Une fois que le responsable du
          produit classe les récits d’utilisateur par ordre de priorité,
          l’équipe divise les récits les plus prioritaires en tâches à accomplir
          lors de la prochaine itération ou du prochain sprint. L’équipe agile
          se sert de ces récits pour créer du code qui répondra aux exigences du
          client. Une fois l’itération ou le sprint terminé, l’équipe devrait
          avoir créé une version ou un produit livrable ou fonctionnel
          correspondant à l’exigence précisée dans le récit d’utilisateur.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>Accroît la productivité.</li>
          <li>
            Permet aux équipes de bien comprendre les exigences logicielles et
            les critères d’acceptation.
          </li>
          <li>Fournit aux équipes une rétroaction continue ou fréquente.</li>
          <li>
            Permet au responsable du produit ou au client d’apporter de petits
            changements avant la mise en œuvre du récit.
          </li>
          <li>Favorise l’amélioration continue.</li>
          <li>Augmente la valeur et la qualité des produits.</li>
          <li>Réduit le risque de défauts.</li>
        </ul>
      </div>
    </details>
  ),
  'Test unitaire': (
    <details className="space-y-2">
      <summary>Test unitaire</summary>
      <div className="space-y-2">
        <p>
          Un test unitaire désigne un court fragment de programme écrit pour
          tester et vérifier un élément de code une fois qu’il est terminé. Un
          élément de code soit réussit, soit échoue au test unitaire. Le test
          unitaire (ou un groupe de tests, appelé suite de tests) est le premier
          échelon de test d’un produit de développement logiciel.
        </p>
        <p>
          <span className="font-bold">Dans la pratique :</span> Les développeurs
          effectuent un test unitaire pour un petit élément de code qu’ils
          mettent au point afin de vérifier si le code fonctionne correctement.
          Des essais unitaires devraient également être rédigés pour la
          correction des bogues. Lorsque le code est modifié, déplacé ou
          supprimé, l’essai unitaire doit être révisé pour refléter ce
          changement, puis exécuté de nouveau.
        </p>
        <p className="underline">
          Avantages du point de vue de la gestion de projet :
        </p>
        <ul className="list-disc list-inside">
          <li>
            Permet de repérer les bogues dans le logiciel tôt dans le processus
            de développement.
          </li>
          <li>Fournit de la documentation pour chaque élément de code.</li>
          <li>Offre une courte boucle de rétroaction.</li>
          <li>Facilite le déroulement des tests d’intégration.</li>
        </ul>
      </div>
    </details>
  ),
}
