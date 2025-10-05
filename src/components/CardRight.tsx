import Image, { StaticImageData } from "next/image";
import clsx from 'clsx'
import { ReactNode } from "react";


type CardRightProps = {
  image: StaticImageData | string;
  alt: string;
  title: string;
  description: ReactNode;
  link: string;
};

export default function CardRight({ image, alt, title, description }: CardRightProps) {
  return (
    <div className="grid md:gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 ">
      <div className="order-2 md:order-1">
        <h4 className="text-xl font-bold text-gray-900 dark:text-zinc-100">{title}</h4>
        
          {description}
 
      </div>
      
      <Image
        src={image}
        alt={alt}
        sizes="(min-width: 640px) 18rem, 11rem, "
        className="w-full object-cover order-1 md:order-2"
      />
      
    </div>
  )
}

