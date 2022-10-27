import DottedLine from '../components/DottedLine'

export default function ToolsAndResources() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-center">tools and resources</h1>
      <DottedLine />
      <section className="mb-10">
        <h2 className="text-2xl text-periwinkle mb-4">
          Digital Dojo Engagement Video
        </h2>
        <div className="flex gap-10">
          <iframe
            src="https://www.youtube.com/embed/G2FDF5LHWOU"
            title="the digital dojo experience"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="flex flex-col gap-5">
            <p>
              What would a stay in the Dojo look like? In this video, we try to
              explain more about what your team’s Dojo experience might look
              like.
            </p>
            <p>
              In this example, the team wants to explore Agile but the Dojo Team
              can help you with all of your Digital Transformation goals,
              aligning to the TBS Digital Standards.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl text-periwinkle mb-4">
          Curated Video Playlists
        </h2>
        <p className="mb-5">
          The following links lead to playlists curated by the Dojo team on a
          wide range of topics. In order to view these from your ESDC issued
          devices, you will need to disconnect from VPN!
        </p>
        <div className="lg:grid grid-cols-3">
          <div className="space-y-2">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLA--nqTdtET3gvCY8DBBX-v4-APKMMfZ3"
              title="Agile playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl text-periwinkle">Agile Basics</h3>
            <p>
              Videos that we feel does a great job explaining the basics of
              Agile.
            </p>
          </div>
          <div className="space-y-2">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLA--nqTdtET3vDgPXTrCp7YERpq874zWl"
              title="Kanban playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl text-periwinkle">Kanban 101 Playlist</h3>
            <p>
              Videos that we feel does a great job explaining the basics of
              Kanban.
            </p>
          </div>
          <div className="space-y-2">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLA--nqTdtET37Dnay7PJy_X6aQsipwfMa"
              title="the digital dojo experience"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl text-periwinkle">Scrum 101</h3>
            <p>
              Videos that we feel does a great job explaining the basics of
              Scrum.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink =
    locale === 'en' ? '/fr/tools-and-resources' : '/tools-and-resources'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Tools and Resources',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Outils et Ressources',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
