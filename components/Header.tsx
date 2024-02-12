import Image from "next/image";
import Link from "next/link";

export const navigation = [
  {
    id: 0,
    name: "Entreprise",
    link: "/company",
  },
  {
    id: 1,
    name: "Equipe",
    link: "/team",
  },
  {
    id: 2,
    name: "Solutions",
    link: "/solutions",
  },
  {
    id: 3,
    name: "Realisations",
    link: "/projects",
  },
  {
    id: 4,
    name: "Blog",
    link: "/blog",
  },
];

export default function Header() {
  return (
    <div className="container h-16 flex items-center  ">
      <div>
        <Image
          src="/logo.png"
          width={146}
          height={57}
          alt="Digital mind logo"
        />
      </div>
      <ul className="flex gap-2">
        {navigation.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
