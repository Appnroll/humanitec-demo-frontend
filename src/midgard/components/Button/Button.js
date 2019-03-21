import styled from 'styled-components';
import { colors } from 'styles/colors';

export const Button = styled.button`
  background-color: ${colors.primaryColor};
  border: none;
  border-radius: rem-calc(4);
  height: rem-calc(32);
  padding: rem-calc(0 12);
  transition: all 0.2s linear;
  font-weight: 600;
  font-size: rem-calc(12);
  color: ${colors.white};
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: darken($primary-color, 5);
  }

  &:disabled {
    background-color: $gray-light;
    color: ${colors.gray};
    cursor: default;
  }
`;
