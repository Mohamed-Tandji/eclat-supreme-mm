type Props = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: Props) {
  return (
    <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-blue-700">
      {children}
    </span>
  );
}