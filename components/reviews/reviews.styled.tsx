import styled from "styled-components";

export const Reviewer = styled.div<{ isActive?: boolean }>`
  width: ${(props) => (props.isActive ? `fit-content` : `56px`)};
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.isActive ? `16px 24px` : `0px`)};
  gap: 24px;
  border-radius: ${(props) => (props.isActive ? `100px` : `none`)};
  transition: 0.25s all ease;
  background: ${(props) => (props.isActive ? `#171717` : `#FFF`)};
  cursor: ${(props) => (props.isActive ? `auto` : `pointer`)};

  &:hover img {
    outline: ${(props) => (props.isActive ? `none` : `1px solid black`)};
  }

  img {
    border-radius: 100%;
    transition: 0.5s all ease;
  }

  .description {
    display: ${(props) => (props.isActive ? `block` : `none`)};

    p {
      margin: 0;
    }

    &-fullname {
      font-size: 20px;
      line-height: 29px;
      color: #fff;
    }

    &-profession {
      line-height: 20px;
      color: #7b7b7b;
    }
  }
`;
