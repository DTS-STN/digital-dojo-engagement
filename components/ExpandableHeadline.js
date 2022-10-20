import { Disclosure } from '@headlessui/react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { IconContext } from 'react-icons'

export default function GroupedBeltResults({
  qaObject: { question, answer, id },
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <div id={id} className={'target:animate-pulse-short rounded-lg px-2'}>
          <Disclosure.Button className="flex w-full justify-between text-left items-center pt-5 pb-3">
            <h1 className="text-2xl py-1">{question}</h1>
            <IconContext.Provider
              value={{ className: 'fill-periwinkle flex-none ml-2', size: 20 }}
            >
              {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </IconContext.Provider>
          </Disclosure.Button>
          <hr />
          <Disclosure.Panel className="py-2">{answer}</Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}
