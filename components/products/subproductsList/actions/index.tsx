import React from 'react'
import { StyledActions } from '@/components/products/subproductsList/actions/styles'
import Image from 'next/image'

const ListActions = () => {
  // const [edit, setEdit] = useState(false)
  // const [editGallery, seteditGallery] = useState(false)
  return (
    <StyledActions>
      <Image
        // onClick={() => setEdit(true)}
        className="action-item"
        src={'/images/edit.svg'}
        alt={'edit'}
        width={24}
        height={24}
        layout="fixed"
      />
      <Image
        // onClick={removeHandler}
        className="action-item"
        src={'/images/delete.svg'}
        alt={'delete'}
        width={24}
        height={24}
        layout="fixed"
      />
      <Image
        // onClick={() => seteditGallery(true)}
        className="action-item"
        src={'/images/edit-gallery.svg'}
        alt={'edit-gallery'}
        width={24}
        height={24}
        layout="fixed"
      />
    </StyledActions>
  )
}

export default ListActions
