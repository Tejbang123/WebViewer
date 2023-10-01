import React, {useEffect, useRef} from 'react';
import WebViewer from '@pdftron/webviewer'

const MyComponent = ({onPropPass}) => {
  const viewer = useRef(null);

  const onLoadFun = () => {
    WebViewer(
        {
          path: 'public/webviewer/lib',
          licenseKey: 'YOUR_LICENSE_KEY',
          initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
        },
        viewer.current,
      ).then((instance) => {
          const { documentViewer } = instance.Core;
          // you can now call WebViewer APIs here...
        });
  }
  console.log("onPropPass :",onPropPass);
  return (
    <div className="MyComponent">
      <div className="header" onClick={() => {onLoadFun()}}>React sample</div>
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
    </div>
  );
};

export default MyComponent