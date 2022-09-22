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
        <h1 className="text-3xl dark:text-white">Products</h1>
        <AddProduct />
        <EditProduct productData={productData} />
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
    </div>
  )
}

export default Products