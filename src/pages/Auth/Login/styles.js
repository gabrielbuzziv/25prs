import styled from 'styled-components';
import { colors } from '~/assets/styles';

import { Form as ComponentForm, Button as ComponentButton } from '~/components';

export const Container = styled.div`
  width: 350px;
`;

export const Title = styled.h2`
  color: ${colors.darkPink};
  display: flex;
  flex-direction: column;
  font-size: 42px;
  font-weight: 800;
  line-height: 49px;
  margin-bottom: 27px;

  > span {
    color: ${colors.darkGray};
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    margin-top: 6px;
  }
`;

export const Form = styled(ComponentForm)`
  background: #000;
`;

export const Buttons = styled(ComponentForm.Buttons)`
  justify-content: flex-end;
`;

export const Button = styled(ComponentButton)`
  align-self: flex-end;
  width: 150px;
`;
