import { css } from '@emotion/react'

export const algoliaStyles = css`
  .algolia-autocomplete {
    display: block !important;
  }

  @-webkit-keyframes sbx-reset-in {
    0% {
      -webkit-transform: translate3d(-20%, 0, 0);
      transform: translate3d(-20%, 0, 0);
      opacity: 0;
    }
    100% {
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  @keyframes sbx-reset-in {
    0% {
      -webkit-transform: translate3d(-20%, 0, 0);
      transform: translate3d(-20%, 0, 0);
      opacity: 0;
    }
    100% {
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  .algolia-autocomplete.algolia-autocomplete-right .ds-dropdown-menu {
    right: 0 !important;
    left: inherit !important;
  }

  .algolia-autocomplete.algolia-autocomplete-right .ds-dropdown-menu:before {
    right: 48px;
  }

  .algolia-autocomplete.algolia-autocomplete-left .ds-dropdown-menu {
    left: 0 !important;
    right: inherit !important;
  }

  .algolia-autocomplete.algolia-autocomplete-left .ds-dropdown-menu:before {
    left: 48px;
  }

  .algolia-autocomplete .ds-dropdown-menu {
    position: relative;
    top: -6px;
    border-radius: 4px;
    margin: 6px 0 0;
    padding: 0;
    text-align: left;
    height: auto;
    position: relative;
    background: transparent;
    border: none;
    z-index: 999;
    max-width: 600px;
    min-width: 500px;
    box-shadow:
      0 1px 0 0 rgba(0, 0, 0, 0.2),
      0 2px 3px 0 rgba(0, 0, 0, 0.1);
  }

  .algolia-autocomplete .ds-dropdown-menu:before {
    display: block;
    position: absolute;
    content: '';
    width: 14px;
    height: 14px;
    background: #fff;
    z-index: 1000;
    top: -7px;
    border-top: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    border-radius: 2px;
  }

  .algolia-autocomplete .ds-dropdown-menu .ds-suggestions {
    position: relative;
    z-index: 1000;
    margin-top: 8px;
  }

  .algolia-autocomplete .ds-dropdown-menu .ds-suggestions a:hover {
    text-decoration: none;
  }

  .algolia-autocomplete .ds-dropdown-menu .ds-suggestion {
    cursor: pointer;
  }

  .algolia-autocomplete
    .ds-dropdown-menu
    .ds-suggestion.ds-cursor
    .algolia-docsearch-suggestion.suggestion-layout-simple {
    background-color: rgba(69, 142, 225, 0.05);
  }

  .algolia-autocomplete
    .ds-dropdown-menu
    .ds-suggestion.ds-cursor
    .algolia-docsearch-suggestion:not(.suggestion-layout-simple)
    .algolia-docsearch-suggestion--content {
    background-color: rgba(69, 142, 225, 0.05);
  }

  .algolia-autocomplete .ds-dropdown-menu [class^='ds-dataset-'] {
    position: relative;
    border: solid 1px #d9d9d9;
    background: #fff;
    border-radius: 4px;
    overflow: auto;
    padding: 0 8px 8px;
  }

  .algolia-autocomplete .ds-dropdown-menu * {
    box-sizing: border-box;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion {
    display: block;
    position: relative;
    padding: 0 8px;
    background: #fff;
    color: #02060c;
    overflow: hidden;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--highlight {
    color: #174d8c;
    background: rgba(143, 187, 237, 0.1);
    padding: 0.1em 0.05em;
  }

  .algolia-autocomplete
    .algolia-docsearch-suggestion--category-header
    .algolia-docsearch-suggestion--category-header-lvl0
    .algolia-docsearch-suggestion--highlight,
  .algolia-autocomplete
    .algolia-docsearch-suggestion--category-header
    .algolia-docsearch-suggestion--category-header-lvl1
    .algolia-docsearch-suggestion--highlight {
    padding: 0 0 1px;
    background: inherit;
    box-shadow: inset 0 -2px 0 0 rgba(69, 142, 225, 0.8);
    color: inherit;
  }

  .algolia-autocomplete
    .algolia-docsearch-suggestion--text
    .algolia-docsearch-suggestion--highlight {
    padding: 0 0 1px;
    background: inherit;
    box-shadow: inset 0 -2px 0 0 rgba(69, 142, 225, 0.8);
    color: inherit;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--content {
    display: block;
    float: right;
    width: 70%;
    position: relative;
    padding: 5.33333px 0 5.33333px 10.66667px;
    cursor: pointer;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--content:before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    height: 100%;
    width: 1px;
    background: #ddd;
    left: -1px;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--category-header {
    position: relative;
    border-bottom: 1px solid #ddd;
    display: none;
    margin-top: 8px;
    padding: 4px 0;
    font-size: 1em;
    color: #33363d;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--wrapper {
    width: 100%;
    float: left;
    padding: 8px 0 0 0;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column {
    float: left;
    width: 30%;
    padding-left: 0;
    text-align: right;
    position: relative;
    padding: 5.33333px 10.66667px;
    color: #a4a7ae;
    font-size: 0.9em;
    word-wrap: break-word;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column:before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    height: 100%;
    width: 1px;
    background: #ddd;
    right: 0;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-inline {
    display: none;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--title {
    margin-bottom: 4px;
    color: #02060c;
    font-size: 0.9em;
    font-weight: bold;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--text {
    display: block;
    line-height: 1.2em;
    font-size: 0.85em;
    color: #63676d;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--no-results {
    width: 100%;
    padding: 8px 0;
    text-align: center;
    font-size: 1.2em;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--no-results::before {
    display: none;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion code {
    padding: 1px 5px;
    font-size: 90%;
    border: none;
    color: #222222;
    background-color: #ebebeb;
    border-radius: 3px;
    font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .algolia-autocomplete
    .algolia-docsearch-suggestion
    code
    .algolia-docsearch-suggestion--highlight {
    background: none;
  }

  .algolia-autocomplete
    .algolia-docsearch-suggestion.algolia-docsearch-suggestion__main
    .algolia-docsearch-suggestion--category-header {
    display: block;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion.algolia-docsearch-suggestion__secondary {
    display: block;
  }

  @media all and (min-width: 768px) {
    .algolia-autocomplete
      .algolia-docsearch-suggestion
      .algolia-docsearch-suggestion--subcategory-column {
      display: block;
    }
  }

  @media all and (max-width: 768px) {
    .algolia-autocomplete
      .algolia-docsearch-suggestion
      .algolia-docsearch-suggestion--subcategory-column {
      display: inline-block;
      width: auto;
      text-align: left;
      float: left;
      padding: 0;
      color: #02060c;
      font-size: 0.9em;
      font-weight: bold;
      text-align: left;
      opacity: 0.5;
    }
    .algolia-autocomplete
      .algolia-docsearch-suggestion
      .algolia-docsearch-suggestion--subcategory-column:before {
      display: none;
    }
    .algolia-autocomplete
      .algolia-docsearch-suggestion
      .algolia-docsearch-suggestion--subcategory-column:after {
      content: '|';
    }
    .algolia-autocomplete .algolia-docsearch-suggestion .algolia-docsearch-suggestion--content {
      display: inline-block;
      width: auto;
      text-align: left;
      float: left;
      padding: 0;
    }
    .algolia-autocomplete
      .algolia-docsearch-suggestion
      .algolia-docsearch-suggestion--content:before {
      display: none;
    }
  }

  .algolia-autocomplete .suggestion-layout-simple.algolia-docsearch-suggestion {
    border-bottom: solid 1px #eee;
    padding: 8px;
    margin: 0;
  }

  .algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--content {
    width: 100%;
    padding: 0;
  }

  .algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--content::before {
    display: none;
  }

  .algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--category-header {
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
    border: none;
  }

  .algolia-autocomplete
    .suggestion-layout-simple
    .algolia-docsearch-suggestion--category-header-lvl0 {
    opacity: 0.6;
    font-size: 0.85em;
  }

  .algolia-autocomplete
    .suggestion-layout-simple
    .algolia-docsearch-suggestion--category-header-lvl1 {
    opacity: 0.6;
    font-size: 0.85em;
  }

  .algolia-autocomplete
    .suggestion-layout-simple
    .algolia-docsearch-suggestion--category-header-lvl1::before {
    background-image: url('data:image/svg+xml;utf8,<svg width="10" height="10" viewBox="0 0 20 38" xmlns="http://www.w3.org/2000/svg"><path d="M1.49 4.31l14 16.126.002-2.624-14 16.074-1.314 1.51 3.017 2.626 1.313-1.508 14-16.075 1.142-1.313-1.14-1.313-14-16.125L3.2.18.18 2.8l1.31 1.51z" fill-rule="evenodd" fill="%231D3657" /></svg>');
    content: '';
    width: 10px;
    height: 10px;
    display: inline-block;
  }

  .algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--wrapper {
    width: 100%;
    float: left;
    margin: 0;
    padding: 0;
  }

  .algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--duplicate-content,
  .algolia-autocomplete
    .suggestion-layout-simple
    .algolia-docsearch-suggestion--subcategory-inline {
    display: none !important;
  }

  .algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--title {
    margin: 0;
    color: #458ee1;
    font-size: 0.9em;
    font-weight: normal;
  }

  .algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--title::before {
    content: '#';
    font-weight: bold;
    color: #458ee1;
    display: inline-block;
  }

  .algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--text {
    margin: 4px 0 0;
    display: block;
    line-height: 1.4em;
    padding: 5.33333px 8px;
    background: #f8f8f8;
    font-size: 0.85em;
    opacity: 0.8;
  }

  .algolia-autocomplete
    .suggestion-layout-simple
    .algolia-docsearch-suggestion--text
    .algolia-docsearch-suggestion--highlight {
    color: #3f4145;
    font-weight: bold;
    box-shadow: none;
  }

  .algolia-autocomplete .algolia-docsearch-footer {
    width: 134px;
    height: 20px;
    z-index: 2000;
    margin-top: 10.66667px;
    float: right;
    font-size: 0;
    line-height: 0;
  }

  .algolia-autocomplete .algolia-docsearch-footer--logo {
    background-image: url("data:image/svg+xml,%3Csvg width='168' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M78.988.938h16.594a2.968 2.968 0 0 1 2.966 2.966V20.5a2.967 2.967 0 0 1-2.966 2.964H78.988a2.967 2.967 0 0 1-2.966-2.964V3.897A2.961 2.961 0 0 1 78.988.938zm41.937 17.866c-4.386.02-4.386-3.54-4.386-4.106l-.007-13.336 2.675-.424v13.254c0 .322 0 2.358 1.718 2.364v2.248zm-10.846-2.18c.821 0 1.43-.047 1.855-.129v-2.719a6.334 6.334 0 0 0-1.574-.199c-.295 0-.596.021-.897.069a2.699 2.699 0 0 0-.814.24c-.24.116-.439.28-.582.491-.15.212-.219.335-.219.656 0 .628.219.991.616 1.23s.938.362 1.615.362zm-.233-9.7c.883 0 1.629.109 2.231.328.602.218 1.088.525 1.444.915.363.396.609.922.76 1.483.157.56.232 1.175.232 1.85v6.874c-.41.089-1.034.19-1.868.314-.834.123-1.772.185-2.813.185-.69 0-1.327-.069-1.895-.198a4.001 4.001 0 0 1-1.471-.636 3.085 3.085 0 0 1-.951-1.134c-.226-.465-.343-1.12-.343-1.803 0-.656.13-1.073.384-1.525.26-.45.608-.819 1.047-1.106.445-.287.95-.492 1.532-.615a8.8 8.8 0 0 1 1.82-.185 8.404 8.404 0 0 1 1.972.24v-.438c0-.307-.035-.6-.11-.874a1.88 1.88 0 0 0-.384-.73 1.784 1.784 0 0 0-.724-.493 3.164 3.164 0 0 0-1.143-.205c-.616 0-1.177.075-1.69.164a7.735 7.735 0 0 0-1.26.307l-.321-2.192c.335-.117.834-.233 1.478-.349a10.98 10.98 0 0 1 2.073-.178zm52.842 9.626c.822 0 1.43-.048 1.854-.13V13.7a6.347 6.347 0 0 0-1.574-.199c-.294 0-.595.021-.896.069a2.7 2.7 0 0 0-.814.24 1.46 1.46 0 0 0-.582.491c-.15.212-.218.335-.218.656 0 .628.218.991.615 1.23.404.245.938.362 1.615.362zm-.226-9.694c.883 0 1.629.108 2.231.327.602.219 1.088.526 1.444.915.355.39.609.923.759 1.483.158.56.233 1.175.233 1.852v6.873c-.41.088-1.034.19-1.868.314-.834.123-1.772.184-2.813.184-.69 0-1.327-.068-1.895-.198a4.001 4.001 0 0 1-1.471-.635 3.085 3.085 0 0 1-.951-1.134c-.226-.465-.343-1.12-.343-1.804 0-.656.13-1.073.384-1.524.26-.45.608-.82 1.047-1.107.445-.286.95-.491 1.532-.614a8.803 8.803 0 0 1 2.751-.13c.329.034.671.096 1.04.185v-.437a3.3 3.3 0 0 0-.109-.875 1.873 1.873 0 0 0-.384-.731 1.784 1.784 0 0 0-.724-.492 3.165 3.165 0 0 0-1.143-.205c-.616 0-1.177.075-1.69.164-.514.089-.938.191-1.26.307l-.321-2.193c.335-.116.834-.232 1.478-.348a11.633 11.633 0 0 1 2.073-.177zm-8.034-1.271a1.626 1.626 0 0 1-1.628-1.62c0-.895.725-1.62 1.628-1.62.904 0 1.63.725 1.63 1.62 0 .895-.733 1.62-1.63 1.62zm1.348 13.22h-2.689V7.27l2.69-.423v11.956zm-4.714 0c-4.386.02-4.386-3.54-4.386-4.107l-.008-13.336 2.676-.424v13.254c0 .322 0 2.358 1.718 2.364v2.248zm-8.698-5.903c0-1.156-.253-2.119-.746-2.788-.493-.677-1.183-1.01-2.067-1.01-.882 0-1.574.333-2.065 1.01-.493.676-.733 1.632-.733 2.788 0 1.168.246 1.953.74 2.63.492.683 1.183 1.018 2.066 1.018.882 0 1.574-.342 2.067-1.019.492-.683.738-1.46.738-2.63zm2.737-.007c0 .902-.13 1.584-.397 2.33a5.52 5.52 0 0 1-1.128 1.906 4.986 4.986 0 0 1-1.752 1.223c-.685.286-1.739.45-2.265.45-.528-.006-1.574-.157-2.252-.45a5.096 5.096 0 0 1-1.744-1.223c-.487-.527-.863-1.162-1.137-1.906a6.345 6.345 0 0 1-.41-2.33c0-.902.123-1.77.397-2.508a5.554 5.554 0 0 1 1.15-1.892 5.133 5.133 0 0 1 1.75-1.216c.679-.287 1.425-.423 2.232-.423.808 0 1.553.142 2.237.423.685.286 1.274.69 1.753 1.216a5.644 5.644 0 0 1 1.135 1.892c.287.738.431 1.606.431 2.508zm-20.138 0c0 1.12.246 2.363.738 2.882.493.52 1.13.78 1.91.78.424 0 .828-.062 1.204-.178.377-.116.677-.253.917-.417V9.33a10.476 10.476 0 0 0-1.766-.226c-.971-.028-1.71.37-2.23 1.004-.513.636-.773 1.75-.773 2.788zm7.438 5.274c0 1.824-.466 3.156-1.404 4.004-.936.846-2.367 1.27-4.296 1.27-.705 0-2.17-.137-3.34-.396l.431-2.118c.98.205 2.272.26 2.95.26 1.074 0 1.84-.219 2.299-.656.459-.437.684-1.086.684-1.948v-.437a8.07 8.07 0 0 1-1.047.397c-.43.13-.93.198-1.492.198-.739 0-1.41-.116-2.018-.349a4.206 4.206 0 0 1-1.567-1.025c-.431-.45-.774-1.017-1.013-1.694-.24-.677-.363-1.885-.363-2.773 0-.834.13-1.88.384-2.577.26-.696.629-1.298 1.129-1.796.493-.498 1.095-.881 1.8-1.162a6.605 6.605 0 0 1 2.428-.457c.87 0 1.67.109 2.45.24.78.129 1.444.265 1.985.415V18.17z' fill='%235468FF'/%3E%3Cpath d='M6.972 6.677v1.627c-.712-.446-1.52-.67-2.425-.67-.585 0-1.045.13-1.38.391a1.24 1.24 0 0 0-.502 1.03c0 .425.164.765.494 1.02.33.256.835.532 1.516.83.447.192.795.356 1.045.495.25.138.537.332.862.582.324.25.563.548.718.894.154.345.23.741.23 1.188 0 .947-.334 1.691-1.004 2.234-.67.542-1.537.814-2.601.814-1.18 0-2.16-.229-2.936-.686v-1.708c.84.628 1.814.942 2.92.942.585 0 1.048-.136 1.388-.407.34-.271.51-.646.51-1.125 0-.287-.1-.55-.302-.79-.203-.24-.42-.42-.655-.542-.234-.123-.585-.29-1.053-.503-.276-.127-.47-.218-.582-.271a13.67 13.67 0 0 1-.55-.287 4.275 4.275 0 0 1-.567-.351 6.92 6.92 0 0 1-.455-.4c-.18-.17-.31-.34-.39-.51-.08-.17-.155-.37-.224-.598a2.553 2.553 0 0 1-.104-.742c0-.915.333-1.638.998-2.17.664-.532 1.523-.798 2.576-.798.968 0 1.793.17 2.473.51zm7.468 5.696v-.287c-.022-.607-.187-1.088-.495-1.444-.309-.357-.75-.535-1.324-.535-.532 0-.99.194-1.373.583-.382.388-.622.949-.717 1.683h3.909zm1.005 2.792v1.404c-.596.34-1.383.51-2.362.51-1.255 0-2.255-.377-3-1.132-.744-.755-1.116-1.744-1.116-2.968 0-1.297.34-2.316 1.021-3.055.68-.74 1.548-1.11 2.6-1.11 1.033 0 1.852.323 2.458.966.606.644.91 1.572.91 2.784 0 .33-.033.676-.096 1.038h-5.314c.107.702.405 1.239.894 1.611.49.372 1.106.558 1.85.558.862 0 1.58-.202 2.155-.606zm6.605-1.77h-1.212c-.596 0-1.045.116-1.349.35-.303.234-.454.532-.454.894 0 .372.117.664.35.877.235.213.575.32 1.022.32.51 0 .912-.142 1.204-.424.293-.281.44-.651.44-1.108v-.91zm-4.068-2.554V9.325c.627-.361 1.457-.542 2.489-.542 2.116 0 3.175 1.026 3.175 3.08V17h-1.548v-.957c-.415.68-1.143 1.02-2.186 1.02-.766 0-1.38-.22-1.843-.661-.462-.442-.694-1.003-.694-1.684 0-.776.293-1.38.878-1.81.585-.431 1.404-.647 2.457-.647h1.34V11.8c0-.554-.133-.971-.399-1.253-.266-.282-.707-.423-1.324-.423a4.07 4.07 0 0 0-2.345.718zm9.333-1.93v1.42c.394-1 1.101-1.5 2.123-1.5.148 0 .313.016.494.048v1.531a1.885 1.885 0 0 0-.75-.143c-.542 0-.989.24-1.34.718-.351.479-.527 1.048-.527 1.707V17h-1.563V8.91h1.563zm5.01 4.084c.022.82.272 1.492.75 2.019.479.526 1.15.79 2.01.79.639 0 1.235-.176 1.788-.527v1.404c-.521.319-1.186.479-1.995.479-1.265 0-2.276-.4-3.031-1.197-.755-.798-1.133-1.792-1.133-2.984 0-1.16.38-2.151 1.14-2.975.761-.825 1.79-1.237 3.088-1.237.702 0 1.346.149 1.93.447v1.436a3.242 3.242 0 0 0-1.77-.495c-.84 0-1.513.266-2.019.798-.505.532-.758 1.213-.758 2.042zM40.24 5.72v4.579c.458-1 1.293-1.5 2.505-1.5.787 0 1.42.245 1.899.734.479.49.718 1.17.718 2.042V17h-1.564v-5.106c0-.553-.14-.98-.422-1.284-.282-.303-.652-.455-1.11-.455-.531 0-1.002.202-1.411.606-.41.405-.615 1.022-.615 1.851V17h-1.563V5.72h1.563zm14.966 10.02c.596 0 1.096-.253 1.5-.758.404-.506.606-1.157.606-1.955 0-.915-.202-1.62-.606-2.114-.404-.495-.92-.742-1.548-.742-.553 0-1.05.224-1.491.67-.442.447-.662 1.133-.662 2.058 0 .958.212 1.67.638 2.138.425.469.946.703 1.563.703zM53.004 5.72v4.42c.574-.894 1.388-1.341 2.44-1.341 1.022 0 1.857.383 2.506 1.149.649.766.973 1.781.973 3.047 0 1.138-.309 2.109-.925 2.912-.617.803-1.463 1.205-2.537 1.205-1.075 0-1.894-.447-2.457-1.34V17h-1.58V5.72h1.58zm9.908 11.104l-3.223-7.913h1.739l1.005 2.632 1.26 3.415c.096-.32.48-1.458 1.15-3.415l.909-2.632h1.66l-2.92 7.866c-.777 2.074-1.963 3.11-3.559 3.11a2.92 2.92 0 0 1-.734-.079v-1.34c.17.042.351.064.543.064 1.032 0 1.755-.57 2.17-1.708z' fill='%235D6494'/%3E%3Cpath d='M89.632 5.967v-.772a.978.978 0 0 0-.978-.977h-2.28a.978.978 0 0 0-.978.977v.793c0 .088.082.15.171.13a7.127 7.127 0 0 1 1.984-.28c.65 0 1.295.088 1.917.259.082.02.164-.04.164-.13m-6.248 1.01l-.39-.389a.977.977 0 0 0-1.382 0l-.465.465a.973.973 0 0 0 0 1.38l.383.383c.062.061.15.047.205-.014.226-.307.472-.601.746-.874.281-.28.568-.526.883-.751.068-.042.075-.137.02-.2m4.16 2.453v3.341c0 .096.104.165.192.117l2.97-1.537c.068-.034.089-.117.055-.184a3.695 3.695 0 0 0-3.08-1.866c-.068 0-.136.054-.136.13m0 8.048a4.489 4.489 0 0 1-4.49-4.482 4.488 4.488 0 0 1 4.49-4.482 4.488 4.488 0 0 1 4.489 4.482 4.484 4.484 0 0 1-4.49 4.482m0-10.85a6.363 6.363 0 1 0 0 12.729c3.518 0 6.372-2.85 6.372-6.368a6.358 6.358 0 0 0-6.371-6.36' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    overflow: hidden;
    text-indent: -9000px;
    padding: 0 !important;
    width: 100%;
    height: 100%;
    display: block;
  }

  /*# sourceMappingURL=data:application/json;base64,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LHcyUEFBdzJQO0VBQ3gyUCw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7Q0FDaEIiLCJmaWxlIjoiZG9jc2VhcmNoLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoYm94IC5hbGdvbGlhLWF1dG9jb21wbGV0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VhcmNoYm94X193cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWFyY2hib3hfX2lucHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNHMgZWFzZSwgYmFja2dyb3VuZCAwLjRzIGVhc2U7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNjY2NjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1yaWdodDogMjZweDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5zZWFyY2hib3hfX2lucHV0Ojotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLCAuc2VhcmNoYm94X19pbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiwgLnNlYXJjaGJveF9faW5wdXQ6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLCAuc2VhcmNoYm94X19pbnB1dDo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlYXJjaGJveF9faW5wdXQ6aG92ZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2IzYjNiMztcbn1cblxuLnNlYXJjaGJveF9faW5wdXQ6Zm9jdXMsIC5zZWFyY2hib3hfX2lucHV0OmFjdGl2ZSB7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjYWFhYWFhO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uc2VhcmNoYm94X19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYWFhYTtcbn1cblxuLnNlYXJjaGJveF9fc3VibWl0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxNnB4IDAgMCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY5LCAxNDIsIDIyNSwgMCk7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcmlnaHQ6IGluaGVyaXQ7XG4gIGxlZnQ6IDA7XG59XG5cbi5zZWFyY2hib3hfX3N1Ym1pdDo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IC00cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29udGVudDogJyc7XG59XG5cbi5zZWFyY2hib3hfX3N1Ym1pdDpob3ZlciwgLnNlYXJjaGJveF9fc3VibWl0OmFjdGl2ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlYXJjaGJveF9fc3VibWl0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLnNlYXJjaGJveF9fc3VibWl0IHN2ZyB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZpbGw6ICM2ZDdlOTY7XG59XG5cbi5zZWFyY2hib3hfX3Jlc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnNlYXJjaGJveF9fcmVzZXQuaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWFyY2hib3hfX3Jlc2V0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLnNlYXJjaGJveF9fcmVzZXQgc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNHB4O1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbn1cblxuLnNlYXJjaGJveF9faW5wdXQ6dmFsaWQgfiAuc2VhcmNoYm94X19yZXNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbmltYXRpb24tbmFtZTogc2J4LXJlc2V0LWluO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuMTVzO1xufVxuXG5Aa2V5ZnJhbWVzIHNieC1yZXNldC1pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMCUsIDAsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlLmFsZ29saWEtYXV0b2NvbXBsZXRlLXJpZ2h0IC5kcy1kcm9wZG93bi1tZW51IHtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbGVmdDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUuYWxnb2xpYS1hdXRvY29tcGxldGUtcmlnaHQgLmRzLWRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcbiAgcmlnaHQ6IDQ4cHg7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZS5hbGdvbGlhLWF1dG9jb21wbGV0ZS1sZWZ0IC5kcy1kcm9wZG93bi1tZW51IHtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICByaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUuYWxnb2xpYS1hdXRvY29tcGxldGUtbGVmdCAuZHMtZHJvcGRvd24tbWVudTpiZWZvcmUge1xuICBsZWZ0OiA0OHB4O1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLmRzLWRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDZweCAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICB6LWluZGV4OiA5OTk7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5kcy1kcm9wZG93bi1tZW51OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6ICcnO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiAxMDAwO1xuICB0b3A6IC03cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuZHMtZHJvcGRvd24tbWVudSAuZHMtc3VnZ2VzdGlvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5kcy1kcm9wZG93bi1tZW51IC5kcy1zdWdnZXN0aW9ucyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLmRzLWRyb3Bkb3duLW1lbnUgLmRzLXN1Z2dlc3Rpb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuZHMtZHJvcGRvd24tbWVudSAuZHMtc3VnZ2VzdGlvbi5kcy1jdXJzb3IgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24uc3VnZ2VzdGlvbi1sYXlvdXQtc2ltcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OSwgMTQyLCAyMjUsIDAuMDUpO1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLmRzLWRyb3Bkb3duLW1lbnUgLmRzLXN1Z2dlc3Rpb24uZHMtY3Vyc29yIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uOm5vdCguc3VnZ2VzdGlvbi1sYXlvdXQtc2ltcGxlKSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjksIDE0MiwgMjI1LCAwLjA1KTtcbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5kcy1kcm9wZG93bi1tZW51IFtjbGFzc149J2RzLWRhdGFzZXQtJ10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkOWQ5ZDk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDAgOHB4IDhweDtcbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5kcy1kcm9wZG93bi1tZW51ICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMjA2MGM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0taGlnaGxpZ2h0IHtcbiAgY29sb3I6ICMxNzRkOGM7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTQzLCAxODcsIDIzNywgMC4xKTtcbiAgcGFkZGluZzogMC4xZW0gMC4wNWVtO1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24tLWNhdGVnb3J5LWhlYWRlciAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tY2F0ZWdvcnktaGVhZGVyLWx2bDBcbi5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS1oaWdobGlnaHQsXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24tLWNhdGVnb3J5LWhlYWRlciAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tY2F0ZWdvcnktaGVhZGVyLWx2bDFcbi5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS1oaWdobGlnaHQge1xuICBwYWRkaW5nOiAwIDAgMXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAwIHJnYmEoNjksIDE0MiwgMjI1LCAwLjgpO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS10ZXh0IC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS1oaWdobGlnaHQge1xuICBwYWRkaW5nOiAwIDAgMXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAwIHJnYmEoNjksIDE0MiwgMjI1LCAwLjgpO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDcwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1LjMzMzMzcHggMCA1LjMzMzMzcHggMTAuNjY2NjdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24tLWNvbnRlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBsZWZ0OiAtMXB4O1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24tLWNhdGVnb3J5LWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcGFkZGluZzogNHB4IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzMzMzYzZDtcbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA4cHggMCAwIDA7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tc3ViY2F0ZWdvcnktY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNS4zMzMzM3B4IDEwLjY2NjY3cHg7XG4gIGNvbG9yOiAjYTRhN2FlO1xuICBmb250LXNpemU6IDAuOWVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tc3ViY2F0ZWdvcnktY29sdW1uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tc3ViY2F0ZWdvcnktaW5saW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgY29sb3I6ICMwMjA2MGM7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24tLXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY29sb3I6ICM2MzY3NmQ7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tbm8tcmVzdWx0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24tLW5vLXJlc3VsdHM6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbiBjb2RlIHtcbiAgcGFkZGluZzogMXB4IDVweDtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbiBjb2RlIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24uYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbl9fbWFpbiAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tY2F0ZWdvcnktaGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uX19zZWNvbmRhcnkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS1zdWJjYXRlZ29yeS1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbiAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tc3ViY2F0ZWdvcnktY29sdW1uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAjMDIwNjBjO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS1zdWJjYXRlZ29yeS1jb2x1bW46YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbiAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tc3ViY2F0ZWdvcnktY29sdW1uOmFmdGVyIHtcbiAgICBjb250ZW50OiAnfCc7XG4gIH1cbiAgLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbiAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tY29udGVudDpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5zdWdnZXN0aW9uLWxheW91dC1zaW1wbGUuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbiB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWVlO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5zdWdnZXN0aW9uLWxheW91dC1zaW1wbGUgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24tLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5zdWdnZXN0aW9uLWxheW91dC1zaW1wbGUgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24tLWNvbnRlbnQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuc3VnZ2VzdGlvbi1sYXlvdXQtc2ltcGxlIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS1jYXRlZ29yeS1oZWFkZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLnN1Z2dlc3Rpb24tbGF5b3V0LXNpbXBsZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tY2F0ZWdvcnktaGVhZGVyLWx2bDAge1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLnN1Z2dlc3Rpb24tbGF5b3V0LXNpbXBsZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tY2F0ZWdvcnktaGVhZGVyLWx2bDEge1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLnN1Z2dlc3Rpb24tbGF5b3V0LXNpbXBsZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tY2F0ZWdvcnktaGVhZGVyLWx2bDE6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDIwIDM4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMS40OSA0LjMxbDE0IDE2LjEyNi4wMDItMi42MjQtMTQgMTYuMDc0LTEuMzE0IDEuNTEgMy4wMTcgMi42MjYgMS4zMTMtMS41MDggMTQtMTYuMDc1IDEuMTQyLTEuMzEzLTEuMTQtMS4zMTMtMTQtMTYuMTI1TDMuMi4xOC4xOCAyLjhsMS4zMSAxLjUxelwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBmaWxsPVwiJTIzMUQzNjU3XCIgLz48L3N2Zz4nKTtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5zdWdnZXN0aW9uLWxheW91dC1zaW1wbGUgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24tLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFsZ29saWEtYXV0b2NvbXBsZXRlIC5zdWdnZXN0aW9uLWxheW91dC1zaW1wbGUgLmFsZ29saWEtZG9jc2VhcmNoLXN1Z2dlc3Rpb24tLWR1cGxpY2F0ZS1jb250ZW50LCAuYWxnb2xpYS1hdXRvY29tcGxldGUgLnN1Z2dlc3Rpb24tbGF5b3V0LXNpbXBsZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tc3ViY2F0ZWdvcnktaW5saW5lIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLnN1Z2dlc3Rpb24tbGF5b3V0LXNpbXBsZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNDU4ZWUxO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLnN1Z2dlc3Rpb24tbGF5b3V0LXNpbXBsZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcjJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDU4ZWUxO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuc3VnZ2VzdGlvbi1sYXlvdXQtc2ltcGxlIC5hbGdvbGlhLWRvY3NlYXJjaC1zdWdnZXN0aW9uLS10ZXh0IHtcbiAgbWFyZ2luOiA0cHggMCAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBwYWRkaW5nOiA1LjMzMzMzcHggOHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLnN1Z2dlc3Rpb24tbGF5b3V0LXNpbXBsZSAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0tdGV4dCAuYWxnb2xpYS1kb2NzZWFyY2gtc3VnZ2VzdGlvbi0taGlnaGxpZ2h0IHtcbiAgY29sb3I6ICMzZjQxNDU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYWxnb2xpYS1hdXRvY29tcGxldGUgLmFsZ29saWEtZG9jc2VhcmNoLWZvb3RlciB7XG4gIHdpZHRoOiAxMzRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiAyMDAwO1xuICBtYXJnaW4tdG9wOiAxMC42NjY2N3B4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMDtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbi5hbGdvbGlhLWF1dG9jb21wbGV0ZSAuYWxnb2xpYS1kb2NzZWFyY2gtZm9vdGVyLS1sb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTY4JyBoZWlnaHQ9JzI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDcGF0aCBkPSdNNzguOTg4LjkzOGgxNi41OTRhMi45NjggMi45NjggMCAwIDEgMi45NjYgMi45NjZWMjAuNWEyLjk2NyAyLjk2NyAwIDAgMS0yLjk2NiAyLjk2NEg3OC45ODhhMi45NjcgMi45NjcgMCAwIDEtMi45NjYtMi45NjRWMy44OTdBMi45NjEgMi45NjEgMCAwIDEgNzguOTg4LjkzOHptNDEuOTM3IDE3Ljg2NmMtNC4zODYuMDItNC4zODYtMy41NC00LjM4Ni00LjEwNmwtLjAwNy0xMy4zMzYgMi42NzUtLjQyNHYxMy4yNTRjMCAuMzIyIDAgMi4zNTggMS43MTggMi4zNjR2Mi4yNDh6bS0xMC44NDYtMi4xOGMuODIxIDAgMS40My0uMDQ3IDEuODU1LS4xMjl2LTIuNzE5YTYuMzM0IDYuMzM0IDAgMCAwLTEuNTc0LS4xOTljLS4yOTUgMC0uNTk2LjAyMS0uODk3LjA2OWEyLjY5OSAyLjY5OSAwIDAgMC0uODE0LjI0Yy0uMjQuMTE2LS40MzkuMjgtLjU4Mi40OTEtLjE1LjIxMi0uMjE5LjMzNS0uMjE5LjY1NiAwIC42MjguMjE5Ljk5MS42MTYgMS4yM3MuOTM4LjM2MiAxLjYxNS4zNjJ6bS0uMjMzLTkuN2MuODgzIDAgMS42MjkuMTA5IDIuMjMxLjMyOC42MDIuMjE4IDEuMDg4LjUyNSAxLjQ0NC45MTUuMzYzLjM5Ni42MDkuOTIyLjc2IDEuNDgzLjE1Ny41Ni4yMzIgMS4xNzUuMjMyIDEuODV2Ni44NzRjLS40MS4wODktMS4wMzQuMTktMS44NjguMzE0LS44MzQuMTIzLTEuNzcyLjE4NS0yLjgxMy4xODUtLjY5IDAtMS4zMjctLjA2OS0xLjg5NS0uMTk4YTQuMDAxIDQuMDAxIDAgMCAxLTEuNDcxLS42MzYgMy4wODUgMy4wODUgMCAwIDEtLjk1MS0xLjEzNGMtLjIyNi0uNDY1LS4zNDMtMS4xMi0uMzQzLTEuODAzIDAtLjY1Ni4xMy0xLjA3My4zODQtMS41MjUuMjYtLjQ1LjYwOC0uODE5IDEuMDQ3LTEuMTA2LjQ0NS0uMjg3Ljk1LS40OTIgMS41MzItLjYxNWE4LjggOC44IDAgMCAxIDEuODItLjE4NSA4LjQwNCA4LjQwNCAwIDAgMSAxLjk3Mi4yNHYtLjQzOGMwLS4zMDctLjAzNS0uNi0uMTEtLjg3NGExLjg4IDEuODggMCAwIDAtLjM4NC0uNzMgMS43ODQgMS43ODQgMCAwIDAtLjcyNC0uNDkzIDMuMTY0IDMuMTY0IDAgMCAwLTEuMTQzLS4yMDVjLS42MTYgMC0xLjE3Ny4wNzUtMS42OS4xNjRhNy43MzUgNy43MzUgMCAwIDAtMS4yNi4zMDdsLS4zMjEtMi4xOTJjLjMzNS0uMTE3LjgzNC0uMjMzIDEuNDc4LS4zNDlhMTAuOTggMTAuOTggMCAwIDEgMi4wNzMtLjE3OHptNTIuODQyIDkuNjI2Yy44MjIgMCAxLjQzLS4wNDggMS44NTQtLjEzVjEzLjdhNi4zNDcgNi4zNDcgMCAwIDAtMS41NzQtLjE5OWMtLjI5NCAwLS41OTUuMDIxLS44OTYuMDY5YTIuNyAyLjcgMCAwIDAtLjgxNC4yNCAxLjQ2IDEuNDYgMCAwIDAtLjU4Mi40OTFjLS4xNS4yMTItLjIxOC4zMzUtLjIxOC42NTYgMCAuNjI4LjIxOC45OTEuNjE1IDEuMjMuNDA0LjI0NS45MzguMzYyIDEuNjE1LjM2MnptLS4yMjYtOS42OTRjLjg4MyAwIDEuNjI5LjEwOCAyLjIzMS4zMjcuNjAyLjIxOSAxLjA4OC41MjYgMS40NDQuOTE1LjM1NS4zOS42MDkuOTIzLjc1OSAxLjQ4My4xNTguNTYuMjMzIDEuMTc1LjIzMyAxLjg1MnY2Ljg3M2MtLjQxLjA4OC0xLjAzNC4xOS0xLjg2OC4zMTQtLjgzNC4xMjMtMS43NzIuMTg0LTIuODEzLjE4NC0uNjkgMC0xLjMyNy0uMDY4LTEuODk1LS4xOThhNC4wMDEgNC4wMDEgMCAwIDEtMS40NzEtLjYzNSAzLjA4NSAzLjA4NSAwIDAgMS0uOTUxLTEuMTM0Yy0uMjI2LS40NjUtLjM0My0xLjEyLS4zNDMtMS44MDQgMC0uNjU2LjEzLTEuMDczLjM4NC0xLjUyNC4yNi0uNDUuNjA4LS44MiAxLjA0Ny0xLjEwNy40NDUtLjI4Ni45NS0uNDkxIDEuNTMyLS42MTRhOC44MDMgOC44MDMgMCAwIDEgMi43NTEtLjEzYy4zMjkuMDM0LjY3MS4wOTYgMS4wNC4xODV2LS40MzdhMy4zIDMuMyAwIDAgMC0uMTA5LS44NzUgMS44NzMgMS44NzMgMCAwIDAtLjM4NC0uNzMxIDEuNzg0IDEuNzg0IDAgMCAwLS43MjQtLjQ5MiAzLjE2NSAzLjE2NSAwIDAgMC0xLjE0My0uMjA1Yy0uNjE2IDAtMS4xNzcuMDc1LTEuNjkuMTY0LS41MTQuMDg5LS45MzguMTkxLTEuMjYuMzA3bC0uMzIxLTIuMTkzYy4zMzUtLjExNi44MzQtLjIzMiAxLjQ3OC0uMzQ4YTExLjYzMyAxMS42MzMgMCAwIDEgMi4wNzMtLjE3N3ptLTguMDM0LTEuMjcxYTEuNjI2IDEuNjI2IDAgMCAxLTEuNjI4LTEuNjJjMC0uODk1LjcyNS0xLjYyIDEuNjI4LTEuNjIuOTA0IDAgMS42My43MjUgMS42MyAxLjYyIDAgLjg5NS0uNzMzIDEuNjItMS42MyAxLjYyem0xLjM0OCAxMy4yMmgtMi42ODlWNy4yN2wyLjY5LS40MjN2MTEuOTU2em0tNC43MTQgMGMtNC4zODYuMDItNC4zODYtMy41NC00LjM4Ni00LjEwN2wtLjAwOC0xMy4zMzYgMi42NzYtLjQyNHYxMy4yNTRjMCAuMzIyIDAgMi4zNTggMS43MTggMi4zNjR2Mi4yNDh6bS04LjY5OC01LjkwM2MwLTEuMTU2LS4yNTMtMi4xMTktLjc0Ni0yLjc4OC0uNDkzLS42NzctMS4xODMtMS4wMS0yLjA2Ny0xLjAxLS44ODIgMC0xLjU3NC4zMzMtMi4wNjUgMS4wMS0uNDkzLjY3Ni0uNzMzIDEuNjMyLS43MzMgMi43ODggMCAxLjE2OC4yNDYgMS45NTMuNzQgMi42My40OTIuNjgzIDEuMTgzIDEuMDE4IDIuMDY2IDEuMDE4Ljg4MiAwIDEuNTc0LS4zNDIgMi4wNjctMS4wMTkuNDkyLS42ODMuNzM4LTEuNDYuNzM4LTIuNjN6bTIuNzM3LS4wMDdjMCAuOTAyLS4xMyAxLjU4NC0uMzk3IDIuMzNhNS41MiA1LjUyIDAgMCAxLTEuMTI4IDEuOTA2IDQuOTg2IDQuOTg2IDAgMCAxLTEuNzUyIDEuMjIzYy0uNjg1LjI4Ni0xLjczOS40NS0yLjI2NS40NS0uNTI4LS4wMDYtMS41NzQtLjE1Ny0yLjI1Mi0uNDVhNS4wOTYgNS4wOTYgMCAwIDEtMS43NDQtMS4yMjNjLS40ODctLjUyNy0uODYzLTEuMTYyLTEuMTM3LTEuOTA2YTYuMzQ1IDYuMzQ1IDAgMCAxLS40MS0yLjMzYzAtLjkwMi4xMjMtMS43Ny4zOTctMi41MDhhNS41NTQgNS41NTQgMCAwIDEgMS4xNS0xLjg5MiA1LjEzMyA1LjEzMyAwIDAgMSAxLjc1LTEuMjE2Yy42NzktLjI4NyAxLjQyNS0uNDIzIDIuMjMyLS40MjMuODA4IDAgMS41NTMuMTQyIDIuMjM3LjQyMy42ODUuMjg2IDEuMjc0LjY5IDEuNzUzIDEuMjE2YTUuNjQ0IDUuNjQ0IDAgMCAxIDEuMTM1IDEuODkyYy4yODcuNzM4LjQzMSAxLjYwNi40MzEgMi41MDh6bS0yMC4xMzggMGMwIDEuMTIuMjQ2IDIuMzYzLjczOCAyLjg4Mi40OTMuNTIgMS4xMy43OCAxLjkxLjc4LjQyNCAwIC44MjgtLjA2MiAxLjIwNC0uMTc4LjM3Ny0uMTE2LjY3Ny0uMjUzLjkxNy0uNDE3VjkuMzNhMTAuNDc2IDEwLjQ3NiAwIDAgMC0xLjc2Ni0uMjI2Yy0uOTcxLS4wMjgtMS43MS4zNy0yLjIzIDEuMDA0LS41MTMuNjM2LS43NzMgMS43NS0uNzczIDIuNzg4em03LjQzOCA1LjI3NGMwIDEuODI0LS40NjYgMy4xNTYtMS40MDQgNC4wMDQtLjkzNi44NDYtMi4zNjcgMS4yNy00LjI5NiAxLjI3LS43MDUgMC0yLjE3LS4xMzctMy4zNC0uMzk2bC40MzEtMi4xMThjLjk4LjIwNSAyLjI3Mi4yNiAyLjk1LjI2IDEuMDc0IDAgMS44NC0uMjE5IDIuMjk5LS42NTYuNDU5LS40MzcuNjg0LTEuMDg2LjY4NC0xLjk0OHYtLjQzN2E4LjA3IDguMDcgMCAwIDEtMS4wNDcuMzk3Yy0uNDMuMTMtLjkzLjE5OC0xLjQ5Mi4xOTgtLjczOSAwLTEuNDEtLjExNi0yLjAxOC0uMzQ5YTQuMjA2IDQuMjA2IDAgMCAxLTEuNTY3LTEuMDI1Yy0uNDMxLS40NS0uNzc0LTEuMDE3LTEuMDEzLTEuNjk0LS4yNC0uNjc3LS4zNjMtMS44ODUtLjM2My0yLjc3MyAwLS44MzQuMTMtMS44OC4zODQtMi41NzcuMjYtLjY5Ni42MjktMS4yOTggMS4xMjktMS43OTYuNDkzLS40OTggMS4wOTUtLjg4MSAxLjgtMS4xNjJhNi42MDUgNi42MDUgMCAwIDEgMi40MjgtLjQ1N2MuODcgMCAxLjY3LjEwOSAyLjQ1LjI0Ljc4LjEyOSAxLjQ0NC4yNjUgMS45ODUuNDE1VjE4LjE3eicgZmlsbD0nJTIzNTQ2OEZGJy8lM0UlM0NwYXRoIGQ9J002Ljk3MiA2LjY3N3YxLjYyN2MtLjcxMi0uNDQ2LTEuNTItLjY3LTIuNDI1LS42Ny0uNTg1IDAtMS4wNDUuMTMtMS4zOC4zOTFhMS4yNCAxLjI0IDAgMCAwLS41MDIgMS4wM2MwIC40MjUuMTY0Ljc2NS40OTQgMS4wMi4zMy4yNTYuODM1LjUzMiAxLjUxNi44My40NDcuMTkyLjc5NS4zNTYgMS4wNDUuNDk1LjI1LjEzOC41MzcuMzMyLjg2Mi41ODIuMzI0LjI1LjU2My41NDguNzE4Ljg5NC4xNTQuMzQ1LjIzLjc0MS4yMyAxLjE4OCAwIC45NDctLjMzNCAxLjY5MS0xLjAwNCAyLjIzNC0uNjcuNTQyLTEuNTM3LjgxNC0yLjYwMS44MTQtMS4xOCAwLTIuMTYtLjIyOS0yLjkzNi0uNjg2di0xLjcwOGMuODQuNjI4IDEuODE0Ljk0MiAyLjkyLjk0Mi41ODUgMCAxLjA0OC0uMTM2IDEuMzg4LS40MDcuMzQtLjI3MS41MS0uNjQ2LjUxLTEuMTI1IDAtLjI4Ny0uMS0uNTUtLjMwMi0uNzktLjIwMy0uMjQtLjQyLS40Mi0uNjU1LS41NDItLjIzNC0uMTIzLS41ODUtLjI5LTEuMDUzLS41MDMtLjI3Ni0uMTI3LS40Ny0uMjE4LS41ODItLjI3MWExMy42NyAxMy42NyAwIDAgMS0uNTUtLjI4NyA0LjI3NSA0LjI3NSAwIDAgMS0uNTY3LS4zNTEgNi45MiA2LjkyIDAgMCAxLS40NTUtLjRjLS4xOC0uMTctLjMxLS4zNC0uMzktLjUxLS4wOC0uMTctLjE1NS0uMzctLjIyNC0uNTk4YTIuNTUzIDIuNTUzIDAgMCAxLS4xMDQtLjc0MmMwLS45MTUuMzMzLTEuNjM4Ljk5OC0yLjE3LjY2NC0uNTMyIDEuNTIzLS43OTggMi41NzYtLjc5OC45NjggMCAxLjc5My4xNyAyLjQ3My41MXptNy40NjggNS42OTZ2LS4yODdjLS4wMjItLjYwNy0uMTg3LTEuMDg4LS40OTUtMS40NDQtLjMwOS0uMzU3LS43NS0uNTM1LTEuMzI0LS41MzUtLjUzMiAwLS45OS4xOTQtMS4zNzMuNTgzLS4zODIuMzg4LS42MjIuOTQ5LS43MTcgMS42ODNoMy45MDl6bTEuMDA1IDIuNzkydjEuNDA0Yy0uNTk2LjM0LTEuMzgzLjUxLTIuMzYyLjUxLTEuMjU1IDAtMi4yNTUtLjM3Ny0zLTEuMTMyLS43NDQtLjc1NS0xLjExNi0xLjc0NC0xLjExNi0yLjk2OCAwLTEuMjk3LjM0LTIuMzE2IDEuMDIxLTMuMDU1LjY4LS43NCAxLjU0OC0xLjExIDIuNi0xLjExIDEuMDMzIDAgMS44NTIuMzIzIDIuNDU4Ljk2Ni42MDYuNjQ0LjkxIDEuNTcyLjkxIDIuNzg0IDAgLjMzLS4wMzMuNjc2LS4wOTYgMS4wMzhoLTUuMzE0Yy4xMDcuNzAyLjQwNSAxLjIzOS44OTQgMS42MTEuNDkuMzcyIDEuMTA2LjU1OCAxLjg1LjU1OC44NjIgMCAxLjU4LS4yMDIgMi4xNTUtLjYwNnptNi42MDUtMS43N2gtMS4yMTJjLS41OTYgMC0xLjA0NS4xMTYtMS4zNDkuMzUtLjMwMy4yMzQtLjQ1NC41MzItLjQ1NC44OTQgMCAuMzcyLjExNy42NjQuMzUuODc3LjIzNS4yMTMuNTc1LjMyIDEuMDIyLjMyLjUxIDAgLjkxMi0uMTQyIDEuMjA0LS40MjQuMjkzLS4yODEuNDQtLjY1MS40NC0xLjEwOHYtLjkxem0tNC4wNjgtMi41NTRWOS4zMjVjLjYyNy0uMzYxIDEuNDU3LS41NDIgMi40ODktLjU0MiAyLjExNiAwIDMuMTc1IDEuMDI2IDMuMTc1IDMuMDhWMTdoLTEuNTQ4di0uOTU3Yy0uNDE1LjY4LTEuMTQzIDEuMDItMi4xODYgMS4wMi0uNzY2IDAtMS4zOC0uMjItMS44NDMtLjY2MS0uNDYyLS40NDItLjY5NC0xLjAwMy0uNjk0LTEuNjg0IDAtLjc3Ni4yOTMtMS4zOC44NzgtMS44MS41ODUtLjQzMSAxLjQwNC0uNjQ3IDIuNDU3LS42NDdoMS4zNFYxMS44YzAtLjU1NC0uMTMzLS45NzEtLjM5OS0xLjI1My0uMjY2LS4yODItLjcwNy0uNDIzLTEuMzI0LS40MjNhNC4wNyA0LjA3IDAgMCAwLTIuMzQ1LjcxOHptOS4zMzMtMS45M3YxLjQyYy4zOTQtMSAxLjEwMS0xLjUgMi4xMjMtMS41LjE0OCAwIC4zMTMuMDE2LjQ5NC4wNDh2MS41MzFhMS44ODUgMS44ODUgMCAwIDAtLjc1LS4xNDNjLS41NDIgMC0uOTg5LjI0LTEuMzQuNzE4LS4zNTEuNDc5LS41MjcgMS4wNDgtLjUyNyAxLjcwN1YxN2gtMS41NjNWOC45MWgxLjU2M3ptNS4wMSA0LjA4NGMuMDIyLjgyLjI3MiAxLjQ5Mi43NSAyLjAxOS40NzkuNTI2IDEuMTUuNzkgMi4wMS43OS42MzkgMCAxLjIzNS0uMTc2IDEuNzg4LS41Mjd2MS40MDRjLS41MjEuMzE5LTEuMTg2LjQ3OS0xLjk5NS40NzktMS4yNjUgMC0yLjI3Ni0uNC0zLjAzMS0xLjE5Ny0uNzU1LS43OTgtMS4xMzMtMS43OTItMS4xMzMtMi45ODQgMC0xLjE2LjM4LTIuMTUxIDEuMTQtMi45NzUuNzYxLS44MjUgMS43OS0xLjIzNyAzLjA4OC0xLjIzNy43MDIgMCAxLjM0Ni4xNDkgMS45My40NDd2MS40MzZhMy4yNDIgMy4yNDIgMCAwIDAtMS43Ny0uNDk1Yy0uODQgMC0xLjUxMy4yNjYtMi4wMTkuNzk4LS41MDUuNTMyLS43NTggMS4yMTMtLjc1OCAyLjA0MnpNNDAuMjQgNS43MnY0LjU3OWMuNDU4LTEgMS4yOTMtMS41IDIuNTA1LTEuNS43ODcgMCAxLjQyLjI0NSAxLjg5OS43MzQuNDc5LjQ5LjcxOCAxLjE3LjcxOCAyLjA0MlYxN2gtMS41NjR2LTUuMTA2YzAtLjU1My0uMTQtLjk4LS40MjItMS4yODQtLjI4Mi0uMzAzLS42NTItLjQ1NS0xLjExLS40NTUtLjUzMSAwLTEuMDAyLjIwMi0xLjQxMS42MDYtLjQxLjQwNS0uNjE1IDEuMDIyLS42MTUgMS44NTFWMTdoLTEuNTYzVjUuNzJoMS41NjN6bTE0Ljk2NiAxMC4wMmMuNTk2IDAgMS4wOTYtLjI1MyAxLjUtLjc1OC40MDQtLjUwNi42MDYtMS4xNTcuNjA2LTEuOTU1IDAtLjkxNS0uMjAyLTEuNjItLjYwNi0yLjExNC0uNDA0LS40OTUtLjkyLS43NDItMS41NDgtLjc0Mi0uNTUzIDAtMS4wNS4yMjQtMS40OTEuNjctLjQ0Mi40NDctLjY2MiAxLjEzMy0uNjYyIDIuMDU4IDAgLjk1OC4yMTIgMS42Ny42MzggMi4xMzguNDI1LjQ2OS45NDYuNzAzIDEuNTYzLjcwM3pNNTMuMDA0IDUuNzJ2NC40MmMuNTc0LS44OTQgMS4zODgtMS4zNDEgMi40NC0xLjM0MSAxLjAyMiAwIDEuODU3LjM4MyAyLjUwNiAxLjE0OS42NDkuNzY2Ljk3MyAxLjc4MS45NzMgMy4wNDcgMCAxLjEzOC0uMzA5IDIuMTA5LS45MjUgMi45MTItLjYxNy44MDMtMS40NjMgMS4yMDUtMi41MzcgMS4yMDUtMS4wNzUgMC0xLjg5NC0uNDQ3LTIuNDU3LTEuMzRWMTdoLTEuNThWNS43MmgxLjU4em05LjkwOCAxMS4xMDRsLTMuMjIzLTcuOTEzaDEuNzM5bDEuMDA1IDIuNjMyIDEuMjYgMy40MTVjLjA5Ni0uMzIuNDgtMS40NTggMS4xNS0zLjQxNWwuOTA5LTIuNjMyaDEuNjZsLTIuOTIgNy44NjZjLS43NzcgMi4wNzQtMS45NjMgMy4xMS0zLjU1OSAzLjExYTIuOTIgMi45MiAwIDAgMS0uNzM0LS4wNzl2LTEuMzRjLjE3LjA0Mi4zNTEuMDY0LjU0My4wNjQgMS4wMzIgMCAxLjc1NS0uNTcgMi4xNy0xLjcwOHonIGZpbGw9JyUyMzVENjQ5NCcvJTNFJTNDcGF0aCBkPSdNODkuNjMyIDUuOTY3di0uNzcyYS45NzguOTc4IDAgMCAwLS45NzgtLjk3N2gtMi4yOGEuOTc4Ljk3OCAwIDAgMC0uOTc4Ljk3N3YuNzkzYzAgLjA4OC4wODIuMTUuMTcxLjEzYTcuMTI3IDcuMTI3IDAgMCAxIDEuOTg0LS4yOGMuNjUgMCAxLjI5NS4wODggMS45MTcuMjU5LjA4Mi4wMi4xNjQtLjA0LjE2NC0uMTNtLTYuMjQ4IDEuMDFsLS4zOS0uMzg5YS45NzcuOTc3IDAgMCAwLTEuMzgyIDBsLS40NjUuNDY1YS45NzMuOTczIDAgMCAwIDAgMS4zOGwuMzgzLjM4M2MuMDYyLjA2MS4xNS4wNDcuMjA1LS4wMTQuMjI2LS4zMDcuNDcyLS42MDEuNzQ2LS44NzQuMjgxLS4yOC41NjgtLjUyNi44ODMtLjc1MS4wNjgtLjA0Mi4wNzUtLjEzNy4wMi0uMm00LjE2IDIuNDUzdjMuMzQxYzAgLjA5Ni4xMDQuMTY1LjE5Mi4xMTdsMi45Ny0xLjUzN2MuMDY4LS4wMzQuMDg5LS4xMTcuMDU1LS4xODRhMy42OTUgMy42OTUgMCAwIDAtMy4wOC0xLjg2NmMtLjA2OCAwLS4xMzYuMDU0LS4xMzYuMTNtMCA4LjA0OGE0LjQ4OSA0LjQ4OSAwIDAgMS00LjQ5LTQuNDgyIDQuNDg4IDQuNDg4IDAgMCAxIDQuNDktNC40ODIgNC40ODggNC40ODggMCAwIDEgNC40ODkgNC40ODIgNC40ODQgNC40ODQgMCAwIDEtNC40OSA0LjQ4Mm0wLTEwLjg1YTYuMzYzIDYuMzYzIDAgMSAwIDAgMTIuNzI5YzMuNTE4IDAgNi4zNzItMi44NSA2LjM3Mi02LjM2OGE2LjM1OCA2LjM1OCAwIDAgMC02LjM3MS02LjM2JyBmaWxsPSclMjNGRkYnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtaW5kZW50OiAtOTAwMHB4O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */
`
