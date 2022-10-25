import React, { useState } from 'react';
// import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ReadOutlined,
  FileTextOutlined,
  PlusOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingFilled
} from '@ant-design/icons';
import GoogleAnalyticsIcon from './icons/analytics';
import WebStory from './icons/webStory';
import styles from './index.module.scss'
import { useRouter } from 'next/router';
import { useGlobalContext } from '../contexts/global.context';
import {GlobalProvider} from '../contexts/global.context'
import {ArticleProvider} from '../contexts/article.context'
import Logo from './icons/logo'
import Link from 'next/link';
import withAuth from "../middleware/withAuth";

// const { Header, Sider, Content } = Layout;

const App = ({children}) => {

  
  const [collapsed, setCollapsed] = useState(true);
  const {state,dispatch} = useGlobalContext()

  const handlelogOut = () =>{
    dispatch({
      type:"LOGOUT"
    })
    window.location.reload()

  }


  const router = useRouter()
  const { admin } = router.query;

  const getCurrentMenu = () =>{
    switch (admin) {
      case "articles":
        return 2 
      case "web-stories":
        return 3
      case "analytics":
        return 4   
      default:
        return 2
    }
  }

  const redirect = (dest) =>{
    router.push(dest)
  }

  return (
    <div className={styles.container}>
      <div className={styles.sider}>
        <div className={styles.siderClose}>
          <div>
            <Link href={"/read"}>
              
                <div className={styles.icon + " "+ styles.logo}>
                  <Logo style={{color:"#000"}}/>
                </div>
              
            </Link>
            <Link href={"/admin/articles"}>
              
                <div className={styles.icon+ " "+ styles.article}>
                  <FileTextOutlined/>
                </div>
              
            </Link>
            <Link href={"/admin/web-stories"}>
              
                <div className={styles.icon+ " "+ styles.webStory}>
                  <WebStory/>
                </div>
              
            </Link>
            <Link href={"/admin/analytics"}>
              
                <div className={styles.icon+ " "+ styles.analytics}>
                  <GoogleAnalyticsIcon/>
                </div>
              
            </Link>
            
          </div>
          <div>
            <Link href={"/admin/users"}>
              
                <div className={styles.icon+ " "+ styles.user}>
                  <UserOutlined/>
                </div> 
              
            </Link>
             
            <div className={styles.icon+ " "+ styles.collapse} onClick={(e)=>{setCollapsed(!collapsed)}}>
              {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </div>
          </div>
        </div>
        {!collapsed && (
          <div className={styles.siderOpened}>
            <div>
              <Link href={"/read"}>
                
                  <div className={styles.iconText+ " "+ styles.logo}>
                    Logo
                  </div> 
                
              </Link>
              
              <Link href={"/admin/articles"}>
                
                  <div className={styles.iconText+ " "+ styles.article}>
                    Articles
                  </div>
                
              </Link>
              
              <Link href={"/admin/web-stories"}>
                
                  <div className={styles.iconText+ " "+ styles.webStory}>
                    Web Stories
                  </div>
                
              </Link>
              
              <Link href={"/admin/analytics"}>
                
                  <div className={styles.iconText+ " "+ styles.analytics}>
                    Analytics
                  </div>
                
              </Link>
              
            </div>
            <div>
              <Link href={"/admin/my-account"}>
                
                  <div className={styles.iconText+ " "+ styles.user}>
                    My account
                  </div> 
                
              </Link>
               
              <div className={styles.iconText+ " "+ styles.collapse} onClick={(e)=>{setCollapsed(!collapsed)}}>
                {collapsed ? "Open" : "Collapse"}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.content}>
          {children}
      </div>
    </div>
    // <Layout style={{height:"100vh"}}>
    //   <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
    //     <div className="logo" />
    //     <Menu
    //        key={1}
    //         theme="light"
    //         mode="inline"
    //         defaultSelectedKeys={['2']}
    //         defaultOpenKeys={['sub1']}
    //         selectedKeys={`'${getCurrentMenu()}'`}
    //         style={{height:"100%"}}
    //         items={[
    //           {
    //             key: 1,
    //             icon: <Logo /> ,
    //             label: 'ADMIN',
    //             onClick  : (e)=>redirect("/admin"),
    //             style : {marginTop:"20px",marginBottom:"20px"}


    //           },
    //             {
    //               key: '2',
    //               icon: <ReadOutlined /> ,
    //               label: 'Articles',
    //               onClick  : (e)=>redirect("/admin/articles")

    //             },
    //             {
    //               key: '3',
    //               label: 'Web Stories',
    //               icon: <WebStory/>,
    //               onClick  : (e)=>redirect("/admin/web-stories")
    //             },
    //             {
    //               key: '4',
    //               label: 'Analytics',
    //               icon: <GoogleAnalyticsIcon/>,
    //               onClick  : (e)=>redirect("/admin/analytics")

    //             },
                
    //         ]}
    //     />
    //     <div>
    //     <Menu
    //       key={2}
    //         theme="light"
    //         mode="inline"
    //         style={{position:"absolute",bottom:"0",width:"100%"}}
    //         items={[
    //             {
    //                 key: '98',
    //                 icon: <UserOutlined/> ,
    //                 label: 'User',
    //                 children: [
    //                     { 
    //                         key: 'user-sub-1',
    //                         label: 'User', 
    //                         icon : <UserOutlined/>
    //                     },  
    //                     { 
    //                         key: 'user-sub-2',
    //                         label: 'Logout', 
    //                         icon : <LogoutOutlined />,
    //                         onClick  : (e)=>handlelogOut()
    //                     }
    //                 ],
    
    //             },
    //             {
    //               key: '99',
    //               icon: <SettingFilled/> ,
    //               label: 'Settings',
    //             },
    //             {
    //                 key: '100',
    //                 icon: collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> ,
    //                 label: 'Collapse',
    //                 onClick  : (e)=>setCollapsed(!collapsed)
    //             },
    //         ]}
    //     />
       
    //     </div>
    //   </Sider>
    //   <Layout className="site-layout">
        
    //     <Content
    //       className={styles.content}
    //       style={{
    //         margin: '10px 10px',
    //         padding: 10,
    //         minHeight: 280,
    //       }}
    //     >
    //       {children}
    //     </Content>
    //   </Layout>
    // </Layout>
  );
};


function LayoutComponent({children}) {
  return (
    <GlobalProvider>
        <ArticleProvider>
            <App children={children}/>
        </ArticleProvider>
    </GlobalProvider>
  )
}

export default withAuth(LayoutComponent);
