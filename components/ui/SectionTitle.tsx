type Props = {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({
  badge,
  title,
  description,
  center = false,
}: Props) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">
        {badge}
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}