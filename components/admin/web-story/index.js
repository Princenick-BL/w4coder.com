import React, { Fragment, useEffect, useState } from 'react'
import { getStories } from '../../../services/stories-editor';
import styles from '../articles/index.module.scss'
import AddNew from './AddNew';
import WebStory from '../../../layouts/icons/webStory';

export default function Articles() {

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const [stories,setStories] = useState([])

  useEffect(()=>{
    (async ()=>{
      const res = await getStories();
      setStories(res.data)
    })();
  },['init'])

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(articles.map(li => li._id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = ({id, checked}) => {
   
    if (!checked) {
      var chekeds = isCheck.filter(item => item !== id)
      setIsCheck(chekeds);
    }else{
      chekeds = [...isCheck, id]
      setIsCheck(chekeds);
    }
    if(chekeds.length === articles.length){
      setIsCheckAll(true)
    }else{
      setIsCheckAll(false)
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.topFlex}>
          <WebStory/>
          &nbsp; 
          &nbsp; 
          <h4>Web Stories</h4>
          <AddNew/>
        </div>
      </div>
      <form className={styles.form}>

        <div className={styles.actions}>
          <div>
            <input 
              type={"checkbox"}
              onClick={(e)=>handleSelectAll(e)}
              checked={isCheckAll}
            />
            <select>
              <option>Trash</option>
              <option>Delete</option>

            </select>
            <input type={"submit"} value="Apply"/>
          </div>
          <div>
              <input className={styles.search} type={"search"} name="search" placeholder="Search"/>
          </div>
          <div>
            
          </div>
        </div>
        <div className={styles.list}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>OgImage</th>
                <th>Title + Description</th>
                <th>Status</th>
                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>    
                
              {stories.map((item,index)=>{
                return(
                  <tr className={styles.renderItem} key={index}>
                    <td className={styles.checkbox}>
                      <input 
                        type="checkbox" 
                        checked={isCheck.includes(item._id)}
                        onClick={(e)=>handleClick({checked:e.target.checked,id:item._id})}
                      />
                    </td>
                    <td className={styles.item}>
                        <img
                            width={100}
                            style={{borderRadius:"5px",maxHeight : "68px"}}
                            alt="logo"
                            src={item?.poster}
                        />  
                        <div className={styles.desc}>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>

                    </td>
                    <td className={styles.status}>
                      <div>
                        <div>Published</div>
                        <div>27/09/2000</div>
                      </div>
                    </td>
                    <td className={styles.button}><a target={"_blank"} rel="noreferrer" href={`/admin/story-editor?key=`+item?._id}>
                      Edit
                    </a></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </form>
      
    </div>
  )
}

