import Image from 'next/image'
import Link from 'next/link'
import MetaData from '../components/MetaData'

export default function Index(props) {
  return (
    <>
      <div role="main" className="container mx-auto px-6 my-5 p-12">
        <MetaData language={props.locale} data={props.meta}></MetaData>
        <div className="flex flex-col justify-center items-center m-auto gap-2">
          <Image
            src="/Landing_logo.png"
            alt="Digital Dojo / Dojo Numérique logo"
            width="200px"
            height="200px"
          ></Image>
          <h1 className="flex flex-col justify-center items-center">
            <span className="text-periwinkle text-3xl mb-4 mt-4">
              Digital Dojo
            </span>
            <hr className="h-2 w-36"></hr>
            <span className="text-periwinkle text-3xl">Dojo Numérique</span>
          </h1>
          <div className="flex w-max container py-11 mx-auto">
            <div className="grid grid-cols-2 gap-2 xl:gap-6">
              <Link href="/home">
                <a
                  className="focus:ring-1 focus:ring-periwinkle focus:ring-offset-2 py-2 px-10 whitespace-pre bg-gray-100 text-periwinkle text-center border border-periwinkle active:bg-periwinkle hover:border-b-4 hover:border-b-periwinkle grid place-items-center duration-200"
                  role="button"
                  draggable="false"
                  lang="en"
                  id="english-button"
                >
                  English
                </a>
              </Link>
              <Link href="/fr/home">
                <a
                  className="focus:ring-1 focus:ring-periwinkle focus:ring-offset-2 py-2 px-10 whitespace-pre bg-gray-100 text-periwinkle text-center border border-periwinkle active:bg-periwinkle hover:border-b-4 hover:border-b-periwinkle grid place-items-center duration-200"
                  role="button"
                  draggable="false"
                  lang="fr"
                  id="french-button"
                >
                  Français
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Index.getLayout = function PageLayout(page) {
  return <>{page}</>
}

export async function getStaticProps({ locale }) {
  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, meta },
  }
}
