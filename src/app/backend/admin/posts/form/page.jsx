"use client";

import { useEffect } from "react";
//import { useCategoryForm } from "./contexts/PostsFormContext";
import { useSearchParams } from "next/navigation";
import { usePostsForm } from "./contexts/PostsFormContext";
import { useCategories } from "@/app/lib/firebase/category/read";
import { useAuthors } from "@/app/lib/firebase/author/read";
import { spaceToHyphen } from "@/utils/transformName";
import { RTEField } from "./components/RTEField";
import { RTEField2 } from "./components/RTEField2";
import { RTEField3 } from "./components/RTEField3";
import Link from "next/link";
export default function Page(){
    const searchParams = useSearchParams();
    const updatePostsId = searchParams.get('id');
    const {
        data,
        isLoading,
        error,
        isDone,
        handleData,
        handleSKU,
        handleCreate,
        handleUpdate,
        handleDelete,
        image, setImage,
        redIconOne, setRedIconOne,
        redIconTwo, setRedIconTwo,
        redIconThree, setRedIconThree,
        redIconFour, setRedIconFour,
        fetchData
    } = usePostsForm();

    useEffect(() => {
        if(updatePostsId){
            fetchData(updatePostsId)
        }
    }, [updatePostsId]);

    return <main className="w-100">
        <div className="d-flex w-100 justify-content-between add-categories align-items-center mb-3">
            <h3 className="category-form-title align-items-center">
                {updatePostsId && <span className="update-text">Update/Delete</span>}
                {!updatePostsId && <span className="creater-text">Upload</span>}
                <div>Domestic Product</div>
            </h3>
            <Link href={'/backend/admin/posts'}>
                <button className="btn position-relative">Back</button>
            </Link>
        </div>        
        <div className="category-form-sample">
            <div className="category-form">
                <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if(updatePostsId){
                                handleUpdate();
                            } else {
                                handleCreate();
                            }
                        }}
                    >
                    <div className="form-group">
                        <label className="form-label"><strong>Product Name</strong> <span>*</span></label>
                        <input type="text" className="form-control" placeholder="Product Name"
                        onChange={(e) => {
                            handleData('name', e.target.value)
                        }}
                        value={data?.name || ''}
                        required />
                    </div>
                    <div className="form-group">
                        <label className="form-label"><strong>Product Path (Same as Product name)</strong> <span>*</span></label>
                        <input type="text" className="form-control" placeholder="Product Slug"
                        disabled={updatePostsId}
                        onChange={(e) => {
                            let slugName = (e.target.value).toLowerCase();
                             handleData('slug', spaceToHyphen(slugName));
                        }}
                        value={data?.id}
                        required />
                    </div>
                    <SelectCateoryField></SelectCateoryField>
                    {/* <SelectAuthorField></SelectAuthorField> */}
                    {/* <div className="form-group">
                        <label>Product Category</label>
                        <select className="form-control"                 
                            onChange={(e) => {
                                handleData('ProductCategory', e.target.value)
                            }}
                            value={data?.ProductCategory}
                            required >

                            <option>Select Category</option>
                            <option value="Chili Powder">Chili Powder</option>
                            <option value="Turmeric Powder">Turmeric Powder</option>
                            <option value="Dhaniya Jeera powder">Dhaniya Jeera powder</option>
                            <option value="Dhaniya Powder">Dhaniya Powder</option>
                            <option value="Jeera Powder">Jeera Powder</option>
                        </select>
                    </div> */}
                    <div className="form-group">
                        <label className="form-label"><strong>Product Image</strong></label>
                        <div className="product-image-wrap">
                            <div className="product-image">
                                {data?.productURL && <div className="icon-img"><img src={data?.productURL} className="cat-img" alt="" /></div>}
                                {image && <div className="icon-new-img"><img src={URL.createObjectURL(image)} className="cat-img" alt="" /></div>}                        
                            </div>
                            <div className="product-control">
                                {/* <label className="form-label">Product Image</label> */}
                                <input type="file" accept="image/*" className="form-control" placeholder="Product Image"
                                onChange={(e) => {
                                    setImage(e.target.files[0]); 
                                }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label"><strong>Slogan First Line</strong><span>*</span></label>
                        <input type="text" className="form-control" placeholder="First Line"
                        onChange={(e) => {
                            handleData('slogan1', e.target.value)
                        }}
                        value={data?.slogan1 || ''}
                        required />
                    </div>
                    <div className="form-group">
                        <label className="form-label"><strong>Slogan Second Line</strong><span>*</span></label>
                        <input type="text" className="form-control" placeholder="Second Line"
                        onChange={(e) => {
                            handleData('slogan2', e.target.value)
                        }}
                        value={data?.slogan2 || ''}
                        required />
                    </div>
                    <div className="form-group">
                        <label className="form-label"><strong>Product Details...</strong><span>*</span></label>
                        <RTEField></RTEField>
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label"><strong>Red icons...</strong><span>*</span></label>
                        <div className="row">
                            <div className="col-6">
                                <div className="icon-image">
                                    {data?.redIconOneURL && <div className="icon-img"><img src={data?.redIconOneURL} alt="" /></div>}
                                    {redIconOne && <div className="icon-new-img"><img src={URL.createObjectURL(redIconOne)} alt="" /></div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">icons 1  </label>
                                    <input type="file" accept="image/*" className="form-control" placeholder="Product Image"
                                    onChange={(e) => {
                                        setRedIconOne(e.target.files[0]); 
                                    }}
                                    />
                                    <div className="red-icon-text pt-2">
                                        <input type="text" className="form-control" placeholder="First icon text"
                                        onChange={(e) => {
                                            handleData('redIconOneText', e.target.value)
                                        }}
                                        value={data?.redIconOneText || ''}
                                        required /></div>
                                </div>                                
                            </div>
                            <div className="col-6">
                                <div className="icon-image">
                                    {data?.redIconTwoURL && <div className="icon-img"><img src={data?.redIconTwoURL} alt="" /></div>}
                                    {redIconTwo && <div className="icon-new-img"><img src={URL.createObjectURL(redIconTwo)} alt="" /></div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">icons 2 </label>
                                    <input type="file" accept="image/*" className="form-control" placeholder="Product Image"
                                    onChange={(e) => {
                                        setRedIconTwo(e.target.files[0]); 
                                    }}
                                    />
                                    <div className="red-icon-text pt-2">
                                        <input type="text" className="form-control" placeholder="First icon text"
                                        onChange={(e) => {
                                            handleData('redIconTwoText', e.target.value)
                                        }}
                                        value={data?.redIconTwoText || ''}
                                        required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="icon-image">
                                    {data?.redIconThreeURL && <div className="icon-img"><img src={data?.redIconThreeURL} alt="" /></div>}
                                    {redIconThree && <div className="icon-new-img"><img src={URL.createObjectURL(redIconThree)} alt="" /></div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">icons 3 </label>
                                    <input type="file" accept="image/*" className="form-control" placeholder="Product Image"
                                    onChange={(e) => {
                                        setRedIconThree(e.target.files[0]); 
                                    }}
                                    />
                                    <div className="red-icon-text pt-2">
                                        <input type="text" className="form-control" placeholder="First icon text"
                                        onChange={(e) => {
                                            handleData('redIconThreeText', e.target.value)
                                        }}
                                        value={data?.redIconThreeText || ''}
                                        required />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-6">
                                <div className="icon-image">
                                    {data?.redIconFourURL && <div className="icon-img"><img src={data?.redIconFourURL} alt="" /></div>}
                                    {redIconFour && <div className="icon-new-img"><img src={URL.createObjectURL(redIconFour)} alt="" /></div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">icons 4</label>
                                    <input type="file" accept="image/*" className="form-control" placeholder="Product Image"
                                    onChange={(e) => {
                                        setRedIconFour(e.target.files[0]); 
                                    }}
                                    />
                                    <div className="red-icon-text pt-2">
                                        <input type="text" className="form-control" placeholder="First icon text"
                                        onChange={(e) => {
                                            handleData('redIconFourText', e.target.value)
                                        }}
                                        value={data?.redIconFourText || ''}
                                        required />
                                    </div>
                                </div>
                            </div>
                            
                            {/* <div className="col-3">
                                {data?.redIconTwoURL && <div><img src={data?.redIconTwoURL} className="icons-img w-100" alt="" /></div>}
                                {redIconTwo && <div><img src={URL.createObjectURL(redIconTwo)} className="icons-img w-100" alt="" /></div>}
                                <div className="form-group">
                                    <label className="form-label">Posts Image  </label>
                                    <input type="file" accept="image/*" className="form-control" placeholder="Product Image"
                                    onChange={(e) => {
                                        setRedIconTwo(e.target.files[0]); 
                                    }}
                                    />
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="form-group sku-section">
                        <div className="row">
                            <div className="col-12"><label className="form-label"><strong>Pouches</strong></label></div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU5gmsPouch" checked={data?.pouch?.includes('sku-5-Pouch.svg')} value="sku-5-Pouch.svg" name="sku-5-Pouch.svg"  type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU5gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-5-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>5 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU7gmsPouch" checked={data?.pouch?.includes('sku-7-Pouch.svg')} value="sku-7-Pouch.svg" name="sku-7-Pouch.svg"  type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU7gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-7-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>7 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU10gmsPouch" checked={data?.pouch?.includes('sku-10-Pouch.svg')} value="sku-10-Pouch.svg" name="sku-10-Pouch.svg"  type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU10gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-10-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>10 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU12gmsPouch" checked={data?.pouch?.includes('sku-12-Pouch.svg')} value="sku-12-Pouch.svg" name="sku-12-Pouch.svg"  type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU12gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-12-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>12 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU15gmsPouch" checked={data?.pouch?.includes('sku-15-Pouch.svg')} value="sku-15-Pouch.svg" name="sku-15-Pouch.svg"  type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU15gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-15-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>15 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU20gmsPouch" checked={data?.pouch?.includes('sku-20-Pouch.svg')} value="sku-20-Pouch.svg" name="sku-20-Pouch.svg"  type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU20gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-20-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>20 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU30gmsPouch" checked={data?.pouch?.includes('sku-30-Pouch.svg')} value="sku-30-Pouch.svg" name="sku-30-Pouch.svg"  type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU30gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-30-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>30 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU40gmsPouch" checked={data?.pouch?.includes('sku-40-Pouch.svg')} value="sku-40-Pouch.svg" name="sku-40-Pouch.svg"  type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU40gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-40-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>40 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU50gmsPouch" checked={data?.pouch?.includes('sku-50-Pouch.svg')} value="sku-50-Pouch.svg" name="sku-50-Pouch.svg"  type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU50gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-50-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>50 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU100gmsPouch" checked={data?.pouch?.includes('sku-100-Pouch.svg')} value="sku-100-Pouch.svg" name="sku-100-Pouch.svg"  type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU100gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-100-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>100 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU200gmsPouch" checked={data?.pouch?.includes('sku-200-Pouch.svg')} value="sku-200-Pouch.svg" name="sku-200-Pouch.svg"  type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU200gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-200-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>200 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU200Plus200gmsPouch" checked={data?.pouch?.includes('sku-200+200-Pouch.svg')} value="sku-200+200-Pouch.svg" name="sku-200+200-Pouch.svg"  type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU200Plus200gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-200+200-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>200+200 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU500gmsPouch" checked={data?.pouch?.includes('sku-500-Pouch.svg')} value="sku-500-Pouch.svg" name="sku-500-Pouch.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU500gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-500-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>500 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU1000gmsPouch" checked={data?.pouch?.includes('sku-1000-Pouch.svg')} value="sku-1000-Pouch.svg" name="sku-1000-Pouch.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU1000gmsPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-1000-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>1000 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU1kgPouch" checked={data?.pouch?.includes('sku-1kg-Pouch.svg')} value="sku-1kg-Pouch.svg" name="sku-1kg-Pouch.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU1kgPouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-1kg-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>1 KG</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU1kgB2Bpouch" checked={data?.pouch?.includes('sku-1kg-B2B-Pouch.svg')} value="sku-1kg-B2B-Pouch.svg" name="sku-1kg-B2B-Pouch.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU1kgB2Bpouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-1kg-B2B-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>1 KG B2B</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU5kgouch" checked={data?.pouch?.includes('sku-5kg-Pouch.svg')} value="sku-5kg-Pouch.svg" name="sku-5kg-Pouch.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU5kgouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-5kg-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>1 KG</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU5kgB2Bpouch" checked={data?.pouch?.includes('sku-5kg-B2B-Pouch.svg')} value="sku-5kg-B2B-Pouch.svg" name="sku-5kg-B2B-Pouch.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('pouch',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU5kgB2Bpouch">
                                            <div className="sku-holder"><img src={'/images/sku/sku-5kg-B2B-Pouch.svg'} alt="Pouch" /></div>
                                            <h4>5 KG B2B</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12"><label className="form-label"><strong>Boxes</strong></label></div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU15Box" checked={data?.box?.includes('sku-box-15gm.svg')} value="sku-box-15gm.svg" name="sku-box-15gm.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('box',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU15Box">
                                            <div className="sku-holder"><img src={'/images/sku/sku-box-15gm.svg'} alt="box" /></div>
                                            <h4>15 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU20Box" checked={data?.box?.includes('sku-box-20gm.svg')} value="sku-box-20gm.svg" name="sku-box-20gm.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('box',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU20Box">
                                            <div className="sku-holder"><img src={'/images/sku/sku-box-20gm.svg'} alt="box" /></div>
                                            <h4>20 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU25Box" checked={data?.box?.includes('sku-box-25gm.svg')} value="sku-box-25gm.svg" name="sku-box-25gm.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('box',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU25Box">
                                            <div className="sku-holder"><img src={'/images/sku/sku-box-25gm.svg'} alt="box" /></div>
                                            <h4>25 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU50Box" checked={data?.box?.includes('sku-box-50gm.svg')} value="sku-box-50gm.svg" name="sku-box-50gm.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('box',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU50Box">
                                            <div className="sku-holder"><img src={'/images/sku/sku-box-50gm.svg'} alt="box" /></div>
                                            <h4>50 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU60Box" checked={data?.box?.includes('sku-box-60gm.svg')} value="sku-box-60gm.svg" name="sku-box-60gm.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('box',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU60Box">
                                            <div className="sku-holder"><img src={'/images/sku/sku-box-60gm.svg'} alt="box" /></div>
                                            <h4>60 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU100Box" checked={data?.box?.includes('sku-box-100gm.svg')} value="sku-box-100gm.svg" name="sku-box-100gm.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('box',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU100Box">
                                            <div className="sku-holder"><img src={'/images/sku/sku-box-100gm.svg'} alt="box" /></div>
                                            <h4>100 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU175Plus175Box" checked={data?.box?.includes('sku-box-175+175gm.svg')} value="sku-box-175+175gm.svg" name="sku-box-175+175gm.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('box',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU175Plus175Box">
                                            <div className="sku-holder"><img src={'/images/sku/sku-box-175+175gm.svg'} alt="box" /></div>
                                            <h4>175+175 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU200Box" checked={data?.box?.includes('sku-box-200gm.svg')} value="sku-box-200gm.svg" name="sku-box-200gm.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('box',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU200Box">
                                            <div className="sku-holder"><img src={'/images/sku/sku-box-200gm.svg'} alt="box" /></div>
                                            <h4>200 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU400Box" checked={data?.box?.includes('sku-box-400gm.svg')} value="sku-box-400gm.svg" name="sku-box-400gm.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('box',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU400Box">
                                            <div className="sku-holder"><img src={'/images/sku/sku-box-400gm.svg'} alt="box" /></div>
                                            <h4>400 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU500Box" checked={data?.box?.includes('sku-box-500gm.svg')} value="sku-box-500gm.svg" name="sku-box-500gm.svg" type="checkbox"
                                          onChange={(e) => {
                                            handleSKU('box',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU500Box">
                                            <div className="sku-holder"><img src={'/images/sku/sku-box-500gm.svg'} alt="box" /></div>
                                            <h4>500 Grams</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12"><label className="form-label"><strong>Jar</strong></label></div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU01gmsJar" checked={data?.jar?.includes('sku-jar-01gms.svg')} name="sku-jar-01gms.svg" value="sku-jar-01gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('jar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU01gmsJar">
                                            <div className="sku-holder"><img src={'/images/sku/sku-jar-01gms.svg'} alt="jar" /></div>
                                            <h4>01 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU05gmsJar" checked={data?.jar?.includes('sku-jar-05gms.svg')} name="sku-jar-05gms.svg" value="sku-jar-05gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('jar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU05gmsJar">
                                            <div className="sku-holder"><img src={'/images/sku/sku-jar-05gms.svg'} alt="jar" /></div>
                                            <h4>0.5 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU10gmsJar" checked={data?.jar?.includes('sku-jar-10gms.svg')} name="sku-jar-10gms.svg" value="sku-jar-10gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('jar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU10gmsJar">
                                            <div className="sku-holder"><img src={'/images/sku/sku-jar-10gms.svg'} alt="jar" /></div>
                                            <h4>10 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU20gmsJar" checked={data?.jar?.includes('sku-jar-20gms.svg')} name="sku-jar-20gms.svg" value="sku-jar-20gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('jar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU20gmsJar">
                                            <div className="sku-holder"><img src={'/images/sku/sku-jar-20gms.svg'} alt="jar" /></div>
                                            <h4>20 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU25gmsJar" checked={data?.jar?.includes('sku-jar-25gms.svg')} name="sku-jar-25gms.svg" value="sku-jar-25gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('jar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU25gmsJar">
                                            <div className="sku-holder"><img src={'/images/sku/sku-jar-25gms.svg'} alt="jar" /></div>
                                            <h4>25 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU200gmsJar" checked={data?.jar?.includes('sku-jar-200gms.svg')} name="sku-jar-200gms.svg" value="sku-jar-200gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('jar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU200gmsJar">
                                            <div className="sku-holder"><img src={'/images/sku/sku-jar-200gms.svg'} alt="jar" /></div>
                                            <h4>200 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU250gmsJar" checked={data?.jar?.includes('sku-jar-250gms.svg')} name="sku-jar-250gms.svg" value="sku-jar-250gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('jar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU250gmsJar">
                                            <div className="sku-holder"><img src={'/images/sku/sku-jar-250gms.svg'} alt="jar" /></div>
                                            <h4>250 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU500gmsJar" checked={data?.jar?.includes('sku-jar-500gms.svg')} name="sku-jar-500gms.svg" value="sku-jar-500gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('jar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU500gmsJar">
                                            <div className="sku-holder"><img src={'/images/sku/sku-jar-500gms.svg'} alt="jar" /></div>
                                            <h4>500 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU500gmsB2BJar" checked={data?.jar?.includes('sku-jar-B2B-500gms.svg')} name="sku-jar-B2B-500gms.svg" value="sku-jar-B2B-500gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('jar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU500gmsB2BJar">
                                            <div className="sku-holder"><img src={'/images/sku/sku-jar-B2B-500gms.svg'} alt="jar" /></div>
                                            <h4>500 GMS B2B</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU1kgJar" checked={data?.jar?.includes('sku-jar-1kg.svg')} name="sku-jar-1kg.svg" value="sku-jar-1kg.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('jar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU1kgJar">
                                            <div className="sku-holder"><img src={'/images/sku/sku-jar-1kg.svg'} alt="jar" /></div>
                                            <h4>1 KG</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU1kgB2BJar" checked={data?.jar?.includes('sku-jar-1kgb2b.svg')} name="sku-jar-1kgb2b.svg" value="sku-jar-1kgb2b.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('jar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU1kgB2BJar">
                                            <div className="sku-holder"><img src={'/images/sku/sku-jar-1kgb2b.svg'} alt="jar" /></div>
                                            <h4>1 KG B2B</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12"><label className="form-label"><strong>Small Jar</strong></label></div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKUSmallJar05GMS" checked={data?.smallJar?.includes('sku-small-jar-05-gms.svg')} name="sku-small-jar-05-gms.svg" value="sku-small-jar-05-gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('smallJar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKUSmallJar05GMS">
                                            <div className="sku-holder"><img src={'/images/sku/sku-small-jar-05-gms.svg'} alt="Small Jar" /></div>
                                            <h4>0.5 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKUSmallJar1GMS" checked={data?.smallJar?.includes('sku-small-jar-1-gms.svg')} name="sku-small-jar-1-gms.svg" value="sku-small-jar-1-gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('smallJar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKUSmallJar1GMS">
                                            <div className="sku-holder"><img src={'/images/sku/sku-small-jar-1-gms.svg'} alt="Small Jar" /></div>
                                            <h4>1 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKUSmallJar10GMS" checked={data?.smallJar?.includes('sku-small-jar-10-gms.svg')} name="sku-small-jar-10-gms.svg" value="sku-small-jar-10-gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('smallJar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKUSmallJar10GMS">
                                            <div className="sku-holder"><img src={'/images/sku/sku-small-jar-10-gms.svg'} alt="Small Jar" /></div>
                                            <h4>10 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKUSmallJar20GMS" checked={data?.smallJar?.includes('sku-small-jar-20-gms.svg')} name="sku-small-jar-20-gms.svg" value="sku-small-jar-20-gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('smallJar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKUSmallJar20GMS">
                                            <div className="sku-holder"><img src={'/images/sku/sku-small-jar-20-gms.svg'} alt="Small Jar" /></div>
                                            <h4>20 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKUSmallJar25GMS" checked={data?.smallJar?.includes('sku-small-jar-25-gms.svg')} name="sku-small-jar-25-gms.svg" value="sku-small-jar-25-gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('smallJar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKUSmallJar25GMS">
                                            <div className="sku-holder"><img src={'/images/sku/sku-small-jar-25-gms.svg'} alt="Small Jar" /></div>
                                            <h4>25 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKUSmallJar50GMS" checked={data?.smallJar?.includes('sku-small-jar-50-gms.svg')} name="sku-small-jar-50-gms.svg" value="sku-small-jar-50-gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('smallJar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKUSmallJar50GMS">
                                            <div className="sku-holder"><img src={'/images/sku/sku-small-jar-50-gms.svg'} alt="Small Jar" /></div>
                                            <h4>50 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKUSmallJar100GMS" checked={data?.smallJar?.includes('sku-small-jar-100-gms.svg')} name="sku-small-jar-100-gms.svg" value="sku-small-jar-100-gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('smallJar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKUSmallJar100GMS">
                                            <div className="sku-holder"><img src={'/images/sku/sku-small-jar-100-gms.svg'} alt="Small Jar" /></div>
                                            <h4>100 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKUSmallJar200GMS" checked={data?.smallJar?.includes('sku-small-jar-200-gms.svg')} name="sku-small-jar-200-gms.svg" value="sku-small-jar-200-gms.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('smallJar',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKUSmallJar200GMS">
                                            <div className="sku-holder"><img src={'/images/sku/sku-small-jar-200-gms.svg'} alt="Small Jar" /></div>
                                            <h4>200 GMS</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12"><label className="form-label"><strong>Container</strong></label></div>
                            <div className="col-6">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU22MetricTonne" checked={data?.container?.includes('container-small.svg')} name="container-small.svg" value="container-small.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('container',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU22MetricTonne">
                                            <div className="sku-holder"><img src={'/images/sku/container-small.svg'} alt="container" /></div>
                                            <h4>22 - 24 Metric Tonne</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="sku-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id="SKU26MetricTonne" checked={data?.container?.includes('container-large.svg')} name="container-large.svg" value="container-large.svg" type="checkbox"
                                         onChange={(e) => {
                                            handleSKU('container',e.target.name,e.target.checked)
                                        }} />
                                        <label className="form-check-label" htmlFor="SKU26MetricTonne">
                                            <div className="sku-holder"><img src={'/images/sku/container-large.svg'} alt="container" /></div>
                                            <h4>26 Metric Tonne</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                    <div className="form-group">
                        <label className="form-label"><strong>Ingredients...</strong><span>*</span></label>
                        <RTEField2></RTEField2>
                    </div>

                    <div className="form-group">
                        <label className="form-label"><strong>Expiry</strong><span>*</span></label>
                        <input type="number" className="form-control" placeholder="Expiry in Months"
                        onChange={(e) => {
                            handleData('expiry', e.target.value)
                        }}
                        value={data?.expiry}
                        required />
                    </div>

                    <div className="form-group">
                        <label className="form-label"><strong>Title</strong><span>*</span></label>
                        <input type="text" className="form-control" placeholder="Title"
                        onChange={(e) => {
                            handleData('SpiceItUpTitle', e.target.value)
                        }}
                        value={data?.SpiceItUpTitle}
                        required />
                    </div>

                    <div className="form-group">
                        <label className="form-label"><strong>Product Description...</strong><span>*</span></label>
                        <RTEField3></RTEField3>
                    </div>

                    <div className="form-group">
                        <label className="form-label"><strong>Buy Now Link</strong><span>*</span></label>
                        <input type="text" className="form-control" placeholder="Buy Now Link"
                        onChange={(e) => {
                            handleData('buyNow', e.target.value)
                        }}
                        value={data?.buyNow}
                        required />
                    </div>
                    
                    { error && <p className="error">{error}</p> }
                    <div className="d-flex two-by-two">
                    {!isDone &&
                        <button 
                            type="submit" 
                            disabled={isLoading || isDone}
                            className="btn d-block">
                            {isLoading ? "Loading..." : data?.productURL ? "Update" : "Create"}
                        </button>
                    }             
                    { updatePostsId && !isDone &&
                        <button 
                            onClick={(e) =>{
                                e.preventDefault();
                                // TODO delete
                                handleDelete(updatePostsId);
                            }}
                            disabled={isLoading || isDone}
                            className="btn d-block">
                            {isLoading ? "Loading..." : "Delete"}
                        </button>
                    }
                    </div>
                    {isDone && <p className="isDone">Successfully {updatePostsId ? "Update" : "Created"} !</p>}
                </form>
            </div>
            <div className="category-sample">
                <img src="/detail.png" className="w-100" alt="detail"/>
            </div>
        </div>
    </main>
}

function SelectCateoryField(){
    const {
        data,
        handleData,
    } = usePostsForm();
    const { data: categories} = useCategories();
    return <div className="form-group">
        <label className="form-label"><strong>Product Category</strong><span>*</span></label>
        <select className="form-control form-select" name="categoryId" id="categoryId" required
        value={data?.categoryId}
        onChange={(e) =>{
            handleData('categoryId', e.target.value);
        }}
        >
            <option value="">Select Category</option>
            {categories && categories?.map((item, key) => {
                return <option value={item?.id} key={key}>{item?.name}</option>
            })}

        </select>
    </div>
    
} 

function SelectAuthorField(){
    const {
        data,
        handleData,
    } = usePostsForm();
    const { data: authors} = useAuthors();
    return <div className="form-group">
        <label className="form-label">Author Category<span>*</span></label>
        <select className="form-control form-select" name="authorsId" id="authorsId" required
        value={data?.authorsId}
        onChange={(e) =>{
            handleData('authorsId', e.target.value)
        }}
        >
            <option value="">Select Author</option>
            {authors && authors?.map((item, key) => {
                return <option value={item?.id} key={key}>{item?.name}</option>
            })}

        </select>
    </div>
    
} 
