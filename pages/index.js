import { useEffect, useRef } from 'react';

export default function HomePage() {
  const viewer = useRef(null);
  const beenInitialized = useRef(false);

  useEffect(() => {
    const loadWebViewer = async () => {
      if (!beenInitialized.current) {
        try {
          beenInitialized.current = true;
          const WebViewer = (await import('@pdftron/webviewer')).default;
          const instance = await WebViewer(
            {
              path: '/webviewer/lib',
              initialDoc: '/files/PDFTRON_about.pdf',
              licenseKey: 'your_license_key'
            },
            viewer.current
          );

          const { docViewer } = instance;
          // you can now call WebViewer APIs here...
        } catch (error) {
          console.error("Error loading WebViewer", error);
        }
      }
    };

    loadWebViewer();
  }, [beenInitialized]);

  return (
    <div className='MyComponent'>
      <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );
}
