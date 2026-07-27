export function ProseSections({
  sections,
  headingClassName = "font-heading text-3xl tracking-[-0.03em] sm:text-4xl",
  bodyClassName = "mt-4 text-base leading-8 text-black/65",
}: {
  sections: { heading: string; body: string }[];
  headingClassName?: string;
  bodyClassName?: string;
}) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <article key={section.heading}>
          <h2 className={headingClassName}>{section.heading}</h2>
          {section.body.split(/\n\n+/).map((paragraph) => (
            <p key={paragraph.slice(0, 64)} className={bodyClassName}>
              {paragraph}
            </p>
          ))}
        </article>
      ))}
    </div>
  );
}
