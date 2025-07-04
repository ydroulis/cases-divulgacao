import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as iconSet from "@fortawesome/free-solid-svg-icons";

import { theme } from './theme';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderCSSValue(cssPropName, cssPropValue) {
  if (cssPropName.includes('horizontal')) {
    return `
      ${cssPropName.replace('horizontal', 'left')}: ${cssPropValue};
      ${cssPropName.replace('horizontal', 'right')}: ${cssPropValue};
    `;
  }
  if (cssPropName.includes('vertical')) {
    return `
      ${cssPropName.replace('vertical', 'top')}: ${cssPropValue};
      ${cssPropName.replace('vertical', 'bottom')}: ${cssPropValue};
    `;
  }

  return cssPropName + ':' + cssPropValue + ';';
}

function renderCSS(props, currentBreakpoint) {
  if (!props) return '';

  return Object
    .keys(props)
    .map((prop) => {
      const cssPropName = prop.split(/(?=[A-Z])/).join('-').toLowerCase();
      const cssPropValue = props[prop];
      const isCssPropValueAnObject = Object.prototype.toString.call(cssPropValue) === '[object Object]';
      const currentCssPropValue = cssPropValue[currentBreakpoint];

      if (currentBreakpoint === 'xs' && !isCssPropValueAnObject) {
        return renderCSSValue(cssPropName, cssPropValue);
      }

      if (currentCssPropValue) {
        return renderCSSValue(cssPropName, currentCssPropValue);
      }

      return '';
    })
    .filter(Boolean)
    .join('');
}

export function Box({
  as,
  stylesheet = {},
  ...props
}) {
  const { focus, hover, srOnly, ...restStylesheet } = stylesheet;
  const Tag = as || 'div';

  return (
    <React.Fragment>
      <Tag {...props} className={`${props.className ? props.className : ''} ${srOnly ? 'sr-only' : ''}`} />
      <style jsx>{`
        ${Tag} {
          ${renderCSS(restStylesheet, 'xs')};
        }
        ${Tag}:hover {
          ${renderCSS(hover, 'xs')};
        }
        ${Tag}:focus {
          ${renderCSS(focus, 'xs')};
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.sm']}px) {
          ${Tag} {
            ${renderCSS(restStylesheet, 'sm')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'sm')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'sm')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.md']}px) {
          ${Tag} {
            ${renderCSS(restStylesheet, 'md')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'md')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'md')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.lg']}px) {
          ${Tag} {
            ${renderCSS(restStylesheet, 'lg')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'lg')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'lg')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.xl']}px) {
          ${Tag} {
            ${renderCSS(restStylesheet, 'xl')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'xl')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'xl')};
          }
        }
      `}</style>
    </React.Fragment>
  );
}

Box.defaultProps = {
  stylesheet: {},
};

export function Icon({ as, stylesheet, ...props }) {
  const {
    iconVariant,
    ...restStylesheet
  } = stylesheet;
  const styleSheetUpdated = restStylesheet;

  return (
    <Box
      as={FontAwesomeIcon}
      icon={iconSet[`fa${capitalize(iconVariant)}`]}
      crossOrigin="anonymous"
      stylesheet={{
        width: '1.5ch',
        height: '1.5ch',
        ...styleSheetUpdated
      }}
      {...props}
    />
  );
}

export function Text({ as, stylesheet = {}, ...props }) {
  const {
    textVariant = {
      fontSize: 'inherit',
    },
    ...restStylesheet
  } = stylesheet;
  const styleSheetUpdated = { ...textVariant, ...restStylesheet };
  const tag = as || 'span';
  return (
    <Box
      as={tag}
      stylesheet={styleSheetUpdated}
      {...props}
    />
  );
}

Text.defaultProps = {
  stylesheet: {},
};

export function Image({ as, ...props }) {
  const tag = as || 'img';
  const {
    children,
    dangerouslySetInnerHTML,
    ...imageProps
  } = props;

  return (
    <Box as={tag} {...imageProps} />
  );
}

Image.defaultProps = {
  stylesheet: {},
};

export function Input({ as, stylesheet = {}, ...props }) {
  const tag = 'input';
  const finalStylesheet = {
    transition: 'all 0.2s ease-in-out',
    outline: 0,
    textVariant: theme.typography.variants.body2,
    color: theme.colors.neutral[900],
    boxShadow: `0 5px 7px -5px ${theme.colors.neutral[999]}43`,
    display: 'block',
    width: theme.space["x1/1"],
    border: `1px solid ${theme.colors.neutral[300]}`,
    borderRadius: theme.space.x2,
    paddingHorizontal: theme.space.x5,
    paddingVertical: theme.space.x3,
    focus: {
      border: `1px solid ${theme.colors.primary[500]}`,
      boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}43`,
    },
    ...stylesheet,
  };

  return (
    <Text as={tag} stylesheet={finalStylesheet} {...props} />
  );
}

Input.defaultProps = {
  stylesheet: {},
};

export function Button({ as, stylesheet = {}, ...props }) {
  const {
    buttonVariant = 'primary',
    ...restStylesheet
  } = stylesheet;
  const tag = 'button';

  const finalStylesheet = {
    cursor: 'pointer',
    textVariant: theme.typography.variants.body2,
    color: theme.colors.neutral["000"],
    boxShadow: `0 5px 7px -5px ${theme.colors.neutral["999"]}43`,
    display: 'block',
    outline: 0,
    width: theme.space["x1/1"],
    border: `${theme.space.xpx} solid ${theme.colors[buttonVariant][900]}`,
    borderRadius: theme.space.x2,
    paddingHorizontal: {
      xs: theme.space.x5,
      sm: theme.space.x10
    },
    paddingVertical: theme.space.x3,
    transition: 'all 0.2s ease-in-out',
    backgroundColor: theme.colors[buttonVariant][600],
    hover: {
      backgroundColor: theme.colors[buttonVariant][500],
      boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}73`,
    },
    focus: {
      backgroundColor: theme.colors[buttonVariant][700],
      boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}93`,
    },
    ...restStylesheet,
  };

  return (
    <Text as={tag} stylesheet={finalStylesheet} {...props} />
  );
}

Button.defaultProps = {
  stylesheet: {},
};
