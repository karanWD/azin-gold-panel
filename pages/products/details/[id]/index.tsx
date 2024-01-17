import { Box, Typography } from '@mui/material'
import { StyledDetailsProductPage } from './styles'
import { NextPage } from 'next'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useRouter } from 'next/router'
import Switch from '@/components/UI/switch'
import Chip from '@/components/UI/chip'
import ProductsComponents from '@/components/products'

const SearchBar: NextPage = () => {
  const router = useRouter()

  return (
    <StyledDetailsProductPage>
      <Box className="header-details">
        <Box>
          <Box className="back-to-list" onClick={() => router.push('/products')}>
            <KeyboardBackspaceIcon className="back-icon" />
            <Typography variant="body3">بازگشت به لیست</Typography>
          </Box>
          <Typography variant="title2"> جزییات محصول </Typography>
        </Box>
        <Box>
          <Typography variant="body3"> فعال/ غیرفعال: </Typography>
          <Switch checked={true} onChange={() => {}} />
        </Box>
      </Box>
      <Box className="box-sell">
        <Box className="value-sell">
          <Typography className="title-box-sell" variant="caption">
            مقدار فروش کل
          </Typography>
        </Box>
        <Box className="value-sell">
          <Typography className="title-box-sell" variant="caption">
            مقدار فروش ماه
          </Typography>
        </Box>
        <Box className="value-sell">
          <Typography className="title-box-sell" variant="caption">
            تعداد فروش
          </Typography>
        </Box>
      </Box>
      <Box className="box-sections">
        <Typography className="header-box-sections" variant="title4">
          اطلاعات عمومی
        </Typography>
        <Box className="items-box-sections">
          <Box className="box-details">
            <Box className="box-chaild-details">
              <Typography className="item-product-details" variant="body3">
                {' '}
                نام محصول:
              </Typography>
              <Typography className="item-product-details" variant="body3">
                {' '}
                اجرت:
              </Typography>
              <Typography className="item-product-details" variant="body3">
                {' '}
                توضیحات ثابت:
              </Typography>
            </Box>
            <Box className="box-chaild-details">
              <Typography className="item-product-details" variant="body3">
                {' '}
                تولید کننده کالا:
              </Typography>
              <Typography className="item-product-details" variant="body3">
                {' '}
                ضریب حداقل فروش:
              </Typography>
              <Typography className="item-product-details" variant="body3">
                {' '}
                توضیحات متغیر:
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="box-sections">
        <Typography className="header-box-sections" variant="title4">
          ویژگی‌ها
        </Typography>
        <Box className="items-box-sections">
          <Chip label="محمد" />
          <Chip label="محمد" />
          <Chip label="محمد" />
        </Box>
      </Box>
      <Box className="box-sections">
        <Typography className="header-box-sections" variant="title4">
          مشتری‌ها‌
        </Typography>
        <Box className="items-box-sections">
          <Chip label="محمد" />
          <Chip label="محمد" />
          <Chip label="محمد" />
        </Box>
      </Box>
      <Box className="box-sections">
        <Typography className="header-box-sections" variant="title4">
          دسته بندی‌ها‌
        </Typography>
        <Box className="items-box-sections">
          <Chip label="محمد" />
          <Chip label="محمد" />
          <Chip label="محمد" />
        </Box>
      </Box>
      <Box className="box-sections">
        <Typography className="header-box-sections" variant="title4">
          {' '}
          اطلاعات تکمیلی محصول{' '}
        </Typography>
        <ProductsComponents />
      </Box>
    </StyledDetailsProductPage>
  )
}

export default SearchBar
