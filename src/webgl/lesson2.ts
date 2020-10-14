/* eslint-disable no-mixed-operators */
/* eslint-disable no-bitwise */
/* eslint-disable no-alert */
import { mat4 } from 'gl-matrix';

type Locations<T extends string> = Record<T, number>
type ProgramInfo = {
    program: WebGLProgram,
    attribLocations: Locations<'vertexPosition'>
    uniformLocations: Locations<'projectionMatrix' | 'modelViewMatrix'>
}
type BaseBuffers<T extends string> = Record<T, WebGLBuffer | null>
type Buffers = BaseBuffers<'position'>

function loadShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = <WebGLShader>gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(`An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`);
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

/** Initialize a shader program, so WebGL knows how to draw our data */
function initShaderProgram(
  gl: WebGLRenderingContext, vsSource: string, fsSource: string,
): WebGLProgram | null {
  const vertexShader = <WebGLShader>loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = <WebGLShader>loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  const shaderProgram = <WebGLProgram>gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(`Unable to initialize the shader program: ${gl.getProgramInfoLog(shaderProgram)}`);
    return null;
  }

  return shaderProgram;
}

function initBuffers(gl: WebGLRenderingContext): Buffers {
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const positions = [-1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  return {
    position: positionBuffer,
  };
}

function drawScene(gl: WebGLRenderingContext, programInfo: ProgramInfo, buffers: Buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clearDepth(1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  const fieldOfView = 45 * Math.PI / 180;
  const aspect = gl.canvas.width / gl.canvas.height;
  const zNear = 0.1;
  const zFar = 100.0;

  const projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);
  const modelViewMatrix = mat4.create();
  mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);

  {
    const numComponents = 2; // pull out 2 values per iteration
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset,
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  }

  gl.useProgram(programInfo.program);

  // Set the shader uniforms
  gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
  gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

  {
    const offset = 0;
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  }
}

function lesson2() {
  const canvas = <any>document.getElementById('glCanvas');
  const gl = <WebGLRenderingContext>canvas.getContext('webgl');

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  const vsSource = `
          attribute vec4 aVertexPosition;
  
          uniform mat4 uModelViewMatrix;
          uniform mat4 uProjectionMatrix;
  
          void main() {
          gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
          }
      `;
  const fsSource = `
          void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
          }
      `;
  const shaderProgram = <WebGLProgram> initShaderProgram(gl, vsSource, fsSource);

  const programInfo = <ProgramInfo>{
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };
  const buffers = initBuffers(gl);
  drawScene(gl, programInfo, buffers);
}

window.onload = lesson2;
