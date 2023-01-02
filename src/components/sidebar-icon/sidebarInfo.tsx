import React, { FC } from 'react'
import "./sidebarInfo.scss"
interface KindaProps  {
    title: string;
    icons: string
}

const sidebarInfo: FC<KindaProps> = (props ) => {
  return (
    <div className='sidebar-info'>
        <div>{props.title}</div>
        <p>{props.icons}</p>
    </div>
  )
}

export default sidebarInfo