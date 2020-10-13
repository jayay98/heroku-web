function lesson1() {
    const canvas = <any>document.getElementById("glCanvas");
    const gl = <WebGLRenderingContext>canvas.getContext('webgl');

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    gl.clearColor(0.0, 0.0, .0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = lesson1;