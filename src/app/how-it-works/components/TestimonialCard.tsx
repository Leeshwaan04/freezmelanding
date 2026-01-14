import AppImage from '@/components/ui/AppImage';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
  alt: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  image,
  alt
}: TestimonialCardProps) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-md border border-border">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <AppImage
              src={image}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-headline text-lg font-semibold text-foreground mb-1">
            {author}
          </h4>
          <p className="font-body text-sm text-muted-foreground">{role}</p>
        </div>
        <svg className="w-8 h-8 text-accent/20 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="font-body text-base text-foreground leading-relaxed italic">
        &quot;{quote}&quot;
      </p>
    </div>
  );
}