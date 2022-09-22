import { IoClose } from 'react-icons/io5';

function DeleteProduct({ productData }) {

  const close = () => {
    const modalBg = document.getElementById('modalBg')
    const deleteProductModal = document.getElementById('deleteProductModal')
    modalBg.style.display = 'none'
    deleteProductModal.style.display = 'none'
  }

  return (
    <>
      <div id="deleteProductModal" tabIndex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full md:inset-0 md:h-full justify-center items-center">
        <div id='modalBg' className="fixed z-40 top-0 bottom-0 right-0 left-0 bg-slate-500 bg-opacity-50" onClick={close}></div>
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">

          <div className="relative z-50 bg-white rounded-lg shadow dark:bg-gray-900">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={close}>
              <IoClose className='w-6 h-6' />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center mb-5">Delete {productData.name}?</h3>
              <div className='flex justify-center gap-2'>
                <button className='bg-emerald-500 w-1/3 hover:bg-emerald-600 px-2 py-1 text-white text-sm rounded-md group relative'>
                  <p className='font-semibold text-center'>Cancel</p>
                </button>
                <button className='bg-red-500 w-1/3 hover:bg-red-600 px-2 py-1 text-white text-sm rounded-md group relative'>
                  <p className='font-semibold text-center'>Delete Product</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteProduct