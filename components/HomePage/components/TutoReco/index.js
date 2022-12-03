import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { getTutos } from '../../../../services/tutos'
import Link from 'next/link'
export default function TutoReco({page=1,nbrecord=2}) {

  const [tutos,setTutos] = useState([])

  useEffect(()=>{
    (async()=>{
      const tutos = await getTutos({filter:{
        page:page,
        nbrecord : nbrecord
      }})
      setTutos(tutos)
    })();
  },[])

  return (
    <div className={styles.tutos}>
      {tutos && tutos?.map((t,i)=>{
        return(
          <div key={i} className={styles.tuto}>
            <Link href={`/tuto/${t?._id}/${t?.slug}`}>
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
            </Link>
          </div>
        )
      })}
    </div>
  )
}
