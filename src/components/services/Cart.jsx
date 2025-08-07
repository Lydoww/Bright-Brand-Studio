import { Plus, X } from 'lucide-react';

const Cart = ({
  title,
  description,
  listHeader,
  list,
  isExpanded,
  onToggle,
}) => {
  return (
    <div
      className={`relative flex flex-col text-left border border-black rounded-lg shadow-md p-6 pb-16 w-80 transition-all duration-300 ease-in-out ${
        isExpanded ? 'bg-[var(--color-blue)] h-auto z-10' : 'h-64 z-0'
      }`}
    >
      <h3
        className={`text-xl mb-2 ${
          isExpanded ? 'text-[var(--color-cream)]' : 'text-[#5B4739]'
        }`}
      >
        {title}
      </h3>

      <p
        className={`mb-4 ${
          isExpanded ? 'text-[var(--color-cream)]!' : 'text-[#5B4739]'
        }`}
      >
        {description}
      </p>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100 ' : 'max-h-0 opacity-0'
        }`}
      >
        <h4
          className={`font-bold mb-2 ${
            isExpanded ? 'text-[var(--color-cream)]' : 'text-[#5B4739]'
          }`}
        >
          {listHeader}
        </h4>
        <ul
          className={`list-disc ml-5 mb-4 ${
            isExpanded ? 'text-[var(--color-cream)]' : 'text-[#5B4739]'
          }`}
        >
          {list.map((item, idx) => (
            <li key={idx} className='mb-1 leading-snug'>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onToggle}
        className={`absolute bottom-4 right-4 p-2 rounded-full cursor-pointer ${
          isExpanded
            ? 'border border-[var(--color-cream)]'
            : 'border border-black'
        }`}
        aria-label={isExpanded ? 'Réduire' : 'Développer'}
      >
        {isExpanded ? (
          <X
            size={16}
            className='text-[var(--color-cream)] border-[var(color-cream)]'
          />
        ) : (
          <Plus size={16} className='text-black' />
        )}
      </button>
    </div>
  );
};

export default Cart;
