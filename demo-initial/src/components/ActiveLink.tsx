import Link from "next/link";
import { useRouter } from "next/router";

interface props {
  href: string;
  text?: string;
}

export const ActiveLink = ({ href, text }: props) => {
  return (
    /*El componente active link se crea para manejar mejor cada link que tengo en el navbar  aqui desestruturo las props para poder usarlas en el otro componente*/
    <Link href={href}>{text}</Link>
  );
};
