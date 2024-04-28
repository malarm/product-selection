import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../common/store';
import { Product, State } from '../common/models';
import ProductDetails  from './product-details';

const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    
    const companies = useSelector((state: State) => state.companies);
    const companySeries = useSelector((state: State) => state.companySeries);
    const products = useSelector((state: State) => state.products);

    const [selectedCompany, setSelectedComapny] = useState<string>('');
    const [selectedCompanySeries, setSelectedCompanySeries] = useState<string>('');
    const [selectedProduct, setSelectedProduct] = useState<Product>();

    const handleCompanyChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedComapny(e.target.value)
        setSelectedCompanySeries('');
        setSelectedProduct(undefined);
    }

    const handleCompanySeriesChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCompanySeries(e.target.value)
        setSelectedProduct(undefined);
    }

    const handleProductChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedProduct(products.find(x => x.id === e.target.value))
    }

    const filteredProducts = useMemo(() => {
        return products.filter(product => product.company === selectedCompany && product.series === selectedCompanySeries);
    }, [products, selectedCompany, selectedCompanySeries]);

    useEffect(() => {
        dispatch(fetchData() as any);
    }, [dispatch]);

    return (
        <div className='lg:flex h-100 p-4 vw-100 '>
            <div className='w-[300px] shadow-md sm:rounded-lg p-4  bg-white'>
                <div className="sm:col-span-3 pb-2">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Company</label>
                    <div className="mt-1">
                        <select id="company" name="company"
                            value={selectedCompany} onChange={handleCompanyChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option value={''}>None</option>
                            {companies?.map((company: string) => <option key={company} value={company}>{company}</option>)}
                        </select>
                    </div>
                </div>

                {selectedCompany !== '' && <div className="sm:col-span-3 pb-2">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Series</label>
                    <div className="mt-1">
                        <select id="series" name="series"
                            value={selectedCompanySeries} onChange={handleCompanySeriesChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option value={''}>None</option>
                            {companySeries[selectedCompany]?.map((series: string) => <option key={series} value={series}>{series}</option>)}
                        </select>
                    </div>
                </div>}

                {selectedCompanySeries !== '' && <div className="sm:col-span-3 pb-2">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Products</label>
                    <div className="mt-1">
                        <select id="series" name="series"
                            value={selectedProduct?.id} onChange={handleProductChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option value={''}>None</option>
                            {filteredProducts.map((product: Product) => <option key={product.id} value={product.id}>{product.product}</option>)}
                        </select>
                    </div>
                </div>}
            </div>
            {selectedProduct && <div className='lg:grow'>
                <ProductDetails product={selectedProduct} />
            </div>}
        </div>
    );
};

export default ProductList;