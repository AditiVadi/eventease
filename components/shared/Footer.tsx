import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <div>
      <footer className="border-t">
        <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
          <Link href="/">
            <Image src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}/>
          </Link>
          <p>2024 EventEase. All Rights reserverd.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
