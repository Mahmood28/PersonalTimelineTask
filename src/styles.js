import styled from "styled-components";

export const ImageStyle = styled.img`


width = 150px;
`;
export const PageSection = styled.div`
  padding: 6rem 0;
  background-color: #ecd3cb;
  h2 {
    font-size: 2.5rem;
    margin-top: page-section 0;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  h3 {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    margin-bottom: 4rem;
    color: #6c757d;
  }
  img {
    border: 2px;
    border-radius: 4px;
    padding: 5px;
    width = 105px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

`;

export const Container = styled.div`
  width: 50%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const TimeLine = styled.ul`
  position: relative;
  padding: 0;
  list-style: none;
img {
    vertical-align: middle;
    border-style: none;
    &.img-fluid {
      max-width: 100%;
      height = auto;
    }
    &.rounded-circle {
        border-radius: 50%;
      }
  }
  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    width: 2px;
    margin-left: -1.5px;
    content: "";
    background-color: #e9ecef;
  }
  li {
    position: relative;
    min-height: 50px;
    margin-bottom: 50px;
    &:after,
    &:before {
      display: table;
      content: " ";
    }
    &:after {
      clear: both;
    }
    &.timeline-panel {
      position: relative;
      float: right;
      width: 100%;
      padding: 0 20px 0 100px;
      text-align: left;
      &:before {
        right: auto;
        left: -15px;
        border-right-width: 15px;
        border-left-width: 0;
      }
      &:after {
        right: auto;
        left: -14px;
        border-right-width: 14px;
        border-left-width: 0;
      }
    }
    &.timeline-image {
      position: absolute;
      z-index: 100;
      left: 0;
      width: 80px;
      height: 80px;
      margin-left: 100;
      text-align: center;
      color: white;
      border: 7px solid #e9ecef;
      border-radius: 100%;
      background-color: #fed136;
      h4 {
        font-size: 10px;
        line-height: 14px;
        margin-top: 12px;
      }
    }
    &.timeline-inverted {
      &.timeline-panel {
        float: right;
        padding: 0 20px 0 100px;
        text-align: left;
        &:before {
          right: auto;
          left: -15px;
          border-right-width: 15px;
          border-left-width: 0;
        }
        &:after {
          right: auto;
          left: -14px;
          border-right-width: 14px;
          border-left-width: 0;
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &.timeline-heading {
    h4 {
      margin-top: 0;
      color: inherit;
      &.subheading {
        text-transform: none;
      }
    }
  }
  &.timeline-body {
    ul,
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 768px) {
    &:before {
      left: 50%;
    }
    li {
      min-height: 100px;
      margin-bottom: 100px;
      &.timeline-panel {
        float: left;
        width: 41%;
        padding: 0 20px 20px 30px;
        text-align: right;
      }
      .timeline-image {
        left: 50%;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        h4 {
          font-size: 13px;
          line-height: 18px;
          margin-top: 16px;
        }
      }
      &.timeline-inverted {
        &.timeline-panel {
          float: right;
          padding: 0 30px 20px 20px;
          text-align: left;
        }
      }
    }
  }
  @media (min-width: 992px) {
    li {
      min-height: 150px;
      &.timeline-panel {
        padding: 0 20px 20px;
      }
      &.timeline-image {
        width: 150px;
        height: 150px;
        margin-left: -75px;
        h4 {
          font-size: 18px;
          line-height: 26px;
          margin-top: 30px;
        }
      }
      &.timeline-inverted {
        &.timeline-panel {
          padding: 0 20px 20px;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    li {
      min-height: 170px;
      &.timeline-panel {
        padding: 0 20px 20px 100px;
      }
      &.timeline-image {
        width: 170px;
        height: 170px;
        margin-left: -85px;
        h4 {
          margin-top: 40px;
        }
      }
      &.timeline-inverted {
        &.timeline-panel {
          padding: 0 100px 20px 20px;
        }
      }
    }
  }
`;
