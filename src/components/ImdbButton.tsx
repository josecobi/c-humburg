import Link from "next/link";
import MyLogo from '@/images/logos/IMDB-logo.svg'; 

export default function ImdbButton() {
  return (
    <Link href="https://www.imdb.com/name/nm0401726/" className="inline-block hover:opacity-80">
      <MyLogo width={12} height={9} />
    </Link>
  );
}