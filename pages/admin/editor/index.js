import React,{Fragment,useEffect,useState} from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import Image from 'next/image'
import { getSection } from '../../../components/editor/article/utils/article-editor.utils'
import HeaderEditor from '../../../components/editor/article/utils/HeaderEditor'
import { DragDropContext, Droppable, Draggable,resetServerContext } from 'react-beautiful-dnd';
import Focusable from '../../../components/editor/article/Focusable'
import { useArticleContext } from '../../../contexts/article.context'
import withAuth from "../../../middleware/withAuth";
import { getArticle,patchArticle } from '../../../services/articles-editor'
import { useRouter } from 'next/router'
import {GlobalProvider} from '../../../contexts/global.context'
import {ArticleProvider} from '../../../contexts/article.context'
import { HiHome } from 'react-icons/hi';
import Link from 'next/link'
import AddObject from '../../../components/editor/article/addObject'
//export const config = { amp: true };


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export  function Article({location}) {

  const Router = useRouter()
  const {key} = Router.query

  const {state,dispatch} = useArticleContext()

  useEffect(()=>{
    (async ()=>{
      if(key){
        const res = await getArticle(key)
        if(res){
          dispatch({
            type : 'init',
            payload : {
              value : res?.data
            }
          })
        }
      }
    })();
  },[key])

  const {article} = state

  const [items,setItems] = useState(article?.sections)

  useEffect(()=>{
    setItems(article?.sections)
  },[article,state])

    
  const handleOnDragEnd =(result)=>{
    if (!result.destination) {
      return;
    }

    const new_items = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(new_items)
  }

  const handleSave = async (e) =>{
    try{
      const res =  await patchArticle(state?.article);
      if(res){
        dispatch({
          type : 'init',
          payload : {
            value : res?.data
          }
        })
      }
    }catch(e){
      
    }

  }



  return (
      <Fragment>
          <Head>
              <meta charSet="utf-8"/>
              <title>Article editor</title>
              <link rel="canonical" href={location}/>
          </Head>
          {/* <BlogHead/> */}
          <Fragment>
              <main id="content" role="main" className={styles.main}>
                  {/* <AddObject/> */}
                  {/* <MyMedias/> */}
                  <div className={styles.head}>
                    <div className={styles.left} >
                      <Link href={"/admin"}>
                        
                          <HiHome color='#fff' fontSize={30}/>
                      </Link>
                    </div>
                    <div className={styles.right}>
                      <Link href={`/article/${article?._id}/${article?.slug}`}>
                        <p target={"_blank"}>
                          <div className={styles.viewPageBtn}>View page</div>
                        </p>
                      </Link>
                      <div className={styles.updateBtn} onClick={(e)=>{handleSave()}}>UPDATE</div>
                    </div>
                  </div>
                  {article &&
                    <article className={styles.recipeArticle}>
                      <div className={styles.content}>

                        <HeaderEditor
                          title = {article?.title}
                          poster = {article?.poster}
                          category = {article?.category}
                          updatedAt = {article?.updatedAt}
                        />
                        
                        <div className='main'>

                          <DragDropContext onDragEnd={handleOnDragEnd } >
                            <Droppable droppableId="droppable">
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  // className={classNames('list', snapshot.isDraggingOver && 'draggingOver')}
                                  {...provided.droppableProps}
                                >
                                  {items?.map((section,index)=>(
                                    <Draggable key={index} draggableId={`${index}-id`} index={index}>
                                      {(provided, snapshot) => (
                                        <div
                                          // className={classNames('item', snapshot.isDragging && 'dragging')}
                                          style={{width:' 100%',height :'100%'}}
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <Focusable
                                            index={index}
                                          >
                                            {getSection(section,index)}
                                          </Focusable>
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                          </DragDropContext>                       
                        </div>
                        <div className={styles.addNew}>
                            <AddObject/>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>

                    </article>
                  }
                  {/* <aside className={styles.tools}>

                  </aside> */}
              </main>

          </Fragment>
          
      </Fragment>
  )
}

function ArticleEditor() {
  return (
    <GlobalProvider>
        <ArticleProvider>
            <Article/>
        </ArticleProvider>
    </GlobalProvider>
  )
}

export default withAuth(ArticleEditor);
