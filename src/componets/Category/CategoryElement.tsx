import React, { type FC } from 'react'
import style from './Category.module.scss'
import { Text } from '@nextui-org/react'

interface CategoryElementProps {
  name: string
  path: string
}

const CategoryElement: FC<CategoryElementProps> = ({ name, path }) => {
  return (
        <>
            <div className={style.category_elem}>
                <img src={path}/>
                <Text size={18} color='#422A3C'>{name}</Text>
            </div>
        </>
  )
}

export default CategoryElement
