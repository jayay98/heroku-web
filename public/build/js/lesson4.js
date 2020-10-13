(self.webpackChunkheroku_web=self.webpackChunkheroku_web||[]).push([[308],{107:(t,e,r)=>{"use strict";const o=r(887);let n=0;function a(t,e,r){const o=t.createShader(e);return t.shaderSource(o,r),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(alert("An error occurred compiling the shaders: "+t.getShaderInfoLog(o)),t.deleteShader(o),null)}!function(){const t=document.getElementById("glCanvas").getContext("webgl");if(null===t)return void alert("Unable to initialize WebGL. Your browser or machine may not support it.");const e=function(t,e,r){const o=a(t,t.VERTEX_SHADER,"\n        attribute vec4 aVertexPosition;\n        attribute vec4 aVertexColor;\n\n        uniform mat4 uModelViewMatrix;\n        uniform mat4 uProjectionMatrix;\n\n        varying lowp vec4 vColor;\n\n        void main() {\n        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n        vColor = aVertexColor;\n        }\n    "),n=a(t,t.FRAGMENT_SHADER,"\n        varying lowp vec4 vColor;\n\n        void main(void) {\n        gl_FragColor = vColor;\n        }\n    "),i=t.createProgram();return t.attachShader(i,o),t.attachShader(i,n),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)?i:(alert("Unable to initialize the shader program: "+t.getProgramInfoLog(i)),null)}(t),r={program:e,attribLocations:{vertexPosition:t.getAttribLocation(e,"aVertexPosition"),vertexColor:t.getAttribLocation(e,"aVertexColor")},uniformLocations:{projectionMatrix:t.getUniformLocation(e,"uProjectionMatrix"),modelViewMatrix:t.getUniformLocation(e,"uModelViewMatrix")}},i=function(t){const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e);t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,1,1,1,-1,-1,1,-1]),t.STATIC_DRAW);const r=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1]),t.STATIC_DRAW),{position:e,color:r}}(t);let c=0;requestAnimationFrame((function e(a){const l=(a*=.001)-c;c=a,function(t,e,r,a){t.clearColor(0,0,0,1),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);const i=45*Math.PI/180,c=t.canvas.width/t.canvas.height,l=o.mat4.create();o.mat4.perspective(l,i,c,.1,100);const u=o.mat4.create();o.mat4.translate(u,u,[-0,0,-6]),o.mat4.rotate(u,u,n,[0,0,1]);{const o=2,n=t.FLOAT,a=!1,i=0,c=0;t.bindBuffer(t.ARRAY_BUFFER,r.position),t.vertexAttribPointer(e.attribLocations.vertexPosition,o,n,a,i,c),t.enableVertexAttribArray(e.attribLocations.vertexPosition)}{const o=4,n=t.FLOAT,a=!1,i=0,c=0;t.bindBuffer(t.ARRAY_BUFFER,r.color),t.vertexAttribPointer(e.attribLocations.vertexColor,o,n,a,i,c),t.enableVertexAttribArray(e.attribLocations.vertexColor)}t.useProgram(e.program),t.uniformMatrix4fv(e.uniformLocations.projectionMatrix,!1,l),t.uniformMatrix4fv(e.uniformLocations.modelViewMatrix,!1,u);{const e=0,r=4;t.drawArrays(t.TRIANGLE_STRIP,e,r)}n+=a}(t,r,i,l),requestAnimationFrame(e)}))}()}},0,[[107,712]]]);