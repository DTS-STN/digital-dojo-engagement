import { BsFillPersonFill } from 'react-icons/bs'
import Image from 'next/image'

function Coach(props) {
  const { src, name, title, blurb } = props
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded-full border-2 p-1 h-32 w-32">
        {src ? (
          <Image
            src={src}
            height={32}
            width={32}
            objectFit="cover"
            layout="responsive"
          />
        ) : (
          <BsFillPersonFill className="w-28 h-28" />
        )}
      </div>
      <h2 className="font-bold text-periwinkle text-lg">{name || 'Name'}</h2>
      <p className="text-md">{title || 'Title'}</p>
      <p className="text-sm">{blurb || 'Blurb'}</p>
    </div>
  )
}

export default Coach
