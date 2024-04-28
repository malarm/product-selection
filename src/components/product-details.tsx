import { Product } from "../common/models";

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="shadow-md sm:rounded-lg p-4 bg-white lg:ms-2 mt-2 lg:mt-0">
            <table className="divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <tbody>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>ID</td>
                        <td className='py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white'>{product?.id}</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>Company</td>
                        <td className='py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white'>{product?.company}</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>Series</td>
                        <td className='py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white'>{product?.series}</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>Product</td>
                        <td className='py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white'>{product?.product}</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>Data</td>
                        <td className='py-4 px-6 text-sm font-medium text-gray-500 break-all dark:text-white max-w-[400px] '>{product?.data}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductDetails;