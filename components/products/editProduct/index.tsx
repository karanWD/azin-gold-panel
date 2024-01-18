import { Box, Typography } from '@mui/material'
import { StyledDetailsProductPage } from './styles'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Switch from '@/components/UI/switch'
import Chip from '@/components/UI/chip'
import Section from '@/components/reusable/islandSections'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Image from 'next/image'
import Button from '@/components/UI/button'
import Link from 'next/link'
import BackToList from '@/components/reusable/backToList'
import UseFetch from 'hooks/useFetch'
import { useEffect, useState } from 'react'
import { ApiRoutes } from 'enums/ApiRoutes'
import ProductInformation from '../create/productInformation'
import SectionsCategori from './sectionsCategori'
import SectionsFeatures from './sectionsFeatures'

  type informationType = {
    title: string
    wage: string
    minimumSoldMultiple: string
    staticNotice: string
    dynamicNotice: string
    producer: string /*تولیدکنندگان فعلا نداریم */
  }
  const DEFAULT_VALUES = {
    title: '',
    wage: '',
    minimumSoldMultiple: '',
    staticNotice: '',
    dynamicNotice: '',
    producer: '',
  }

const EditProductComponent: NextPage = () => {
  const router = useRouter()
  const { request, response } = UseFetch()
  const { request:editReq} = UseFetch()
  const [data, setData] = useState<informationType>(DEFAULT_VALUES)
  const [isActive, setIsActive] = useState<boolean>(response?.product?.isActive)
  const { id } = router.query
  
  
  const updateHandler = (id: string) => {
      request({
          url: ApiRoutes.ADMIN_PRODUCTS + '/' + id + '/edit',
        })
  }

  console.log(id)
  
  const editHandler = () => {
    
    const values = {
        ...data,
        wage: +data.wage,
        minimumSoldMultiple: +data.minimumSoldMultiple,
      }
      delete values.producer
      editReq({
        method: "PATCH",
        url: ApiRoutes.ADMIN_PRODUCTS + '/' + id ,
        data:values
      })
}
  
  useEffect(() => {
      id && updateHandler(id as string)
    }, [id])
    
    const changeHandler = (value: string | number, key: string) => {
      setData((prevState) => ({
        ...prevState,
        [key]: value,
      }))}

      const editStatusProducts = () => {
        request({
          method: 'PATCH',
          url: ApiRoutes.ADMIN_PRODUCTS + '/' + id,
          data: {
            isActive: !isActive,
          },
        }).then(() => setIsActive((prevState) => !prevState))
      }
      

  console.log(response)

  return (
    <StyledDetailsProductPage>
      <Box className="header-details">
        <BackToList title={'ویرایش محصول '} />
        <Box>
          <Typography variant="body3"> فعال/ غیرفعال: </Typography>
          <Switch checked={isActive} onChange={editStatusProducts} />
        </Box>
      </Box>
      <Section title="اطلاعات عمومی">
        <ProductInformation data={data} changeHandler={changeHandler} />
      </Section>
      <SectionsFeatures data={response} />
      <Section title="مشتری‌ها‌">
        <Box className="items-box-sections">
          <Chip format={'brandSecondary'} handleDelete={() => {}} label="محمد" />
          <Box>
            <AddCircleOutlineIcon className="add-client-icon" />
            <Typography variant="button1">افزودن ویژگی</Typography>
          </Box>
        </Box>
      </Section>
      <SectionsCategori data={response} />
      <Box className="header-box-sections" title="اطلاعات تکمیلی محصول">
        <Typography variant="title4">اطلاعات تکمیلی محصول</Typography>
        <Box>
          <Link href={`/products/edit/editFurtherData/${router.query.id}`} className="box-edit-button">
            <Image src={'/icons/edit.svg'} alt={'جزئیات'} width={24} height={24} />
            <Typography variant="button1">ویرایش</Typography>
          </Link>
        </Box>
      </Box>
      <Box className="set-edit-button">
        <Button width="100px" format="primary" onClick={editHandler}>
          ویرایش
        </Button>
      </Box>
    </StyledDetailsProductPage>
  )
}

export default EditProductComponent
