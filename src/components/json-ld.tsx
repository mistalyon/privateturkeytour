type JsonLdObject = Record<string, unknown>;

export function JsonLd({
  data,
}: {
  data: JsonLdObject | JsonLdObject[];
}) {
  const items = (Array.isArray(data) ? data : [data]).filter(
    (item): item is JsonLdObject =>
      Boolean(item) && typeof item === "object" && !Array.isArray(item),
  );

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
