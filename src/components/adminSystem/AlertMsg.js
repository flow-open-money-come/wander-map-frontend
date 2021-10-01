import styled from 'styled-components'

const AlertMsgTemplate = styled.span`
  margin-top: 8px;
  color: ${(props) => props.$color};
  font-size: ${(props) => props.$size};
  font-weight: ${(props) => props.$weight};
`

export default function AlertMsg({ text, styles }) {
  return (
    <>
      <AlertMsgTemplate
        $color={styles.color}
        $size={styles.fontSize}
        $weight={styles.weight}
      >
        {text}
      </AlertMsgTemplate>
    </>
  )
}
