import Image from "next/image"

const BackGroundSection = () => {
  return (
   <div className="relative w-screen h-screen">
  <Image
    src="/images/Screenshot.png"
    alt="Hero Background"
    fill
    className="object-cover"
  />
</div>

  )
}

export default BackGroundSection
