import { ArrowRight, LucideIcon } from 'lucide-react'; 

interface ServiceCardProps {
  iconComponent: LucideIcon; 
  title: string;
  description: string;
  features?: string[]; 
  price: string;
  link: string;
  iconBgColor?: string; 
  iconColor?: string; 
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  iconComponent: Icon, // Renomeia iconComponent para Icon para usar como componente JSX
  title,
  description,
  features,
  price,
  link,
  iconBgColor,
  iconColor,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full border border-gray-100">
      
      <div className={`w-16 h-16 mb-4 rounded-full flex items-center justify-center ${iconBgColor || 'bg-blue-100/50'}`}>
        
        {Icon && <Icon className={`w-10 h-10 ${iconColor || 'text-blue-600'}`} />}
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {features && features.length > 0 && (
        <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}

      
      <div className="flex justify-between items-center w-full mt-auto pt-4 border-t border-gray-100">
        <p className="text-blue-600 font-semibold">{price}</p>
        <a href={link} className="text-blue-600 font-semibold flex items-center hover:underline">
          Saiba mais
          <ArrowRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
};