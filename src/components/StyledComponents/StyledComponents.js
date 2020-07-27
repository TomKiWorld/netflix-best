import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 60rem;
  padding: 1rem 2rem;
  margin: 0 auto;
`;

export const CustomLink = styled.a`
  text-decoration: none;
  color:  #E50914;

  &:hover,
  &:focus {
    background: #f40612;
    box-shadow: 0 1px 0 rgba(0,0,0,.45);
  }
`;

export const ButtonsContainer = styled.div`
  width: 18rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

export const CtaButton = styled.button`
  color: #FFF;
  background-color: #E50914;
  width: 7rem;
  border: none;
  padding: 0.5rem;
  transition: transform .5s cubic-bezier(.25,.45,.45,.95);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
