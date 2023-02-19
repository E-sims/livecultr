import Image from "next/image"

function Logo(props: any) {
  // const { renderDefault, title } = props

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover mr-2"
        height={40}
        width={40}
        src="/logo-mark@dark.svg"
        alt="logo"
      />
      {/* <>{renderDefault(props)}</> */}
    </div>
  )
}

export default Logo
