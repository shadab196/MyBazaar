import React from 'react'
import Header from './header';
import Footer from './footer';
import {Helmet} from 'react-helmet';
import {Toaster} from 'react-hot-toast'
 
const Layout =({children,title,description,keywords,author})=>{
    return (
        <div>
          <Helmet>
           
        
  <meta charSet="UTF-8" />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />

              

            <title>{title}</title>
          </Helmet>

            <Header/>
            <main style ={ {minHeight:"80vh"} }>
            <Toaster/>
            {children}       {/* to show layout with app.js */} 
                              {/* layout => header+footer
                                  {children } means react.js show
                                  then footer show
                              */}
            </main>
            <Footer/>
        </div>
    )
};

Layout.defaultProps = {
    title:"ecommerce app-shop now",
    description:"mern stack project",
    keywords:"mern , react,node,mongodb,js",
    author:"shadab khan",

}


export default Layout;
