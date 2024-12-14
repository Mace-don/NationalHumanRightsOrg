interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-[#B8860B] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{description}</p>
      </div>
    </div>
  );
}