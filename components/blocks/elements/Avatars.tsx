import React from 'react'

type Props = {}

const Avatars = (props: Props) => {
  return (
    <div className="flex -space-x-2 overflow-hidden p-1">
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ix&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1568585105565-e372998a195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1609436132311-e4b0c9370469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
  )
}
export default Avatars
