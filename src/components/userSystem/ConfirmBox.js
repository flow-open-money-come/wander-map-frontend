import { deleteArticle } from '../../WebAPI'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS } from '../../constants/style'

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  padding: 50px 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid ${COLOR.gray};
  border-radius: ${RADIUS.s};
`
const Warning = styled.div`
  margin: 10px;
  text-align: center;
  font-size: ${FONT.md};
`
const BtnWrapper = styled.div`
  text-align: center;
`
const Btn = styled.div`
  opacity: 0.8;
  display: inline-block;
  padding: 10px 20px;
  margin: 20px;
  color: ${COLOR.white};
  font-size: ${FONT.s};
  background: #8a8686;
  border-radius: ${RADIUS.s};
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.4);
  }
`

export default function ConfirmBox({ popUp, setPopUp }) {
  console.log(popUp)
  const handleDelete = () => {
    if (!popUp.key) return
    deleteArticle(popUp.key)
      .then((res) => {
        console.log(res.data.data)
        console.log(popUp.key, '刪除成功')
      })
      .catch((err) => {
        console.log(err.response.data)
        console.log('刪除不成功')
      })
    setPopUp({ ...popUp, isShow: false })
  }

  return (
    <Wrapper>
      <Warning>確認刪除</Warning>
      <BtnWrapper>
        <Btn
          type='button'
          onClick={() => setPopUp({ ...popUp, isShow: false })}
        >
          返回
        </Btn>
        <Btn type='button' onClick={handleDelete}>
          刪除
        </Btn>
      </BtnWrapper>
    </Wrapper>
  )
}
