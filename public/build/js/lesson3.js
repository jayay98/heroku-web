(self.webpackChunkheroku_web=self.webpackChunkheroku_web||[]).push([[498],{279:(t,r,e)=>{"use strict";const o=e(887);function n(t,r,e){const o=t.createShader(r);return t.shaderSource(o,e),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(alert("An error occurred compiling the shaders: "+t.getShaderInfoLog(o)),t.deleteShader(o),null)}window.onload=function(){const t=document.getElementById("glCanvas").getContext("webgl");if(null===t)return void alert("Unable to initialize WebGL. Your browser or machine may not support it.");const r=function(t,r,e){const o=n(t,t.VERTEX_SHADER,"\n        attribute vec4 aVertexPosition;\n        attribute vec4 aVertexColor;\n\n        uniform mat4 uModelViewMatrix;\n        uniform mat4 uProjectionMatrix;\n\n        varying lowp vec4 vColor;\n\n        void main() {\n        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n        vColor = aVertexColor;\n        }\n    "),a=n(t,t.FRAGMENT_SHADER,"\n        varying lowp vec4 vColor;\n\n        void main(void) {\n        gl_FragColor = vColor;\n        }\n    "),i=t.createProgram();return t.attachShader(i,o),t.attachShader(i,a),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)?i:(alert("Unable to initialize the shader program: "+t.getProgramInfoLog(i)),null)}(t),e={program:r,attribLocations:{vertexPosition:t.getAttribLocation(r,"aVertexPosition"),vertexColor:t.getAttribLocation(r,"aVertexColor")},uniformLocations:{projectionMatrix:t.getUniformLocation(r,"uProjectionMatrix"),modelViewMatrix:t.getUniformLocation(r,"uModelViewMatrix")}},a=function(t){const r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r);t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,1,1,1,-1,-1,1,-1]),t.STATIC_DRAW);const e=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1]),t.STATIC_DRAW),{position:r,color:e}}(t);!function(t,r,e){t.clearColor(0,0,0,1),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);const n=45*Math.PI/180,a=t.canvas.width/t.canvas.height,i=o.mat4.create();o.mat4.perspective(i,n,a,.1,100);const c=o.mat4.create();o.mat4.translate(c,c,[-0,0,-6]);{const o=2,n=t.FLOAT,a=!1,i=0,c=0;t.bindBuffer(t.ARRAY_BUFFER,e.position),t.vertexAttribPointer(r.attribLocations.vertexPosition,o,n,a,i,c),t.enableVertexAttribArray(r.attribLocations.vertexPosition)}{const o=4,n=t.FLOAT,a=!1,i=0,c=0;t.bindBuffer(t.ARRAY_BUFFER,e.color),t.vertexAttribPointer(r.attribLocations.vertexColor,o,n,a,i,c),t.enableVertexAttribArray(r.attribLocations.vertexColor)}t.useProgram(r.program),t.uniformMatrix4fv(r.uniformLocations.projectionMatrix,!1,i),t.uniformMatrix4fv(r.uniformLocations.modelViewMatrix,!1,c);{const r=0,e=4;t.drawArrays(t.TRIANGLE_STRIP,r,e)}}(t,e,a)}}},0,[[279,712]]]);