import Link from "next/link";
import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} replace>
      <a
        onClick={handleClick}
        style={style}
        className="text-xl font-semibold uppercase "
      >
        {children}
      </a>
    </Link>
  );
}

export default ActiveLink;
