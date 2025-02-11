import CountCard from "./components/CountCard";


export default function Page(){
    return <div className="dashboard">
        <h3>Welcome to Dashboard</h3>
        <div className="row">
            <CountCard name={'Domestic Category'} path={'categories'} url={'/backend/admin/categories'} />
            <CountCard name={'Domestic Products'} path={'posts'} url={'/backend/admin/posts'} />
            <CountCard name={'International Category'} path={'categoriesInter'} url={'/backend/admin/categoriesInter'} />
            <CountCard name={'International Products'} path={'postsInter'} url={'/backend/admin/postsInter'} />
            {/* <CountCard name={'Other'} path={'other'} url={'/backend/admin/categoryOther'} /> */}
        </div>
    </div>
}