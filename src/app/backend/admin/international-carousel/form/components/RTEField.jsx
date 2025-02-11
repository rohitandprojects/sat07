
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useCategoryForm } from '../contexts/CategoryFormContext';
const ReactQuill = dynamic(() => import ('react-quill'), { ssr: false });

const modules = {
    toolbar: {
        container: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ size: ['extra-small', 'small', 'medium', 'large'] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            [{ color: [] }, { background: [] }], 
            ['clean'],
        ],
    },
};
export function RTEField() {
    //const [content, setContent] = useState();
    const { data, handleData } = useCategoryForm();
    const handleChange = (value) => {
        handleData('content', value);
        //setContent(value);
    };

    return (
        <div>
            <div className="rich-editor">{data?.content}</div>
            <ReactQuill
                value={data?.content}
                onChange={handleChange}
                modules={modules}
                placeholder="Enter your content here..."
            />
        </div>
    );
}