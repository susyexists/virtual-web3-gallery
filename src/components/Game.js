import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "../styles/Game.css";

export const Game = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/game/Gallery-WebGL.loader.js",
    dataUrl: "/game/Gallery-WebGL.data.unityweb",
    frameworkUrl: "/game/Gallery-WebGL.framework.js.unityweb",
    codeUrl: "/game/Gallery-WebGL.wasm.unityweb",
  });
  return (
    <div className="GameContainer">
      <Unity className="Game" unityProvider={unityProvider} />;
    </div>
  );
};
