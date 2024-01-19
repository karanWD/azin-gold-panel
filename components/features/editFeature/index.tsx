import { NextPage } from 'next'
import { StyledAddFeature } from '../createFeature/styles'
import { Box, Button, Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useEffect, useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import InputHeaderFeature from '../createFeature/createHeaderFeature'
import InputSortFeature from '../createFeature/createSortFeature'
import InputValueFeature from '../createFeature/createValueFeature'
import InputDescriptionFeature from '../createFeature/createDescriptionFeature'
import InputImageFeature from '../createFeature/createImageFeature'
import { useRouter } from 'next/router'
import UseFetch from '../../../hooks/useFetch'
import { ApiRoutes } from '../../../enums/ApiRoutes'
import { DISPLAY_MODES } from '../../../enums/DisplayModes'
import Image from 'next/image'

const EditFeatureComponent: NextPage = () => {
  const { response, request } = UseFetch()

  const [headerInput, setHeaderInput] = useState<string>('')
  const [imageInput, setImageInput] = useState([])
  const [temp, setTemp] = useState([])
  const [editFeature, setEditFeature] = useState<boolean>(true)
  const router = useRouter()
  const { featureId } = router.query

  const getFeatureData = () => {
    request({
      url: ApiRoutes.ADMIN_FEATURES + `/${featureId}`,
    })
  }

  useEffect(() => {
    getFeatureData()
  }, [])

  useEffect(() => {
    setHeaderInput(response?.header)
    // setImageInput(response?.images)
    setTemp(response?.features ? response.features : [])
  }, [response])

  const changeHandler = (value, id, type) => {
    const updatedTemp = [...temp]
    updatedTemp.find((i) => i.id === id)[type] = value
    setTemp([...updatedTemp])
  }

  const deleteHandler = (id) => {
    const deleteItem = temp.filter((i) => i.id !== id)
    setTemp([...deleteItem])
  }

  // const editHandler = (id) => {
  //   const deleteItem = temp.filter((i) => i.id !== id)
  //   setTemp([...deleteItem])
  // }

  const submitHandler = (e: any) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('header', headerInput)

    for (let i = 0; i < temp.length; i++) {
      for (const key in temp[i]) {
        if (key === 'id' || (key === 'tooltip' && temp[i][key] === '')) {
          continue
        }
        formData.append(`features[${i}][${key}]`, temp[i][key])
      }
    }
    for (let i = 0; i < imageInput.length; i++) {
      formData.append('images', imageInput[i])
    }

    request({
      method: 'PATCH',
      url: ApiRoutes.ADMIN_FEATURES + `/${featureId}`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(() => {})
  }

  return (
    <StyledAddFeature>
      <form onSubmit={submitHandler}>
        <Box>
          <Box className="back-to-list" onClick={() => router.push('/features')}>
            <KeyboardBackspaceIcon className="back-icon" />
            <Typography variant="body3">بازگشت به لیست</Typography>
          </Box>
          <Typography variant="title2">ویرایش ویژگی {router.query.title}</Typography>
        </Box>
        <Box className="container">
          <Box className="header-box">
            <InputHeaderFeature amountInput={headerInput} setAmountInput={setHeaderInput} />
          </Box>
          {temp.map((i) => (
            <>
              <Box className="box-values-list">
                <InputSortFeature
                  editFeature={editFeature}
                  onChangeHandler={(value) => changeHandler(value, i.id, 'sequence')}
                />
                <InputValueFeature
                  editFeature={editFeature}
                  onChangeHandler={(value) => changeHandler(value, i.id, 'title')}
                />
                {response?.displayMode === DISPLAY_MODES.PRODUCT ? (
                  <InputDescriptionFeature
                    editFeature={editFeature}
                    onChangeHandler={(value) => changeHandler(value, i.id, 'tooltip')}
                  />
                ) : (
                  <></>
                )}
                {response?.displayMode === DISPLAY_MODES.COLOR || response?.displayMode === DISPLAY_MODES.EXPANDABLE ? (
                  <InputImageFeature editFeature={editFeature} setImageInput={setImageInput} />
                ) : (
                  <></>
                )}
                <Image
                  src={'/icons/trash.svg'}
                  alt={'جزئیات'}
                  width={24}
                  height={24}
                  onClick={() => deleteHandler(i.id)}
                  className="delete-row"
                />
                <Image
                  src={'/icons/edit.svg'}
                  alt={'جزئیات'}
                  width={24}
                  height={24}
                  onClick={() => setEditFeature((p) => !p)}
                  className="delete-row"
                />
              </Box>
            </>
          ))}

          <Box
            className="box-add-value"
            onClick={() =>
              setTemp((e) => [
                ...e,
                {
                  title: '',
                  sequence: '',
                  tooltip: '',
                  id: Math.random() * 100,
                },
              ])
            }>
            <AddCircleOutlineIcon className="add-value-icon" />
            <Typography className="add-value" variant="button1">
              افزودن مقدار
            </Typography>
          </Box>
        </Box>
        <Box className="register-feature">
          <Button color="primary" variant="contained" type="submit">
            <Typography variant={'button2'}>ثبت</Typography>
          </Button>
        </Box>
      </form>
    </StyledAddFeature>
  )
}

export default EditFeatureComponent
