import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Button({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
    >
      {children}
    </Link>
  );
}