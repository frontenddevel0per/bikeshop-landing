import styled from "styled-components";

export const SpecItemDiv = styled.div<{ isActive?: boolean }>`
  background: #171717;
  color: #fff;
  border-radius: 24px;

  .specitem-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    background: #171717;
    cursor: pointer;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;

    &-title {
      display: flex;
      align-items: center;
      gap: 16px;

      p {
        margin: 0;
      }

      &-name {
        font-size: 20px;
        line-height: 32px;
      }

      &-count {
        padding: 2px 8px;
        background: linear-gradient(
            258.17deg,
            rgba(255, 255, 255, 0.086) -4.72%,
            rgba(255, 255, 255, 0) 113.59%
          ),
          rgba(23, 23, 23, 0.2);
        backdrop-filter: blur(6px);

        border-radius: 8px;
        font-size: 16px;
        line-height: 29px;
      }
    }

    img {
      transition: 0.25s all ease;
      transform: rotate(${(props) => (props.isActive ? `180` : `0`)}deg);
    }
  }

  .specitem-main {
    transition: 0.25s all ease;
    background: #171717;
    padding: ${(props) => (props.isActive ? `0 40px 100px 0` : `0`)};
    display: flex;
    justify-content: flex-end;
    overflow: ${(props) => (props.isActive ? `visible` : `hidden`)};
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;

    &-list {
      width: 720px;
      height: ${(props) => (props.isActive ? `fit-content` : `0px`)};
      background: #171717;

      &-row {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;

        &:last-child {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
      }

      &-cell {
        width: 50%;
        background: #171717;
        display: flex;
        align-items: center;
        padding: 20px 0px;

        p {
          color: #fff;
          margin: 0;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
`;
