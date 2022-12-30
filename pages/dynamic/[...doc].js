import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  const doc = router.query.doc;

  const viewer = useRef(null);

  useEffect(() => {
    if (!doc) return;

    import("@pdftron/webviewer").then(() => {
      WebViewer(
        {
          path: "/webviewer/lib",
          initialDoc: `/files/${doc}.pdf`,
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, [doc]);

  return (
    <div className="MyComponent">
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
}
