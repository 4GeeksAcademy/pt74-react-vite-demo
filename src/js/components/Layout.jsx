const Container = ({ breakpoint = null, children }) => {
  return (
    <div className={breakpoint ? `container-${breakpoint}` : "container"}>
      {children}
    </div>
  );
};

const Row = ({ gx = null, gy = null, children }) => {
  return (
    <div className={`row${gx ? ` gx-${gx}` : ""}${gy ? ` gx-${gy}` : ""}`}>
      {children}
    </div>
  );
};

/**
 * Col supports Bootstrap column width and offset.
 *
 * Width and offset expect objects with keys that match
 * the Bootstrap breakpoints, and the value of the
 * width or offset as the value.
 */
const Col = ({ children, width = {}, offset = {} }) => {
  const colClassNames = () => {
    let classNames = "col";

    for (const breakpoint in width) {
      if (breakpoint === "col") {
        classNames += ` col-${width[breakpoint]}`;
      } else {
        classNames += ` col-${breakpoint}-${width[breakpoint]}`;
      }
    }

    for (const breakpoint in offset) {
      if (breakpoint === "offset") {
        classNames += ` offset-${offset[breakpoint]}`;
      } else {
        classNames += ` offset-${breakpoint}-${offset[breakpoint]}`;
      }
    }

    return classNames;
  };

  return <div className={colClassNames()}>{children}</div>;
};

export { Container, Row, Col };
