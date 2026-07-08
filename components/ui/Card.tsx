type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      {children}
    </div>
  );
}