import { useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { BsFillExclamationCircleFill } from 'react-icons/bs'

function EditProduct({ products, handleEdit, product, close, isAPI }) {

  const nameElement = useRef()
  nameElement.current = document.getElementsByName('name')

  const [preview, setPreview] = useState(null)
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({
    name: '',
    image: '',
    purchasePrice: '',
    sellingPrice: '',
    qty: '',
  })

  const handleChange = (e) => {

    if (e.target.type === 'file') {
      //* Handle image size 
      if (e.target.files[0].size > 100000) {
        setForm({
          ...form,
          image: 'wrong image',
        })
        return setMessage(
          <div id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
            <BsFillExclamationCircleFill class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" />
            <span class="sr-only">Info</span>
            <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
              Maximum image size is 100KB
            </div>
          </div>
        )
        //* Handle image type 
      } else if (e.target.files[0].type !== "image/jpeg" && e.target.files[0].type !== "image/png") {
        setForm({
          ...form,
          image: 'wrong image',
        })
        return setMessage(
          <div id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
            <BsFillExclamationCircleFill class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" />
            <span class="sr-only">Info</span>
            <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
              Please, choose jpg or png image
            </div>
          </div>
        )
      }
    }

    //* Handle form value must be number 
    switch (e.target.name) {
      case 'purchasePrice':
      case 'sellingPrice':
      case 'qty':
        const number = Number(e.target.value)
        if (isNaN(number)) {
          e.target.className = "bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-red-500 dark:placeholder-red-400"
          return setMessage(
            <div id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
              <BsFillExclamationCircleFill class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" />
              <span class="sr-only">Info</span>
              <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                The {e.target.name} column must be a number!
              </div>
            </div>
          )
        }
        e.target.className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        break
      default:
        e.target.className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
    }

    setMessage('')

    //* Create Imange URL 
    let url
    if (e.target.type === 'file') {
      url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }

    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'file' ? isAPI ? e.target.files : url : e.target.value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault()

    //* Handle product name must be unique 
    const existingProductName = products.filter((item) => {
      return form.name === item.name
    })
    if (existingProductName.length) {
      if (existingProductName !== product.data.name) {
        nameElement.current[0].className = "bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-red-500 dark:placeholder-red-400"
        return setMessage(
          <div id="alert-2" className="flex items-center p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
            <BsFillExclamationCircleFill className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" />
            <span className="sr-only">Info</span>
            <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800 ">
              The product name already exist!
            </div>
          </div>
        )
      }
    }

    //* Displays an alert when choosing the wrong image (file size > 100KB or file type not jpg/png) 
    if (form.image === "wrong image") {
      return setMessage(
        <div id="alert-2" className="flex items-center p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
          <BsFillExclamationCircleFill className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" />
          <span className="sr-only">Info</span>
          <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800 ">
            Please, choose image correctly!
          </div>
        </div>
      )
    }

    // if (!form.image) {
    //   form.image = product.data.image
    // }
    if (!form.name) {
      form.name = product.data.name
    }
    if (!form.purchasePrice) {
      form.purchasePrice = product.data.purchasePrice
    }
    if (!form.sellingPrice) {
      form.sellingPrice = product.data.sellingPrice
    }
    if (!form.qty) {
      form.qty = product.data.qty
    }

    handleEdit('edit', form)

    close()
  }

  return (
    <>
      <div id="editProductModal" tabIndex="-1" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full md:inset-0 md:h-full justify-center items-center">
        <div id='modalBg' className="fixed z-40 top-0 bottom-0 right-0 left-0 bg-slate-500 bg-opacity-50" onClick={close}></div>
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">

          <div className="relative z-50 bg-white rounded-lg shadow dark:bg-gray-900">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={close}>
              <IoClose className='w-6 h-6' />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit Product</h3>
              {message && message}

              <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
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

                <div>
                  <label htmlFor="name">Name :</label>
                  <input type="text" name="name" id="name" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={product?.data?.name} onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor="purchasePrice">Purchase Price :</label>
                  <input type="number" name="purchasePrice" id="purchasePrice" placeholder={product?.data?.purchasePrice} className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor="sellingPrice">Selling Price :</label>
                  <input type="number" name="sellingPrice" id="sellingPrice" placeholder={product?.data?.sellingPrice} className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor="qty">Quantity :</label>
                  <input type="number" name="qty" id="qty" placeholder={product?.data?.qty} className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={handleChange} />
                </div>

                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProduct