import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="MyComponent" style={{ margin: 32 }}>
      <h1>Welcome</h1>
      <h2>To reproduce the error:</h2>
      <ol>
        <li>{'Click the "About (dynamic)" link'}</li>
        <li>
          {'Click the "Sample (dynamic)" link'}
          <ul>
            <li>
              This will lead to the following error:
              <br />
              <Image
                src="/screenshots/two-instances-error.png"
                alt="Error"
                width={800}
                height={400}
              />
            </li>
          </ul>
        </li>
      </ol>
      <p>
        You can also click the two pages in reverse order to see the same issue.
      </p>
    </div>
  );
}
