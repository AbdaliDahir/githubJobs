export default function Spinner() {
  return (
    <div className='animate-pulse'>
      {/* Mobile Hero Section */}
      <div className='w-11/12 mx-auto transform -translate-y-6 bg-white rounded-md dark:bg-very-dark-blue md:hidden min-h-52'>
        <div
          className={
            'text-white font-brand font-bold mx-auto grid w-12 h-12 p-2 transform -translate-y-1/2 place-items-center rounded-2xl bg-gray-400'
          }
        ></div>
        <div className='px-6 text-center'>
          <div>
            <h2 className='inline-block w-7/12 h-6 text-xl font-bold leading-6 bg-gray-400 rounded text-very-dark-blue dark:text-white font-brand' />
            <p className='mt-3 text-base font-normal bg-gray-400 font-brand text-dark-grey leading-button' />
          </div>
        </div>
      </div>

      </div>
  )
}
