const Cart = ({ title, labels, description, image }) => {
  const arrayLabels = Object.values(labels);

  return (
    <div className='flex flex-col lg:flex-row border border-[var(--color-brown)] rounded-[15px] shadow-2xl'>
      <div className='w-full lg:w-1/3 px-4 '>
        <h3 className='text-2xl sm:text-3xl lg:text-[34px] color-[var(--color-brown)] mb-3 sm:mb-4 mt-2 xl:mt-4'>
          {title}
        </h3>

        <ul className='flex flex-wrap gap-2 sm:mb-4'>
          {arrayLabels.map((label, index) => {
            const adaptLabels = label.replace(/\s+/g, '-').toLowerCase();
            const addLabel = 'label-' + adaptLabels;

            return (
              <li className={`${addLabel} text-xs sm:text-sm`} key={index}>
                {label}
              </li>
            );
          })}
        </ul>

        <div className='text-justify text-sm sm:text-base hidden lg:block'>
          {description.split('\n\n').map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-3 sm:mt-4' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className='w-full lg:w-2/3 p-4 lg:p-6 lg:flex lg:items-center'>
        <img
          className='w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[500px] 2xl:h-[550px] object-cover lg:object-contain rounded-[15px]'
          src={image}
          alt='image'
        />

        <div className='text-justify text-sm sm:text-base mt-4 lg:hidden'>
          {description.split('\n\n').map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-3 sm:mt-4' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
