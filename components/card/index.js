import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { For } from 'react-extras'

const Wrapper = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) => theme.shadow.medium};
  color: ${({ theme }) => theme.palette.black};
  border-radius: ${({ theme }) => theme.radius};
  padding: ${({ theme }) => theme.spacing.medium};
  width: 360px;
  margin: ${({ theme }) => theme.spacing.medium};

  h1, h2, h3 {
    margin-top: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing};
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme }) => theme.spacing.large};
    margin-bottom: ${({ theme }) => theme.spacing};
  }

  .center {
    text-align: center;
  }
`

const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.large};
`

const Card = ({ data }) => {
  return (
    <FlexWrap>
      <For of={data} render={item =>
        <Wrapper key={item.slug}>
          <hgroup>
            <h2 className="center">{item.dialect}</h2>
            <h3>Significado:</h3>
          </hgroup>
          <For of={item.meanings} render={meaning =>
            <p key={meaning}>{meaning}</p>
          }/>
          <div>
            <h3>Exemplos:</h3>
            <For of={item.examples} render={(example, index) =>
              <p key={example}>{example}</p>
	          }/>
          </div>
        </Wrapper>
      }/>

    </FlexWrap>
  )
}
Card.defaultProps = {
  data: []
}

Card.propTypes = {
  data: PropTypes.array
}

export default Card
