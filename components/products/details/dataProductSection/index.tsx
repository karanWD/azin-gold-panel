import { Box, Typography } from '@mui/material'
import Section from '@/components/reusable/islandSections'
import { FC } from 'react'
import { HandleDate } from 'modules'
import { StyledSectionsDetails } from './styles'

type Props = {
  data: {
    title: string
    wage: number
    staticNotice: string
    createdAt: string
    manufacture: string
    minimumSoldMultiple: number
    dynamicNotice: string
    updatedAt: string
  }
}
const DataProductSection: FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <StyledSectionsDetails>
      <Section title="اطلاعات عمومی">
        <Box className="items-box-sections">
          <Box className="box-details">
            <Box className="box-chaild-details">
              <Box className="box-data-product">
                <Typography className="item-product-details" variant="body3">
                  {' '}
                  نام محصول:
                </Typography>
                <Typography variant="subtitle3">{data?.title || '_'}</Typography>
              </Box>
              <Box className="box-data-product">
                <Typography className="item-product-details" variant="body3">
                  {' '}
                  اجرت:
                </Typography>
                <Typography variant="subtitle3">{data?.wage || '_'}</Typography>
              </Box>
              <Box className="box-data-product">
                <Typography className="item-product-details" variant="body3">
                  {' '}
                  توضیحات ثابت:
                </Typography>
                <Typography variant="subtitle3">{data?.staticNotice || '_'}</Typography>
              </Box>
              <Box className="box-data-product">
                <Typography className="item-product-details" variant="body3">
                  {' '}
                  تاریخ ایجاد:
                </Typography>
                <Typography variant="subtitle3">{HandleDate(data?.createdAt) || '_'}</Typography>
              </Box>
            </Box>
            <Box className="box-chaild-details">
              <Box className="box-data-product">
                <Typography className="item-product-details" variant="body3">
                  {' '}
                  تولید کننده کالا:
                </Typography>
                <Typography variant="subtitle3">{data?.manufacture || '_'}</Typography>
              </Box>
              <Box className="box-data-product">
                <Typography className="item-product-details" variant="body3">
                  {' '}
                  ضریب حداقل فروش:
                </Typography>
                <Typography variant="subtitle3">{data?.minimumSoldMultiple || '_'}</Typography>
              </Box>
              <Box className="box-data-product">
                <Typography className="item-product-details" variant="body3">
                  {' '}
                  توضیحات متغیر:
                </Typography>
                <Typography variant="subtitle3">{data?.dynamicNotice || '_'}</Typography>
              </Box>
              <Box className="box-data-product">
                <Typography className="item-product-details" variant="body3">
                  {' '}
                  تاریخ بروزرسانی:
                </Typography>
                <Typography variant="subtitle3">{HandleDate(data?.updatedAt) || '_'}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Section>
    </StyledSectionsDetails>
  )
}

export default DataProductSection
