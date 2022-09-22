import { useState } from 'react';
import { BiAddToQueue } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5';

function AddProduct() {


  const [preview, setPreview] = useState(null)
  const [form, setForm] = useState({
    name: '',
    image: '',
    purchasePrice: '',
    sellingPrice: '',
    qty: ''
  })

  const showModal = () => {
    const modalBg = document.getElementById('modalBg')
    const addProductModal = document.getElementById('addProductModal')
    modalBg.style.display = 'block'
    addProductModal.style.display = 'flex'
  }

  const close = () => {
    const modalBg = document.getElementById('modalBg')
    const addProductModal = document.getElementById('addProductModal')
    modalBg.style.display = 'none'
    addProductModal.style.display = 'none'
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'file' ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === 'file') {
      let url = URL.createObjectURL(e.target.files[0]);
      // URL digunakan untuk membuat URL dari gambar yang di-upload
      setPreview(url);
    }
  };

  return (
    <>
      <button className="flex items-center text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-2 py-1 text-center" type="button" onClick={showModal}>
        <BiAddToQueue className='h-6 w-6 mr-2' />
        <p className='text-lg'>Add Product</p>
      </button>

      <div id="addProductModal" tabIndex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full md:inset-0 md:h-full justify-center items-center">
        <div id='modalBg' className="fixed z-40 top-0 bottom-0 right-0 left-0 bg-slate-500 bg-opacity-50" onClick={close}></div>
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">

          <div className="relative z-50 bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={close}>
              <IoClose className='w-6 h-6' />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Product</h3>
              <form className="space-y-6" action="#">
                {preview && (
                  <div className='mb-2'>
                    <img
                      src={preview}
                      style={{
                        maxWidth: '150px',
                        maxHeight: '150px',
                        objectFit: 'cover',
                      }}
                      alt={preview}
                    />
                  </div>
                )}

                <input
                  className='mb-3 cursor-pointer'
                  type="file"
                  id='upload'
                  name='image'
                  onChange={handleChange}
                />

                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Product's Name" onChange={handleChange} required />

                <input type="number" name="purchasePrice" id="purchasePrice" placeholder="Purchase Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={handleChange} required />

                <input type="number" name="sellingPrice" id="sellingPrice" placeholder="Selling Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={handleChange} required />

                <input type="number" name="qty" id="qty" placeholder="Stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={handleChange} required />

                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProduct