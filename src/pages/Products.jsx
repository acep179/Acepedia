import { products } from "../fakeData/products"
import { AiOutlineEdit } from 'react-icons/ai'
import { IoTrashBin, IoTriangle } from 'react-icons/io5'
import { AddProduct, DeleteProduct, EditProduct } from "../components"
import { useState } from "react"

function Products() {

  const [productData, setProductData] = useState({})

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

  return (
    <div className="mb-5 mx-auto">
      <div className='flex justify-between items-center mb-5'>
        <div className="flex gap-4">
          <h1 className="text-3xl dark:text-white">Products</h1>
          <div className="bg-white dark:bg-gray-900">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative mt-1">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="table-search" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
            </div>
          </div>
        </div>
        <AddProduct products={products} />
        <EditProduct products={products} productData={productData} />
        <DeleteProduct productData={productData} />
      </div>
      <table className="table-auto w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="py-3 px-6">No</th>
            <th className="py-3 px-6">Image</th>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Purchase Price</th>
            <th className="py-3 px-6">Selling Price</th>
            <th className="py-3 px-6">Stock</th>
            <th className="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="py-3"><img className="h-20" src={item.image} alt={item.name} /></td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">{item.name}</td>
                <td className="text-center">{item.purchasePrice}</td>
                <td className="text-center">{item.sellingPrice}</td>
                <td className="text-center">{item.qty}</td>
                <td className="text-center">
                  <button className='bg-red-500 hover:bg-red-600 px-2 py-1 ml-auto mr-1 text-white text-sm rounded-md group relative' onClick={() => showModal(item, 'delete')}>
                    <IoTrashBin className="w-5 h-5" />
                    <div className='hidden group-hover:block ml-2 absolute bg-red-200 w-max text-slate-600 px-2 py-1 rounded-md -bottom-10 left-0 z-10'>
                      <IoTriangle className="w-6 h-6 absolute -top-4 left-0 fill-red-200" />
                      <p className='font-semibold'>Remove Product</p>
                    </div>
                  </button>
                  <button className='bg-emerald-500 hover:bg-emerald-600 px-2 py-1 mr-auto ml-1 text-white text-sm rounded-md group relative' onClick={() => showModal(item, 'edit')}>
                    <AiOutlineEdit className="w-5 h-5" />
                    <div className='hidden group-hover:block ml-2 absolute bg-emerald-200 w-max text-slate-600 px-2 py-1 rounded-md -bottom-10 left-0 z-10'>
                      <IoTriangle className="w-6 h-6 absolute -top-4 left-0 fill-emerald-200" />
                      <p className='font-semibold'>Edit Product</p>
                    </div>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <nav className="flex justify-between items-center pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button href="#" className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </button>
          </li>
          <li>
            <button href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</button>
          </li>
          <li>
            <button href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</button>
          </li>
          <li>
            <button href="#" aria-current="page" className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</button>
          </li>
          <li>
            <button href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</button>
          </li>
          <li>
            <button href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</button>
          </li>
          <li>
            <button href="#" className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Products