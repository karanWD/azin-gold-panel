import { Box, Typography } from '@mui/material'
import { StyledDetailsProductPage } from './styles'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Switch from '@/components/UI/switch'
import Chip from '@/components/UI/chip'
import Section from '@/components/reusable/islandSections'
import TextField from '@/components/UI/textField'
import SelectBox from '@/components/UI/select'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Image from 'next/image'
import Button from '@/components/UI/button'
import Link from 'next/link'
import BackToList from '@/components/reusable/backToList'

const EditProductComponent: NextPage = () => {
  const router = useRouter()
  return (
    <StyledDetailsProductPage>
      <Box className="header-details">
        <BackToList title={'ویرایش محصول '} />
        <Box>
          <Typography variant="body3"> فعال/ غیرفعال: </Typography>
          <Switch checked={true} onChange={() => {}} />
        </Box>
      </Box>
      <Section title="اطلاعات عمومی">
        <Box className="box-details">
          <TextField className="input-edit" label={'نام محصول'} />
          <Box className="input-edit">
            <SelectBox value="لیارا" changeHandler={() => {}} label={'تولید کننده کالا'}>
              <Typography>لیارا</Typography>
            </SelectBox>
          </Box>
          <TextField className="input-edit" label={'اجرت'} />
          <TextField className="input-edit" label={'ضریب حداقل فروش'} />
          <TextField
            className="input-edit"
            label={'توضیحات ثابت'}
            placeholder="توضیحات ثابت را در صورت نیاز وارد کنید."
          />
          <TextField
            className="input-edit"
            label={'توضیحات متغیر'}
            placeholder="توضیحات متغیر را در صورت نیاز وارد کنید"
          />
        </Box>
      </Section>
      <Section title="ویژگی‌ها">
        <Box className="items-box-sections">
          <Chip format={'brandSecondary'} label="محمد" />
          <Chip format={'brandSecondary'} label="محمد" />
          <Chip format={'brandSecondary'} label="محمد" />
        </Box>
      </Section>
      <Section title="مشتری‌ها‌">
        <Box className="items-box-sections">
          <Chip format={'brandSecondary'} handleDelete={() => {}} label="محمد" />
          <Chip format={'brandSecondary'} handleDelete={() => {}} label="محمد" />
          <Chip format={'brandSecondary'} handleDelete={() => {}} label="محمد" />
          <Box>
            <AddCircleOutlineIcon className="add-client-icon" />
            <Typography variant="button1">افزودن ویژگی</Typography>
          </Box>
        </Box>
      </Section>
      <Section title="دسته بندی‌ها">
        <Box className="items-box-sections">
          <Chip format={'brandSecondary'} handleDelete={() => {}} label="محمد" />
          <Chip format={'brandSecondary'} handleDelete={() => {}} label="محمد" />
          <Chip format={'brandSecondary'} handleDelete={() => {}} label="محمد" />
        </Box>
      </Section>
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
        <Button width="100px" format="primary">
          ویرایش
        </Button>
      </Box>
    </StyledDetailsProductPage>
  )
}

export default EditProductComponent
