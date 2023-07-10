import React, { cloneElement, FC, ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { create } from 'jss';
import { withStyles, jssPreset, StylesProvider } from '@material-ui/core';
import FrameProps from './Frame.props';
import FrameStyles from './Frame.styles';

const Frame: FC<FrameProps> = ({ classes, children }) => {
  const ref = useRef<HTMLIFrameElement | null>(null);
  const [document, setDocument] = useState<Document>();

  useEffect(() => {
    if (ref.current?.contentDocument) {
      setDocument(ref.current?.contentDocument);
    }
  }, []);

  const { jss, sheetsManager } = useMemo(() => {
    if (document) {
      const link = document.createElement('link');

      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';

      document.head.appendChild(link);
      document.body.classList.add('rds-scrollbar');
    }

    return {
      jss: create({
        plugins: [...jssPreset().plugins],
        insertionPoint: document && document.head
      }),
      sheetsManager: new Map()
    };
  }, [document]);

  const Framed = () => {
    return (
      <StylesProvider jss={jss} sheetsManager={sheetsManager}>
        {cloneElement(children as ReactElement, {
          document
        })}
      </StylesProvider>
    );
  };

  return (
    <iframe className={classes.root} ref={ref}>
      {document && createPortal(<Framed />, document.body)}
    </iframe>
  );
};

export default withStyles(FrameStyles, { name: 'Frame' })(Frame);
