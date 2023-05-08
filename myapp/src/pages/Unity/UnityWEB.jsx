import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityWEB = () => {
  const [show, setShow] = useState(false);
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "../../../public/Build/build.loader.js",
    dataUrl: "../../../public/Build/webgl.data",
    frameworkUrl: "../../../public/Build/build.framework.js",
    codeUrl: "../../../public/Build/build.wasm",
  });

  return (
    <div className="App">
      {show ? (
        <div>
          {!isLoaded && (
            <p>
              Loading Application... {Math.round(loadingProgression * 100)}%
            </p>
          )}

          <Unity
            unityProvider={unityProvider}
            style={{
              visibility: isLoaded ? "visible" : "hidden",
              width: "100%",
              height: "100%",
            }}
          />
          <button onClick={() => setShow(false)}>dontshow</button>
        </div>
      ) : (
        <button onClick={() => setShow(true)}>show</button>
      )}
    </div>
  );
};

export default UnityWEB;
