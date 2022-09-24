import convertRupiah from 'rupiah-format'
import { products } from "../fakeData/products"
import { AiFillEdit } from 'react-icons/ai'
import { IoTrashBin, IoTriangle } from 'react-icons/io5'
import { AddProduct, DeleteProduct, EditProduct } from "../components"
import { useState } from "react"

function Products({ setTitle }) {

  setTitle('Products')

  const [productData, setProductData] = useState({})
  const [searchProductData, setSearchProductData] = useState([])
  const [pages, setPages] = useState([])
  const [dataPerPage, setDataPerPage] = useState(3)
  const [showProducts, setShowProducts] = useState([])
  const [message, setMessage] = useState('')

  //* Displays a Modal when user click edit button or delete button 
  const showModal = (item, type) => {
    setProductData(item)
    const modalBg = document.getElementById('modalBg')
    modalBg.style.display = 'block'

    if (type === 'edit') {
      const editProductModal = document.getElementById('editProductModal')
      editProductModal.style.display = 'flex'
      return
    }

    const deleteProductModal = document.getElementById('deleteProductModal')
    deleteProductModal.style.display = 'flex'
  }

  //* Search and Show Product 
  const searchProduct = (e) => {

    let data = products.filter((item) => {
      return item.name.toLowerCase().match(e.target.value.toLowerCase())
    })

    setSearchProductData(data)
    const result = data.slice(0, dataPerPage)
    setShowProducts(result)

    let totalPage = Math.ceil(data.length / dataPerPage)
    let pageTemporary = []
    for (let i = 0; i < totalPage; i++) {
      pageTemporary.push(i);
    }

    setPages(pageTemporary)
  }

  if (!searchProductData.length) {
    setSearchProductData(products)
  }

  //* Paginatioin 

  const paginationProducts = (item) => {
    const result = searchProductData.slice((item - 1) * dataPerPage, item * dataPerPage)
    console.log(result)
    setShowProducts(result)
  }

  if (showProducts.length === 0) {
    const result = products.slice(0, 3)
    setShowProducts(result)

    let totalPage = Math.ceil(products.length / dataPerPage)
    let pageTemporary = []
    for (let i = 0; i < totalPage; i++) {
      pageTemporary.push(i);
    }

    setPages(pageTemporary)
  }

  const handleDataPerPage = (e) => {
    if (Number(e.target.value) === 0) {
      setTimeout(() => e.target.value = dataPerPage, 2000)
      return
    }

    setDataPerPage(Number(e.target.value))

    const result = searchProductData.slice(0, Number(e.target.value))
    setShowProducts(result)

    let totalPage = Math.ceil(searchProductData.length / Number(e.target.value))
    let pageTemporary = []
    for (let i = 0; i < totalPage; i++) {
      pageTemporary.push(i);
    }

    setPages(pageTemporary)
  }

  return (
    <div className="mb-5 mx-auto">
      {message && message}
      <div className='flex justify-between items-center mb-5'>
        <div className="flex gap-4">
          <h1 className="text-3xl dark:text-white">Products</h1>
          <div className="bg-white dark:bg-gray-900">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative mt-1">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="table-search" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" onChange={(e) => searchProduct(e)} />
            </div>
          </div>
        </div>
        <AddProduct products={products} setResultMessage={setMessage} />
        <EditProduct products={products} productData={productData} setResultMessage={setMessage} />
        <DeleteProduct productData={productData} setResultMessage={setMessage} />
      </div>

      <form className='mb-5'>
        <label className='cursor-pointer flex items-center w-max' htmlFor='perPage'>
          <p>Showing</p>
          <input id='perPage' className='mx-2 focus:pl-2 peer' size={dataPerPage.toString().length} type='text' onChange={(e) => handleDataPerPage(e)} />
          <p className='-m-8 peer-focus:m-0'>Products per page</p>
        </label>
      </form>

      <div className="overflow-x-auto relative shadow-md dark:shadow-md dark:shadow-slate-500 sm:rounded-lg">
        <table className="table-auto w-full text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs tracking-wider text-slate-50 uppercase bg-amber-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="py-3 px-6">No</th>
              <th className="py-3 pl-1 text-left">Image</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Purchase Price</th>
              <th className="py-3 px-6 text-left">Selling Price</th>
              <th className="py-3 px-6">Stock</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {showProducts.map((item, index) => {
              return (
                <tr className="bg-white border-b text-gray-800 border-slate-300 dark:text-gray-400 dark:bg-gray-800 dark:border-slate-500 hover:bg-amber-200 dark:hover:bg-amber-900 odd:bg-amber-100 dark:odd:bg-slate-900 group" key={index}>
                  <td className="text-center font-semibold">{index + 1}</td>
                  <td className="py-3">
                    <img className="h-20 dark:group-odd:bg-slate-600/50 dark:group-even:bg-slate-600/40 rounded-md" src={item.image} alt={item.name} />
                  </td>
                  <td className="py-4 px-6 font-semibold dark:text-white">{item.name}</td>
                  <td className="py-4 px-6">{convertRupiah.convert(item.purchasePrice)}</td>
                  <td className="py-4 px-6">{convertRupiah.convert(item.sellingPrice)}</td>
                  <td className="text-center">{item.qty}</td>
                  <td className="text-center">
                    <button className='bg-red-500 hover:bg-red-600 ml-auto mr-1 px-2 py-1 text-white text-sm rounded-md relative' onClick={() => showModal(item, 'delete')}>
                      <IoTrashBin className="w-5 h-5 peer" />
                      <div className='hidden peer-hover:block ml-2 absolute bg-red-50 w-max text-slate-600 px-2 py-1 rounded-md -bottom-9 -right-3 z-10'>
                        <IoTriangle className="w-6 h-6 absolute -top-4 right-3 fill-red-50" />
                        <p className='font-semibold text-red-700'>Remove Product</p>
                      </div>
                    </button>
                    <button className='bg-emerald-500 hover:bg-emerald-600 mr-auto ml-1 px-2 py-1 text-white text-sm rounded-md relative' onClick={() => showModal(item, 'edit')}>
                      <AiFillEdit className="w-5 h-5 peer" />
                      <div className='hidden peer-hover:block ml-2 absolute bg-emerald-50 w-max text-slate-600 px-2 py-1 rounded-md -bottom-9 -right-3 z-10'>
                        <IoTriangle className="w-6 h-6 absolute -top-4 right-3 fill-emerald-50" />
                        <p className='font-semibold text-emerald-600'>Edit Product</p>
                      </div>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <nav className="flex justify-between items-center pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-5</span> of <span className="font-semibold text-gray-900 dark:text-white">{searchProductData.length}</span></span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button href="#" className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            </button>
          </li>
          {pages.map((item, index) => {
            return (
              <li key={index} onClick={() => paginationProducts(item)}>
                <button href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{++item}</button>
              </li>
            )
          })}
          <li>
            <button href="#" className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Products