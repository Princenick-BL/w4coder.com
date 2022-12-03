import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { getTopTutos } from '../../../../services/tutos'

export default function TutoReco({page=1,nbrecord=2}) {

  const [tutos,getTopTutos] = useState([
    {
      id: 1,
      title : "Veniam adipisicing commodo cupidatat laborum proident.",
      description : "Nostrud est Lorem adipisicing consectetur labore proident elit quis. Et laborum proident nostrud eu laborum eiusmod quis fugiat est ullamco consectetur. Fugiat nulla amet sint aliquip nisi aute Lorem aute non cupidatat."
    },
    {
      id: 2,
      title : "Veniam adipisicing commodo cupidatat laborum proident.",
      description : "Nostrud est Lorem adipisicing consectetur labore proident elit quis. Et laborum proident nostrud eu laborum eiusmod quis fugiat est ullamco consectetur. Fugiat nulla amet sint aliquip nisi aute Lorem aute non cupidatat."
    },
    {
      id: 3,
      title : "Veniam adipisicing commodo cupidatat laborum proident.",
      description : "Nostrud est Lorem adipisicing consectetur labore proident elit quis. Et laborum proident nostrud eu laborum eiusmod quis fugiat est ullamco consectetur. Fugiat nulla amet sint aliquip nisi aute Lorem aute non cupidatat."
    },
    {
      id: 4,
      title : "Veniam adipisicing commodo cupidatat laborum proident.",
      description : "Nostrud est Lorem adipisicing consectetur labore proident elit quis. Et laborum proident nostrud eu laborum eiusmod quis fugiat est ullamco consectetur. Fugiat nulla amet sint aliquip nisi aute Lorem aute non cupidatat."
    }
  ].slice(4-nbrecord))

  useEffect(()=>{

  },[])

  return (
    <div className={styles.tutos}>
      {tutos && tutos?.map((t,i)=>{
        return(
          <div key={i} className={styles.tuto}>
            <h2>{t?.title}</h2>
            <span>{t?.description}</span>
            <div className={styles.publisher}>
              <Image
                  src={"/logo.png"}
                  width="10"
                  height="10"
                  layout="fixed"
                  className={styles.publisher_logo}
                  style={{minWidth:"10px"}}
                    alt={"Publisher logo"}
              />
              <div className={styles.name}><strong>w4coder</strong> on {new Date(t.updatedAt).toDateString()}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
