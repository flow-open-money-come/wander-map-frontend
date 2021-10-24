import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FONT, COLOR, RADIUS, MEDIA_QUERY } from '../../constants/style'

const CategoryWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-wrap: wrap;
  ${MEDIA_QUERY.lg} {
    width: 500px;
  }
`

const CategoryBtnLabel = styled.label`
  border-radius: ${RADIUS.lg};
  border: solid 1.5px ${COLOR.green};
  font-size: ${FONT.xs};
  margin: 6px 3px;
  padding: 4px 6px;
  ${MEDIA_QUERY.lg} {
    margin: 6px;
    font-size: ${FONT.s};
  }
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    background: ${COLOR.green};
    color: ${COLOR.white};
  }
  ${(props) =>
    props.isChecked &&
    `
    background: ${COLOR.green};
    color: ${COLOR.white};
  `}
`

const CategoryBtn = styled.input.attrs(() => ({
  type: 'checkbox',
  name: 'tags',
}))`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`

export default function CategoryTags({
  name,
  formData,
  setFormData,
  isPostPage,
}) {
  const [tags, setTags] = useState([
    { id: 1, content: '一日', isChecked: false },
    { id: 2, content: '多日', isChecked: false },
    { id: 3, content: '海景', isChecked: false },
    { id: 4, content: '山景', isChecked: false },
    { id: 5, content: '夜景', isChecked: false },
    { id: 6, content: '城市景色', isChecked: false },
    { id: 7, content: '賞花', isChecked: false },
    { id: 8, content: '稀有動植物', isChecked: false },
    { id: 9, content: '有水源', isChecked: false },
    { id: 10, content: '危險地形', isChecked: false },
    { id: 11, content: '登山小白體驗', isChecked: false },
    { id: 12, content: '需專業設備', isChecked: false },
    { id: 13, content: '專業分享', isChecked: false },
    { id: 14, content: 'GPX', isChecked: false },
  ])
  const [value, setValue] = useState('')

  const handleIsChecked = (id) => {
    setTags(
      tags.map((tag) => {
        if (tag.id !== id) return tag
        return {
          ...tag,
          isChecked: !tag.isChecked,
        }
      })
    )
  }

  const handleTagsChange = (e) => {
    let selectedTags = [e.target.value, ...value]
    setValue(selectedTags)
    setFormData({
      ...formData,
      [name]: selectedTags,
    })
  }

  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      if (!formData.tag_names) return
      if (!isPostPage) {
        setTags(
          tags.map((tag) => {
            return formData.tag_names.includes(tag.content)
              ? {
                  ...tag,
                  isChecked: true,
                }
              : tag
          })
        )
      }
    }
  }, [formData, isPostPage, tags])

  return (
    <CategoryWrapper onChange={handleTagsChange}>
      {tags.map((tag) => (
        <CategoryBtnLabel
          isChecked={tag.isChecked}
          onChange={() => {
            handleIsChecked(tag.id)
          }}
        >
          <CategoryBtn value={tag.content} />
          {tag.content}
        </CategoryBtnLabel>
      ))}
    </CategoryWrapper>
  )
}
