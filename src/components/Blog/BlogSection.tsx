import Image from "next/image";

export interface BlogSectionProps {
  heading: string;
  paragraphs: string[];
  image?: string;
  id?: string;
}

export default function BlogSection({ heading, paragraphs, image, id }: BlogSectionProps) {
  return (
    <section
      id={id}
      className="w-full flex flex-col gap-10 md:gap-16 pb-8 "
    >
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{heading}</h2>

        <div className="space-y-4 text-gray-600 leading-relaxed">
          {paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </div>

      {image && (
        <div className="flex-1 w-full h-100">
          <Image
            src={image}
            alt={heading}
            width={900}
            height={600}
            className="rounded-2xl w-full h-80 object-cover"
          />
        </div>
      )}
    </section>
  );
}