import Image, { StaticImageData } from "next/image";
import clsx from 'clsx'


type CardLeftProps = {
  image: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
  link: string;
};

export default function CardLeft({ image, alt, title, description }: CardLeftProps) {
  return (
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
   
      <Image
        src={image}
        alt={alt}
        sizes="(min-width: 640px) 18rem, 11rem"
        className="w-full object-cover"
      />
               
      <div>
        <h4 className="text-lg font-bold text-gray-900 order">{title}</h4>
        <p className="mt-1 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  )
}
