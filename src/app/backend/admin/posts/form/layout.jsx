import PostsFormContextProvider from "./contexts/PostsFormContext";
//import CategoryFormContextProvider from "./contexts/PostsFormContext";

export default function Layout({children}){
    return <PostsFormContextProvider>{children}</PostsFormContextProvider> 

}