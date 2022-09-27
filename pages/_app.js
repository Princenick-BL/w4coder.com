import '../styles/globals.scss'
import '../styles/carouselle.scss'
// import '../styles/globals.css'
// import '../styles/index.scss'
// import '../styles/typingscript.scss'

// import 'antd/dist/antd.css'
// import '../styles/quill.css'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
